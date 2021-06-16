import React from 'react'
import {Line ,Doughnut} from 'react-chartjs-2';


const state = {
  labels: ['January', 'February', 'March',
           'April', 'May','January', 'February', 'March',
           'April', 'May','January', 'February', 'March',
           'April', 'May','January', 'February', 'March',
           'April', 'May','January', 'February', 'March',
           'April', 'May','January', 'February', 'March',
           'April', 'May','January', 'February', 'March',
           'April', 'May','January', 'February', 'March',
           'April', 'May',],
  datasets: [
    {
      label: 'Rainfall',
      backgroundColor: '#3E42B5',
      borderColor: '#3E42B5',
      borderWidth: 1,
      data: [65, 70, 80, 15, 69,150, 85, 26, 49, 78,110, 123, 110, 89, 74,111, 114, 23, 81, 56,65, 70, 80, 81, 56,65, 70, 80, 81, 56,65, 70, 80, 81, 56]
    }
  ]
}



const Sales = props => {
    const Wwidth=window.innerWidth;
    const Wheight=window.innerHeight;
    return <div style={{
        width:Wwidth*0.9/(1920/1350),
        height:Wheight/(1080/500),
        backgroundColor:'white',
        borderRadius:Wwidth/(1920/20),
        paddingLeft:30,
        paddingTop:20,
        paddingBottom:10,
        boxShadow:"0px 2px 4px #9E9E9E",
        
    }}>
        <text style={{color:'#3E42B5',fontSize:18,fontFamily:'Segoe UI Semibold'}}>Sales Summary</text>
        <div style={{width:'95%',height:'90%'}}>
            <Line  width='100%' height='40%'
            style={{}}draggable={true}
          data={state}
          options={{
              responsive:true,
              maintainAspectRatio:false,
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20,
              position:'left',
              color:'#3E42B5'
            },
            legend:{
              display:false,
              position:'right'
            }
          }}
        />
        </div>
        
    </div>;
}

export default Sales;