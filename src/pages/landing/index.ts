import html from './index.html?raw';
import css from './index.scss?inline';

import { ROUTE_CHANGED_EVENT } from '/config/constants';
import routes from '/services/router/routes';

window.on(ROUTE_CHANGED_EVENT, (ev) => {
  console.log(ev.detail);
  if (ev.detail.contentPath === routes['/landing']) {
    console.log('yes, it is landing');
  }
});

export { html, css };
