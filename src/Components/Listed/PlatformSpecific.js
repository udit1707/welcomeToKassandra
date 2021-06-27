import React from 'react'

const PlatformSpecific = props => {
    const Wwidth = window.innerWidth;
    const Wheight = window.innerHeight;
    const colorData={
        increase:'#DDFCDC',
        decrease:'#DDFCDC',
        constant:'#FDE1CD',
    }
    const textColorData={
        increase:'#05990F',
        decrease:'#05990F',
        constant:'#FF1717',
    }
    return <div style={{width:'100%',marginBottom:'2%',alignItems:'center',display:'flex',flexDirection:'column'}}>
        <div style={{flexDirection:'row',justifyContent:'space-evenly',width:'100%',alignItems:'center',display:'flex',width:'100%'}}>
    <div style={{width:'18%',padding:2,alignItems:'center',justifyContent:'center',display:'flex'}}>
        <div style={{
        width:Wwidth*0.04,
        height:Wheight*0.04,
        backgroundColor:'#F2F2F2',
        justifyContent:'center',
        alignItems:'center',
        boxShadow:"0px 1px 3px #9E9E9E",
        display:'flex'}}>
            <text style={{fontFamily:'Segoe UI Semibold',fontSize:13,color:'#383839'}}>{props.platformName}</text>
        </div>
    </div>
    <div style={{width:'18%',padding:2,alignItems:'center',justifyContent:'center',display:'flex'}}>
    <text style={{fontFamily:'Segoe UI Semibold',fontSize:13.5,color:'#3E42B5'}}>{props.totalSales} units</text>
    </div>
    <div style={{width:'18%',padding:2,alignItems:'center',justifyContent:'center',display:'flex'}}>
    <text style={{fontFamily:'Segoe UI Semibold',fontSize:13.5,color:'#3E42B5'}}>{props.totalRevenue}</text>
    </div>
    <div style={{width:'18%',padding:2,alignItems:'center',justifyContent:'center',display:'flex'}}>
    <text style={{fontFamily:'Segoe UI Semibold',fontSize:13.5,color:'#3E42B5'}}>{props.totalProfit}</text>
    </div>
    <div style={{width:'28%',alignItems:'center',justifyContent:'center',display:'flex'}}>
    <div style={{
        width:'90%',
        height:Wheight*0.04,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:Wwidth*0.8/(1920/10),
        boxShadow:"0px 1px 3px #9E9E9E",
        padding:2,
        backgroundColor:colorData[props.platformRecommendStatus],
        display:'flex'}}>
            <text style={{fontFamily:'Segoe UI Semibold',fontSize:13.5,color:textColorData[props.platformRecommendStatus]}}>
                {props.mssg} {props.platformRecommendValue === null ?'':props.platformRecommendValue + ' %'} </text>  
        </div> 
    </div>     
    </div>
    <div style={{width:'94%',height:0.5,backgroundColor:'#DDD6D6',marginTop:'2%'}}></div>
    </div>
}


export default PlatformSpecific