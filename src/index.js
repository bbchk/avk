import "./index.scss";

const modules = import.meta.glob("./data/*.json", { eager: true });
const products = Object.values(modules).flatMap((m) => m.default);

const productContainers = {
  "50Ah": document.querySelector("#Ah50"),
  "60Ah": document.querySelector("#Ah60"),
  "70Ah": document.querySelector("#Ah70"),
  "80Ah": document.querySelector("#Ah80"),
  "100Ah": document.querySelector("#Ah100"),
  "100Ah+": document.querySelector("#Ah101"),
};

const createProductCard = (p) => {
  return `
              <div class="product-card" data-id="${p.id}">

                <div class="product-image">
                  <img src="${p.image_url}" alt="${p.name}"
                       onerror="this.onerror=null;this.src='https://placehold.co/300x200/94A3B8/FFFFFF?text=No+Image';">
                </div>

                <div class="product-info">
                  <h3 class="product-name">${p.name}</h3>
                  <p class="product-type">${p.type}</p>

                  <div class="product-price">
                    <del class="price-old">${p.price_old.toFixed(1)}<span>₴</span></del>
                    <span class="price-current">${p.price.toFixed(1)}<span>₴</span></span>
                  </div>

                  <div class="product-meta">
                    <span class="product-warranty"><span style="font-weight: bold;">Гарантія:</span> ${p.warranty} міс.</span>
                    <a href="${p.origin_website}" class="product-origin" target="_blank">
                      ${p.origin}
                    </a>
                  </div>
                </div>
              </div>
            `;
};

/**
 * Main function to distribute product cards into their respective galleries.
 */
const renderProducts = (products) => {
  products.forEach((p) => {
    const cardHtml = createProductCard(p);
    const container = productContainers[p.capacity];
    if (container) {
      container.innerHTML += cardHtml;
    } else {
      console.warn(`No container for ${p.capacity}`);
    }
  });
};

document.addEventListener("DOMContentLoaded", () => {
  renderProducts(products);
});
