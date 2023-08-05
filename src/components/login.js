import React, { useState } from "react";
import axios from "axios";



const Login = ({ onClose }) => {

  const [email,setEmail]=useState();
  const [password,setPassword]=useState(); 


  const login=async(e)=>{
      if(email &&password){
        await axios.get("http://localhost:5000/api/login",{
          params:{
            email:email,
            password:password
          }
        }).then((res)=>{
          if(res.data.length!==0){
            console.log(res.data)
             window.location.reload()
             sessionStorage.setItem("token",res.data[0].name)
          }
        }).catch((e)=>console.log(e))
      }
  }


  return (
    <div className="modal is-active">
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Login Drinkers</p>
          <button className="delete" aria-label="close" onClick={onClose}></button>
        </header>
        <section className="modal-card-body">
        <label>Email:</label>
        <input class="input is-info" type="text" placeholder="Info input" onChange={e=>setEmail(e.target.value)} required/>
        <label>Password:</label>
        <input class="input is-info" type="text" placeholder="Info input" onChange={e=>setPassword(e.target.value)}required/>
        </section>
        <footer className="modal-card-foot">
          <button className="button is-success" onClick={login}>Log In</button>
          <button className="button is-info">Sign Up</button>
          <button className="button" onClick={onClose}>
            Cancel
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Login;