const express = require("express")
const app = express();
var bodyParser = require('body-parser');
//app.use(express.json());



var todos = [{id:1, title:"add book"}, {id:2, title:"buy book"}];
var count = todos.length;

// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get("/", (req,res) => {
    res.status(200).json(todo);
});

app.post('/', (request, response) => {
    var newTodo = JSON.parse(request.body);
    count = count+1;
    newTodo.id = count;
    todo.push(newTodo);
    response.status(201).json();
});

app.put('/:id', (request, response) => {
    var id = request.params.id;
    if (todos[id]){
      var updatedTodo = JSON.parse(request.body);
      todos[id] = updatedTodo;
      response.status(204).send();
    }else{
      response.status(404, 'The task is not found').send();
    }
  });
  
  app.delete('/:id', (request, response) => {
    var id = parseInt(request.params.id);
    if(todos.filter(todo => todo.id == id).length !== 0){
      todos = todos.filter(todo => todo.id !== id);
      response.status(200).send();
    }else{
      response.status(404).send();
    }
  });


app.listen(8080, () => [
    console.log("Listening on port 8080")
])