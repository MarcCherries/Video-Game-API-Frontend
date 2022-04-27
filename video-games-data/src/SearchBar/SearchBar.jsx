import React, { useState } from 'react';
import "./SearchBar.css"


const SearchBar = (props) => {
   
    return ( 
        <div>
            <div className="search-container">
            <h3>gAME dATA</h3>
<form onSubmit={props.handleSearch} >
    <input onChange={(event)=>props.setSearchItem(event.target.value) } type="text"  >
    </input>
    <button type="submit">Submit</button>

</form>
             
        </div>
        </div>
     );
}
 
export default SearchBar;