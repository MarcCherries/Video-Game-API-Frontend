import React, { useState } from 'react';

const DisplayTop = (props) => {
    console.log(props.topGames)
    return ( 
        <div>
            <table>
                <thead>Name</thead>
                <thead>Platform</thead>
                <thead>Year</thead>
            
            </table>
            {props.topGames && props.topGames.map((game)=>{
                return(
                    <table>
                        <tr>
                            <td>{game.name}</td>
                            <td>{game.platform}</td>
                            <td>{game.year}</td>
                        </tr>
                    </table>
                )
            })}
        </div>
     );
}
 
export default DisplayTop;