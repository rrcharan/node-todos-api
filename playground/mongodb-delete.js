// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
 if(err) {
     return console.log('Unable to connect to DB MOngo server')
 }
console.log('Connected to MongoDB server')
const db=client.db('TodoApp');

//delete many

db.collection('Todos').deleteMany({text:'Eat Lunch'}).then((result) => {
console.log(result);
});

//delete one

// db.collection('Todos').deleteOne({text:'Eat Lunch'}).then((result) => {
//     console.log(result);
//     });

//findOne and delete

// db.collection('Todos').findOneAndDelete({completed:false}).then((result) => {
//     console.log(result);
//     });

// client.close();

});