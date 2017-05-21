var mongoose = require('mongoose');

mongoose.promise = global.promise;

mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo',{
  text:{
    type:String,
    required:true,
    minlength:1,
    trim:true
  },
  completed:{
    type:Boolean,
    default:false
  },
  completedAt:{
    type:Number,
    default:null
  }
});

var User = mongoose.model('User',{
  email:{
    type:String,
    required:true,
    minlength:1,
    trim:true
  }
})

// var newTodo = new Todo({
//   text:'Cook Dinner'
// })
//
// newTodo.save().then((doc)=>{
//   console.log(doc);
// },
// (e)=>{
//   console.log('Unable to save Todo',e);
// })


// var otherTodo = new Todo({
//   text:'Edit the videos'
// });
//
// otherTodo.save().then((doc)=>{
//   console.log(JSON.stringify(doc,undefiled,2));
// },(err)=>{
//   console.log('unable to save Todo',err);
// })

var newUser = new User({
  email:' pavank.d@gmail.com '
});

newUser.save().then((doc)=>{
  console.log(JSON.stringify(doc,undefined,2));
},(e)=>{
  console.log('Unable to save user',e);
});
