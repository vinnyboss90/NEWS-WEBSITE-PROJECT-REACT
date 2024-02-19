import React, { useState } from "react";

function Search({ setSearchTerm }) {
  const [inputValue, setInputValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setSearchTerm(inputValue);
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="Search News"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type onClick="submit">🔍</button>
    </form>
  );
}

export default Search;







