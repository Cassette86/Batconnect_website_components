function showSpecifications() {
    const description = document.getElementById('contenu_description');
    const specifications = document.getElementById('contenu_specifications');
    const descriptionHeader = document.getElementById('description_header');
    const specificationsHeader = document.getElementById('specifications_header');
    const bms = document.getElementById('tableaubms');
    const titre_bms = document.getElementById('titre_tableau');
  
    description.classList.add('hidden');
    description.classList.remove('visible');
    specifications.classList.add('visible');
    specifications.classList.remove('hidden');
    bms.classList.add('visible');
    bms.classList.remove('hidden');
    titre_bms.classList.add('visible');
    titre_bms.classList.remove('hidden');
  
    descriptionHeader.style.boxShadow = 'inset -10px -10px 10px rgba(0, 0, 0, 0.1)';
    specificationsHeader.style.boxShadow = 'inset 10px -10px 10px rgba(0, 0, 0, 0)';
    descriptionHeader.style.cursor = 'pointer';
    specificationsHeader.style.cursor = 'auto';
  
    setTimeout(() => {
      description.style.display = 'none';
      specifications.style.display = 'block';
      bms.style.display = 'block'; // Ensure that the display is set to block
      titre_bms.style.display = 'block'
    }, 200); // Match this with the transition duration
  }
  
  function showDescription() {
    const description = document.getElementById('contenu_description');
    const specifications = document.getElementById('contenu_specifications');
    const descriptionHeader = document.getElementById('description_header');
    const specificationsHeader = document.getElementById('specifications_header');
    const bms = document.getElementById('tableaubms');
    const titre_bms = document.getElementById('titre_tableau')
  
    specifications.classList.add('hidden');
    specifications.classList.remove('visible');
    description.classList.add('visible');
    description.classList.remove('hidden');
    bms.classList.add('hidden'); // Ensure that the hidden class is added
    bms.classList.remove('visible');
    titre_bms.classList.add('hidden');
    titre_bms.classList.remove('visible');
  
    specificationsHeader.style.boxShadow = 'inset 10px -10px 10px rgba(0, 0, 0, 0.1)';
    descriptionHeader.style.boxShadow = 'inset 10px -10px 10px rgba(0, 0, 0, 0)';
    specificationsHeader.style.cursor = 'pointer';
    descriptionHeader.style.cursor = 'auto';
  
    setTimeout(() => {
      specifications.style.display = 'none';
      description.style.display = 'block';
      bms.style.display = 'none'; // Ensure that the display is set to none
      titre_bms.style.display = 'none'
    }, 200); // Match this with the transition duration
  }
  
  document.getElementById('specifications_header').addEventListener('click', showSpecifications);
  document.getElementById('description_header').addEventListener('click', showDescription);