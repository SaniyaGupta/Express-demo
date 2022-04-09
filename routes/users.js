const express=require('express');
const router=express.Router();

router.get('/',(req,res)=>{
    res.send("User List");
})
router.get('/new',(req,res)=>{
    res.send("User New Form");
})

router.route('/:id')
.get((req,res)=>{
    res.send(`Get User With Id ${req.params.id}`)
})

router.param("id",(req,res,next,id)=>{
    console.log("s",id)
    next();
})

module.exports= router;