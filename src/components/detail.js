import React, { useState } from "react";
import Header from "../layout/header";
import Footer from "../layout/footer";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


const Detail=()=>{

    const [detailDrink,setDetailDrink]=useState([]);
    useEffect(()=>{
        detailBooze();
    },[])

    const {nama}=useParams();
    console.log(nama)
    const detailBooze= async (e)=>{
        await axios.get("http://localhost:5000/api/getBooze",{
        params:{
            nama:nama
        }}).then((res)=>{
            setDetailDrink(res.data['drinks'])
        }).catch((e)=>{
            console.log(e)
        })

    }

    return(
        <div>
        <Header/>
       { detailDrink.map((detailDrinks)=>(
        <div class="card is-4 px-4 py-2">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img id="zoom" src={detailDrinks.strDrinkThumb} alt="Placeholder image"/>
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
              
                  <div class="media-content">
                    <p class="title is-4">{detailDrinks.strDrink}</p>
                    <p class="subtitle is-6">{detailDrinks.strCategory}</p>
                  </div>
                </div>

                <div class="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                  <a href="#">#css</a> <a href="#">#responsive</a>
                  <br/>
                  <time>{detailDrinks.dateModified}</time>
                </div>
              </div>
            </div>))}
         <Footer/>
        </div>
        
    )
}

export default Detail