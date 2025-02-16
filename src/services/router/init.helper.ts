import { IRouter } from '/services/router/index.service';

export default async function init(this: IRouter) {
  try {
    await this.go(location.pathname);
  } catch (err) {
    // TODO: display error screen
    console.error('Error during router initialization:', err);
  }

  window.on('popstate', (event) => {
    this.go(event.state.route, false);
  });
}
