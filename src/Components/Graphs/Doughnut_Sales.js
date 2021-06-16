import React from 'react'
import {Line ,Doughnut} from 'react-chartjs-2';






const Doughnut_Sales = props => {
    const state = {
        labels: props.labels,
      datasets: [
        {
          data: [12, 19, 3, 5],
          
          backgroundColor: [
            '#376BF0',
            '#FFBE25',
            '#34378B',
            '#8A48DF',
        ],
          borderColor: [
            '#376BF0',
            '#FFBE25',
            '#34378B',
            '#8A48DF',
        ],
          borderWidth: 1,
          fontSize:20,
        }
      ]
    }
    const Wwidth=window.innerWidth;
    const Wheight=window.innerHeight;
    return <div style={{
        width:Wwidth*0.85/(1920/560),
        padding:15,
        backgroundColor:'white',
        borderRadius:Wwidth*0.85/(1920/20),
        boxShadow:"0px 2px 4px #9E9E9E",
        }}> 
        <div style={{width:'100%',justifyContent:'center',display:'flex'}}>   
        <text style={{color:'#424040',fontSize:16,fontFamily:'Segoe UI Semibold'}}>{props.title}</text>
        </div>
        <div style={{width:'100%',height:'20%',marginTop:'3%',justifyContent:'center',display:'flex'}}>
            <Doughnut  width={Wwidth*0.15} height={Wwidth*0.15}
            style={{}}draggable={true}
          data={state}
          options={{
            cutout: '55%',
              responsive:true,
              maintainAspectRatio:false,
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
        </div>
        
    </div>;
}

export default Doughnut_Sales;