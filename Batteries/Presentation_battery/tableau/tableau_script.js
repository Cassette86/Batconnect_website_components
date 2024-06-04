function showSpecifications() {
  const description = document.getElementById('contenu_description');
  const specifications = document.getElementById('contenu_specifications');
  const descriptionHeader = document.getElementById('description_header');
  const specificationsHeader = document.getElementById('specifications_header');

  description.classList.add('hidden'); /* Add hidden class to description */
  description.classList.remove('visible'); /* Remove visible class from description */
  specifications.classList.add('visible'); /* Add visible class to specifications */
  specifications.classList.remove('hidden'); /* Remove hidden class from specifications */

  descriptionHeader.style.boxShadow = 'inset -10px -10px 10px rgba(0, 0, 0, 0.1)';
  specificationsHeader.style.boxShadow = 'inset 10px -10px 10px rgba(0, 0, 0, 0)';
  descriptionHeader.style.cursor = 'pointer';
  specificationsHeader.style.cursor = 'auto';

  setTimeout(() => {
    description.style.display = 'none'; /* Hide description after transition */
    specifications.style.display = 'block'; /* Show specifications after transition */
  }, 200); /* Match this with the transition duration */
}

function showDescription() {
  const description = document.getElementById('contenu_description');
  const specifications = document.getElementById('contenu_specifications');
  const descriptionHeader = document.getElementById('description_header');
  const specificationsHeader = document.getElementById('specifications_header');

  specifications.classList.add('hidden'); /* Add hidden class to specifications */
  specifications.classList.remove('visible'); /* Remove visible class from specifications */
  description.classList.add('visible'); /* Add visible class to description */
  description.classList.remove('hidden'); /* Remove hidden class from description */

  specificationsHeader.style.boxShadow = 'inset 10px -10px 10px rgba(0, 0, 0, 0.1)';
  descriptionHeader.style.boxShadow = 'inset 10px -10px 10px rgba(0, 0, 0, 0)';
  specificationsHeader.style.cursor = 'pointer';
  descriptionHeader.style.cursor = 'auto';

  setTimeout(() => {
    specifications.style.display = 'none'; /* Hide specifications after transition */
    description.style.display = 'block'; /* Show description after transition */
  }, 200); /* Match this with the transition duration */
}

document.getElementById('specifications_header').addEventListener('click', showSpecifications);
document.getElementById('description_header').addEventListener('click', showDescription);