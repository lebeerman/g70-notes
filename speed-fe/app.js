
const url = 'http://barkwire-api.herokuapp.com/dogs';
fetch(url)
  .then(response => response.json())
  .then(response => {
    console.log(response);
    document.querySelector('#dogData').innerText = JSON.stringify(response);
  });
