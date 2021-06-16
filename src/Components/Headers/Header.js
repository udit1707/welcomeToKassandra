import React, { useState } from 'react'
import Back from "../../Assets/back.png"
import Sear from "../../Assets/sear.png"
import Sli from "../../Assets/slider.png"
import Bell from "../../Assets/bell.png"
import Sett from "../../Assets/sett.png"
import User from "../../Assets/dummy.png"
const Header = props =>{
    const [hover,setHover]=useState(false);
    const [selected,setSelected]=useState('Amazon');
    const [platShow,setPLatShow]=useState(false)
    const [hoverPlat,setHoverPlat]=useState(null)
    const Wwidth=window.innerWidth;
    const Wheight=window.innerHeight;
    console.log(window.innerWidth  + "  "+ window.innerHeight)
    return <div style={{
        width:'100%',
        height:(Wwidth)/(1920/122)}}>
        <div style={{
            width:'100%',
            height:'100%',
            backgroundImage:`url(${Back})`,
            flexDirection:'row',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            alignItems:'center',
            display:'flex'
        }}>
            <div style={{width:'10%',height:'100%',display:'flex',flexDirection:'row',
            alignItems:'center',justifyContent:'flex-start',marginLeft:'5%'}}>
            <text style={{userSelect:'none',fontFami5ly:'Segoe UI',color:'white',fontSize:18}}>App name</text>
            </div>
            <div style={{width:'85%',height:'100%',justifyContent:'space-around',flexDirection:'row',
            alignItems:'center',
            display:'flex'}}>
            <div style={{width:'15%',marginRight:'50%',height:'100%',justifyContent:'center',flexDirection:'row',
            alignItems:'center',
            display:'flex'}}>
            <div style={{
                width:Wwidth*0.9/(1920/150),
                height:Wheight*0.9/(1080/55),
                borderRadius:10,
                backgroundColor:'white',
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'space-around',
                display:'flex',padding:5}}>
                    {/* <text style={{userSelect:'none',fontFamily:'Segoe UI',color:'#707070',fontSize:15,marginLeft:'5%'}}>Search...</text> */}
                    <input
                id="Search"
                name="Search"
                placeholder='Search...'
                type="text"
                style={{width:'70%',outline:'0px',border:'0px'  ,padding:3,userSelect:'none',fontFamily:'Segoe UI',color:'#707070',fontSize:14,}}
                required
                // onChange={(e) => {
                //   setOtp(e.target.value);
                // }}
              />
                    <div style={{
                        width:Wwidth*0.9/(1920/30),
                        height:Wwidth*0.9/(1920/30),
                        padding:2
                    }}>
                        <img src={Sear} style={{width:'100%',height:'100%',fill:'yellow'}} />

                    </div>
            </div> 
            </div>
            <div style={{height:'100%',width:'50%',flexDirection:'row',justifyContent:'center',alignItems:'center',display:'flex'}}>          
            <div style={{
                justifyContent:'space-evenly',
                flexDirection:'column',
                display:'flex',
                marginRight:'5%'}}>
            <div style={{
                width:Wwidth*0.85/(1920/163),
                height:Wheight*0.85/(1080/50),
                borderRadius:10,
                backgroundColor:'white',
                flexDirection:'row',
                alignItems:'center',
                position:'absolute',
                justifyContent:'space-around',
                display:'flex',padding:5}}>
                    <div style={{width:'40%'}}>
                    <text style={{userSelect:'none',fontFamily:'Segoe UI',color:'#707070',fontSize:14,marginLeft:'5%'}}>{selected}</text>
                    </div>
                    <div
                    onMouseUpCapture={()=>setPLatShow(state=>!state)}
                    style={{
                        width:Wwidth*0.8/(1920/30),
                        height:Wwidth*0.8/(1920/30),
                        padding:2
                    }}>
                        <img src={Sli} style={{width:'100%',height:'100%',transform:!platShow ?"rotate(180deg)":null}} />

                    </div>
            </div>
            <div style={{
                visibility:platShow?'visible':'hidden',
                width:Wwidth*0.85/(1920/220),
                height:Wheight*0.85/(1080/250),
                borderRadius:10,
                boxShadow:"0px 0.5px 3px #9E9E9E",
                backgroundColor:'white',
                flexDirection:'column',
                alignItems:'center',
                overflowX:'hidden',
                overflowY:'auto',
                zIndex:6,
                marginTop:'130%',
                justifyContent:'flex-start',
                display:'flex'}}>
                    {['Amazon','Ebay','Flipkart','Myntra'].map(item=>
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
                        padding:5}}>
                        <text  style={{userSelect:'none',fontFamily:'Segoe UI',color:'#707070',fontSize:13,marginLeft:'5%'}}>{item}</text>
                    </div>)}
            </div>            
            </div>
            <div style={{
                width:Wwidth*0.8/(1920/59),
                height:Wheight*0.9/(1080/63),
                borderRadius:16,
                backgroundColor:'white',
                flexDirection:'row',
                alignItems:'center',
                marginRight:'5%',
                justifyContent:'center',
                display:'flex'}}>
                 <div style={{
                        width:Wwidth*0.8/(1920/60),
                        height:Wwidth*0.8/(1920/60),
                        padding:2
                    }}>
                        <img src={Bell} style={{width:'100%',height:'100%'}} />

                    </div>
            </div>           
            <div style={{
                width:Wwidth*.8/(1920/59),
                height:Wheight*.9/(1080/63),
                borderRadius:16,
                backgroundColor:'white',
                flexDirection:'row',
                alignItems:'center',
                marginRight:'5%',
                justifyContent:'center',
                display:'flex'}}>
                 <div style={{
                        width:Wwidth*.8/(1920/60),
                        height:Wwidth*.8/(1920/60),
                        padding:2
                    }}>
                        <img src={Sett} style={{width:'100%',height:'100%'}} />

                    </div>
            </div>   
            <div style={{
                width:Wwidth*.8/(1920/70),
                height:Wwidth*.8/(1920/70),
                borderRadius:Wwidth*.8/(1920/70),
                backgroundColor:'white',
                flexDirection:'row',
                alignItems:'center',
                marginLeft:'3%',
                overflow:'hidden',
                justifyContent:'center',
                display:'flex'}}>
                 <div style={{
                        width:Wwidth*.8/(1920/60),
                        height:Wwidth*.8/(1920/60),
                        overflow:'hidden',
                        padding:2
                    }}>
                        <img src={User} style={{width:'100%',height:'100%'}} />

                    </div>
            </div>   
            </div>
            </div>
            </div>      
        </div>

    
    
}

export default Header