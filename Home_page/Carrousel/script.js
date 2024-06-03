const leftArrow = document.getElementById('left-arrow'); /* Variable de la flèche gauche */ 
const rightArrow = document.getElementById('right-arrow'); /* Variable de la flèche droite */ 
const imageContainers = document.querySelectorAll('.image-container'); /* Variable du conteneurs d'images */
const textParts = document.querySelectorAll('.text_part'); /* Variable du conteneur de texte */
const textWrap = document.querySelector('.text-wrap'); /* Variable du conteneur de texte */
const images = []; /* Tableau des images */
const texts = []; /* Tableau des textes */
let imageIndex = 0; /* Index de l'image */
let margeText = "0px"; /* Marge du texte */

imageContainers.forEach(container => { /* Pour chaque conteneur d'images, récupérer l'image et l'ajouter au tableau d'image*/
    const containerImages = container.querySelectorAll('img');
    containerImages.forEach(image => {
        images.push(image);
    });
});

textParts.forEach(text => { /* Pour chaque conteneur d'images, récupérer l'image et l'ajouter au tableau d'image*/
    texts.push(text);
});

function updateArrowOpacity() { /* Fonction pour mettre à jour l'opacité des flèches si on arrive à la fin du carrousel ou si on est au début*/
    if (imageIndex === 0) { /* Si on est au début du carrousel, on met l'opacité de la flèche gauche à 0.4 et on change le curseur en curseur par défaut */
        leftArrow.style.opacity = 0.4;
        leftArrow.style.cursor = "default";
    } else {
        leftArrow.style.opacity = 1;
        leftArrow.style.cursor = "pointer";
    }
    if (imageIndex === images.length - 1) { /* Si on est à la fin du carrousel, on met l'opacité de la flèche droite à 0.4 et on change le curseur en curseur par défaut */
        rightArrow.style.opacity = 0.4;
        rightArrow.style.cursor = "default";
    } else {
        rightArrow.style.opacity = 1;
        rightArrow.style.cursor = "pointer";
    }
}

function updateImageMargin(middleImage) { /* Fonction pour mettre à jour la marge de l'image qui vient se placer au milieu */
    if (window.matchMedia("(max-width: 980px)").matches) {
        middleImage.style.marginLeft = "0px";
    } else {
        middleImage.style.marginLeft = "50%";
    }
}

function updateImageMarginGoToLeft(goToLeftImage) { /* Fonction pour mettre à jour la marge de l'image qui vient se placer à gauche, lorsqu'on clique sur la flèche de droite*/
    if (window.matchMedia("(max-width: 980px)").matches) { 
        var screenWidth = window.innerWidth;
        var sixPercent = screenWidth * 0.06;}
    else {
        var screenWidth = window.innerWidth;
        var sixPercent = screenWidth * 0.07;
        sixPercent = sixPercent + 2 * imageIndex;
    }

    goToLeftImage.addEventListener('load', function() {
         const imageWidth = goToLeftImage.offsetWidth;
         const marginWouaw = -sixPercent - imageWidth
         goToLeftImage.style.marginLeft = marginWouaw + "px";
    });
    if (goToLeftImage.complete) {
         const imageWidth = goToLeftImage.offsetWidth;
         const marginWouaw = -sixPercent - imageWidth
         goToLeftImage.style.marginLeft = marginWouaw + "px";
    }
}

function updateImageMarginGoToRight(goToRightImage) { /* Fonction pour mettre à jour la marge de l'image qui vient se placer à droite, lorsqu'on clique sur la flèche de gauche*/
    if (window.matchMedia("(max-width: 980px)").matches) {
        goToRightImage.style.marginLeft = "0px";
    } else {
        goToRightImage.style.marginLeft = "0px";
    }
}

function moveImagesLeft() { /* Fonction pour déplacer les images vers la gauche, lorsqu'on clique à droite*/
    if (imageIndex > 0) {
        const goToRightImage = images[imageIndex];
        imageIndex--;
        updateArrowOpacity();
        const middleImage = images[imageIndex];
        updateImageMarginGoToRight(goToRightImage)
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

function moveImagesRight() { /* Fonction pour déplacer les images vers la droite, lorsqu'on clique à gauche*/
    if (imageIndex < images.length - 1) {
        const goToLeftImage = images[imageIndex];
        imageIndex++;
        updateArrowOpacity();
        const middleImage = images[imageIndex];
        updateImageMarginGoToLeft(goToLeftImage)
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

leftArrow.addEventListener('click', moveImagesLeft); /* Ajout d'un événement sur le clic de la flèche gauche */
rightArrow.addEventListener('click', moveImagesRight); /* Ajout d'un événement sur le clic de la flèche droite */
document.addEventListener('keydown', function(event) { /* Ajout d'un événement sur les touches du clavier */
    if (event.key === "ArrowLeft") {
        moveImagesLeft();
    } else if (event.key === "ArrowRight") {
        moveImagesRight();
    }
});

images.forEach((image) => { /* Pour chaque image, on ajoute un événement sur le clic pour déplacer les images vers la droite */
    image.addEventListener('click', function() {
        moveImagesRight();
    });
});
updateArrowOpacity(); /* Mise à jour de l'opacité des flèches */
if (images.length > 0) { /* Si le tableau d'image n'est pas vide, on met à jour la marge de l'image qui vient se placer au milieu ou tout à gauche en fonction de la largeur écran */
    updateImageMargin(images[0]);
}

window.matchMedia("(max-width: 980px)").addListener(() => { /* Ajout d'un événement pour mettre à jour la marge de l'image qui vient se placer au milieu ou tout à gauche en fonction de la largeur écran */
    if (images.length > 0) {
        updateImageMargin(images[imageIndex]);
    }
});