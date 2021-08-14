/*we just created this project for simple form and 
 in this project we are getting some input to the other route page */

const express=require("express");
const app=express();
const path=require("path");
const pug=require("pug");
const PORT= process.env.PORT || 4000;
app.set("view engine", "pug");
app.use(express.urlencoded({
    extended:true}))

    
app.get("/",(req,res)=>{
res.sendFile(__dirname+"/views/index.html");
});

app.post('/form_submit',(req,res)=>{
    const user=req.body.username;
    const email=req.body.email;
    res.end(`Your are Successfully loggined your name is ${user} and email is ${email}`);
   
})

app.listen(PORT,()=>console.log(`Server started at http://localhost:${PORT}`));