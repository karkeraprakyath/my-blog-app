/** @format */

import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import PostPage from "./Components/PostPage";

function App() {
  return (
    <BrowserRouter basename="/my-blog-app">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/post/:id' element={<PostPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
