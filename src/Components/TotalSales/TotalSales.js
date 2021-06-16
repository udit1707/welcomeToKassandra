import React, { useState } from 'react'
import Sli from "../../Assets/slider.png"
const TotalSales = props => {
    const Wwidth=window.innerWidth*0.95;
    const Wheight=window.innerHeight;
    const [selected,setSelected]=useState('Weekly');
    const [platShow,setPLatShow]=useState(false)
    const [hoverPlat,setHoverPlat]=useState(null)
    return <div style={{width:Wwidth/(1920/408),height:Wheight/(1080/353),backgroundColor:'white',boxShadow:"0px 0.5px 3px #9E9E9E",padding:0,borderRadius:10}}>
        <div style={{flexDirection:'row',width:'100%',display:'flex',height:'10%'}}>
            <div style={{
                height:'100%',
                display:'flex',
                borderBottomRightRadius:5,
                borderBottomLeftRadius:5,
                width:'30%',
                marginRight:'5%',
                marginLeft:'30%',
                justifyContent:'center',
                alignItems:'center',
                boxShadow:"0px 0.5px 3px #9E9E9E",
                display:'flex',
                backgroundColor:'#3D6FEF'}}>
                <text style={{fontFamily:'Segoe UI Semibold',fontSize:14,color:'white'}}>{props.platform}</text>
            </div>
            <div style={{flexDirection:'row',display:'flex',justifyContent:'center',width:'35%'}}>
            <div style={{flexDirection:'column',display:'flex',width:'50%',height:Wheight*.5/(1080/353)}}>
            <div style={{width:'100%'}}>
                <text style={{userSelect:'none',fontFamily:'Segoe UI Semibold',color:'#707070',fontSize:12}}>{selected}</text>
            </div>
            <div style={{
                visibility:platShow?'visible':'hidden',
                width:'100%',
                borderRadius:0,
                paddingBottom:5,
                boxShadow:"0px 0.5px 3px #9E9E9E",
                backgroundColor:'white',
                flexDirection:'column',
                alignItems:'center',
                overflowX:'hidden',
                marginTop:'2%',
                overflowY:'auto',
                zIndex:6,
                justifyContent:'flex-start',
                display:'flex'}}>
                    {['Weekly','Monthly','Daily'].map(item=>
                    <div 
                    onBlur={()=>setPLatShow(false)}
                    onMouseEnter={()=>setHoverPlat(item)}
                    onMouseLeave={()=>setHoverPlat(null)}
                    onMouseUpCapture={()=>{setSelected(item);setPLatShow(false)}}
                    style={{
                        width:'100%',
                        backgroundColor:selected === item ?'#E3DFDF':hoverPlat === item ?'#F5F3F3':null,
                        justifyContent:'center',
                        alignItems:'center',
                        paddingLeft:2}}>
                        <text  style={{userSelect:'none',fontFamily:'Segoe UI',color:'#707070',fontSize:12}}>{item}</text>
                    </div>)}
            </div>  
 
            </div>
            <div
            onMouseUpCapture={()=>setPLatShow(state=>!state)}
            style={{
                width:Wwidth*0.8/(1920/20),
                height:Wwidth*0.8/(1920/20),
                padding:2
            }}>
                <img src={Sli} style={{width:'100%',height:'100%',transform:!platShow ?"rotate(180deg)":null}} />

            </div>
            </div>
            </div>
            <div style={{width:'100%',height:'15%',marginTop:'20%',flexDirection:'row',display:'flex'}}>
                <div style={{width:'70%',height:'100%',backgroundColor:'#376BF0',
                borderTopRightRadius:10,
                borderBottomRightRadius:10,
                boxShadow:"0px 0.5px 3px #9E9E9E",
                flexDirection:'row',display:'flex',alignItems:'center',justifyContent:'space-around',padding:2}}>
                    <div>
                    <text style={{fontFamily:'Segoe UI Semibold',color:'white',fontSize:13.5}}>
                        Total Units Sold
                    </text>
                    </div>
                    <div>
                    <text style={{fontFamily:'Segoe UI Semibold',color:'white',fontSize:13.5}}>
                        {props.totalUnitsSold}
                    </text>
                    </div>
                </div>
                <div style={{marginLeft:'10%'}}>
                    <text style={{fontFamily:'Segoe UI Semibold',color:props.reviewStatusUnits,fontSize:13}}>
                        {props.totalUnitsSoldReview}
                    </text> 
                </div>
            </div>
            <div style={{width:'100%',height:'15%',marginTop:'10%',flexDirection:'row',display:'flex'}}>
                <div style={{width:'50%',height:'100%',backgroundColor:'#FF6600',
                borderTopRightRadius:10,
                borderBottomRightRadius:10,
                boxShadow:"0px 0.5px 3px #9E9E9E",
                flexDirection:'row',display:'flex',alignItems:'center',justifyContent:'space-around',padding:2}}>
                    <div>
                    <text style={{fontFamily:'Segoe UI Semibold',color:'white',fontSize:13.5}}>
                        Total Worth
                    </text>
                    </div>
                    <div>
                    <text style={{fontFamily:'Segoe UI Semibold',color:'white',fontSize:13.5}}>
                        {props.totalWorth}
                    </text>
                    </div>
                </div>
                <div style={{marginLeft:'30%'}}>
                    <text style={{fontFamily:'Segoe UI Semibold',color:props.reviewStatusWorth,fontSize:13}}>
                        {props.totalWorthReview}
                    </text> 
                </div>
            </div>
                   </div>

}

export default TotalSales