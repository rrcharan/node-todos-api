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
db.collection('Todos').insertOne({
text:'Something to do1',
completed: 'false'
}, (err, result) => {
    if(err) {
        return console.log('Unable to insert Todo', err)
    }

    console.log(JSON.stringify(result.ops, undefined, 2));
})
client.close();

});