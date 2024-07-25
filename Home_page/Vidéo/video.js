// Exécuter le script lorsque le DOM est complètement chargé
document.addEventListener('DOMContentLoaded', () => {
    // Sélectionner le conteneur de la vidéo par son ID
    const videoContainer = document.getElementById('videoContainer');

    // Vérifier si l'élément existe
    if (videoContainer) {
        // Ajouter la classe 'shrink' après 5 secondes
        setTimeout(() => {
            videoContainer.classList.add('shrink');
        }, 5000);

        // Ajouter la classe 'shrink' lors du défilement de la fenêtre
        window.addEventListener('scroll', () => {
            videoContainer.classList.add('shrink');
        });
    }
});