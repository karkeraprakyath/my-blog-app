import React, { useState } from "react";
import Search from "../Components/Search";
import BlogList from "../Components/BlogList";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function Home() {
  const [selectedTag, setSelectedTag] = useState("All");
  const [search, setSearch] = useState("");

  return (
    <div>
      
      <Search
        selectedTag={selectedTag}
        setSelectedTag={setSelectedTag}
        search={search}
        setSearch={setSearch}
      />
      <BlogList selectedTag={selectedTag} searchQuery={search} />
     
    </div>
  );
}
export default Home;
