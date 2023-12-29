import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";
import Navbar from "./views/components/Shared/Navbar";
import AddReview from "./views/pages/AddReview";
import ReadReview from "./views/pages/ReadReview";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<AddReview />} exact />
        <Route path="/read-review" element={<ReadReview />} exact />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
// remove export default App if using export default function App() {}