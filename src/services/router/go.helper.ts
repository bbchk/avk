import routes from './routes';
import { ROUTE_CHANGED_EVENT } from '/config/constants';
import { fetchProducts } from '/services/api.service';
import reloadContent from './reloadContent.helper';
import { IRouter } from '/services/router/index.service';

async function go(
  this: IRouter,
  route: string,
  addToHistory = true
): Promise<void> {
  const contentPath = routes[route] || routes['default'];

  let data = null;
  switch (contentPath) {
    case 'home':
      data = await fetchProducts();
      break;
    // case 'landing':
    //   data = await fetchProduct();
    //   break;
    // default:
  }

  if (addToHistory) {
    history.pushState({ route }, 'null', route);
  }

  // TODO: don't use variable as vite cannot analyze this efficiently enough
  const { html, css } = await import(`/pages/${contentPath}/index.ts`);
  reloadContent(html, css);

  window.dispatchEvent(
    new CustomEvent(ROUTE_CHANGED_EVENT, {
      detail: { route: route, contentPath: contentPath, data: data }
    })
  );

  this.handleInternalLinks('inLink');
}

export default go;
