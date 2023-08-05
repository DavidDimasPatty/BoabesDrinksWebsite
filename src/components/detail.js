import React from "react";
import Header from "../layout/header";
import Footer from "../layout/footer";
import { useEffect } from "react";
import { useParams } from "react-router-dom";


const detail=()=>{

    useEffect(()=>{
        detailBooze();
    },[])

    var {nama}=useParams();

    const detailBooze= async ()=>{
        await axios.get("http://localhost:5000/api/getBooze",{
        params:{
            nama:nama
        }}).then((res)=>{
            console.log(res.data)
        }).catch((e)=>{
            console.log(e)
        })

    }

    return(
        <div>
        <Header/>
        <div hidden>{index+1}</div>
        <div class="card is-4 px-4 py-2">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img id="zoom" src={drinkss.strDrinkThumb} alt="Placeholder image"/>
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
              
                  <div class="media-content">
                    <p class="title is-4">{drinkss.strDrink}</p>
                    <p class="subtitle is-6">{drinkss.strCategory}</p>
                  </div>
                </div>

                <div class="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                  <a href="#">#css</a> <a href="#">#responsive</a>
                  <br/>
                  <time>{drinkss.dateModified}</time>
                </div>
              </div>
            </div>
         <Footer/>
        </div>
    )
}

export default detail