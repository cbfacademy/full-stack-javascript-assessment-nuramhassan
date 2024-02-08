// Import necessary components and styles from external files
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";
import Navbar from "./views/components/Navbar";
import AddReview from "./views/pages/AddReview";
import ReadReview from "./views/pages/ReadReview";

function App() {
  return (
    // Set up routing using BrowserRouter to manage navigation
    <BrowserRouter>
    {/* Display Navbar component on top of the app */}
      <Navbar />
      {/* Define different routes */}
      <Routes>
        {/* Route to AddReview component when URL matches '/' */}
        <Route path="/" element={<AddReview />} exact />
        <Route path="/read-review" element={<ReadReview />} exact />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}
// Export the App component as the default export
export default App;
// Note: If using 'export default function App() {}', remove 'export default App' above
