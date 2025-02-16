import init from './init.helper';
import go from './go.helper';
import handleInternalLinks from './handleInternalLinks.helper';

interface IRouter {
  handleInternalLinks(this: IRouter, inLinkClass: string): void;
  init: () => void;
  go: (route: string, addToHistory?: boolean) => Promise<void>;
}

const Router: IRouter = {
  handleInternalLinks: handleInternalLinks,
  init: init,
  go: go
};

export { Router };
export type { IRouter };
