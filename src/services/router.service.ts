import go from './helpers/go';
import handleInternalLinks from './helpers/handleInternalLinks';

interface IRouter {
  handleInternalLinks(this: IRouter, inLinkClass: string): void;
  init: () => void;
  go: (route: string, addToHistory?: boolean) => Promise<void>;
}

async function init(this: IRouter) {
  try {
    await this.go(location.pathname);
    this.handleInternalLinks('inLink');
  } catch (err) {
    // TODO: display error screen
    console.error('Error during router initialization:', err);
  }

  window.on('popstate', (event) => {
    this.go(event.state.route, false);
  });
}

const Router: IRouter = {
  handleInternalLinks: handleInternalLinks,
  init: init,
  go: go
};

export { Router };
export type { IRouter };
