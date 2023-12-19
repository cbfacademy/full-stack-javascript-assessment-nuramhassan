import React from "react";
import "./App.css";
import Form from "./components/Form";
import Header from './components/Header';
import Footer from "./components/Footer";

function App() {
//function App = export default function App() {}     
  return (
      <>
        <Header />
        <div className="App">
          <div> <h1 className='text-xl'> Welcome to Rainbow Noir! </h1>
          </div>
      
          <Form />
      
        </div>  
        <Footer />    
      </>      
      );
}

export default App;
// remove export default App if using export default function App() {}