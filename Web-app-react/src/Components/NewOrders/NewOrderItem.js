import React, { useState } from 'react'
import Cross from '../../Assets/cross.png'
import Tick from '../../Assets/tick.png'

const NewOrderItem = props => {
    const Wwidth = window.innerWidth;
    const Wheight = window.innerHeight;
    const [hover,setHover]=useState(null)
    
    return <div style={{width:'100%',marginBottom:'2%',alignItems:'center',display:'flex',flexDirection:'column'}}>
        <div style={{flexDirection:'row',justifyContent:'space-evenly',width:'100%',
        alignItems:'center',display:'flex',width:'100%'}}>
    <div style={{width:'20%',padding:3,alignItems:'center',justifyContent:'center',display:'flex'}}>
        <div style={{
        width:Wwidth*.8/(1920/85),
        height:Wwidth*.8/(1920/85),
        justifyContent:'center',
        alignItems:'center',
        boxShadow:"0px 1px 3px #9E9E9E",
        display:'flex'}}>
            <img src={props.src} style={{width:'100%',height:'100%'}} />
        </div>
    </div>
    <div style={{width:'20%',padding:3,alignItems:'center',justifyContent:'center',display:'flex'}}>
    <text style={{fontFamily:'Segoe UI Semibold',fontSize:13.5,color:'#3E42B5'}}>{props.itemCategory}</text>
    </div>
    
    <div style={{width:'20%',alignItems:'center',justifyContent:'center',display:'flex'}}>
    <div  style={{
        width:Wwidth*.8/(1920/70),
        height:Wwidth*.8/(1920/70),
        borderRadius:Wwidth*.8/(1920/70),
        boxShadow:"0px 1px 3px #9E9E9E",
        overflow:'hidden',
        justifyContent:'center',
        alignItems:'center',
        padding:3,
        backgroundColor:'#f2f2f2',
        display:'flex'}}>
            <img src={props.userSrc} style={{width:'90%',height:'90%'}} />
        </div> 
    </div>
    <div style={{width:'20%',padding:3,alignItems:'center',justifyContent:'center',display:'flex'}}>
    <text style={{fontFamily:'Segoe UI Semibold',fontSize:13.5,color:'#3E42B5'}}>{props.itemAddress}</text>  
    </div>    
    <div style={{width:'20%',alignItems:'center',justifyContent:'space-evenly',display:'flex',flexDirection:'row'}}>
    <div onMouseEnter={()=>setHover('cross')} onMouseLeave={()=>setHover(null)} style={{
        width:Wwidth*.8/(1920/35),
        borderRadius:Wwidth*.8/(1920/35),
        height:Wwidth*.8/(1920/35),
        justifyContent:'center',
        boxShadow:"2px 2px 2px #9E9E9E",
        backgroundColor:hover === 'cross' ? '#F5D7D7' : '#EBA9A9',
        alignItems:'center',
        display:'flex',
        padding:3}}>
            <img src={Cross}  style={{width:'90%',height:'90%'}} />
        </div>  
        <div onMouseEnter={()=>setHover('tick')} onMouseLeave={()=>setHover(null)} style={{
        width:Wwidth*.8/(1920/35),
        borderRadius:Wwidth*.8/(1920/35),
        height:Wwidth*.8/(1920/35),
        justifyContent:'center',
        boxShadow:"2px 2px 2px #9E9E9E",
        backgroundColor:hover === 'tick' ? '#E6F8E7' : '#A4ECA9',
        alignItems:'center',
        display:'flex',
        padding:3}}>
            <img src={Tick} style={{width:'90%',height:'90%'}} />
        </div>
    </div>
    </div>
    <div style={{width:'94%',height:0.5,backgroundColor:'#DDD6D6',marginTop:'2%'}}></div>
</div>
}

export default NewOrderItem