import {React,useState} from "react";
import { useNavigate } from "react-router-dom";
import "bulma/css/bulma.min.css";
import Login from "../components/login"
import { BsFillCartFill,BsClockHistory } from 'react-icons/bs';

const Header =() =>{

  const [showLogin, setShowLogin] = useState(false);

  const logOut=()=>{
    sessionStorage.setItem("token","")
    window.location.reload()
  }

  const toggleLogin = () => {
    setShowLogin(!showLogin);
  };
    var token=sessionStorage.getItem("token")

 
    return(
    <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img src="logo.png" width={100} height={200}/>
        </a>
    
        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>      
        </a>
    </div>
  
    <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item" href="/">
            Home
          </a>
          <a class="navbar-item" href="/">
            Promo
          </a>
      
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              More
            </a>
    
            <div class="navbar-dropdown ">
              <a class="navbar-item">
                About
              </a>
              <a class="navbar-item">
                Jobs
              </a>
              <a class="navbar-item">
                Contact
              </a>
              <hr class="navbar-divider"/>
              <a class="navbar-item">
                Report an issue
              </a>
            </div>
          </div>
        </div>
      { token==null||token==""?
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              {/* <a class="button is-primary">
                <strong>Sign up</strong>
              </a> */}
              <a class="button is-light" onClick={toggleLogin}>
                Log In to Buy
              </a>
            </div>
          </div>
        </div>:
        <div class="navbar-end">
          <a class="navbar-item">
              {token}
          </a>

          <a class="navbar-item">
                <p> <BsFillCartFill/> My Cart</p> 
          </a>

          <a class="navbar-item">  
              <p> <BsClockHistory/> History</p>   
          </a>

          <div class="navbar-item">
            <div class="buttons">
              {/* <a class="button is-primary">
                <strong>Sign up</strong>
              </a> */}
              <a class="button is-light" onClick={logOut}>
                Log Out
              </a>
            </div>
          </div>
        </div>
        }
        {showLogin && <Login onClose={toggleLogin} />}
    </div>
  </nav>
 
 )

 
}

export default Header;