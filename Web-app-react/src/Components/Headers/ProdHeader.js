import React, { useState } from 'react'
import { useHistory, useLocation } from 'react-router'


const ProdHeader = props => {
    const [hover,setHover]=useState(null);
    const location=useLocation();
    const history=useHistory();
    return <div style={{
        width:'100%',
        height:window.innerWidth*.9/(1920/69),
        backgroundColor:'white',
        flexDirection:'row',
        display:'flex',
        justifyContent:'flex-start',
        alignItems:'center',
        paddingLeft:'5%',
        cursor:'auto'
    }} >
       <a onMouseEnter={()=>setHover('h')} onMouseLeave={()=>setHover(null)} onMouseUpCapture={()=>history.push('/products/unitSales')}  style={{
           width:'6.5%',
           borderBottom:`2.5px solid ${location.pathname === '/products/unitSales'?'#6468DB':'white'}`,
           height:'100%',
           display:'flex',
           justifyContent:'center',
           alignItems:'center'}}
        >
            <text  style={{
                fontFamily:'Segoe UI',
                userSelect:'none',
                color:location.pathname === '/products/unitSales'?'#6468DB':hover === 'h'?'#5054C7':'#797979',
                fontSize:15}}>Unit Sales</text>
        </a>
        <div onMouseUpCapture={()=>history.push('/products/Stocks')} onMouseEnter={()=>setHover('pd')} onMouseLeave={()=>setHover(null)} style={{
           width:'6.5%',
           marginLeft:2,
           borderBottom:`2.5px solid ${location.pathname === '/products/Stocks' || location.pathname === '/products/allotStocks'
            ?'#6468DB':'white'}`,
           height:'100%',
           display:'flex',
           justifyContent:'center',
           alignItems:'center'}}
        >
            <text style={{
                fontFamily:'Segoe UI',
                userSelect:'none',
                color:location.pathname === '/products/Stocks'||location.pathname === '/products/allotStocks'?'#6468DB':hover === 'pd'?'#5054C7':'#797979',
                fontSize:15}}>Stocks</text>
        </div>
        
    </div>
}

export default ProdHeader