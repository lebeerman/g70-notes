function getGreeting(name) {
  return 'Hi' + name + '!';
}

function timedGreeting() {
  setTimeout(() =>{
    console.log(getGreeting('Marlena'));
  }, 2000);
}

timedGreeting();
console.log(getGreeting('Kyle'));
