import React, { useEffect, useState } from 'react';
import "./ViewButtonModal.css"
import Chart from 'react-google-charts';

const ViewButtonModal = (props) => {
    const [platform, setPlatform] = useState()
    const [chart, setChart] = useState(true)
    const [chartb, setChartb] = useState(false)
    const options ={
        title: "Sales by Platform",
        is3D: true,
        colors: ["#091E57", "blue", "#2F9AD8", "purple", "gray", "light blue", "white"]
        
    
        
    
      }
    const optionsb ={
        title: "Sales by Region",
        is3D: true,
        colors: ["#091E57", "blue", "#2F9AD8", "purple", "white", "gray", "light blue"]
      }



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
    ["Element", "Sales (Millions USD)", { role: "style" }],
    ["Europe Sales", props.game.europeSales, "blue"],
    ["Japan Sales", props.game.japanSales, "blue"],
    ["North America Sales", props.game.northAmericaSales, "blue"],
    ["Other Sales", props.game.otherSales, "#ffffff"],
 
  ];


  return data
}
function generateChartDatab(){

      
    let consoleSales = platform.map((item) =>{
        return [item.platform, item.globalSales, "blue"]
    })
    

  
   

 const data = [
    ["Element", "Sales", { role: "style" }],
    ...consoleSales
  ];




  return data
}
    return ( 
        <div>
        <div className='modal'>
       
            <div className='modal-window'>
                <div className='game-container'>
                <h3 className='modal-game'>{props.game.name}</h3> 
                <button className="submit-modal" type="submit" onClick={handleClick}>Toggle Charts</button>
                </div>
                                
                {chart &&
            <Chart chartType="PieChart" width="100%" height="400px" data={generateChartData()} options={optionsb} />
            }
                 {chartb &&
            <Chart chartType="PieChart" width="100%" height="400px" data={generateChartDatab()} options={options} />
            }
             </div>
           
            <span onClick={props.onClose} className="close">Close&times;</span>
           
           
        </div>
        </div>
     );
}
 
export default ViewButtonModal;