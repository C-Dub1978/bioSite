let links = document.querySelectorAll('a');

/**
 * Since there is a fixed navbar, when clicking a normal anchor link
 * the page scrolls the anchor position to the top of the viewport but the fixed
 * navbar hides it. This will offset the scroll position after clicking a link
 * so that the actual anchor point is offset by 200 px
 */
links.forEach((link) => {
  link.addEventListener('click', () => {
    setTimeout(() => {
      window.scrollTo({}, window.pageYOffset - 200);
    }, 1);
  });
});