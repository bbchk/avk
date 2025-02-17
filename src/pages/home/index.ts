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
        //
        // <img class='gallery__cardImage' src="/goods_placeholder.svg" alt="${name}"/>
        galleryContent += `
    <div class='gallery__card'>
      <img class='gallery__cardImage' src="https://picsum.photos/500/500" alt="${name}"/>
      <h3 class="gallery__cardName">${name}</h3>
      <div class="gallery__cardPrices">
        <del>${price_orig}<span>₴</span></del>
        <ins>${price_discount}<span>₴<span></ins>
      </div>
      <p class="rating--galleryCard">
       <span class="rating__stars"> ⭐⭐⭐⭐⭐</span>
       <span class="rating__reviewCount">0</span>
       <span class="rating__reviewIcon">💬</span>
      </p>
      <div class="gallery__cardBuyBtn emoji--mono">
        <button>
          🛒
        </button>
      </div>
    </div>
        `;

        // TODO: sort by real label `favorite choice` from db in the future
        ++idx;
      }
      gallery.innerHTML = galleryContent;
    }
  }
});

export { html, css };
