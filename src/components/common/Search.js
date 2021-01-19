import React, { useState } from 'react';

const SearchAppBar = (props) => {
  const [searchInput, setSearchInput] = useState()
  return (
    <div>
      <input type = "text" name="search" onChange={(e)=>props.searchItems(e.target.value)}/>
    </div>
  );
};

export default SearchAppBar;