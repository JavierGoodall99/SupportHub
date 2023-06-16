import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Login from "./SignUp/LoginModal";
import NavBar from "./NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const navigate = useNavigate();
  return (
    <div className="body">
      {/* <NavBar /> */}
      <h1 className="header">Welcome to the Support Hub!</h1>
      <div className="imageContainer">
        <img
          className="BGImage img-fluid"
          src="https://i.postimg.cc/nr7RLFnF/BG-Create-Case.jpg"
          alt="BGImage"
        />
        <button
          className="centeredButton"
          onClick={() => {
            navigate("/RequestPage");
          }}
        >
          Create Case
        </button>
      </div>
      {/* <Login /> */}
    </div>
  );
}

export default App;
