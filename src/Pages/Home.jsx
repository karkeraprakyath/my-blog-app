/** @format */

import React, { useState } from "react";
import Search from "../Components/Search";
import BlogList from "../Components/BlogList";
import Navbar from "../Components/Navbar";

function Home() {
  const [selectedTag, setSelectedTag] = useState("All");
  const [search, setSearch] = useState("");

  const [selectedTags, setSelectedTags] = useState([]);

  return (
    <div>
      <Search
        search={search}
        setSearch={setSearch}
        selectedTags={selectedTags}
        setSelectedTags={setSelectedTags}
      />

      <BlogList selectedTags={selectedTags} searchQuery={search} />
    </div>
  );
}
export default Home;
