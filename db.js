const mongo=require('mongoose')
const schema=mongo.Schema
require('dotenv').config()
var stringCon=`mongodb+srv://${process.env.USERNAME_DB}:${process.env.PW_DB}@cluster0.hw29l.mongodb.net/BoozeDB`

const connect = async (e)=>{ 
    await mongo.connect(stringCon,{
        useNewUrlParser: true, 
        useUnifiedTopology: true
    
     }).then(()=>{
         console.log("Database Connect")
     }).catch(err=>{
         console.log("Database Failed to Connect "+err)
     })
    }

    const userscheme = new schema({
        name:String,
        email:String,
        password:String,
        },{collection:'user'});
    var user=mongo.model('user',userscheme)

    const userOrdersScheme = new schema({
        idUser:Object,
        idMinuman:Object,
        qty:BigInt,
        },{collection:'userOrder'});
    var userOrder=mongo.model('userOrder',userOrdersScheme)

    async function getUserOrder(id){
        var arr=[]
        await userOrder.find({
            $and:[
                {idUser:id}
            ]
        }).then((res)=>{
            arr=res
        }).catch((e)=>{
            console.log(e)
        })
        return arr;
    }

    async function getUser(email,pw){
        var arr=[]
        await user.find({
            $and:[
                {email:email},
                {password:pw}
            ]
        }).then((res)=>{
            arr=res
            console.log(res)
        }).catch((e)=>{
            console.log(e)
        })
        return arr;
    }
    
module.exports= {
    connect:connect,
    getUserOrder:getUserOrder,
    getUser:getUser
}