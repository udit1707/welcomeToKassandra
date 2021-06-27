import React, { useState } from 'react'
import { useHistory, useLocation } from 'react-router'


const NavHeader = props => {
    const [hover,setHover]=useState(null);
    const location=useLocation();
    const history=useHistory();
    return <div style={{
        width:'100%',
        height:window.innerWidth*.9/(1920/69),
        backgroundColor:'#3E42B5',
        flexDirection:'row',
        display:'flex',
        justifyContent:'flex-start',
        boxShadow:'3px 3px 5px #9E9E9E',
        alignItems:'center',
        paddingLeft:'5%',
        cursor:'auto'
    }} >
       <a onMouseEnter={()=>setHover('h')} onMouseLeave={()=>setHover(null)} onMouseUpCapture={()=>history.push('/Dashboard')}  style={{
           width:'6.5%',
           backgroundColor:location.pathname === '/Dashboard'?'#6468DB':hover === 'h'?'#5054C7':'',
           height:'100%',
           display:'flex',
           justifyContent:'center',
           alignItems:'center'}}
        >
            <text  style={{fontFamily:'Segoe UI',userSelect:'none',color:'white',fontSize:15}}>Home</text>
        </a>
        <div onMouseUpCapture={()=>history.push('/products/unitSales')} onMouseEnter={()=>setHover('pd')} onMouseLeave={()=>setHover(null)} style={{
           width:'6.5%',
           backgroundColor:location.pathname === '/products'||
           location.pathname === '/products/Stocks'||
           location.pathname === '/products/allotStocks'||
           location.pathname === '/products/unitSales'? '#6468DB':hover === 'pd'?'#5054C7':'',
           height:'100%',
           display:'flex',
           justifyContent:'center',
           alignItems:'center'}}
        >
            <text style={{fontFamily:'Segoe UI',userSelect:'none',color:'white',fontSize:15}}>Products</text>
        </div>
        <div onMouseUpCapture={()=>history.push('/listed')} onMouseEnter={()=>setHover('l')} onMouseLeave={()=>setHover(null)} style={{
           width:'6.5%',
           backgroundColor:location.pathname === '/listed' ?'#6468DB': hover === 'l' ?'#5054C7':'',
           height:'100%',
           display:'flex',
           justifyContent:'center',
           alignItems:'center'}}
        >
            <text style={{fontFamily:'Segoe UI',userSelect:'none',color:'white',fontSize:15}}>Listed</text>
        </div>
        <div onMouseEnter={()=>setHover('pr')} onMouseLeave={()=>setHover(null)} style={{
           width:'6.5%',
           backgroundColor:hover === 'pr' ?'#5054C7':'',
           height:'100%',
           display:'flex',
           justifyContent:'center',
           alignItems:'center'}}
        >
            <text style={{fontFamily:'Segoe UI',userSelect:'none',color:'white',fontSize:15}}>Processed</text>
        </div>
        <div onMouseEnter={()=>setHover('s')} onMouseLeave={()=>setHover(null)} style={{
           width:'6.5%',
           backgroundColor:hover === 's'?'#5054C7':'',
           height:'100%',
           display:'flex',
           justifyContent:'center',
           alignItems:'center'}}
        >
            <text style={{fontFamily:'Segoe UI',userSelect:'none',color:'white',fontSize:15}}>Sold</text>
        </div>
    </div>
}

export default NavHeader