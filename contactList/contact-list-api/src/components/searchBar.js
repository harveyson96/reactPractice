import React from "react";
import { useState } from "react";
const SearchBar = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="sumbit" onClick={() => props.handleSearch(searchTerm)}>
        Filter
      </button>
    </>
  );
};

export default SearchBar;
