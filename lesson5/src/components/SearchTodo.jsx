import React, { useState } from "react";

const SearchTodo = ({ onSearch, onShowAll }) => {
  const [searchId, setSearchId] = useState("");

  return (
    <div className="searchTodo">
      <input
        type="text"
        placeholder="Search by ID"
        value={searchId}
        onChange={(e) => setSearchId(e.target.value)}
      />
      <button
        className="btnSearch"
        onClick={() => {
          onSearch(searchId);
          setSearchId("");
        }}
      >
        Search
      </button>
      <button onClick={onShowAll}>Show All</button>
    </div>
  );
};

export default SearchTodo;
