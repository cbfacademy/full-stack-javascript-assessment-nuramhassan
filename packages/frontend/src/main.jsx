
// Import necessary modules and components
import React from 'react'; // Import React library for JSX and components
import ReactDOM from 'react-dom/client'; // Import ReactDOM for rendering into the DOM
import App from './App.jsx'; // Import the main App component
import './index.css'; // Import global CSS styles for the application

// Create a root instance using ReactDOM and render the main App component
ReactDOM.createRoot(document.getElementById('root')).render(
  // Wrap the App component in React.StrictMode for development mode enhancements
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
