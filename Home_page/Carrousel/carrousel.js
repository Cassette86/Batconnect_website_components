// Sélection des éléments du DOM
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');
const imageContainers = document.querySelectorAll('.image-container');
const textParts = document.querySelectorAll('.text_part');
const textWrap = document.querySelector('.text-wrap');
const images = [];
const texts = [];
let imageIndex = 0; 
let margeText = "0px"; 

// Récupération de toutes les images et stockage dans un tableau
imageContainers.forEach(container => {
  const containerImages = container.querySelectorAll('img');
  containerImages.forEach(image => {
    images.push(image);
  });
});

// Fonction pour traiter la largeur des images
function processImageWidth(callback) {
  images[0].addEventListener('load', function() {
    var imageWidth = images[0].offsetWidth;
    console.log("Dans la fonction de rappel, imageWidth:", imageWidth);
    callback(imageWidth);
  });
}

// Récupération de toutes les parties de texte et stockage dans un tableau
textParts.forEach(text => {
  texts.push(text);
});

// Mise à jour de l'opacité des flèches en fonction de l'index de l'image
function updateArrowOpacity() {
  if (imageIndex === 0) {
    leftArrow.style.opacity = 0.4;
    leftArrow.style.cursor = "default";
  } else {
    leftArrow.style.opacity = 1;
    leftArrow.style.cursor = "pointer";
  }
  if (imageIndex === images.length - 1) {
    rightArrow.style.opacity = 0.4;
    rightArrow.style.cursor = "default";
  } else {
    rightArrow.style.opacity = 1;
    rightArrow.style.cursor = "pointer";
  }
}

// Mise à jour de la marge de l'image du milieu
function updateImageMargin(middleImage) {
  if (window.matchMedia("(max-width: 980px)").matches) {
    middleImage.style.marginLeft = "0px";
  } else {
    middleImage.style.marginLeft = "50%";
  }
}

// Mise à jour de la marge pour déplacer l'image vers la gauche
function updateImageMarginGoToLeft(goToLeftImage) {
  if (window.matchMedia("(max-width: 980px)").matches) {
    var screenWidth = window.innerWidth;
    var sixPercent = screenWidth * 0.06;
  } else {
    var screenWidth = window.innerWidth;
    var sixPercent = screenWidth * 0.07;
    sixPercent = sixPercent + 2 * imageIndex;
  }
  goToLeftImage.addEventListener('load', function() {
    const imageWidth = goToLeftImage.offsetWidth;
    const marginWouaw = -sixPercent - imageWidth;
    goToLeftImage.style.marginLeft = marginWouaw + "px";
  });
  if (goToLeftImage.complete) {
    const imageWidth = goToLeftImage.offsetWidth;
    const marginWouaw = -sixPercent - imageWidth;
    goToLeftImage.style.marginLeft = marginWouaw + "px";
  }
}

// Mise à jour de la marge pour déplacer l'image vers la droite
function updateImageMarginGoToRight(goToRightImage) {
  if (window.matchMedia("(max-width: 980px)").matches) {
    goToRightImage.style.marginLeft = "0px";
  } else {
    goToRightImage.style.marginLeft = "0px";
  }
}

// Déplacer les images vers la gauche
function moveImagesLeft() {
  if (imageIndex > 0) {
    const goToRightImage = images[imageIndex];
    imageIndex--;
    updateArrowOpacity();
    const middleImage = images[imageIndex];
    updateImageMarginGoToRight(goToRightImage);
    updateImageMargin(middleImage);
    middleImage.style.marginRight = "7%";
    margeText = parseInt(margeText) + 320 + "px";
    textWrap.style.marginTop = margeText;
    texts.forEach((text, index) => {
      if (index === imageIndex) {
        text.style.opacity = 1;
      } else {
        text.style.opacity = 0;
      }
    });
  }
}

// Déplacer les images vers la droite
function moveImagesRight() {
  if (imageIndex < images.length - 1) {
    const goToLeftImage = images[imageIndex];
    imageIndex++;
    updateArrowOpacity();
    const middleImage = images[imageIndex];
    updateImageMarginGoToLeft(goToLeftImage);
    updateImageMargin(middleImage);
    margeText = parseInt(margeText) - 320 + "px";
    textWrap.style.marginTop = margeText;
    texts.forEach((text, index) => {
      if (index === imageIndex) {
        text.style.opacity = 1;
      } else {
        text.style.opacity = 0;
      }
    });
  }
}

// Ajout des écouteurs d'événements pour les flèches et les touches du clavier
leftArrow.addEventListener('click', moveImagesLeft);
rightArrow.addEventListener('click', moveImagesRight);
document.addEventListener('keydown', function(event) {
  if (event.key === "ArrowLeft") {
    moveImagesLeft();
  } else if (event.key === "ArrowRight") {
    moveImagesRight();
  }
});

// Mise à jour initiale de l'opacité des flèches et de la marge de la première image
updateArrowOpacity();
if (images.length > 0) {
  updateImageMargin(images[0]);
}

// Mise à jour de la marge des images lors du redimensionnement de la fenêtre
window.matchMedia("(max-width: 980px)").addListener(() => {
  if (images.length > 0) {
    updateImageMargin(images[imageIndex]);
  }
});