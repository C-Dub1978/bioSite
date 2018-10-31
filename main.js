/**
 * Array containing image objects for the images container, to build our image
 * thumbnail molecules
 */
const imageMaps = [
  {
    id: "broken_stoked",
    path: "images/broken_stoked.jpg",
    caption: "Broken shin on landing",
    type: "image"
  },
  {
    id: "leotard_gear_up",
    path: "images/leotard_gear_up.jpg",
    caption: "Gearing up for the ballet",
    type: "image"
  },
  {
    id: "leotard_lineup",
    path: "images/leotard_lineup.jpg",
    caption: "Lined up and ready",
    type: "image"
  },
  {
    id: "leotard",
    path: "images/leotard.jpg",
    caption: "Like a true badass",
    type: "image"
  },
  {
    id: "pca_leotard",
    path: "images/pca_leotard.jpg",
    caption: "Being PCA'ed",
    type: "image"
  },
  {
    id: "landing",
    path: "images/landing.jpg",
    caption: "Landing With Style",
    type: "image"
  },
  {
    id: "perrine_exit",
    path: "images/perrine_exit.jpg",
    caption: "Exiting Perrine Bridge",
    type: "image"
  },
  {
    id: "tard_over",
    path: "images/tard_over.jpg",
    caption: "The TARD-over",
    type: "image"
  },
  {
    id: "turbine",
    path: "images/turbine.jpg",
    caption: "Turbine fun!",
    type: "image"
  },
  {
    id: "aff",
    path: "images/aff.jpg",
    caption: "AFF Training",
    type: "image"
  },
  {
    id: "gorilla",
    path: "images/gorilla.jpg",
    caption: "3-way Horny Gorilla Exit",
    type: "image"
  },
  {
    id: "skydive_exit",
    path: "images/skydive_exit.jpg",
    caption: "Exit Time",
    type: "image"
  },
  {
    id: "wingsuit",
    path: "images/wingsuit.jpg",
    caption: "Wingsuit Fun",
    type: "image"
  },
  {
    id: "rock_climbing1",
    path: "images/rock_climbing1.jpg",
    caption: "High on Rock",
    type: "image"
  },
  {
    id: "rock_climbing2",
    path: "images/rock_climbing2.jpg",
    caption: "High on Rock Again",
    type: "image"
  },
  {
    id: "snowboard",
    path: "images/snowboard.jpg",
    caption: "Shred The Gnar",
    type: "image"
  },
  {
    id: "wakeboarding1",
    path: "images/wakeboarding1.jpg",
    caption: "Wakeboard Stoke",
    type: "image"
  },
  {
    id: "wakeboarding2",
    path: "images/wakeboarding2.jpg",
    caption: "More Wakeboard Stoke",
    type: "image"
  }
];

const videoMaps = [
  {
    id: "8sF3fsE9348",
    path: "https://img.youtube.com/vi/8sF3fsE9348/0.jpg",
    caption: "Index, WA",
    type: "video"
  },
  {
    id: "un5GWCWl73s",
    path: "https://img.youtube.com/vi/un5GWCWl73s/0.jpg",
    caption: "Mt. Baring, WA",
    type: "video"
  },
  {
    id: "Unzh49DBT_o",
    path: "https://img.youtube.com/vi/Unzh49DBT_o/0.jpg",
    caption: "Perrine Bride, ID",
    type: "video"
  },
  {
    id: "JNyPjokRr4g",
    path: "https://img.youtube.com/vi/JNyPjokRr4g/0.jpg",
    caption: "Perrine Bridge, ID",
    type: "video"
  },
  {
    id: "vDGA4BFh8eQ",
    path: "https://img.youtube.com/vi/vDGA4BFh8eQ/0.jpg",
    caption: "Hoffstadt Bridge, WA",
    type: "video"
  },
  {
    id: "oK6OyZi8rJs",
    path: "https://img.youtube.com/vi/oK6OyZi8rJs/0.jpg",
    caption: "Moab Sessions, Moab UT",
    type: "video"
  },
  {
    id: "0V_ipYS-vjc",
    path: "https://img.youtube.com/vi/0V_ipYS-vjc/0.jpg",
    caption: "Crown Point, OR",
    type: "video"
  }
];

// Global id number used for the modal
let currentId = null;
// DOM objects
const links = document.querySelectorAll("a");
const modalClose = document.getElementById("modal__close");
const modalPrevious = document.getElementById("modal__previous");
const modalNext = document.getElementById("modal__next");
const imageContainer = document.getElementById("images__innerbox");
const videosContainer = document.getElementById("videos__innerbox");
// Set click listeners
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
  // append div to the image container
  const thumbnail = buildThumbnail(imageObj, index);
  imageContainer.append(thumbnail);
});

videoMaps.forEach((videoObj, index) => {
  // append div to the video container
  const thumbnail = buildThumbnail(videoObj, index);
  videosContainer.append(thumbnail);
});

// HELPER FUNCTIONS
function buildThumbnail(obj, index) {
  let alt;
  if (obj.type === "image") {
    alt = obj.id;
  } else if (obj.type === "video") {
    alt = obj.caption;
  }
  // create div container, add class and it's mapped id
  const thumbnail = document.createElement("div");
  thumbnail.classList.add("image__box");

  // create the image, set it's attributes, append it to the above div
  const image = document.createElement("img");
  image.setAttribute("src", obj.path);
  image.setAttribute("alt", alt);
  image.setAttribute("width", "100%");
  image.setAttribute("height", "100%");
  image.setAttribute("id", obj.id);
  image.setAttribute("data-index", index);
  image.setAttribute("data-type", obj.type);
  thumbnail.appendChild(image);

  // set click listener on the div
  thumbnail.addEventListener("click", e => {
    openModal(e.target);
  });
  return thumbnail;
}

function closeModal() {
  hideElDisplay(document.getElementsByClassName("backdrop")[0]);
  currentId = null;
}

function nextModal() {
  currentId++;
  updateModal(currentId);
}

function previousModal() {
  currentId--;
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
  // Check the index to see whether or not to disable modal arrow
  modalArrowsCheck(id);
  insertModalContent(currentId, type);
}

/**
 * Function to insert image or video content into the parent container/modal
 * @param {} id
 *      The id of the imageMap object
 * @param {*} type
 *      either image or video
 */
function insertModalContent(id, type) {
  const container = document.getElementById("modal__image-box");
  let mediaObj;
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

/**
 * Function called when the user clicks a directional arrow in the modal,
 * which updates the content to the previous or next object in the imageMap or
 * video list
 * @param {} id
 *      The id of the image or video object in it's corresponding array
 */
function updateModal(id) {
  const container = document.getElementById("modal__image-box");
  container.innerHTML = null;
  insertModalContent(id, "image");
}

/**
 * Function that creates a figure with image and caption to append to the modal
 * @param {*} mediaObj
 *      The object in the imageMap array
 */
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

function createMediaVideo(urlObj) {
  const iframe = document.createElement("iframe");
  iframe.setAttribute("type", "text/html");
  iframe.setAttribute("width", 702);
  iframe.setAttribute("height", 405);
  iframe.setAttribute(
    "src",
    "https://youtube.com/embed/" + urlObj.path + "?playsinline=0"
  );
  iframe.setAttribute("frameborder", 0);
  return iframe;
}

/**
 * Helper function that sets visibility on the element to 'hidden'
 * @param {} el
 *      The html element to hide
 */
function hideElVis(el) {
  console.log("element to hide vis: ", el);
  el.style.visibility = "hidden";
}

/**
 * Function that sets visibility on the element to 'visible'
 * @param {*} el
 *      The html element to show
 */
function showElVis(el) {
  el.style.visibility = "visible";
}

/**
 * Function to set display attribute on the html element
 * @param {*} el
 *      The html element to update
 * @param {*} attrib
 *      The attribute value, e.g. 'flex', 'block', 'inline', etc
 */
function showElDisplay(el, attrib) {
  el.style.display = attrib;
}

/**
 * Function to set display attribute to none on the html element
 * @param {*} el
 *      The html element to hide
 */
function hideElDisplay(el) {
  el.style.display = "none";
}

/**
 * This function checks the global currentId value to see if it is the first
 * or last object in the array, and if so, it hides the previous or next arrow
 * @param {*} id
 *      The global id of the current media object
 */
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
