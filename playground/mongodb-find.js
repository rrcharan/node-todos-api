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

// db.collection('Todos').find({completed: 'false'}).toArray().then((docs)=> {
//     console.log('Todos');
//     console.log(JSON.stringify(docs, undefined, 2));
// }, (err)=> {
//     console.log("unable to fetch Todos", err);
// });


db.collection('Todos').find().count().then((count)=> {
    console.log('Todos:', count);
   
}, (err)=> {
    console.log("unable to fetch Todos", err);
});

// client.close();

});