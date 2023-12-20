import React from "react";
import "./App.css";
import Form from "./components/Form";
import Header from './components/Header';
import Footer from "./components/Footer";


function App() {

  return (
      <>
        <Header/>
        <div className="App">
          <div> 
            <h1 className="red"> 
              Welcome to Rainbow Noir! 
            <p>This is the home page </p>
            
            </h1>
          </div>
            <Form />
          </div>  
        <Footer />
            
      </>      
      );
    }

export default App;
// remove export default App if using export default function App() {}