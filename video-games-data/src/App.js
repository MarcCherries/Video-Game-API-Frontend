import SearchBar from "./SearchBar/SearchBar.jsx";
import DisplaySearchResults from "./DisplaySearchResults/DisplaySearchResults.jsx"
import DisplayChart from "./DisplayChart/DisplayChart.jsx";
import Footer from "./Footer/Footer.jsx";
import React, { useState, useEffect } from 'react';
import axios from "axios";
import DisplayTop from "./DisplayTop/DisplayTop.jsx";



function App() {
  const [searchItem, setSearchItem] = useState();
  const [searchDisplay, setSearchDisplay] = useState();
  const [platformData, setPlatformData] = useState(["PS3", "XOne"]);
  const [globalData, setGlobalData] = useState([
    132.60999999999981,
    2.2699999999999996,
    36.890000000000036,
    189.16000000000025,
    278.0999999999994,
    3.5499999999999945,
    37.95000000000009,
    15.349999999999996,
    64.02000000000001,
    139.91000000000017,
    141.05999999999992
]);
  const [topGames, setTopGames] = useState(["PS3", "XOne"]);

useEffect(()=>{
    const fetchTop = async () => {
      try {
        let response = await axios.get("https://localhost:7260/api/Rank")
        setTopGames(response.data)
      } catch (error) {
         console.log(error.message)
      }
    };
    fetchTop();
  }, []);
  console.log(topGames)

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
