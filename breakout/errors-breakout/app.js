const express = require('express');
const app = express();

const cors = require('cors');
const bodyParser =

app.use(bodyParser.json());
app.use(cors());

console.log();
app.post('/',(request,reposnse)=> {
  // POST substitutes with GET
  // use body, queries, params to get data.
  //
  if (request.body.name.length > 10){
    response.status(400).json({
      error: 'yo shit to big, cuh.'
    });
  } else {
    response.send(request.body);
    response.sendStatus(200);

  }
});

app.use((request, response)=> {
  response.status(400).send({
    error: 'Nothing will work!'
  })
})

app.listen(3000);
