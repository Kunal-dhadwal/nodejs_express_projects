const express=require("express");
const app=express();
const {v4:uuidv4}=require("uuid");
const path=require("path");
const bodyparser=require("body-parser");
const session=require("express-session");
const router=require("./router");
const PORT= process.env.PORT || 3000;


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

app.set('view engine','ejs');

// load static assests
app.use('/static',express.static(path.join(__dirname,'public')));
app.use('/assets',express.static(path.join(__dirname,'assests')));

app.use(session({
    secret: uuidv4(), 
    resave: false,
    saveUninitialized:true

}))
//calling router file
app.use('/route',router);

//home route

app.get('/',(req,res)=>{
    res.render('base', {title:"Simple Login AppEngine"});
})

app.listen(PORT,()=>console.log(`server started http://localhost:${PORT}`));