const express=require("express");
const app=express();
const port=process.env.PORT||3000;
const route=require("./route");
//home route
app.get('/',(req,res)=>{
    res.send("Routing App");
});
app.use('/api',route);
app.listen(port,()=>console.log(`server started at http://localhost:${port}`));