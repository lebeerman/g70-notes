// target.addEventListener(type, [listenerFunction], [options])

var eventTarget = document.getElementsByTagName('h1');

for (var i = 0; i < eventTarget.length; i++) {
  eventTarget[i].addEventListener('click', function(event) {
    console.log(event);
    console.log('stop touching me!');
  });
}

var eventTarget2 = document.getElementById('target');

eventTarget2.addEventListener('click', function(){
  eventTarget2.animate([
    // keyframes
    { transform: 'translateY(0px)' },
    { transform: 'translateY(-300px)' }
  ], {
    // timing options
    duration: 1000,
    iterations: 3
  });
  console.log('clicked 2!');
});
