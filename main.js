/**
 * Array containing image objects for the images container, to build our image
 * thumbnail molecules
 */
const imageMaps = [
  {
    id: "broken_stoked",
    path: "images/broken_stoked.jpg",
    caption: "Broken shin on landing"
  },
  {
    id: "leotard_gear_up",
    path: "images/leotard_gear_up.jpg",
    caption: "Gearing up for the ballet"
  },
  {
    id: "leotard_lineup",
    path: "images/leotard_lineup.jpg",
    caption: "Lined up and ready"
  },
  {
    id: "leotard",
    path: "images/leotard.jpg",
    caption: "Like a true badass"
  },
  {
    id: "pca_leotard",
    path: "images/pca_leotard.jpg",
    caption: "Being PCA'ed"
  },
  {
    id: "landing",
    path: "images/landing.jpg",
    caption: "Landing With Style"
  },
  {
    id: "perrine_exit",
    path: "images/perrine_exit.jpg",
    caption: "Exiting Perrine Bridge"
  },
  {
    id: "tard_over",
    path: "images/tard_over.jpg",
    caption: "The TARD-over"
  },
  {
    id: "turbine",
    path: "images/turbine.jpg",
    caption: "Turbine fun!"
  },
  {
    id: "aff",
    path: "images/aff.jpg",
    caption: "AFF Training"
  },
  {
    id: "gorilla",
    path: "images/gorilla.jpg",
    caption: "3-way Horny Gorilla Exit"
  },
  {
    id: "skydive_exit",
    path: "images/skydive_exit.jpg",
    caption: "Exit Time"
  },
  {
    id: "wingsuit",
    path: "images/wingsuit.jpg",
    caption: "Wingsuit Fun"
  },
  {
    id: "rock_climbing1",
    path: "images/rock_climbing1.jpg",
    caption: "High on Rock"
  },
  {
    id: "rock_climbing2",
    path: "images/rock_climbing2.jpg",
    caption: "High on Rock Again"
  },
  {
    id: "snowboard",
    path: "images/snowboard.jpg",
    caption: "Shred The Gnar"
  },
  {
    id: "wakeboarding1",
    path: "images/wakeboarding1.jpg",
    caption: "Wakeboard Stoke"
  },
  {
    id: "wakeboarding2",
    path: "images/wakeboarding2.jpg",
    caption: "More Wakeboard Stoke"
  }
];

const videoMaps = [];

/**
 * Set click listeners
 */
// Global id number used for the modal
let currentId = null;
// DOM objects
const links = document.querySelectorAll("a");
const modalClose = document.getElementById("modal__close");
const modalPrevious = document.getElementById("modal__previous");
const modalNext = document.getElementById("modal__next");
const imageContainer = document.getElementById("images__innerbox");

modalClose.addEventListener("click", closeModal);
modalPrevious.addEventListener("click", previousModal);
modalNext.addEventListener("click", nextModal);

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
imageMaps.forEach((imageObj, index) => {
  // create div container, add class and it's mapped id
  const thumbnail = document.createElement("div");
  thumbnail.classList.add("image__box");

  // create the image, set it's attributes, append it to the above div
  const image = document.createElement("img");
  image.setAttribute("src", imageObj.path);
  image.setAttribute("alt", imageObj.id);
  image.setAttribute("width", "100%");
  image.setAttribute("height", "100%");
  image.setAttribute("id", imageObj.id);
  image.setAttribute("data-index", index);
  image.setAttribute("data-type", "image");
  thumbnail.appendChild(image);

  // set click listener on the div
  thumbnail.addEventListener("click", e => {
    openModal(e.target);
  });
  // append div to the image container
  imageContainer.append(thumbnail);
});

// HELPER FUNCTIONS
function closeModal() {
  hideElDisplay(document.getElementsByClassName("backdrop")[0]);
  currentId = null;
}

function nextModal() {
  console.log("next modal clicked, current id: ", currentId);
  currentId++;
  console.log("now the current id is: ", currentId);
  updateModal(currentId);
}

function previousModal() {
  console.log("previous modal clicked, current id is: ", currentId);
  currentId--;
  console.log("now the current id is: ", currentId);
  updateModal(currentId);
}

/**
 * Click listener callback, opens the modal when a user clicks an image in the
 * main image container organism
 * @param {} el
 *      The html element that was clicked
 */
function openModal(el) {
  // show backdrop modal
  showElDisplay(document.getElementsByClassName("backdrop")[0], "flex");
  // set image type and image id
  const type = el.getAttribute("data-type");
  const id = el.getAttribute("data-index");
  currentId = id;
  // Check the index to see whether or not to disabled modal arrow
  modalArrowsCheck(id);
  insertModalContent(currentId, type);
}

function insertModalContent(id, type) {
  const container = document.getElementById("modal__image-box");
  let mediObj;
  container.innerHTML = null;
  if (type === "image") {
    mediaObj = imageMaps[id];
    container.appendChild(createMediaImage(mediaObj));
  } else if (type === "video") {
    mediaObj = videoMaps[id];
    container.appendChild(createMediaVideo(mediaObj));
  }
  modalArrowsCheck(id);
}

function updateModal(id) {
  const container = document.getElementById("modal__image-box");
  container.innerHTML = null;
  insertModalContent(id, "image");
}

function createMediaImage(mediaObj) {
  const fig = document.createElement("figure");
  fig.setAttribute("class", "modal__figure");
  const figCaption = document.createElement("figcaption");
  figCaption.innerHTML = mediaObj.caption;
  const img = document.createElement("img");
  img.setAttribute("alt", mediaObj.id);
  img.setAttribute("src", mediaObj.path);
  fig.append(img);
  fig.append(figCaption);
  return fig;
}

function createMediaVideo(mediaObj) {}

function hideElVis(el) {
  console.log("element to hide vis: ", el);
  el.style.visibility = "hidden";
}

function showElVis(el) {
  el.style.visibility = "visible";
}

function showElDisplay(el, attrib) {
  el.style.display = attrib;
}

function hideElDisplay(el) {
  el.style.display = "none";
}

function modalArrowsCheck(id) {
  console.log("checking arrow id: ", id);
  const leftArrow = document.getElementById("modal__previous");
  const rightArrow = document.getElementById("modal__next");
  const parsedId = parseInt(id);
  if (parsedId === 0) {
    hideElVis(leftArrow);
  } else if (parsedId === imageMaps.length - 1) {
    hideElVis(rightArrow);
  } else {
    showElVis(leftArrow);
    showElVis(rightArrow);
  }
}
