import React from "react";

function SearchBar({ search, onSearch }) {
  return (
    <div className="mb-7">
      <input
        type="text"
        placeholder="Search by author"
        value={search}
        onChange={onSearch}
        className="w-full p-3 border rounded-3xl outline-none focus:ring-2 focus:ring-black-800"
      />
    </div>
  );
}

export default SearchBar;
