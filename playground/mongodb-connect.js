// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB Server');

  db.collection('Todos').insertOne({
    text:'break fast',
    completed:true
  },(err,result)=>{
    if(err){
      return console.log("Unable to insert ToDo",err);
    }
    console.log(JSON.stringify(result.ops,undefined,2));
  })
  // db.collection('Users').insertOne({
  //   name:'vamsi Dasari',
  //   age:'34',
  //   location : 'Munich'
  // },(err,results)=>{
  //   if(err){
  //     return console.log('Unable to insert User',err);
  //   }
  //   console.log(JSON.stringify(results.ops,undefined,2));
  // })
  // db.collection('Users').insertOne({
  //   name:'Pavan Dasari',
  //   age:'32',
  //   location : 'Hyderabad'
  // },(err,results)=>{
  //   if(err){
  //     return console.log('Unable to insert User',err);
  //   }
  //   console.log(JSON.stringify(results.ops,undefined,2));
  // })


  db.close();
});
