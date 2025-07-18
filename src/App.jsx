/** @format */

import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import PostPage from "./Components/PostPage";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <BrowserRouter basename="/my-blog-app">
      <Navbar/>
      <Routes>
        
        <Route path='/' element={<Home />} />
         <Route path="/blog/:id" element={<PostPage />} />
      </Routes>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
