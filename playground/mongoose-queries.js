const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = '5c4dd6e979d6c9260879b04x';

if(!ObjectID.isValid(id)) {
    console.log("ID is not valid")
}

// Todo.find({
//     _id : id
// }).then((todos)=> {
//     console.log('Todos',todos);
// })

// Todo.findOne({
//     _id : id
// }).then((todo)=> {
//     console.log('Todo',todo);
// })

Todo.findById(id).then((todos)=> {
    if(!todos) {
        return console.log("ID not found");
    }
    console.log('Todos by ID',todos);
}).catch((e)=> console.log(e));