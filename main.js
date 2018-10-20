let links = document.querySelectorAll('a');
links.forEach((link) => {
  link.addEventListener('click', () => {
    setTimeout(() => {
      window.scrollTo({}, window.pageYOffset - 200);
    }, 1);
  });
});