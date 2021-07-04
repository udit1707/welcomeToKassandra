import React from 'react'

const Similar = props => {
    const Wwidth = window.innerWidth;
    const Wheight = window.innerHeight;
    return <div style={{width:'100%',marginBottom:'2%',alignItems:'center',display:'flex',flexDirection:'column'}}>
        <div style={{flexDirection:'row',justifyContent:'flex-start',width:'100%',alignItems:'center',display:'flex'}}>
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
    <div style={{width:'25%',padding:2,alignItems:'flex-start',justifyContent:'center',flexDirection:'column',display:'flex'}}>
    <text style={{fontFamily:'Segoe UI Semibold',fontSize:13,color:'#3E42B5'}}>{props.itemTitle}</text>
    </div>
    <div style={{width:'30%',backgroundColor:'#F3F3F3', boxShadow:"0px 1px 3px #9E9E9E"
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
    <div style={{width:'15%',marginLeft:'10%',padding:2,alignItems:'flex-start',justifyContent:'center',flexDirection:'column',display:'flex'}}>
    <text style={{fontFamily:'Segoe UI Semibold',fontSize:14.5,color:'#3E42B5'}}>{props.price}</text>
    </div>
    <div style={{width:'15%',padding:2,alignItems:'flex-start',justifyContent:'center',flexDirection:'column',display:'flex'}}>
    <text style={{fontFamily:'Segoe UI Semibold',fontSize:14.5,color:'#3E42B5'}}>{props.platformName}</text>
    </div>
    
    </div>
    <div style={{width:'100%',height:0.5,backgroundColor:'#DDD6D6',marginTop:'2%'}}></div>
</div>
}


export default Similar