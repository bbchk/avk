import { DB_PORT, DB_DOMAIN } from '/config/constants';

const fetchProducts = async () => {
  const response = await fetch(`${DB_DOMAIN}:${DB_PORT}/products`);

  if (!response.ok) {
    // TODO: introduce custom errors
    throw new Error('Failed to get products');
  }

  return await response.json();
};

export { fetchProducts };
