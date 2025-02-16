import { DB_PORT, DB_DOMAIN } from '/config/constants';

const db_hostname = `${DB_DOMAIN}:${DB_PORT}`;

const fetchProducts = async () => {
  const response = await fetch(`${db_hostname}/products`);

  if (!response.ok) {
    // TODO: introduce custom errors
    throw new Error('Failed to get products');
  }

  return await response.json();
};

export { fetchProducts };
