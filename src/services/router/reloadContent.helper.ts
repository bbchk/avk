export default function reloadContent(html: string, css: string) {
  const mainElement = $('main');
  if (mainElement) {
    mainElement.innerHTML = '';

    const contentElement = document.createElement('div');
    contentElement.innerHTML = html;
    mainElement.appendChild(contentElement);

    const styleElement = document.createElement('style');
    styleElement.innerHTML = css;
    mainElement.appendChild(styleElement);

    window.scrollY = 0;
    window.scrollX = 0;
  }

  //TODO: introduce handling if main elem is not found
}
