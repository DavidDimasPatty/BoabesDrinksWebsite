///API Booze
const ApiBooze="https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
const axios = require("axios")

async function getAll() {
    var arr=[]
   await axios.get(ApiBooze).then((result) => {   
        arr=result;
    }).catch((err) => {
     
        console.log(err);
    });
    return arr;
}

async function getDetail(nama){
    var arr=[]
    await axios.get(ApiBooze+nama).then((result)=>{
        arr=result
        }).catch((e)=>{
        console.log(e)
    })
    return arr;
}

module.exports={
    getAll:getAll,
    getDetail:getDetail

}