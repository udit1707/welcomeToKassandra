import React, { useState } from 'react'
import edit from '../../Assets/edit.png'

const PricingItem = props => {
    const [salesValue,setSalesValue]=useState(props.salesValue)
    const [profitExpectation,setProfitExpectation] = useState(props.presentProfit)
    const Wwidth = window.innerWidth;
    const Wheight = window.innerHeight;

    return <div style={{flexDirection:'column',display:'flex'}}>
        <div style={{width:'100%',flexDirection:'row',display:'flex'}}>
        <div style={{width:'14.28%',justifyContent:'center',alignItems:'center',display:'flex'}}>
            <div style={{width:'60%',boxShadow:"1px 1px 3px #9E9E9E",height:Wheight*0.04,padding:2,justifyContent:'center',alignItems:'center',display:'flex',backgroundColor:'#F2F2F2'}}>
                <text style={{color:'#383839',fontFamily:'Segoe UI Semibold',fontSize:13.5}}>{props.platformName}</text>
            </div>

        </div>
        <div style={{width:'14.28%',justifyContent:'center',alignItems:'center',display:'flex'}}>
            <div style={{width:'90%',flexDirection:'column',display:'flex',alignItems:'center'}}>
                <div style={{width:Wwidth*0.095,borderRadius:Wwidth*0.095,height:Wheight*0.012,backgroundColor:'#B1B1B1'}}>
                    <div style={{
                        width:Wwidth*0.095*props.salesValue/props.targetedSales,
                        borderRadius:Wwidth*0.095,
                        zIndex:1,
                        height:Wheight*0.012,
                        backgroundColor:'#4EACEC'}}>
                    </div>
                </div>
                <text style={{color:'#3E42B5',fontFamily:'Segoe UI Semibold',fontSize:13.5}}>{props.salesValue} / {props.targetedSales}</text>
            </div>
        </div>
        <div style={{width:'14.28%',justifyContent:'center',alignItems:'center',display:'flex'}}>
        <div style={{width:'75%',alignItems:'center',justifyContent:'space-around',flexDirection:'row',
            display:'flex',padding:5,backgroundColor:'#F2F2F2',borderRadius:5,
            boxShadow:"0px 1px 3px #9E9E9E"}}>
          <input type='text' value={salesValue} placeholder={`${props.salesValue} units`} 
          style={{borderStyle:'none',backgroundColor:'transparent',width:'60%'}} onChange={(e)=>setSalesValue(e.target.value)} />  
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
        </div>
        <div style={{width:'10%',justifyContent:'center',alignItems:'center',display:'flex'}}>
        <text style={{color:'#3E42B5',fontFamily:'Segoe UI Semibold',fontSize:15.5}}>{props.presentProfit}</text>
        </div>
        <div style={{width:'14.28%',justifyContent:'center',alignItems:'center',display:'flex'}}>
        <div style={{width:'75%',alignItems:'center',justifyContent:'space-around',flexDirection:'row',
            display:'flex',padding:5,backgroundColor:'#F2F2F2',borderRadius:5,
            boxShadow:"0px 1px 3px #9E9E9E"}}>
          <input type='text' value={profitExpectation} placeholder={`${props.presentProfit}`} 
          style={{borderStyle:'none',backgroundColor:'transparent',width:'60%'}} onChange={(e)=>setProfitExpectation(e.target.value)} />  
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
        </div>
        <div style={{width:'14.28%',justifyContent:'center',alignItems:'center',display:'flex'}}>
        <div style={{width:'80%',flexDirection:'column',display:'flex',alignItems:'center'}}>
                <div style={{width:Wwidth*0.095,borderRadius:Wwidth*0.095,height:Wheight*0.012,backgroundColor:'#B1B1B1'}}>
                    <div style={{
                        width:Wwidth*0.095*props.presentPrice/props.retailPrice,
                        borderRadius:Wwidth*0.095,
                        height:Wheight*0.012,
                        zIndex:1,
                        backgroundColor:'#925EF7'}}>
                    </div>
                </div>
                <div style={{marginTop:'5%',width:'100%',flexDirection:'row',justifyContent:'space-between',display:'flex'}}>
                    <div style={{flexDirection:'row',display:'flex'}}>
                        <div style={{width:Wwidth*0.012,height:Wwidth*0.012,borderRadius:Wwidth*0.012,backgroundColor:'#925EF7'}}></div>
                    <div style={{flexDirection:'column',display:'flex',marginLeft:'1%'}}>
                    <text style={{color:'#3E42B5',fontFamily:'Segoe UI Semibold',fontSize:12}}>{props.presentPrice}</text>
                    <text style={{color:'#74747C',marginTop:3,fontFamily:'Segoe UI Semibold',fontSize:12}}>Listed</text>
                    </div>
                    </div>

                    <div style={{flexDirection:'row',display:'flex'}}>
                        <div style={{width:Wwidth*0.012,height:Wwidth*0.012,borderRadius:Wwidth*0.012,backgroundColor:'#B1B1B1'}}></div>
                    <div style={{flexDirection:'column',display:'flex',marginLeft:'1%'}}>
                    <text style={{color:'#3E42B5',fontFamily:'Segoe UI Semibold',fontSize:12}}>{props.retailPrice}</text>
                    <text style={{color:'#74747C',marginTop:3,fontFamily:'Segoe UI Semibold',fontSize:12}}>MRP</text>
                    </div>
                    </div>

                </div>                
            </div>
        </div>
        <div style={{width:'18%',justifyContent:'center',alignItems:'center',display:'flex'}}>
            <div style={{width:'90%',boxShadow:"1px 1px 3px #9E9E9E",padding:'10px 15px',flexDirection:'column',alignItems:'center',display:'flex',borderRadius:15,backgroundColor:'#F2F2F2'}}>
                
            <div style={{width:Wwidth*0.13,borderRadius:Wwidth*0.095,height:Wheight*0.012,backgroundColor:'#B1B1B1'}}>
                   {props.suggestedPrice<props.presentPrice? <div style={{
                        width:Wwidth*0.095*props.presentPrice/props.retailPrice,
                        borderRadius:Wwidth*0.095,
                        height:Wheight*0.012,
                        backgroundColor:'#925EF7'}}>
                            <div style={{
                        width:Wwidth*0.095*props.suggestedPrice/props.retailPrice,
                        borderRadius:Wwidth*0.095,
                        height:Wheight*0.012,
                        backgroundColor:'#F0A637'}}>
                    </div>
                    </div>:<div style={{
                        width:Wwidth*0.095*props.suggestedPrice/props.retailPrice,
                        borderRadius:Wwidth*0.095,
                        height:Wheight*0.012,
                        backgroundColor:'#F0A637'}}>
                            <div style={{
                        width:Wwidth*0.095*props.presentPrice/props.retailPrice,
                        borderRadius:Wwidth*0.095,
                        height:Wheight*0.012,
                        backgroundColor:'#925EF7'}}>
                    </div>
                    </div>}
                </div>
                <div style={{marginTop:'5%',width:'100%',flexDirection:'row',justifyContent:'space-between',display:'flex'}}>
                    
                    <div style={{flexDirection:'row',display:'flex'}}>
                        <div style={{width:Wwidth*0.012,height:Wwidth*0.012,borderRadius:Wwidth*0.012,backgroundColor:'#F0A637'}}></div>
                    <div style={{flexDirection:'column',display:'flex',marginLeft:'1%'}}>
                    <text style={{color:'#3E42B5',fontFamily:'Segoe UI Semibold',fontSize:12}}>{props.suggestedPrice}</text>
                    <text style={{color:'#74747C',marginTop:3,fontFamily:'Segoe UI Semibold',fontSize:12}}>Suggesting</text>
                    </div>
                    </div>
                    
                    <div style={{flexDirection:'row',display:'flex'}}>
                        <div style={{width:Wwidth*0.012,height:Wwidth*0.012,borderRadius:Wwidth*0.012,backgroundColor:'#925EF7'}}></div>
                    <div style={{flexDirection:'column',display:'flex',marginLeft:'1%'}}>
                    <text style={{color:'#3E42B5',fontFamily:'Segoe UI Semibold',fontSize:12}}>{props.presentPrice}</text>
                    <text style={{color:'#74747C',marginTop:3,fontFamily:'Segoe UI Semibold',fontSize:12}}>Listed</text>
                    </div>
                    </div>

                    <div style={{flexDirection:'row',display:'flex'}}>
                        <div style={{width:Wwidth*0.012,height:Wwidth*0.012,borderRadius:Wwidth*0.012,backgroundColor:'#B1B1B1'}}></div>
                    <div style={{flexDirection:'column',display:'flex',marginLeft:'1%'}}>
                    <text style={{color:'#3E42B5',fontFamily:'Segoe UI Semibold',fontSize:12}}>{props.retailPrice}</text>
                    <text style={{color:'#74747C',marginTop:3,fontFamily:'Segoe UI Semibold',fontSize:12}}>MRP</text>
                    </div>
                    </div>

                </div>
                <div style={{width:'100%',height:Wheight*0.039,marginTop:'5%',padding:'0px 5px',alignItems:'center',display:'flex',borderRadius:5,
                    backgroundColor:props.suggestedPrice>props.presentPrice?'#DDFCDC':
                    props.suggestedPrice<props.presentPrice?'#DDFCDC':props.suggestedPrice === props.presentPrice?'#FDE1CD':null}}>
                        <text style={{color:props.suggestedPrice>props.presentPrice?'#05990F':
                    props.suggestedPrice<props.presentPrice?'#05990F':
                    props.suggestedPrice === props.presentPrice?'#FF1717':null,
                    fontFamily:'Segoe UI Semibold',fontSize:12}}>
                    {props.suggestedPrice>props.presentPrice?`Increase by ${(((props.suggestedPrice/props.presentPrice)-1)*100).toFixed(2)} %`:
                    props.suggestedPrice<props.presentPrice?`Decrease by ${((1-(props.suggestedPrice/props.presentPrice))*100).toFixed(2)} %`:
                    props.suggestedPrice === props.presentPrice?`Keep constant`:null}
                </text>
                </div>
                
            </div>
            
        </div>
        
    </div>
    <div style={{width:'100%',height:0.5,backgroundColor:'#DDD6D6',marginTop:'2%'}}></div>
    </div>
}

export default PricingItem;