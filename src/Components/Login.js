import React, { useState } from 'react'

const Login = () => {
    const Wwidth=window.innerWidth*0.95;
    const Wheight=window.innerHeight;
    const [pressed,setPressed]=useState(null);
    const [pid,setPid]=useState(null);
    const [ps,setPs]=useState(null);
    const [state,setState]=useState(null);
    console.log(window.innerWidth  + "  "+ window.innerHeight)
    return <div style={{width:'100%',height:'100%',marginTop:'5%'}}>
        <text style={{userSelect:'none',fontFamily:'Segoe UI',color:'#313030',fontSize:18}}>Kassandra Portal Id</text>
        {/* <div onMouseUpCapture={()=>setPressed('PortalId')} 
            onMouseEnter={()=>setState('PortalId')}
            onMouseLeave={()=>setState(null)} style={{width:'100%',height:Wheight/(1080/57),
            borderRadius:5,border:`1.5px solid ${pressed === 'PortalId' || state === 'PortalId'?'#275473':'#C3C1C1'}`,
            backgroundColor:'#F2F2F2',marginTop:'5%',marginBottom:'7%'}}> */}
                <input
                id="PortalId"
                name="PortalId"
                placeholder='Enter Portal Id'
                type="text"
                onMouseUpCapture={()=>setPressed('PortalId')} 
                onMouseEnter={()=>setState('PortalId')}
                onMouseLeave={()=>setState(null)}
                style={{width:'100%',height:Wheight/(1080/57),outline:'0px',padding:3,
                borderRadius:5,border:`1px solid ${pressed === 'PortalId' || state === 'PortalId'?'#275473':'#C3C1C1'}`,
                backgroundColor:'#F2F2F2',marginTop:'5%',marginBottom:'7%'}}
                required
                // onChange={(e) => {
                //   setOtp(e.target.value);
                // }}
              />
        
        <text style={{userSelect:'none',fontFamily:'Segoe UI',color:'#313030',fontSize:18,marginTop:'5%'}}>Password</text>
        <input
                id="Password"
                name="Password"
                placeholder='Enter Password'
                type="password"
                onMouseUpCapture={()=>setPressed('Psd')} 
                onMouseEnter={()=>setState('Psd')}
                onMouseLeave={()=>setState(null)}
                style={{width:'100%',height:Wheight/(1080/57),outline:'0px',padding:3,
                borderRadius:5,border:`1px solid ${pressed === 'Psd' || state === 'Psd'?'#275473':'#C3C1C1'}`,
                backgroundColor:'#F2F2F2',marginTop:'5%'}}
                required
                // onChange={(e) => {
                //   setOtp(e.target.value);
                // }}
              />
        <div style={{width:'100%',flexDirection:'row',marginTop:'2%',display:'flex',overflow:'hidden',justifyContent:'space-between',alignItems:'center'}}>
            <div style={{flexDirection:'row',width:'50%',display:'flex',alignItems:'center'}}>
                <div style={{width:10,height:10,backgroundColor:'#FFFFFF',border:'1px solid #707070'}}>
            </div>
            <text style={{fontFamily:'Segoe UI Semibold',fontSize:14,color:'#656565',marginLeft:'5%'}}>Remember</text>
            </div>
            <text style={{fontFamily:'Segoe UI Semibold',fontSize:14,color:'#656565'}}>Forgot Password</text>
        </div>
        </div>
    }

    export default Login