const express = require("express"); //returns a function
const app = express(); //return object of type Express

// const ModuleObj = new Module('d');
// ModuleObj.res
app.use(express.json())
app.set("view engine",'ejs');

app.get('/',(req,res)=>{
    res.render('index', {text:"world"});
})






const userRouter=require('./routes/users');
app.use('/users',userRouter);  // this is here use for all the routes starting with users

const courses=[
    {id:1, name:'course1'},
    {id:2, name:'course2'},
    {id:3, name:'course3'}
]
app.post("/api/courses", (req, res) => {
    if(!req.body.name || req.body.name.length<3){
        res.status(400).send("Name is required and should be minimum 3 characters")
        return;
    }
    const course={
        id: courses.length +1,
        name:req.body.name
    }
    courses.push[course];
   res.send(course);    //in order to work this we need to parse json object in the body of the request,by default this feature is not enable in express
});
const port =process.env.PORT || 3000
app.listen(port, () => console.log(`listening on port ${port}`));
