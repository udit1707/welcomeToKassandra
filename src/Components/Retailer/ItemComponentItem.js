import React, { useCallback, useEffect, useState } from 'react'
import INDIA_TOPO_JSON from '../AllotStocks/india.topo.json'
import edit from '../../Assets/edit.png'
import { useDispatch } from 'react-redux';

const ItemComponentItem = props => {
    const Wwidth = window.innerWidth;
    const Wheight = window.innerHeight;
    const [contain,setContain]=useState(false);
    const [stock,setStock]=useState(props.stock_count);
    const [price,setPrice]=useState(props.regional_price);
    const dispatch=useDispatch();
    const colorData={
        in:'#CFDBFC',
        out:'#F9C5C5'
    }
    const textColorData={
        in:'#376BF0',
        out:'#E72121'
    }
    const press= useCallback(async()=>{
        try{
            dispatch();
        }catch(err){
            setContain(true);
            window.alert(err.message)
        }
    },[dispatch]);

    

    return <div style={{width:'100%',marginBottom:'2%',alignItems:'center',display:'flex',flexDirection:'column'}}>
        <div style={{flexDirection:'row',justifyContent:'space-evenly',width:'100%',alignItems:'center',display:'flex',width:'100%'}}>
    <div style={{width:'14%',padding:2,alignItems:'center',justifyContent:'center',display:'flex'}}>
    <text style={{fontFamily:'Segoe UI Semibold',fontSize:13.5,color:'#3E42B5'}}>
        {INDIA_TOPO_JSON.objects.india.geometries.find(region=>region.id === props.map_id).properties.name}
    </text>
    </div>
    <div style={{width:'14%',marginLeft:'5%',alignItems:'center',justifyContent:'space-around',flexDirection:'row',
    display:'flex',padding:5,backgroundColor:'#F2F2F2',borderRadius:5,
     boxShadow:"0px 1px 3px #9E9E9E"}}>
          <input type='text' value={stock} placeholder={props.stock_count} 
          style={{borderStyle:'none',backgroundColor:'transparent',width:'60%'}} onChange={(e)=>setStock(e.target.value)} />  
        <div style={{
            width:Wwidth*0.8/(1920/35),
            height:Wwidth*0.8/(1920/35),
            alignItems:'center',
            justifyContent:'center',
            display:'flex',
            padding:2,
            }}>
            <img src={edit} style={{width:'100%',height:'100%'}} />
        </div> 
    </div>
    <div style={{width:'14%',marginLeft:'5%',alignItems:'center',justifyContent:'space-around',flexDirection:'row',
    display:'flex',padding:5,backgroundColor:'#F2F2F2',borderRadius:5,
     boxShadow:"0px 1px 3px #9E9E9E"}}>
          <input type='text' value={price} placeholder={props.regional_price} 
          style={{borderStyle:'none',backgroundColor:'transparent',width:'60%'}} onChange={(e)=>setPrice(e.target.value)} />  
        <div style={{
            width:Wwidth*0.8/(1920/35),
            height:Wwidth*0.8/(1920/35),
            alignItems:'center',
            justifyContent:'center',
            display:'flex',
            padding:2,
            }}>
            <img src={edit} style={{width:'100%',height:'100%'}} />
        </div> 
    </div>
    <div style={{width:'14%',padding:2,alignItems:'center',justifyContent:'center',display:'flex'}}>
    <text style={{fontFamily:'Segoe UI Semibold',fontSize:13.5,color:'#3E42B5'}}>{props.sold_count}</text>
    </div>
    <div style={{width:'14%',alignItems:'center',justifyContent:'center',display:'flex'}}>
    <text style={{fontFamily:'Segoe UI Semibold',fontSize:13.5,color:'#3E42B5'}}>{props.returned_count}</text>
    </div>
    
    <div style={{width:'14%',padding:2,alignItems:'center',justifyContent:'center',display:'flex'}}>
    <text style={{fontFamily:'Segoe UI Semibold',fontSize:13.5,color:'#3E42B5'}}>{props.expired_count}</text>  
    </div>    
    <div style={{width:'14%',alignItems:'center',justifyContent:'center',display:'flex'}}>
    <div style={{
        width:Wwidth*0.8/(1920/124),
        borderRadius:Wwidth*0.8/(1920/20),
        height:Wheight*0.85/(1080/40),
        justifyContent:'center',
        backgroundColor:colorData[props.out_of_stock?'out':'in'],
        alignItems:'center',
        display:'flex',
        padding:3}}>
            <text style={{fontFamily:'Segoe UI Semibold',fontSize:13.5,color:textColorData[props.out_of_stock?'out':'in']}}>
                {props.out_of_stock?'Sold':'In stock'}</text>  
        </div>  
    </div>    
    </div>
    <div style={{flexDirection:'row',display:'flex',userSelect:'none',justifyContent:'flex-end',width:'100%'}}>
            <div onMouseUpCapture={()=>press()} style={{width:85,height:30,borderRadius:8,backgroundColor:'#376BF0',
            boxShadow:"0px 0.5px 3px #9E9E9E",cursor:'pointer',
            justifyContent:'center',alignItems:'center',display:'flex'}}>
                <text style={{fontFamily:'Segoe UI Semibold',fontSize:12.5,color:'white'}}>Set Units</text>

            </div>
            
    </div>
    <div style={{width:'94%',height:0.5,backgroundColor:'#DDD6D6',marginTop:'2%'}}></div>
</div>
}

export default ItemComponentItem