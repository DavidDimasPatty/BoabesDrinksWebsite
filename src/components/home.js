import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "bulma/css/bulma.min.css";
import Header from "../layout/header"
import Footer from "../layout/footer"
import axios from "axios";
import "./style/home.css"
const Home = () => {
  
    const [drinks,setDrinks]=useState([]);
    var i=0;
    const getAllBooze=async()=>{
      await axios.get("http://localhost:5000/api/getAll").then((result) => {
        console.log(result.data['drinks'])
        setDrinks(result.data['drinks'])
      }).catch((err) => {
          console.log(err)
      });
    }

    useEffect(()=>{
      getAllBooze();
    },[])
     
    return(
    <div>
    <Header/>
     
      <div class="nine">
        <h1>Boabes
        <span>What Drinkers Need</span></h1>
      </div>
     <table>
                { 
                  drinks.map((drinkss,index)=>(
                    index%4>0?
                    (
                      <td class="px-3 py-2">
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
                      </td>):<tr></tr>
                ))}
          </table>        
         
      <Footer/>
    </div>
    )
}

export default Home;