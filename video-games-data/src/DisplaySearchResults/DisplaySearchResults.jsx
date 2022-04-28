import React, { Fragment, useState } from 'react';
import ViewButtonModal from '../ViewButtonModal/ViewButtonModal';
import "./DisplaySearchResults.css"
const DisplaySearchResults = (props) => {
   const [modal, setModal] = useState(false);
   const [currentGame, setCurrentGame] = useState();

   function handleView(e){
       e.preventDefault();
     
     
       

   }
   console.log(currentGame)
  
   
    return ( 
        <div>
            <div className="sticky">
            <p className='results'>Total Results: {props.searchDisplay && props.searchDisplay.length}</p>

            {currentGame &&
                        <button className="game-chart" type ="submit" onClick={()=>setModal(true)}>Chart For {currentGame.name}</button>
                        
            }

            </div>
        <table className='results-headers'>
        <tr>
            <th className="name-header title" >TITLE</th>
            <th className="platform-header platform">PLATFORM</th>
            <th className="publisher-header publisher">PUBLISHER</th>
            <th className="genre-header genre">GENRE</th>
            <th className="year-header year">YEAR</th>
          
        </tr>
        </table>
      
        <div>
            {props.searchDisplay && props.searchDisplay.map((game) =>{
            return(
                <div>
                <table className='results-table'>
                        <tr>  
                            <td className='title' >{game.name} </td>
                            <td className="platform">{game.platform}</td>
                            <td className="publisher">{game.publisher}</td>
                            <td className="genre">{game.genre}</td>
                            <td className="year">{game.year}</td>
                            </tr>
                            <button type="submit"   onClick={()=>setCurrentGame(game)}>Generate Chart</button>
                          
               
                            <ViewButtonModal modal={modal} onClose={() =>setModal(false)} game={currentGame} handleView={props.handleView} searchDisplay={props.searchDisplay} />
           
                                    
                           
                      
                </table>
                </div>
            )})}
        </div>
        </div>
     );
}
export default DisplaySearchResults;