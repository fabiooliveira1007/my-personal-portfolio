const text = document.querySelector('.main__content__title');
const textWrite = text.innerText;

text.innerText='';

function typeWriter (mainText) {
  setTimeout( () => {
    const mainTextWrite = mainText.split('');
    text.innerText='';
    mainTextWrite.forEach((letter, index) => {
      setTimeout(function () {
        text.innerText += letter;
      }, 140 * index)
    })
    }, 10);
}
