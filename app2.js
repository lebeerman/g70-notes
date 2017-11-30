const screen = document.querySelector('#screen');
const buttons = document.querySelectorAll('span');

buttons.forEach(button => {
  button.addEventListener('click', ()=>{
    screen.textContent += button.textContent;
  });
});
