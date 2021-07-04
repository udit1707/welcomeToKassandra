import React, { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router'
import { logout } from '../../store/actions/auth';
import Loader from 'react-loader-spinner';

const NavHeader = props => {
    const [hover,setHover]=useState(null);
    const location=useLocation();
    const history=useHistory();
    const Wwidth=window.innerWidth;
    const Wheight=window.innerHeight;
    const dispatch=useDispatch();
    const [pressed,setPressed]=useState(false);
    const role=`${JSON.parse(localStorage.getItem('stateRetail')).role}`.toLowerCase();
    const token=JSON.parse(localStorage.getItem('stateRetail')).token;
    console.log('RTTT '+token)
    const logoutPress=useCallback(async()=>{
        setPressed(true)
        try{
            const result = await dispatch(logout(token));
            console.log(result);                    
            setPressed(false);
            history.push('/Login')
        }catch(err){
            setPressed(false)
            console.log(err);
            window.alert(err.message)
        }
        setPressed(false)
    },[setPressed,dispatch]);
    const component = pressed ? <div style={{
        zIndex:10,position:'fixed',backgroundColor:'#F2F2F2',width:Wwidth,height:Wheight,justifyContent:'center',alignItems:'center',display:'flex',flexDirection:'column'}}>
    <Loader
        type="Puff"
        color="#376BF0"        
        height={80}
        width={80}
        //3 secs
    />
    <text style={{fontFamily:'Segoe UI Semibold ',fontSize:20,color:'#275473',marginTop:'3%'}}>Signing off....</text>
    </div>: <div style={{
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
        {role==='retailer'?<div onMouseUpCapture={()=>history.push('/listed')} onMouseEnter={()=>setHover('l')} onMouseLeave={()=>setHover(null)} style={{
           width:'6.5%',
           backgroundColor:location.pathname === '/listed' ?'#6468DB': hover === 'l' ?'#5054C7':'',
           height:'100%',
           display:'flex',
           justifyContent:'center',
           alignItems:'center'}}
        >
            <text style={{fontFamily:'Segoe UI',userSelect:'none',color:'white',fontSize:15}}>Listed</text>
        </div>:null}
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
        <div onMouseUpCapture={()=>logoutPress()} onMouseEnter={()=>setHover('lo')} onMouseLeave={()=>setHover(null)} style={{
           width:'6.5%',
           alignSelf:'flex-end',
           marginLeft:'50%',
           backgroundColor:hover === 'lo'?'#5054C7':'',
           height:'100%',
           display:'flex',
           justifyContent:'center',
           alignItems:'center'}}
        >
            <text style={{fontFamily:'Segoe UI Semibold',letterSpacing:'.9px',userSelect:'none',wordSpacing:'3px',color:'white',fontSize:15}}>Log  Out</text>
        </div>
    </div>
    return component
}

export default NavHeader