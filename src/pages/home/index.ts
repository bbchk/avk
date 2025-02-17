import html from './index.html?raw';
import css from './index.scss?inline';
import { ROUTE_CHANGED_EVENT } from '/config/constants';
import routes from '/services/router/routes';
import { CarBattery } from '/types/index';

window.on(ROUTE_CHANGED_EVENT, (ev) => {
  if (ev.detail.contentPath === routes['/']) {
    const gallery = $('#homeGalleryContent--first');
    if (gallery) {
      let galleryContent = '';

      // TODO: sort by real label `favorite choice` from db in the future
      let idx = 0;

      for (const { name, price_orig, price_discount } of ev.detail
        .data as CarBattery[]) {
        // TODO: sort by real label `favorite choice` from db in the future
        if (idx > 7) {
          break;
        }
        //
        galleryContent += `
    <figure class='gallery__card'>
      <img class='gallery__cardFigure' src="/goods_placeholder.svg" alt="${name}"/>
      <figcaption class='gallery__cardCaption'>
        <h3>${name}</h3>
        <div class="gallery__cardBuy">
          <div class="gallery__cardBuyPrices">
            <del>${price_orig}<span>₴</span></del>
            <ins>${price_discount}<span>₴<span></ins>
          </div>
          <button class="gallery__cardBuyBtn emoji--mono">
            🛒
          </button>
        </div>
      </figcaption>
    </figure>
        `;

        // TODO: sort by real label `favorite choice` from db in the future
        ++idx;
      }
      gallery.innerHTML = galleryContent;
    }
  }
});

export { html, css };
