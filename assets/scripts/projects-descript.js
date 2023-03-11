const projects = document.querySelectorAll('.project__select__js');
const descript = document.querySelector('.project__description__js');
const projdescript = [
  'This is my first project. It was made with HTML, CSS (Flexbox), SASS, and basic JS script to form validation.'
];

projects.forEach( (element, i) => {
  let index = i;
  element.addEventListener('mouseover', (event) => {
    descript.innerHTML = `<p>${projdescript[index]}<p>`;
  })
  element.addEventListener('mouseout', (event) => {
    descript.innerHTML = `Choose a project`;
  })
})