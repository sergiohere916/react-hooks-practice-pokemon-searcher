import React, { useState } from "react";

function Search({filterPokeList}) {
  
  const initialSearchValue = "";
  const [searchValue, setSearchValue] = useState(initialSearchValue);
  
  function handleChange(e) {
    setSearchValue(() => e.target.value)
    console.log(e.target.value);
    (filterPokeList(e.target.value))
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" value={searchValue} onChange={handleChange}/>
        <i className="search icon"/>
      </div>
    </div>
  );
}

export default Search;
