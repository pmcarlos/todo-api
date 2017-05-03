//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to mongodb');
    }
    console.log('Connected to mongodb');

//    db.collection('Todos').find({
//        _id: new ObjectID('590a18104e77fc07fb65ea1f')
//     }).toArray().then((docs) => {
//        console.log('Todos');
//        console.log(JSON.stringify(docs, undefined, 2));
//    }, (err) => {
//        console.log('Unable to fetch todos', err);

//    });

//    db.collection('Todos').find().count().then((count) => {
//        console.log(`Todos count: ${count}`);
//    }, (err) => {
//        console.log('Unable to fetch todos', err);

//    });
db.collection('Users').find({name: 'Carlos'}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2))

}, (err) => {
    console.log("error", err)
});
    
    //db.close();
});
