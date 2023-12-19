import React from "react";
import "./App.css";
import Form from "./components/Form";

function Header(){
  return (
    <nav className="nav-bar">
      <p>Logo</p>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li> 
          <a href="/contact—us">Contact</a>
        </li>
      </ul>
    </nav>

  )

}

function App() {
     
  return (
      <>
        <Header />
        <div className="App">
          <div> <h1 className='text-xl'> Welcome to Rainbow Noir! </h1>
          </div>
      
          <Form />
      
        </div>      
      </>      
      );
}

export default App;
