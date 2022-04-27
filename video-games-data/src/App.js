import SearchBar from "./SearchBar/SearchBar.jsx";
import DisplaySearchResults from "./DisplaySearchResults/DisplaySearchResults.jsx"
import Footer from "./Footer/Footer.jsx";
import React, { useState, useEffect } from 'react';
import axios from "axios";



function App() {
  const [searchItem, setSearchItem] = useState("Zelda");
  const [searchDisplay, setSearchDisplay] = useState();

async function handleSearch(event){
  event.preventDefault();
 
  try {
    
    let response = await axios.get(`https://localhost:7260/api/Games/${searchItem}/`)
    setSearchDisplay(response.data)
    console.log(response.data)
  } catch (error) {
    console.log(error)
  }
 
}





  return (
    <div>
  <SearchBar handleSearch={handleSearch} setSearchItem={setSearchItem}/>
  <DisplaySearchResults searchDisplay={searchDisplay}/>
  <Footer />
    
    </div>
  );
}

export default App;
