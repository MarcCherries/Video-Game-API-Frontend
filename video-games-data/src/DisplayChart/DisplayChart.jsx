import React, { useState } from 'react';
import { Chart } from "react-google-charts";
import "./DisplayChart.css"

const DisplayChart = (props) => {

    const [chart, setChart] = useState(true)
    const [chartb, setChartb] = useState(false)
    const [chartc, setChartc] = useState(false)

    function generateChartDataC(){

      
    
    

  
        let dataArrays = props.allGames.map((item, index) =>{
            return [props.platforms[index], item, "blue"]
        });
    
     const data = [
        ["Element", "Number of Titles", { role: "style" }],
        ...dataArrays
        
      ];
 
      return data
    
    }

    function handleClick(){
        if(chart){
            setChart(false);
            setChartb(true);
        }
        else if (chartb){
            setChartb(false)
            setChartc(true)
        }
        else{
            setChart(true);
            setChartc(false);
        }
    }

    function generateChartData(){

      
    
    

  
        let dataArrays = props.global.map((item, index) =>{
            return [props.data[index], item, "#1183CF"]
        });
    
     const data = [
        ["Element", "Sales (Millions USD)", { role: "style" }],
        ...dataArrays
        
      ];
 
      return data
    
    }

    function generateChartDataB(){

      
    
    

    
        let dataArrays = props.allTime.map((item, index) =>{
        
            return [props.platforms[index], item, 'white']
            
          
        });

        console.log(dataArrays)
   

     
     const data = [
        ["Element", "Sales (Millions USD)", { role: "style" }],
        ...dataArrays
        
      ];

   
 
      return data

    }
    var options = {
    "backgroundColor": "#1183CF"
   };
    return ( 
        <div>
              <button className='toggle-button' type="submit" onClick={handleClick}>Toggle</button>
            { chart &&
            <div className='chart-container'>
                         <h3 className="global-chart-heading">GLOBAL SALES SINCE 2013 BY PLATFORM</h3>

    <Chart  className="google-chart" chartType="ColumnChart" width="100%" height="325px" data={generateChartData()}  />
    </div>
            }
      
            { chartb &&
                        <div className='chart-container'>

                        <h3 className="global-chart-heading">TOTAL SALES ALL-TIME BY PLATFORM</h3>

    <Chart className="google-chart"  chartType="ColumnChart" width="100%" height="325px" data={generateChartDataB()} options={options} />
    </div>
            }
            { chartc &&
                        <div className='chart-container'>

                        <h3 className="global-chart-heading">NUMBER OF AVAILABLE TITLES BY PLATFORM</h3>

    <Chart className="google-chart"  chartType="ColumnChart" width="100%" height="325px" data={generateChartDataC()}  />
    </div>
            }
            <div className='placeholder'></div>

            

          
        </div>

     );
}
 
export default DisplayChart;