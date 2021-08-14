const express=require("express");
const router=express.Router();

const deff={
    email: 'admin@gmail.com',
    password: 'admin'
}
router.post("/login",(req,res)=>{
  if(req.body.email==deff.email && req.body.password==deff.password)
    {
        req.session.user= req.body.email;
        res.redirect('/route/dashboard');

        //  res.send(`Login Successully ${req.session.user}`);
    }
    else{
        res.send("invalid id and password")
    }
});
//route for dashboard
router.get('/dashboard',(req,res)=>{
    if(req.session.user){
        res.render("dashboard",{user:req.session.user})
    }
    else{
        res.send('unauthorized user');
    }
});

//route for logout
router.get('/logout',(req,res)=>{
    req.session.destroy(function(err){
        if(err){
            console.log(err);
            res.send("Error");
        }
        else{
            res.render('base', {title:"Express",logout:"Successfully"});
        }
    })
})
module.exports=router;