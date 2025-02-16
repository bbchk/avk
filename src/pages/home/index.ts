import html from './index.html?raw';
import css from './index.scss?inline';
import { ROUTE_CHANGED_EVENT } from '/config/constants';
import routes from '/services/router/routes';
import { CarBattery } from '/types/index';

window.on(ROUTE_CHANGED_EVENT, (ev) => {
  if (ev.detail.contentPath === routes['/']) {
    console.log('yes, it is home');
    console.log();

    const gallery = $('#homeProductsGallery');
    if (gallery) {
      let galleryContent = '';

      for (const { imageUrl, name, capacity, voltage, weight, cca } of ev.detail
        .data as CarBattery[]) {
        galleryContent += `
    <figure class='gallery__card'>
      <figure class='gallery__cardFigure'>
        <img src=${imageUrl} alt="${name}"/>
      </figure>
      <caption class='gallery__cardCaption'>
        <h3>${name}</h3>
        <ul class="gallery__cardCaptionList">
          <li><strong>Capacity:</strong> ${capacity}</li>
          <li><strong>Voltage:</strong> ${voltage}</li>
          <li><strong>Weight:</strong> ${weight}</li>
          <li><strong>CCA:</strong> ${cca}</li>
        </ul>
      </caption>
    </figure>
        `;
      }
      // <div class="card">
      //   <div class="card__image">
      //     <img src="https://picsum.photos/400/400?random=1" alt="Standard Car Battery" />
      //   </div>
      //   <div class="card__content">
      //   </div>
      // </div>

      gallery.innerHTML = galleryContent;
    }
  }
});

export { html, css };
