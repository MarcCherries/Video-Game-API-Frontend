import React, { useState } from 'react';
import "./SearchBar.css"
import "./Images/game-control.png"


const SearchBar = (props) => {
   
    return ( 
        <div>
            <div className="searchbar-container">
            <h3 className='logo'>GAME CHANGER</h3>
        
            <img className="logo-image" src={require("./Images/game-control.png")} width="75" height="75"></img>

<form className='search-container' onSubmit={props.handleSearch} >
    <input className="search-input" onChange={(event)=>props.setSearchItem(event.target.value) } type="text"  >
    </input>
    <button className="submit" type="submit">Submit</button>

</form>
             
        </div>
        </div>
     );
}
 
export default SearchBar;