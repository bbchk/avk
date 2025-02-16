const ROUTE_CHANGED_EVENT = 'routeChanged'; // Define a constant for the event name

const DB_PORT = import.meta.env.VITE_DB_PORT || '8080';
const DB_DOMAIN = import.meta.env.VITE_DB_DOMAIN || 'localhost';

export { DB_PORT, DB_DOMAIN, ROUTE_CHANGED_EVENT};
