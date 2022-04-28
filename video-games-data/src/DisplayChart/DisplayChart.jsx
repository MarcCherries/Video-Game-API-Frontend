import React, { useState } from 'react';
import { Chart } from "react-google-charts";

const DisplayChart = (props) => {

    const [chart, setChart] = useState(true)
    const [chartb, setChartb] = useState(false)

    function handleClick(){
        if(chart){
            setChart(false);
            setChartb(true);
        }
        else{
            setChart(true);
            setChartb(false);
        }
    }

    function generateChartData(){

      
    
    

  
        let dataArrays = props.global.map((item, index) =>{
            return [props.data[index], item, 'blue']
        });
    
     const data = [
        ["Element", "Density", { role: "style" }],
        ...dataArrays
        
      ];
 
      return data
    
    }

    function generateChartDataB(){

      
    
    

  
        let dataArrays = props.global.map((item, index) =>{
            return [props.data[index], item, 'red']
        });
    
     const data = [
        ["Element", "Density", { role: "style" }],
        ...dataArrays
        
      ];
 
      return data
    
    }
    return ( 
        <div>
            { chart &&
    <Chart chartType="ColumnChart" width="100%" height="400px" data={generateChartData()} />
            }
            { chartb &&
    <Chart chartType="ColumnChart" width="100%" height="400px" data={generateChartDataB()} />
            }
            <button type="submit" onClick={handleClick}>Toggle Charts</button>
        </div>

     );
}
 
export default DisplayChart;