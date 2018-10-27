/**
 * Array containing image objects for the images container, to build our image
 * thumbnail molecules
 */
let imageMaps = [
  { id: "broken_stoked", path: "images/broken_stoked.jpg" },
  { id: "leotard_gear_up", path: "images/leotard_gear_up.jpg" },
  { id: "leotard_lineup", path: "images/leotard_lineup.jpg" },
  { id: "leotard", path: "images/leotard.jpg" },
  { id: "pca_leotard", path: "images/pca_leotard.jpg" },
  { id: "landing", path: "images/landing.jpg" },
  { id: "perrine_exit", path: "images/perrine_exit.jpg" },
  { id: "tard_over", path: "images/tard_over.jpg" },
  { id: "turbine", path: "images/turbine.jpg" },
  { id: "aff", path: "images/aff.jpg" },
  { id: "gorilla", path: "images/gorilla.jpg" },
  { id: "skydive_exit", path: "images/skydive_exit.jpg" },
  { id: "wingsuit", path: "images/wingsuit.jpg" },
  { id: "rock_climbing1", path: "images/rock_climbing1.jpg" },
  { id: "rock_climbing2", path: "images/rock_climbing2.jpg" },
  { id: "snowboard", path: "images/snowboard.jpg" },
  { id: "wakeboarding1", path: "images/wakeboarding1.jpg" },
  { id: "wakeboarding2", path: "images/wakeboarding2.jpg" }
];

let links = document.querySelectorAll("a");
let imageContainer = document.getElementById("images__innerbox");
console.log("images box: ", imageContainer);

/**
 * Since there is a fixed navbar, when clicking a normal anchor link
 * the page scrolls the anchor position to the top of the viewport but the fixed
 * navbar hides it. This will offset the scroll position after clicking a link
 * so that the actual anchor point is offset by 200 px.
 * Hacky, but it works
 */
links.forEach(link => {
  link.addEventListener("click", () => {
    setTimeout(() => {
      window.scrollTo({}, window.pageYOffset - 200);
    }, 0);
  });
});

/**
 * This will build an image container molecule for each object in the images
 * array, and will append it to the images organism on the main page
 */
imageMaps.forEach(imageObj => {
  // create div container, add class and it's mapped id
  const thumbnail = document.createElement("div");
  thumbnail.classList.add("image__box");
  thumbnail.id = imageObj.id;
  // create the image, set it's attributes, append it to the above div
  const image = document.createElement("img");
  image.setAttribute("src", imageObj.path);
  image.setAttribute("alt", imageObj.id);
  image.setAttribute("width", "100%");
  image.setAttribute("height", "100%");
  thumbnail.appendChild(image);
  // set click listener on the div
  thumbnail.addEventListener("click", e => {
    console.log("clicked: ", e);
  });
  // append div to the image container
  imageContainer.append(thumbnail);
});
