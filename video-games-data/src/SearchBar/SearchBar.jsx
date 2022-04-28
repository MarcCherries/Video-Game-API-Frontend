import React, { useState } from 'react';
import "./SearchBar.css"


const SearchBar = (props) => {
   
    return ( 
        <div>
            <div className="search-container">
            <h3>GAME CHANGER</h3>
<form onSubmit={props.handleSearch} >
    <input className="search-input" onChange={(event)=>props.setSearchItem(event.target.value) } type="text"  >
    </input>
    <button className="submit" type="submit">Submit</button>

</form>
             
        </div>
        </div>
     );
}
 
export default SearchBar;