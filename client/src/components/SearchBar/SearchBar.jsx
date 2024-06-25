import "./SearchBar.scss";

import { useState } from "react";

import React from "react";

const types = ["book", "post"];

const SearchBar = () => {
  const [query, setQuery] = useState({
    type: "book",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const switchType = (val) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };

  return (
    <div className="SearchBar">
      <div className="type">
        {types.map((type) => (
          <button key={type} onClick={() => switchType(type)} className={query.type===type? "active":""} >
            {type}
          </button>
        ))}
      </div>
      <form>
        <input type="text" name="location" placeholder="City Location" className="searchbutton"/>
        <input
          type="number"
          name="minPrice"
          min={0}
          max={1000000}
          placeholder="Min Price"
        />
        <input
          type="number"
          name="maxPrice"
          min={0}
          max={1000000}
          placeholder="Max Price"
        />
        <button>
          <img src="/search.png" alt="" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
