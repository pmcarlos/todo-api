//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to mongodb');
    }
    console.log('Connected to mongodb');

    //findOneAndUpdate
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID("590651c799268406672d69ba")
    }, {
        // $set: {
        //     completed: true
        // },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    //db.close();
});
