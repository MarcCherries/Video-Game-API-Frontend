import React, { useState } from 'react';
import "./SearchBar.css"
import "./Images/game-control.png"


const SearchBar = (props) => {
   
    return ( 
        <div>
            <div className="search-container">
            <h3 className='logo'>GAME CHANGER</h3>

            <img className="image-logo"src={require("./Images/game-control.png")} width="75" height="75"></img>
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