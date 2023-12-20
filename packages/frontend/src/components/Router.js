import Header from './Header';
import Footer from "./Footer";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import WriteReview from "../pages/WriteReview";
import {BrowserRouter, Routes, Route, Outlet} from 'react-router-dom';

export default function Router() {
    const Layout = () => {
        return(
          <>
          <Header />
          <Outlet />
          <Footer />
          </>
        )
    }

    const BrowserRoutes = () => {
        return (
            <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="write-a-review" element={<WriteReview />} />
              <Route path="contact-us" element={<Contact />} />
            </Route>
          </Routes>
        </BrowserRouter>
        )

    }
    return (
        <BrowserRoutes/>
    )
}