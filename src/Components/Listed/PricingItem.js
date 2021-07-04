import React, { useCallback, useState } from 'react'
import edit from '../../Assets/edit.png'
import Loader from 'react-loader-spinner'
const PricingItem = props => {
    const [salesValue,setSalesValue]=useState(props.salesValue)
    const [profitExpectation,setProfitExpectation] = useState(props.presentProfit)
    const [contain,setContain]=useState(true)
    const Wwidth = window.innerWidth;
    const Wheight = window.innerHeight;
    const [suggestedPrice,setSuggestedPrice]=useState(0)
    const token=JSON.parse(localStorage.getItem('stateRetail')).token;
    const role=`${JSON.parse(localStorage.getItem('stateRetail')).role}`.toLowerCase();
    const press=useCallback(async ()=>{
        setContain(false)
        try{
            const response=await fetch(`http://welcome-to-kassandra.azurewebsites.net/retailer/price/${props.regionId}/${props.categoryId}/${salesValue}`,{
            method:'GET',
            headers:{
                'Authorization':'Bearer '+token 
            },
            });
            if(!response.ok){
                let errorId= ((await response.json()).error);
                throw new Error('Error in Fetching Data');
            }
            const resData=await response.json();
            console.log()
            setContain(true)
            setSuggestedPrice(parseInt(resData.recommeded_price))
        }catch(err){
            setContain(true)
            console.log(err);
            window.alert(err.message)
        }
    },[props,setSuggestedPrice])
    const component =!contain?
        <div style={{
            width:Wwidth,
            height:Wheight*0.5,
            justifyContent:'center',
            alignItems:'center',display:'flex',flexDirection:'column'}}>
            <Loader
            type="Puff"
            color="#376BF0"        
            height={80}
            width={80}
            //3 secs
        />
        <text style={{fontFamily:'Segoe UI Semibold ',fontSize:20,color:'#275473',marginTop:'3%'}}>Fetching In....</text>
        </div>: <div style={{flexDirection:'column',display:'flex',userSelect:'none'}}>
       
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
                <text style={{color:'#3E42B5',fontFamily:'Segoe UI Semibold',fontSize:13.5}}>{props.salesValue.toFixed(2)} / {props.targetedSales.toFixed(2)}</text>
            </div>
        </div>
        <div style={{width:'14.28%',justifyContent:'center',alignItems:'center',display:'flex'}}>
        <div style={{width:'75%',alignItems:'center',justifyContent:'space-around',flexDirection:'row',
            display:'flex',padding:5,backgroundColor:'#F2F2F2',borderRadius:5,
            boxShadow:"0px 1px 3px #9E9E9E"}}>
          <input type='text' value={salesValue.toFixed(2)} placeholder={`${props.salesValue} units`} 
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
        <text style={{color:'#3E42B5',fontFamily:'Segoe UI Semibold',fontSize:15.5}}>{props.presentProfit.toFixed(2)}</text>
        </div>
        <div style={{width:'14.28%',justifyContent:'center',alignItems:'center',display:'flex'}}>
        <div style={{width:'75%',alignItems:'center',justifyContent:'space-around',flexDirection:'row',
            display:'flex',padding:5,backgroundColor:'#F2F2F2',borderRadius:5,
            boxShadow:"0px 1px 3px #9E9E9E"}}>
          <input type='text' value={profitExpectation.toFixed(2)} placeholder={`${props.presentProfit}`} 
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
                    <text style={{color:'#3E42B5',fontFamily:'Segoe UI Semibold',fontSize:12}}>{props.presentPrice.toFixed(2)}</text>
                    <text style={{color:'#74747C',marginTop:3,fontFamily:'Segoe UI Semibold',fontSize:12}}>Listed</text>
                    </div>
                    </div>

                    <div style={{flexDirection:'row',display:'flex'}}>
                        <div style={{width:Wwidth*0.012,height:Wwidth*0.012,borderRadius:Wwidth*0.012,backgroundColor:'#B1B1B1'}}></div>
                    <div style={{flexDirection:'column',display:'flex',marginLeft:'1%'}}>
                    <text style={{color:'#3E42B5',fontFamily:'Segoe UI Semibold',fontSize:12}}>{props.retailPrice.toFixed(2)}</text>
                    <text style={{color:'#74747C',marginTop:3,fontFamily:'Segoe UI Semibold',fontSize:12}}>MRP</text>
                    </div>
                    </div>

                </div>                
            </div>
        </div>
        <div style={{width:'18%',justifyContent:'center',alignItems:'center',display:'flex'}}>
            <div style={{width:'90%',boxShadow:"1px 1px 3px #9E9E9E",padding:'10px 15px',flexDirection:'column',alignItems:'center',display:'flex',borderRadius:15,backgroundColor:'#F2F2F2'}}>
                
            <div style={{width:Wwidth*0.13,borderRadius:Wwidth*0.095,height:Wheight*0.012,backgroundColor:'#B1B1B1'}}>
                   {suggestedPrice<props.presentPrice? <div style={{
                        width:Wwidth*0.095*props.presentPrice/props.retailPrice,
                        borderRadius:Wwidth*0.095,
                        height:Wheight*0.012,
                        backgroundColor:'#925EF7'}}>
                            <div style={{
                        width:Wwidth*0.095*suggestedPrice/props.retailPrice,
                        borderRadius:Wwidth*0.095,
                        height:Wheight*0.012,
                        backgroundColor:'#F0A637'}}>
                    </div>
                    </div>:<div style={{
                        width:Wwidth*0.095*suggestedPrice/props.retailPrice,
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
                    <text style={{color:'#3E42B5',fontFamily:'Segoe UI Semibold',fontSize:12}}>{suggestedPrice.toFixed(2)}</text>
                    <text style={{color:'#74747C',marginTop:3,fontFamily:'Segoe UI Semibold',fontSize:12}}>Suggesting</text>
                    </div>
                    </div>
                    
                    <div style={{flexDirection:'row',display:'flex'}}>
                        <div style={{width:Wwidth*0.012,height:Wwidth*0.012,borderRadius:Wwidth*0.012,backgroundColor:'#925EF7'}}></div>
                    <div style={{flexDirection:'column',display:'flex',marginLeft:'1%'}}>
                    <text style={{color:'#3E42B5',fontFamily:'Segoe UI Semibold',fontSize:12}}>{props.presentPrice.toFixed(2)}</text>
                    <text style={{color:'#74747C',marginTop:3,fontFamily:'Segoe UI Semibold',fontSize:12}}>Listed</text>
                    </div>
                    </div>

                    <div style={{flexDirection:'row',display:'flex'}}>
                        <div style={{width:Wwidth*0.012,height:Wwidth*0.012,borderRadius:Wwidth*0.012,backgroundColor:'#B1B1B1'}}></div>
                    <div style={{flexDirection:'column',display:'flex',marginLeft:'1%'}}>
                    <text style={{color:'#3E42B5',fontFamily:'Segoe UI Semibold',fontSize:12}}>{props.retailPrice.toFixed(2)}</text>
                    <text style={{color:'#74747C',marginTop:3,fontFamily:'Segoe UI Semibold',fontSize:12}}>MRP</text>
                    </div>
                    </div>

                </div>
                {suggestedPrice !== 0 ?<div style={{width:'100%',height:Wheight*0.039,marginTop:'5%',padding:'0px 5px',alignItems:'center',display:'flex',borderRadius:5,
                    backgroundColor:suggestedPrice>props.presentPrice?'#DDFCDC':
                    suggestedPrice<props.presentPrice?'#DDFCDC':suggestedPrice === props.presentPrice?'#FDE1CD':null}}>
                        <text style={{color:suggestedPrice>props.presentPrice?'#05990F':
                    suggestedPrice<props.presentPrice?'#05990F':
                    suggestedPrice === props.presentPrice?'#FF1717':null,
                    fontFamily:'Segoe UI Semibold',fontSize:12}}>
                    {suggestedPrice>props.presentPrice?`Increase by ${(((suggestedPrice/props.presentPrice)-1)*100).toFixed(2)} %`:
                    suggestedPrice<props.presentPrice?`Decrease by ${((1-(suggestedPrice/props.presentPrice))*100).toFixed(2)} %`:
                    suggestedPrice === props.presentPrice?`Keep constant`:null}
                </text>
                </div>:<div style={{
                    width:'100%',
                    height:Wheight*0.039,
                    marginTop:'5%',
                    padding:'0px 5px',
                    alignItems:'center',
                    display:'flex',borderRadius:5,
                    backgroundColor: '#DDFCDC'}}>
                    <text style={{color:'#05990F',fontSize:13,fontFamily:'Segoe UI Semibold'}}> Press Predict </text>
                    </div>}
                
            </div>
            
        </div>
        
    </div>
    <div style={{width:'95%',justifyContent:'flex-end',display:'flex',paddingRight:5,marginTop:10}}>
        <div onMouseUpCapture={()=>press()} style={{
            width:'10%',
            padding:8,
            borderRadius:10,
            cursor:'pointer',
            backgroundColor:'#376BF0', 
            boxShadow:"2px 2px 5px #9E9E9E",
            justifyContent:'center',
            alignItems:'center',
            display:'flex'}}>
                <text style={{color:'white',fontSize:15,letterSpacing:'1px',fontFamily:'Segoe UI Semibold'}}>Predict</text>
                </div>
        </div>
    <div style={{width:'100%',height:0.5,backgroundColor:'#DDD6D6',marginTop:'2%'}}></div>
    </div>

    return component
}

export default PricingItem;