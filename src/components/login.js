import React from "react";

const Login = ({ onClose }) => {
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
        <input class="input is-info" type="text" placeholder="Info input"/>
        <label>Password:</label>
        <input class="input is-info" type="text" placeholder="Info input"/>
        </section>
        <footer className="modal-card-foot">
          <button className="button is-success">Log In</button>
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