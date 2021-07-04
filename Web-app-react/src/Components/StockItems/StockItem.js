import React, { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateUnits } from '../../store/actions/manufacturer';
import edit from '../../Assets/edit.png'
import ToggleButtonComponent from '../ToggleButton/ToggleButton'
import { useHistory } from 'react-router-dom';
const StockItem = props => {
    const Wwidth = window.innerWidth;
    const Wheight = window.innerHeight;
    const [price,setPrice]=useState(props.stockPrice);
    const [units,setUnits]=useState(props.stockRemain)
    const [toggle,setToggle]=useState(props.stockActive)
    const token=JSON.parse(localStorage.getItem('stateRetail')).token;
    const role=`${JSON.parse(localStorage.getItem('stateRetail')).role}`.toLowerCase();
    const dispatch=useDispatch();
    const history=useHistory();
    
    const set = useCallback(async ()=>{
        console.log('IDD:'+props.prodId)
        props.setContain(false)
        try{
            const result = await dispatch(updateUnits(props.prodId,units,token));
            console.log(result);                    
            props.setContain(true);
        }catch(err){
            props.setContain(true)
            console.log(err);
            window.alert(err.message)
        }
        return ;
    },[dispatch,props,units,token]);
    
    return <div style={{width:'100%',marginBottom:'2%',alignItems:'center',display:'flex',flexDirection:'column'}}>
        
        <div style={{flexDirection:'row',marginTop:'2%',justifyContent:'flex-start',width:'100%',alignItems:'center',display:'flex'}}>
    <div style={{width:'10%',padding:0,alignItems:'center',justifyContent:'center',display:'flex'}}>
        <div style={{
        width:Wwidth*0.8/(1920/85),
        height:Wwidth*0.8/(1920/85),
        justifyContent:'center',
        alignItems:'center',
        boxShadow:"0px 1px 3px #9E9E9E",
        display:'flex'}}>
            <img src={props.src} style={{width:'100%',height:'100%'}} />
        </div>
    </div>
    <div style={{width:'20%',padding:2,alignItems:'flex-start',justifyContent:'flex-start',flexDirection:'column',display:'flex'}}>
    <text style={{fontFamily:'Segoe UI Semibold',fontSize:13,color:'#3E42B5'}}>{props.itemTitle}</text>
    <text style={{fontFamily:'Segoe UI Semibold',fontSize:12,color:'#707070',marginTop:3}}>{props.itemId}</text>
    </div>
    <div style={{width:'25%',backgroundColor:'#F3F3F3', boxShadow:"0px 1px 3px #9E9E9E"
    ,padding:5,alignItems:'center',justifyContent:'space-around',flexDirection:'column',display:'flex'}}>
        <div style={{width:'100%',justifyContent:'space-between',display:'flex',flexDirection:'row'}}>
            <text style={{fontFamily:'Segoe UI Semibold',fontSize:13,color:'#565659',marginTop:3}}>Total Sold</text>
            <text style={{fontFamily:'Segoe UI Semibold',fontSize:13.5,color:'#343434',marginTop:3}}>{props.soldUnits} units</text>
        </div>
        <div style={{width:'100%',justifyContent:'space-evenly',alignItems:'center',display:'flex',flexDirection:'row'}}>
            <text style={{fontFamily:'Segoe UI Semibold',fontSize:13,color:'#565659',marginTop:3}}>Positive</text>
            <text style={{fontFamily:'Segoe UI Semibold',fontSize:13.5,color:'#32E43D',marginTop:3,marginLeft:'2%'}}>{props.soldPositiveCount} %</text>
            <text style={{fontFamily:'Segoe UI Semibold',fontSize:13,color:'#565659',marginTop:3,marginLeft:'5%'}}>Negative</text>
            <text style={{fontFamily:'Segoe UI Semibold',fontSize:13.5,color:'#E72121',marginTop:3,marginLeft:'2%'}}>{props.soldNegativeCount} %</text>
        </div>        
    </div>
    <div style={{width:'15%',marginLeft:'5%',alignItems:'center',justifyContent:'space-around',flexDirection:'row',
    display:'flex',padding:5,backgroundColor:'#F2F2F2',borderRadius:5,
     boxShadow:"0px 1px 3px #9E9E9E"}}>
          <input type='text' value={units} placeholder={props.stockRemain} 
          style={{borderStyle:'none',backgroundColor:'transparent',width:'60%'}} onChange={(e)=>setUnits(e.target.value)} />  
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

    <div style={{width:'15%',marginLeft:'5%',alignItems:'center',justifyContent:'space-around',flexDirection:'row',
    display:'flex',padding:5,backgroundColor:'#F2F2F2',borderRadius:5,
     boxShadow:"0px 1px 3px #9E9E9E"}}>
          <input type='text' value={price} placeholder={props.stockPrice} 
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
    
    <div style={{width:'13%',marginLeft:'5%',alignItems:'center',justifyContent:'space-between',flexDirection:'row',display:'flex'}}>
        <ToggleButtonComponent  value={toggle} onChange={()=>setToggle(!toggle)} />        
        
        <text style={{fontFamily:'Segoe UI Semibold',fontSize:13.5,color:'#3E42B5'}}>{toggle ? 'Active':'Inactive'}</text>

    </div>
    
    </div>
    <div style={{flexDirection:'row',display:'flex',userSelect:'none',justifyContent:'flex-end',width:'100%'}}>
            <div onMouseUpCapture={()=>set()} style={{width:85,height:30,borderRadius:8,backgroundColor:'#376BF0',
            boxShadow:"0px 0.5px 3px #9E9E9E",cursor:'pointer',
            justifyContent:'center',alignItems:'center',display:'flex'}}>
                <text style={{fontFamily:'Segoe UI Semibold',fontSize:12.5,color:'white'}}>Set Units</text>

            </div>
            <div onMouseUpCapture={()=>history.push('/products/allotStocks')}
             style={{width:85,height:30,borderRadius:8,backgroundColor:'#376BF0',marginLeft:'5%',
            boxShadow:"0px 0.5px 3px #9E9E9E",cursor:'pointer',
            justifyContent:'center',alignItems:'center',display:'flex'}}>
                <text style={{fontFamily:'Segoe UI Semibold',fontSize:12.5,color:'white'}}>Allot Units</text>

            </div>
            </div>
    <div style={{width:'100%',height:0.5,backgroundColor:'#DDD6D6',marginTop:'2%'}}></div>
</div>
}

export default StockItem