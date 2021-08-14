const { Router } = require("express");
const express=require("express");
const route=express.Router();
var accounts=require("./database");
//GET request

route.get('/accounts',(req,res)=>{
    res.json({userData:accounts});
});

route.post('/accounts',(req,res)=>{
    const incomingAccount=req.body;
    accounts.push(incomingAccount);
    res.json(accounts);
});
route.get('/accounts/:id',(req,res)=>{
    const accountid=Number(req.params.id);
const getAccount=accounts.find((acc)=>acc.id===accountid);
if(!getAccount){
    res.status(500).send("Account not found");

}
else{
    res.json({useData:[getAccount]});
}
});




//put http method

route.put('/accounts/:id',(req,res)=>{
    const accid=Number(req.params.id);
    const body=req.body;
    const account=accounts.find((acc)=>acc.id===accid);
    const index=accounts.indexOf(account);

    if(!account){
        res.status(500).send("Account not Found");

    }
    else{
      const updatedAcc= { ...account, ...body}; // three dot will combine account and body and make it status active.
    accounts[index]=updatedAcc;
      res.send(updatedAcc);

    }

})




//delete request
route.delete('/accounts/:id',(req,res)=>{
    const accid=Number(req.params.id);
    const newAcc=accounts.filter((acc)=>acc.id)
    if(!newAcc){
        res.status(500).send("Account Not Found");

    }
    else{
        accounts=newAcc;
        res.send(accounts);
    }
})




module.exports=route;