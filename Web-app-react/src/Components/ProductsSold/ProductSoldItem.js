import React from 'react'

const ProductsSoldItem = props => {
    const Wwidth = window.innerWidth;
    const Wheight = window.innerHeight;
    const colorData={
        Processing:'#CFDBFC',
        Delivered:'#D3FBD2',
        Shipped:'#E1CFF7',
        Cancelled:'#F9C5C5'
    }
    const textColorData={
        Processing:'#376BF0',
        Delivered:'#08DF16',
        Shipped:'#8A48DF',
        Cancelled:'#E72121'
    }
    return <div style={{width:'100%',marginBottom:'2%',alignItems:'center',display:'flex',flexDirection:'column'}}>
        <div style={{flexDirection:'row',justifyContent:'space-evenly',width:'100%',alignItems:'center',display:'flex',width:'100%'}}>
    <div style={{width:'14%',padding:2,alignItems:'center',justifyContent:'center',display:'flex'}}>
        <div style={{
        width:Wwidth*0.8/(1920/85),
        height:Wwidth*0.8/(1920/85),
        justifyContent:'center',
        alignItems:'center',
        boxShadow:"0px 1px 3px #9E9E9E",
        display:'flex'}}>
            <img src={props.src} style={{width:'90%',height:'90%'}} />
        </div>
    </div>
    <div style={{width:'14%',padding:2,alignItems:'center',justifyContent:'center',display:'flex'}}>
    <text style={{fontFamily:'Segoe UI Semibold',fontSize:13.5,color:'#3E42B5'}}>{props.itemCategory}</text>
    </div>
    <div style={{width:'14%',padding:2,alignItems:'center',justifyContent:'center',display:'flex'}}>
    <text style={{fontFamily:'Segoe UI Semibold',fontSize:13.5,color:'#3E42B5'}}>{props.itemDate}</text>
    </div>
    <div style={{width:'14%',padding:2,alignItems:'center',justifyContent:'center',display:'flex'}}>
    <text style={{fontFamily:'Segoe UI Semibold',fontSize:13.5,color:'#3E42B5'}}>{props.itemTime}</text>
    </div>
    <div style={{width:'14%',alignItems:'center',justifyContent:'center',display:'flex'}}>
    <text style={{fontFamily:'Segoe UI Semibold',fontSize:13.5,color:'#3E42B5'}}>{props.buyer}</text>
    </div>
    
    <div style={{width:'14%',padding:2,alignItems:'center',justifyContent:'center',display:'flex'}}>
    <text style={{fontFamily:'Segoe UI Semibold',fontSize:13.5,color:'#3E42B5'}}>{props.itemAddress}</text>  
    </div>    
    <div style={{width:'14%',alignItems:'center',justifyContent:'center',display:'flex'}}>
    <div style={{
        width:Wwidth*0.8/(1920/124),
        borderRadius:Wwidth*0.8/(1920/20),
        height:Wheight*0.85/(1080/40),
        justifyContent:'center',
        backgroundColor:colorData[props.itemStatus],
        alignItems:'center',
        display:'flex',
        padding:3}}>
            <text style={{fontFamily:'Segoe UI Semibold',fontSize:13.5,color:textColorData[props.itemStatus]}}>{props.itemStatus}</text>  
        </div>  
    </div>
    
    </div>
    <div style={{width:'94%',height:0.5,backgroundColor:'#DDD6D6',marginTop:'2%'}}></div>
</div>
}

export default ProductsSoldItem