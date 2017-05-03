//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to mongodb');
    }
    console.log('Connected to mongodb');
    // deleteMany
    // db.collection('Todos').deleteMany({text: 'Something todo f'}).then((res) => {
    //     console.log(res);
    // });

    // deleteOne
    // db.collection('Todos').deleteOne({text: 'Something todo'}).then((res) => {
    //     console.log(res);
    // });

    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((res) => {
    //     console.log(res);
    // });
    
    //db.close();
});
