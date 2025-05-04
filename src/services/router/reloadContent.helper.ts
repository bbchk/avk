export default function reloadContent(html: string, css: string) {
  const mainElement = $('main');
  if (mainElement) {
    mainElement.innerHTML = '';

    const styleElement = document.createElement('style');
    styleElement.innerHTML = css;
    mainElement.appendChild(styleElement);

    // TODO: research why is appendingChild is more beneficial
    // than just overriding mainElement innerHtml?
    const contentElement = document.createElement('div');
    contentElement.style.width = '100%';
    contentElement.style.height = '100%';
    contentElement.innerHTML = html;
    mainElement.appendChild(contentElement);

    // mainElement.innerHTML = html;

    // TODO: this needs to be off during development because of jumping after updating css
    // window.scrollY = 0;
    // window.scrollX = 0;
  }

  //TODO: introduce handling if main elem is not found
}
