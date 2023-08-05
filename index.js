const express= require('express');
const cors= require('cors');
const bp= require('body-parser');
const path=require('path');
const apiBooze=require("./apiHandle")
const app= express();
const PORT= 5000
const db=require("./db")

db.connect()
app.use(cors())
app.use(bp.json())
app.use(bp.urlencoded({extended:true}));

app.get('/api/getAll',async function(req,res) {
  await apiBooze.getAll().then(result=>{
    res.send(result.data)
  })
})

app.get('/api/getBooze',async function(req,res) {
  await apiBooze.getDetail(req.query.nama).then(result=>{
    res.send(result.data)
  }).catch((e)=>console.log(e))
})

app.get('/api/login',async function(req,res) {
  await db.getUser(req.query.email,req.query.password).then(result=>{
    res.send(result)
  })
})

app.get('/api/myOrder',async function(req,res) {
  await db.getUserOrder(req.query.id).then(result=>{
    res.send(result.data)
  })
})


// app.use(express.static(path.join(__dirname, 'build')));
// app.get('*', function(req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

app.listen(PORT,()=>console.log(`Server running on port ${PORT}`))