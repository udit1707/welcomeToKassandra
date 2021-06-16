import React, { useState } from 'react'
import PhoneInput from 'react-phone-input-2'

import 'react-phone-input-2/lib/material.css'

const Signup2 = () => {
    const Wwidth=window.innerWidth*0.95;
    const Wheight=window.innerHeight;
    const [pressed,setPressed]=useState(null);
    const [contact,setContact]=useState(null);
    const [pressed2,setPressed2]=useState('Retailer')
    const [pid,setPid]=useState(null);
    const [ps,setPs]=useState(null);
    const [state,setState]=useState(null);
    console.log(window.innerWidth  + "  "+ window.innerHeight)
    return <div style={{width:'100%',height:'100%',marginTop:'5%'}}>
        <div style={{marginTop:'5%'}}>
        <text style={{userSelect:'none',fontFamily:'Segoe UI',color:'#313030',fontSize:18}}>Contact name*</text>
        </div>
        
        <div style={{width:'100%',marginTop:'2%',flexDirection:'row',display:'flex',justifyContent:'space-between'}}>
            <div style={{width:'48%'}}>
            <input  onBlurCapture={()=>setPressed(null)}
                    id="first"
                    name="first name"
                    placeholder='First name'
                    type="text"
                    onMouseUpCapture={()=>setPressed('First')} 
                    onMouseEnter={()=>setState('First')}
                    onMouseLeave={()=>setState(null)}
                    style={{width:'100%',height:Wheight/(1080/57),outline:'0px',fontFamily:'Segoe UI',padding:3,
                    borderRadius:5,border:`.5px solid ${pressed === 'First' || state === 'First'?'#275473':'#C3C1C1'}`,
                    backgroundColor:'#F2F2F2'}}
                    required
                    // onChange={(e) => {
                    //   setOtp(e.target.value);
                    // }}
                />
            </div>
            <div style={{width:'48%'}}>
            <input  onBlurCapture={()=>setPressed(null)}
                    id="Last"
                    name="Last name"
                    placeholder='Last name'
                    type="text"
                    onMouseUpCapture={()=>setPressed('Last')} 
                    onMouseEnter={()=>setState('Last')}
                    onMouseLeave={()=>setState(null)}
                    style={{width:'100%',height:Wheight/(1080/57),outline:'0px',fontFamily:'Segoe UI',padding:3,
                    borderRadius:5,border:`.5px solid ${pressed === 'Last' || state === 'Last'?'#275473':'#C3C1C1'}`,
                    backgroundColor:'#F2F2F2'}}
                    required
                    // onChange={(e) => {
                    //   setOtp(e.target.value);
                    // }}
                />
                </div>
                </div>
                <div style={{marginTop:'5%'}}>
                <text style={{userSelect:'none',fontFamily:'Segoe UI',color:'#313030',fontSize:18}}>Contact email</text>
                </div>
            
                <input  onBlurCapture={()=>setPressed(null)}
                id="email"
                name="email"
                placeholder='Enter email'
                type="text"
                onMouseUpCapture={()=>setPressed('Email')} 
                onMouseEnter={()=>setState('Email')}
                onMouseLeave={()=>setState(null)}
                style={{width:'100%',height:Wheight/(1080/57),outline:'0px',fontFamily:'Segoe UI',padding:3,marginTop:'2%',
                borderRadius:5,border:`.5px solid ${pressed === 'Email' || state === 'Email'?'#275473':'#C3C1C1'}`,
                backgroundColor:'#F2F2F2'}}
                required
                // onChange={(e) => {
                //   setOtp(e.target.value);
                // }}
              />
              <div style={{marginTop:'5%'}}>
                <text style={{userSelect:'none',fontFamily:'Segoe UI',color:'#313030',fontSize:18}}>Phone</text>
                </div>
              <div style={{width:'100%',marginTop:'3%'}}>
            <PhoneInput specialLabel=''  containerStyle={{padding:3,}} 
            inputStyle={{width:'100%',height:Wheight/(1080/70),backgroundColor:'#F2F2F2'}}
            country={'in'}
            value={contact}
            onChange={contact =>setContact(contact)}
          />
          </div>
        </div>
        {/* <div style={{marginTop:'5%'}}>
        <text style={{userSelect:'none',fontFamily:'Segoe UI',color:'#313030',fontSize:18}}>Contact name</text>
        </div>
        <div style={{width:'100%',marginTop:'2%',flexDirection:'row',display:'flex',justifyContent:'space-between'}}>
            <div style={{width:'45%'}}>
            <input  onBlurCapture={()=>setPressed(null)}
                    id="First"
                    name="First"
                    placeholder='First name'
                    type="text"
                    onMouseUpCapture={()=>setPressed('First')} 
                    onMouseEnter={()=>setState('First')}
                    onMouseLeave={()=>setState(null)}
                    style={{width:'100%',height:Wheight/(1080/57),outline:'0px',fontFamily:'Segoe UI',padding:3,
                    borderRadius:5,border:`.5px solid ${pressed === 'First' || state === 'First'?'#275473':'#C3C1C1'}`,
                    backgroundColor:'#F2F2F2'}}
                    required
                    // onChange={(e) => {
                    //   setOtp(e.target.value);
                    // }}
                />
            </div>
            <div style={{width:'45%'}}>
            <input  onBlurCapture={()=>setPressed(null)}
                    id="Last"
                    name="ds"
                    placeholder='Last name'
                    type="text"
                    onMouseUpCapture={()=>setPressed('Last')} 
                    onMouseEnter={()=>setState('Last')}
                    onMouseLeave={()=>setState(null)}
                    style={{width:'100%',height:Wheight/(1080/57),outline:'0px',fontFamily:'Segoe UI',padding:3,
                    borderRadius:5,border:`.5px solid ${pressed === 'Last' || state === 'Last'?'#275473':'#C3C1C1'}`,
                    backgroundColor:'#F2F2F2'}}
                    required
                    // onChange={(e) => {
                    //   setOtp(e.target.value);
                    // }}
                />
                </div>
        </div> */}
        
        
    }

    export default Signup2