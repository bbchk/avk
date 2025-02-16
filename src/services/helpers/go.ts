import routes from './routes';
import { ROUTE_CHANGED_EVENT } from '/config/constants';
import reloadContent from './reloadContent';
import { IRouter } from '/services/router/router.service';

async function go(
  this: IRouter,
  route: string,
  addToHistory = true
): Promise<void> {
  if (addToHistory) {
    history.pushState({ route }, 'null', route);
  }

  const contentPath = routes[route] || routes['default'];
  // TODO: don't use variable as vite cannot analyze this efficiently enough
  const { html, css } = await import(`/pages/${contentPath}/index.ts`);
  reloadContent(html, css);

  window.dispatchEvent(
    new CustomEvent(ROUTE_CHANGED_EVENT, {
      detail: { route: route, contentPath: contentPath }
    })
  );

  this.handleInternalLinks('inLink');
}

export default go;
