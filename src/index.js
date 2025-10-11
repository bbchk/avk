import "./index.scss";

const products = [
  {
    id: "1",
    image_url: "/monbat-eurocraft-gold-80ah-asia.png",
    name: "Eurokraft 80Ah GOLD",
    capacity: "80Ah", // Key for grouping
    type: "Кислотний",
    price: 55.0,
    price_old: 65.0,
    warranty: 24,
    origin: "Болгарія, Monbat group",
    origin_website: "https://eurokraftbattery.com/",
  },
  {
    id: "2",
    image_url: "https://placehold.co/300x200/b45f06/FFFFFF?text=50Ah+Asia",
    name: "Eurokraft 50Ah Silver",
    capacity: "50Ah", // Key for grouping
    type: "Кислотний",
    price: 45.0,
    price_old: 55.0,
    warranty: 24,
    origin: "Болгарія, Monbat group",
    origin_website: "https://eurokraftbattery.com/",
  },
  {
    id: "3",
    image_url: "https://placehold.co/300x200/0f9d58/FFFFFF?text=60Ah+Green",
    name: "Eurokraft 60Ah GREEN",
    capacity: "60Ah", // Key for grouping
    type: "AGM",
    price: 68.5,
    price_old: 80.0,
    warranty: 36,
    origin: "Болгарія, Monbat group",
    origin_website: "https://eurokraftbattery.com/",
  },
  {
    id: "4",
    image_url: "https://placehold.co/300x200/4285f4/FFFFFF?text=120Ah+Truck",
    name: "Monbat 120Ah Truck",
    capacity: "100Ah+", // Key for grouping for heavy duty
    type: "Кислотний (Вантажний)",
    price: 110.0,
    price_old: 130.0,
    warranty: 24,
    origin: "Болгарія, Monbat group",
    origin_website: "https://eurokraftbattery.com/",
  },
  {
    id: "5",
    image_url: "https://placehold.co/300x200/f44336/FFFFFF?text=80Ah+RED",
    name: "Monbat 80Ah RED",
    capacity: "80Ah", // Key for grouping
    type: "Кислотний",
    price: 58.0,
    price_old: 68.0,
    warranty: 24,
    origin: "Болгарія, Monbat group",
    origin_website: "https://eurokraftbattery.com/",
  },
  {
    id: "6",
    image_url: "https://placehold.co/300x200/9c27b0/FFFFFF?text=100Ah+Blue",
    name: "Eurokraft 100Ah Blue",
    capacity: "100Ah", // Key for grouping
    type: "Кислотний",
    price: 85.0,
    price_old: 99.0,
    warranty: 24,
    origin: "Болгарія, Monbat group",
    origin_website: "https://eurokraftbattery.com/",
  },
  {
    id: "7",
    image_url: "https://placehold.co/300x200/ff9800/FFFFFF?text=70Ah+Premium",
    name: "Eurokraft 70Ah Premium",
    capacity: "70Ah", // Key for grouping
    type: "AGM",
    price: 79.9,
    price_old: 90.0,
    warranty: 36,
    origin: "Болгарія, Monbat group",
    origin_website: "https://eurokraftbattery.com/",
  },
];

// Map section IDs to their gallery elements
// Note: For the '100Ah+' ID, we need to select the div that is inside the section
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
const renderProducts = () => {
  products.forEach((p) => {
    const cardHtml = createProductCard(p);
    const container = productContainers[p.capacity];

    if (container) {
      // Append the product card HTML to the correct gallery container
      container.innerHTML += cardHtml;
    } else {
      // Log a warning if a product has a capacity that doesn't match a defined section
      console.warn(
        `Container not found for capacity: ${p.capacity}. Product ID: ${p.id}`,
      );
    }
  });
};

// Execute the rendering logic once the DOM is ready
document.addEventListener("DOMContentLoaded", renderProducts);
