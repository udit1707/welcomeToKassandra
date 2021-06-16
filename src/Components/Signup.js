import React, { useState } from 'react'

const Signup = () => {
    const Wwidth=window.innerWidth*0.95;
    const Wheight=window.innerHeight;
    const [pressed,setPressed]=useState(null);
    const [pressed2,setPressed2]=useState('Retailer')
    const [pid,setPid]=useState(null);
    const [ps,setPs]=useState(null);
    const [state,setState]=useState(null);
    console.log(window.innerWidth  + "  "+ window.innerHeight)
    return <div style={{width:'100%',height:'100%',marginTop:'5%'}}>
        <div style={{width:'100%',flexDirection:'row',height:'8%',
        justifyContent:'space-between',alignItems:'center',display:'flex'}}>
            <div>
            <text style={{userSelect:'none',fontFamily:'Segoe UI',color:'#313030',fontSize:14}}>Choose your business type</text>   
        </div>
        <div style={{width:'50%',height:'100%',flexDirection:'row',display:'flex'}}>
            <div onMouseUpCapture={()=>setPressed2('Retailer')} style={{width:'50%',height:'100%',borderRadius:5,boxShadow:"0px 0.5px 3px #9E9E9E",
            justifyContent:'center',alignItems:'center',display:'flex',backgroundColor:pressed2 === 'Retailer'?'#275473':'#E7E7E7'}}>
                <text style={{userSelect:'none',fontFamily:'Segoe UI Semibold',color:pressed2==='Retailer'?'white':'#313030',fontSize:13.4}}>Retailer</text>   
            </div>
            <div onMouseUpCapture={()=>setPressed2('Manufacturer')} style={{width:'50%',marginLeft:'5%',height:'100%',borderRadius:5,boxShadow:"0px 0.5px 3px #9E9E9E",
            justifyContent:'center',alignItems:'center',display:'flex',backgroundColor:pressed2 === 'Manufacturer'?'#275473':'#E7E7E7'}}>
                <text style={{userSelect:'none',fontFamily:'Segoe UI Semibold',
                color:pressed2==='Manufacturer'?'white':'#313030',fontSize:13}}>Manufacturer</text>   
            </div>
        </div>
        </div>
        <div style={{marginTop:'4%'}}>
        <text style={{userSelect:'none',fontFamily:'Segoe UI',color:'#313030',fontSize:18}}>Oragnization name*</text>
        </div>
        {/* <div onMouseUpCapture={()=>setPressed('PortalId')} 
            onMouseEnter={()=>setState('PortalId')}
            onMouseLeave={()=>setState(null)} style={{width:'100%',height:Wheight/(1080/57),
            borderRadius:5,border:`1.5px solid ${pressed === 'PortalId' || state === 'PortalId'?'#275473':'#C3C1C1'}`,
            backgroundColor:'#F2F2F2',marginTop:'7%',marginBottom:'7%'}}> */}
                <input  onBlurCapture={()=>setPressed(null)}
                id="Organization name"
                name="Organization name"
                placeholder='Enter Organization name'
                type="text"
                onMouseUpCapture={()=>setPressed('PortalId')} 
                onMouseEnter={()=>setState('PortalId')}
                onMouseLeave={()=>setState(null)}
                style={{width:'100%',height:Wheight/(1080/57),outline:'0px',fontFamily:'Segoe UI',padding:3,
                borderRadius:5,border:`0.5px solid ${pressed === 'PortalId' || state === 'PortalId'?'#275473':'#C3C1C1'}`,
                backgroundColor:'#F2F2F2',marginTop:'5%'}}
                required
                // onChange={(e) => {
                //   setOtp(e.target.value);
                // }}
              />
        <div style={{marginTop:'5%'}}>
        <text style={{userSelect:'none',fontFamily:'Segoe UI',color:'#313030',fontSize:18}}>Organization type*</text>
        </div>
        <input  onBlurCapture={()=>setPressed(null)}
                id="Organization type"
                name="Organization type"
                placeholder='Enter Organization type'
                type="text"
                onMouseUpCapture={()=>setPressed('Psd')} 
                onMouseEnter={()=>setState('Psd')}
                onMouseLeave={()=>setState(null)}
                style={{width:'100%',height:Wheight/(1080/57),outline:'0px',fontFamily:'Segoe UI',padding:3,
                borderRadius:5,border:`0.5px solid ${pressed === 'Psd' || state === 'Psd'?'#275473':'#C3C1C1'}`,
                backgroundColor:'#F2F2F2',marginTop:'5%'}}
                required
                // onChange={(e) => {
                //   setOtp(e.target.value);
                // }}
              />
        <div style={{marginTop:'5%'}}>
        <text style={{userSelect:'none',fontFamily:'Segoe UI',color:'#313030',fontSize:18}}>Address*</text>
        </div>
        <input  onBlurCapture={()=>setPressed(null)}
                id="Line1"
                name="Address Line1"
                placeholder='Address Line 1'
                type="text"
                onMouseUpCapture={()=>setPressed('Line1')} 
                onMouseEnter={()=>setState('Line1')}
                onMouseLeave={()=>setState(null)}
                style={{width:'100%',height:Wheight/(1080/57),outline:'0px',fontFamily:'Segoe UI',padding:3,
                borderRadius:5,border:`0.5px solid ${pressed === 'Line1' || state === 'Line1'?'#275473':'#C3C1C1'}`,
                backgroundColor:'#F2F2F2',marginTop:'5%'}}
                required
                // onChange={(e) => {
                //   setOtp(e.target.value);
                // }}
              />
        <div style={{width:'100%',marginTop:'2%',flexDirection:'row',display:'flex',justifyContent:'space-between'}}>
            <div style={{width:'48%'}}>
            <input  onBlurCapture={()=>setPressed(null)}
                    id="City"
                    name="City"
                    placeholder='City'
                    type="text"
                    onMouseUpCapture={()=>setPressed('City')} 
                    onMouseEnter={()=>setState('City')}
                    onMouseLeave={()=>setState(null)}
                    style={{width:'100%',height:Wheight/(1080/57),outline:'0px',fontFamily:'Segoe UI',padding:3,
                    borderRadius:5,border:`0.5px solid ${pressed === 'City' || state === 'City'?'#275473':'#C3C1C1'}`,
                    backgroundColor:'#F2F2F2'}}
                    required
                    // onChange={(e) => {
                    //   setOtp(e.target.value);
                    // }}
                />
            </div>
            <div style={{width:'48%'}}>
            <input  onBlurCapture={()=>setPressed(null)}
                    id="Region"
                    name="Region"
                    placeholder='Region'
                    type="text"
                    onMouseUpCapture={()=>setPressed('Region')} 
                    onMouseEnter={()=>setState('Region')}
                    onMouseLeave={()=>setState(null)}
                    style={{width:'100%',height:Wheight/(1080/57),outline:'0px',fontFamily:'Segoe UI',padding:3,
                    borderRadius:5,border:`0.5px solid ${pressed === 'Region' || state === 'Region'?'#275473':'#C3C1C1'}`,
                    backgroundColor:'#F2F2F2'}}
                    required
                    // onChange={(e) => {
                    //   setOtp(e.target.value);
                    // }}
                />
                </div>
        </div>
        <div style={{width:'100%',marginTop:'2%',flexDirection:'row',display:'flex',justifyContent:'space-between'}}>
            <div style={{width:'48%'}}>
            <input  onBlurCapture={()=>setPressed(null)}
                    id="Postal"
                    name="Postal"
                    placeholder='Postal / Zip'
                    type="text"
                    onMouseUpCapture={()=>setPressed('Postal')} 
                    onMouseEnter={()=>setState('Postal')}
                    onMouseLeave={()=>setState(null)}
                    style={{width:'100%',height:Wheight/(1080/57),outline:'0px',fontFamily:'Segoe UI',padding:3,
                    borderRadius:5,border:`0.5px solid ${pressed === 'Postal' || state === 'Postal'?'#275473':'#C3C1C1'}`,
                    backgroundColor:'#F2F2F2'}}
                    required
                    // onChange={(e) => {
                    //   setOtp(e.target.value);
                    // }}
                />
            </div>
            <div style={{width:'48%'}}>
            <input  onBlurCapture={()=>setPressed(null)}
                    id="Country"
                    name="Country"
                    placeholder='Country'
                    type="text"
                    onMouseUpCapture={()=>setPressed('Country')} 
                    onMouseEnter={()=>setState('Country')}
                    onMouseLeave={()=>setState(null)}
                    style={{width:'100%',height:Wheight/(1080/57),outline:'0px',fontFamily:'Segoe UI',padding:3,
                    borderRadius:5,border:`0.5px solid ${pressed === 'Country' || state === 'Country'?'#275473':'#C3C1C1'}`,
                    backgroundColor:'#F2F2F2'}}
                    required
                    // onChange={(e) => {
                    //   setOtp(e.target.value);
                    // }}
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
                    borderRadius:5,border:`0.5px solid ${pressed === 'First' || state === 'First'?'#275473':'#C3C1C1'}`,
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
                    borderRadius:5,border:`0.5px solid ${pressed === 'Last' || state === 'Last'?'#275473':'#C3C1C1'}`,
                    backgroundColor:'#F2F2F2'}}
                    required
                    // onChange={(e) => {
                    //   setOtp(e.target.value);
                    // }}
                />
                </div>
        </div> */}
                </div>
    }

    export default Signup