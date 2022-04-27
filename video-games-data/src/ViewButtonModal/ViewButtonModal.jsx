import React, { useEffect, useState } from 'react';
import "./ViewButtonModal.css"
import Chart from 'react-google-charts';

const ViewButtonModal = (props) => {
if (!props.modal){
    return null
}


function generateChartData(){

      
    
    

  
   

 const data = [
    ["Element", "Density", { role: "style" }],
    ["Europe Sales", props.game.europeSales, "red"],
    ["Japan Sales", props.game.japanSales, "red"],
    ["North America Sales", props.game.northAmericaSales, "red"],
    ["Other Sales", props.game.otherSales, "red"],
 
  ];


  return data
}
    return ( 
        <div>
        <div className='modal'>
       
            <div className='modal-window'>
            <Chart chartType="ColumnChart" width="100%" height="400px" data={generateChartData()} />
             </div>
           
            <span onClick={props.onClose} className="close">&times;</span>
           
           
        </div>
        </div>
     );
}
 
export default ViewButtonModal;