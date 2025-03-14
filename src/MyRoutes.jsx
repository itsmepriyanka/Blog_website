import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs";
import About from "./pages/About";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Login from "./pages/Login";
import Register from "./pages/Register";


const MyRoutes = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default MyRoutes;
