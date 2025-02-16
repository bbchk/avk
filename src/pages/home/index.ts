import html from './index.html?raw';
import css from './index.scss?inline';
import { ROUTE_CHANGED_EVENT } from '/config/constants';
import routes from '/services/router/routes';

// import { fetchProducts } from '/services/api.service';
// const products = await fetchProducts();
// console.log(products);

window.on(ROUTE_CHANGED_EVENT, (ev) => {
  if (ev.detail.contentPath === routes['/']) {
    console.log('yes, it is home');
  }
});

export { html, css };
