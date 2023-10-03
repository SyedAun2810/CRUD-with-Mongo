const express= require('express');
const mongoose= require('mongoose');
const cors= require('cors'); 
const UserModel= require('./models/users')

const app=express();
app.use(cors());
app.use(express.json());
// require('dotenv').config();

const port = process.env.PORT || 3333;
const path=require('path');
mongoose.connect("mongodb://localhost:27017/school")

app.get('/getusers', (req, res) => {
    UserModel.find({}).
    then(result=> res.json(result))
    .catch(err => res.json(err))
})

app.get('/getupdateuser/:id', (req, res) => {
    const id=req.params.id;
    UserModel.findById({_id:id}).
    then(result=> res.json(result))
    .catch(err => res.json(err))
})

app.put('/updateuser/:id', (req, res) => {
    const id=req.params.id;
    UserModel.findByIdAndUpdate({_id:id}, {name:req.body.name, email:req.body.email,age:req.body.age}).
    then(result=> res.json(result))
    .catch(err => res.json(err))

})
app.delete('/deleteuser/:id', (req, res) => {
    const id=req.params.id;
    UserModel.findByIdAndDelete({_id:id}).
    then(result=> res.json(result))
    .catch(err => res.json(err))

});



app.post('/createUser', (req, res) => {
    const newUser = new UserModel(req.body); // Create a new user document
    newUser.save()
      .then(user => res.json(user))
      .catch(err => res.json(err));
  });
  
// if(process.env.NODE_ENV == 'production'){
//     app.use(express.static('frontend/dist'))
// }


// access static files 
app.use(express.static(path.join(__dirname, 'frontend/dist')));

app.get("*",function(req, res){
    res.sendFile(__dirname,'./frontend/dist/index.html')
});

app.listen(port, ()=>{
    console.log(`The Server is running on port ${port}`);
})
    // "start": "node index.js",
    // "dev": "nodemon index.js", 