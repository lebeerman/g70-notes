createScoreboard();

function createScoreboard() {
  const url = 'https://galvanize-leader-board.herokuapp.com/api/v1/leader-board/GBP';
  fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  })
  .then(response => {
    loadScores(response);
    document.querySelector('canvas').addEventListener('gameOver',(e)=>{
      whenGameOver();
    },false);
  })
  .catch(error => {
    alert(error)
  });
}
function whenGameOver() {
  alert("You scored: " + score);
  const urlPOST = 'https://galvanize-leader-board.herokuapp.com/api/v1/leader-board/';
  let request = {
    method: 'POST',
    body: JSON.stringify({
      game_name: 'GBP',
      player_name: document.querySelector('.big-input').value,
      score: '9999'
    }),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }
  fetch(urlPOST, request)
  .then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  })
  .then(response => {
    createScoreboard(response);
  })
}

/* ------------------ HELPER FUNCTIONS -------------------- */
function loadScores(response) {
  let scores = document.querySelector('.scores');
  let topScores = getTopThree(response);
  for(var key in topScores){
    let scorecard = createNode(
      'p', {'class':'score-card'},
      'span',{'class':'player-name','innerHTML':topScores[key].player_name},
      'span',{'class':'score','innerHTML':topScores[key].score});
    append(scores, scorecard);
    console.dir(topScores[key]);
  }
}
function append(parent, el) {
// Append the second parameter(element) to the first one
  return parent.appendChild(el);
}
function createNode(element, attributes) {
// Create an element with optional attributes object. appends additional elements as children of the first node.
  let node = document.createElement(element);
  if (attributes) {
    for (var attr in attributes) {
      if (attributes.hasOwnProperty(attr)) {
        if (attr == 'innerHTML'){
          node.innerHTML = attributes[attr];
        }
        else {
          node.setAttribute(attr, attributes[attr]);
        }
      }
    }
  }
  for (var i = 2; i < arguments.length; i+=2) {
    var child = arguments[i];
    var attr = arguments[i+1];
    if (typeof child == 'string') {
      console.log(child);
      console.dir(attr);
      child = createNode(child, attr);
    }
    node.appendChild(child);
  }
  return node;
}
function getTopThree(gbpObject) {
/* ------------------------ NOTES ------------------------
  More efficient sorts
  array --> sort
  var sortable = [];
  for (var vehicle in maxSpeed) {
    sortable.push([vehicle, maxSpeed[vehicle]]);
  }

  sortable.sort(function(a, b) {
    return a[1] - b[1];
  });

  object --> array key/value pairs --> sort --> object
  var list = {"you": 100, "me": 75, "foo": 116, "bar": 15};
  keysSorted = Object.keys(list).sort(function(a,b){return list[a]-list[b]})
  alert(keysSorted);     // bar,me,you,foo
   -------------------------------------------------------- */
   console.log('getting top three scores');
  let best = 0, second = 0, third = 0;
  let topScoresObj = {};
  for (var key in gbpObject){
    // loops through games by id and pulls out the top 3 scores. this pattern is inefficient as it only pulls highest values.
    if (gbpObject[key].score > best){
      third = second
      second = best;
      best = gbpObject[key].score;
      topScoresObj.thirdPlace = topScoresObj.secondPlace;
      topScoresObj.secondPlace = topScoresObj.winner;
      topScoresObj.winner = gbpObject[key];
    }
    else if (gbpObject[key].score > second) {
      third = second
      second = gbpObject[key].score;
      topScoresObj.thirdPlace = topScoresObj.secondPlace;
      topScoresObj.secondPlace = gbpObject[key];
    }
    else if (gbpObject[key].score > third) {
      third = gbpObject[key].score;
      topScoresObj.thirdPlace = gbpObject[key];
    }
  }
  console.log(gbpObject[key].score +" COMPARED TO: "+ best +" "+ second +" "+ third);
  console.dir(topScoresObj);
  return topScoresObj;
}
