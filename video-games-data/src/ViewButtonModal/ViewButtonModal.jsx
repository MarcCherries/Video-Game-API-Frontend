import React, { useEffect, useState } from 'react';
import "./ViewButtonModal.css"
import Chart from 'react-google-charts';

const ViewButtonModal = (props) => {
    const [platform, setPlatform] = useState()
    const [chart, setChart] = useState(true)
    const [chartb, setChartb] = useState(false)



    function handleClick(e){
        e.preventDefault()
        if (chart){
        setChart(false)
        setChartb(true)
        }
        else{
            setChart(true)
            setChartb(false)
        }
        let byConsole = props.searchDisplay.filter((item)=>{
            if (item.name == props.game.name)
            return true
        })
        setPlatform(byConsole)

    }
if (!props.modal){
    return null
}



function generateChartData(){


 const data = [
    ["Element", "Density", { role: "style" }],
    ["Europe Sales", props.game.europeSales, "red"],
    ["Japan Sales", props.game.japanSales, "blue"],
    ["North America Sales", props.game.northAmericaSales, "green"],
    ["Other Sales", props.game.otherSales, "yellow"],
 
  ];


  return data
}
function generateChartDatab(){

      
    let consoleSales = platform.map((item) =>{
        return [item.platform, item.globalSales, "blue"]
    })
    

  
   

 const data = [
    ["Element", "Density", { role: "style" }],
    ...consoleSales
  ];


  return data
}
    return ( 
        <div>
        <div className='modal'>
       
            <div className='modal-window'>
                <button type="sumbit" onClick={handleClick}>Toggle Charts</button>
                <h3>{props.game.name}</h3> <span>Platform: {props.game.platform}</span>
                <h3>Total Sales Since 2013</h3>
                {chart &&
            <Chart chartType="ColumnChart" width="100%" height="400px" data={generateChartData()} />
            }
                 {chartb &&
            <Chart chartType="ColumnChart" width="100%" height="400px" data={generateChartDatab()} />
            }
             </div>
           
            <span onClick={props.onClose} className="close">&times;</span>
           
           
        </div>
        </div>
     );
}
 
export default ViewButtonModal;