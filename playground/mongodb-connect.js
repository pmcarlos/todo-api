const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to mongodb');
    }
    console.log('Connected to mongodb');

    // db.collection('Todos').insertOne({
    //     text: 'Something todo',
    //     completed: false
    // }, (err, result) => {
    //     if(err) {
    //         return console.log('Unable to insert todo', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    db.collection('Users').insertOne({
    name: 'Carlos',
    age: 25,
    location: 'México'
    }, (err, result) => {
        if(err) {
            return console.log('Unable to insert todo', err);
        }

         console.log(JSON.stringify(result.ops, undefined, 2));
    });
    
    db.close();
});
