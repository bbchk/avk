import { IRouter } from './index.service';

export default function handleInternalLinks(
  this: IRouter,
  inLinkClass: string
) {
  const internalLinks = $$(`a.${inLinkClass}`);

  internalLinks.forEach((e) => {
    const anchorElement = e as HTMLAnchorElement;

    anchorElement.on('click', (event) => {
      event.preventDefault();

      //TODO: create custom event for signaling of changing route to do some things asap
      const url = new URL(anchorElement.href).pathname;

      this.go(url);
    });
  });
}
