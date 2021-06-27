import React, { useState } from 'react'
import Sli from '../Assets/sli_whi.png'
const CategoryButton = props => {
    const [Category,setCategory]=useState(props.category);
    const [btnShow,setbtnShow]=useState(false);
    const data=props.data;
    const Wwidth = window.innerWidth;
    const Wheight = window.innerHeight;
    const [categoryHover,setcategoryHover]=useState(null)
    return <div style={{
        flexDirection:'column',
        display:'flex',
        marginTop:'10%'
        }}>
    <div style={{...props.style,
        
        borderRadius:5,
        backgroundColor:'#376BF0',
        flexDirection:'row',
        alignItems:'center',
        boxShadow:"0px 0.5px 3px #9E9E9E",
        justifyContent:'space-around',
        display:'flex',padding:10}}>
            <div style={{width:'60%',justifyContent:'center',alignItems:'center',display:'flex'}}>
            <text style={{userSelect:'none',fontFamily:'Segoe UI ',color:'white',fontSize:14}}>
                {Category?Category:props.title}</text>
            </div>
            <div
            onMouseUpCapture={()=>setbtnShow(state=>!state)}
            style={{
                width:Wwidth*0.8/(1920/30),
                height:Wwidth*0.8/(1920/30),
                alignItems:'center',
                justifyContent:'center',
                display:'flex',
                padding:2
            }}>
                <img  src={Sli} style={{width:'100%',height:'100%',transform:!btnShow ?"rotate(-90deg)":"rotate(90deg)"}} />

            </div>
    </div>
    <div style={{
        visibility:btnShow?'visible':'hidden',
        width:'100%',
        height:'50%',
        borderRadius:10,
        boxShadow:"0px 0.5px 3px #9E9E9E",
        backgroundColor:'white',
        flexDirection:'column',
        alignItems:'center',
        overflowX:'hidden',
        overflowY:'auto',
        zIndex:1,
        transition:'linear',
        transitionDuration:'0s',
        justifyContent:'flex-start',
        display:'flex'}}>
            {data.map(item=>
            <div 
            onBlur={()=>setbtnShow(false)}
            onMouseEnter={()=>setcategoryHover(item)}
            onMouseLeave={()=>setcategoryHover(null)}
            onMouseUpCapture={()=>{setCategory(item);setbtnShow(false);props.setCategory(item)}}
            style={{
                width:'100%',
                backgroundColor:Category === item ?'#E3DFDF':categoryHover === item ?'#F5F3F3':null,
                justifyContent:'center',
                alignItems:'center',
                padding:5}}>
                <text  style={{userSelect:'none',fontFamily:'Segoe UI',color:'#707070',fontSize:13,marginLeft:'5%'}}>
                    {item.category_name}</text>
            </div>)}
    </div>            
    </div>
}

export default CategoryButton