import React, { useState } from 'react';
import { Chart } from "react-google-charts";

const DisplayChart = (props) => {

    function generateChartData(){

      
    
    

  
        let dataArrays = props.global.map((item, index) =>{
            return [props.data[index], item, 'blue']
        });
    
     const data = [
        ["Element", "Density", { role: "style" }],
        ...dataArrays
        
      ];
      console.log(dataArrays)
      console.log(props.global)
      console.log(props.data)
      return data
    
    }
    return ( 
        <div>
    <Chart chartType="ColumnChart" width="100%" height="400px" data={generateChartData()} />

        </div>

     );
}
 
export default DisplayChart;