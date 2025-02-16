import html from './index.html?raw';
import css from './index.scss?inline';
import { fetchProducts } from '/services/api.service';

const products = await fetchProducts();
console.log(products);

export { html, css };
