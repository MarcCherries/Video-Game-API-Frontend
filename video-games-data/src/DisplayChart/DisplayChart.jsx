import React, { useState } from 'react';
import { Chart } from "react-google-charts";
import "./DisplayChart.css"

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
            return [props.data[index], item, '#0099f2=']
        });
    
     const data = [
        ["Element", "Sales (in Millions USD)", { role: "style" }],
        ...dataArrays
        
      ];
 
      return data
    
    }

    function generateChartDataB(){

      
    
    

  
        let dataArrays = props.global.map((item, index) =>{
            return [props.data[index], item, '#0307fc']
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
            <div className='chart-container'>
            <h3 className="global-chart-heading">GLOBAL SALES SINCE 2013 BY PLATFORM</h3>
    <Chart  chartType="ColumnChart" width="100%" height="350px" data={generateChartData()} />
    </div>
            }
      
            { chartb &&
                        <div className='chart-container'>

                        <h3 className="global-chart-heading">GLOBAL SALES ALL TIME BY PLATFORM</h3>

    <Chart className="chart-main"chartType="ColumnChart" width="100%" height="350px" data={generateChartDataB()} />
    </div>
            }

            <button className='toggle-button' type="submit" onClick={handleClick}>Toggle Charts</button>
        </div>

     );
}
 
export default DisplayChart;