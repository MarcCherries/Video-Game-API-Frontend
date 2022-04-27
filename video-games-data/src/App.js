import SearchBar from "./SearchBar/SearchBar.jsx";
import DisplaySearchResults from "./DisplaySearchResults/DisplaySearchResults.jsx"
import DisplayChart from "./SearchBar/DisplayChart/DisplayChart.jsx";
import Footer from "./Footer/Footer.jsx";
import React, { useState, useEffect } from 'react';
import axios from "axios";



function App() {
  const [searchItem, setSearchItem] = useState();
  const [searchDisplay, setSearchDisplay] = useState();
  const [platformData, setPlatformData] = useState(["PS3", "XOne"]);
  const [globalData, setGlobalData] = useState(["PS3", "XOne"]);

useEffect(()=>{
  const fetchData = async () => {
    try {
      let response = await axios.get("https://localhost:7260/api/Games")
      setPlatformData(response.data)
    } catch (error) {
       console.log(error.message)
    }
  };
  fetchData();
}, []);
console.log(platformData)


useEffect(()=>{
  const fetchGlobalData = async () => {
    try {
      let response = await axios.get("https://localhost:7260/api/Global")
      setGlobalData(response.data)
    } catch (error) {
       console.log(error.message)
    }
  };
  fetchGlobalData();
}, []);
console.log(globalData)

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
  <DisplayChart data={platformData} global={globalData}/>
  <DisplaySearchResults searchDisplay={searchDisplay}/>
  <Footer />
    
    </div>
  );
}

export default App;
