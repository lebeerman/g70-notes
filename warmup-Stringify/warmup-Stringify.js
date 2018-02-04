document.body.style.backgroundImage = 'bridge-of-death.jpg';

console.log('doin shit');

var obj = {};

document.querySelector('button').addEventListener('click', (e)=> {
  e.preventDefault();
  let formData = new FormData(document.querySelector('form'));  
  console.log(formData.get(name));
  console.log(formData.get(color));
  console.log(formData.get(quest));

});
// console.log( JSON.stringify(obj) );
