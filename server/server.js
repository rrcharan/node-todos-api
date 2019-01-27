// var mongoose = require('mongoose');

// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/TodoApp');
var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

// post
app.post('/todos', (req, res)=> {
    console.log(req.body);
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc)=> {
        res.send(doc);
    }, (e)=> {
        res.status(400).send(e);
    });
});

// get 
app.get('/todos', (req, res)=> {

   Todo.find().then((todos)=> {
        res.send({todos});
   }, (e)=> {
       console.log(e)
   })
})

app.listen(3000, () => {
    console.log('Started on port 3000')
});

module.exports = {app};

// var Todo = mongoose.model('Todo', {
//     text: {
//         type: String,
//         required: true,
//         minlength : 1,
//         trim: true
//     },
//     completed: {
//         type: Boolean,
//         default: false
//     },
//     completedAt: {
//         type: Number,
//         default: null
//     }
// });

// var newTodo = new Todo({
//     text: 'Cook Dinner'
// });

// newTodo.save().then((doc)=> {
//     console.log("document saved", doc)
// }, (e)=> {
//     console.log('unable to save todo')
// })

// var otherTodo = new Todo({
//     text: 'Edit the video'
 
// });

// otherTodo.save().then((doc)=> {
//     console.log("document saved", JSON.stringify(doc, undefined, 2));
// }, (err)=> {
//     console.log('unable to save todo', err)
// })