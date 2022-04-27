import React, { Fragment, useState } from 'react';
import "./DisplaySearchResults.css"
const DisplaySearchResults = (props) => {
    return ( 
        <div>
        <table className='results-headers'>
        <tr>
            <th className="name-header" >NAME</th>
            <th className="year-header">YEAR</th>
            <th className="publisher-header">PUBLISHER</th>
            <th className="genre-header">GENRE</th>
            <th className="rank-header">RANK</th>
          
        </tr>
        </table>
        <div>
            {props.searchDisplay && props.searchDisplay.map((game) =>{
            return(
                <div>
                <table className='results-table'>
                        <tr>
                            
                            <td className='game-name' >{game.name} 

                            </td>
                            <td className="game-year">{game.year}</td>
                            <td className="game-publisher">{game.publisher}</td>
                            <td className="game-genre">{game.genre}</td>
                            <td className="game-rank">{game.rank}</td>
                                    
                           
                        </tr>
                </table>
                </div>
            )})}
        </div>
        </div>
     );
}
export default DisplaySearchResults;