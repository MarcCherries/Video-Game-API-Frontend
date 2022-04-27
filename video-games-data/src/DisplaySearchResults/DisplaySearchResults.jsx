import React, { Fragment, useState } from 'react';
import ViewButtonModal from '../ViewButtonModal/ViewButtonModal';
import "./DisplaySearchResults.css"
const DisplaySearchResults = (props) => {
   const [modal, setModal] = useState(false);
   const [currentGame, setCurrentGame] = useState("The Legend of Zelda: Twilight Princess");

   function handleView(e){
       e.preventDefault();
     
       let game = props.searchDisplay.filter((item)=>{
           if (item.name == currentGame){
              
               return true
           }
           setCurrentGame(game)
           

       })
       

   }
   console.log(currentGame)
   console.log(modal)

    return ( 
        <div>
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
                            <button type="submit"   onClick={()=>setCurrentGame(game)}>View Charts</button>
                            <button type ="submit" onClick={()=>setModal(true)}></button>
                            <ViewButtonModal modal={modal} onClose={() =>setModal(false)} game={currentGame} handleView={props.handleView}/>
           
                                    
                           
                      
                </table>
                </div>
            )})}
        </div>
        </div>
     );
}
export default DisplaySearchResults;