import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import PostPage from "./Components/PostPage";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <BrowserRouter basename='/my-blog-app'>
      <div className="min-h-screen w-full flex flex-col overflow-x-hidden">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/blog/:id' element={<PostPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
