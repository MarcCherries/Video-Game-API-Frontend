import React, { Fragment, useState } from 'react';
import ViewButtonModal from '../ViewButtonModal/ViewButtonModal';
import "./DisplaySearchResults.css"
import "./Images/Arrow_Icon_Set_4-512.webp";
const DisplaySearchResults = (props) => {
   const [modal, setModal] = useState(false);
   const [currentGame, setCurrentGame] = useState();


  
   
    return ( 
        <div>
            <div className="sticky">
            <p className='results'>Total Results: {props.searchDisplay && props.searchDisplay.length}</p><img className="arrow-image"src={props.searchDisplay && require("./Images/Arrow_Icon_Set_4-512.webp")} height="45" width="30"></img>
           
            {currentGame &&
                        <button className="game-chart" type ="submit" onClick={()=>setModal(true)}>Charts For {currentGame.name}</button>
                        
            }

</div>
        <table className='results-headers'>
        <tr>
            <th className="name-header" >TITLE</th>
            <th className="platform-header">PLATFORM</th>
            <th className="publisher-header">PUBLISHER</th>
            <th className="genre-header">GENRE</th>
            <th className="year-header">YEAR</th>
          
        </tr>
        </table>
       
      
        <div>
            {props.searchDisplay && props.searchDisplay.map((game) =>{
            return(
                <div className='div-over'>
                <div className='display-container'>
                <table className='results-table'>
                        <tr className='results-row'>  
                            <td className='title' >{game.name} </td>
                            <td className="platform">{game.platform}</td>
                            <td className="publisher">{game.publisher}</td>
                            <td className="genre">{game.genre}</td>
                            <td className="year">{game.year}</td>
                         
                            <button className="generate-button" type="submit"   onClick={()=>setCurrentGame(game)}>Get Charts</button>
                            </tr>
               
                            <ViewButtonModal modal={modal} onClose={() =>setModal(false)} game={currentGame} handleView={props.handleView} searchDisplay={props.searchDisplay} />
           
                                    
                           
                      
                </table>
                </div>
                </div>
            )})}
        </div>
        </div>
     );
}
export default DisplaySearchResults;