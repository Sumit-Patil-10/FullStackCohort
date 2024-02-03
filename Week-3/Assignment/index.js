const express = require('express');
const fs =  require('fs');
const bodyparser = require('body-parser');
const app = express()
const port = 3000

app.use(bodyparser.json());
app.use(express.json());



let ADMINS = [];
let USERS = [];
let COURSES = [];

//++++ Authntication routes +++++
//adminAuth function
const  adminAuth = (req,res,next)=>{
  const {username , password } = req.headers;
  const admins =  ADMINS.find( a => a.username === username && a.password === password);

  if (admins) {
    next();
  } else {
    res.status(403).json({ message: 'Admin authentication failed' });
  }
};

//UserAuth Function
const userAuth = (req,res,next) => {
  const {username , password } = req.headers;
  const user =  USERS.find( a => a.username === username && a.password === password);
  if(user){
    req.user =  user;
    next();
  }
  else{
    res.status(403).json({ message: 'User authentication failed' });
  }
}


//+++++ All admin Routes +++++

// creating new admin
app.post('Admin/signup', (res,req)=>{
  const admin = req.body;
  const admins =  ADMINS.find( a => a.username === username && a.password === password);

  if(admins){
    res.status(403).json({ message: 'Admin already exists' });
  }
  else{
    ADMINS.push(admin);
    res.status(200).json({ message: 'Admin created sucessfully' });
  }
})

app.post('Admins/login', adminAuth , (res,req) =>{

})










app.get('/', (req,res) =>{
  res.send(`Hello World!! Let's get this done`);
});

app.listen(port, () => {
  console.log(`ClassNext listening on port ${port}`)
})