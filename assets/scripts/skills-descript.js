const skills = document.querySelectorAll('.skill__select__js');
const description = document.querySelector('.skill__description__js');
const skilldescript = [
  'HTML5 is a markup language used for structuring and presenting content on the World Wide Web.<br><span class="skill__description__text">Source: Wikipedia.</span>',

  'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.<br><span class="skill__description__text">Source: Wikipedia.</span>',

  'JavaScript is a programming language that is one of the core technologies of the World Wide Web. All major web browsers have a dedicated JavaScript engine to execute the code on users devices.<br><span class="skill__description__text">Source: Wikipedia.</span>',

  'SASS is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS). SassScript is the scripting language itself.<br><span class="skill__description__text">Source: Wikipedia.</span>'
];

skills.forEach ( (element, i) => {
  let index = i;
  element.addEventListener('mouseover', (event) => {
    description.innerHTML = `<p>${skilldescript[index]}<p>`;
  })
  element.addEventListener('mouseout', (event) => {
    description.innerHTML = `Choose a skill`;
  })
})