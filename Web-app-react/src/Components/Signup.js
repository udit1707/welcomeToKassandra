import React, { useState } from 'react'
import { propTypes } from 'react-bootstrap/esm/Image';
import validator from 'validator';

const Signup = (props) => {
    
    const Wwidth=window.innerWidth*0.95;
    const Wheight=window.innerHeight;
    const [pressed,setPressed]=useState(null);
    const [pressed2,setPressed2]=useState('Manufacturer')
    const [orgName,setOrgName]=useState("");
    const [orgType,setOrgType]=useState("");
    const [add1,setAdd1]=useState("");
    const [city,setCity]=useState("");
    const [region,setRegion]=useState("");
    const [postal,setPostal]=useState("");
    const [country,setCountry]=useState("");
    const [state,setState]=useState("");
    const [orgNameEr,setOrgNameEr]=useState(null);
    const [orgTypeEr,setOrgTypeEr]=useState(null);
    const [add1Er,setAdd1Er]=useState(null);
    const [cityEr,setCityEr]=useState(null);
    const [regionEr,setRegionEr]=useState(null);
    const [postalEr,setPostalEr]=useState(null);
    const [countryEr,setCountryEr]=useState(null);
    const [stateEr,setStateEr]=useState(null);
    console.log(window.innerWidth  + "  "+ window.innerHeight)

    const next=()=>{
        if (!validator.isAlpha(orgName)){
            if (!validator.isLength(orgName,{min:5})){
                setOrgNameEr('Organization name must be atleast 5 characters long and contains only letters ')
            }else{
                setOrgNameEr('Organization name must be atleast 5 characters long and contains only letters ')
            }
        }else{
            if (!validator.isLength(orgName,{min:5})){
                setOrgNameEr('Organization name must be atleast 5 characters long and contains only letters ')
            }else{
                setOrgNameEr(null)
            }
        }
        if (!validator.isAlpha(orgType)){
            if (!validator.isLength(orgType,{min:5})){
                setOrgTypeEr('Organization type must be atleast 5 characters long and contains only letters ')
            }else{
                setOrgTypeEr('Organization type must be atleast 5 characters long and contains only letters ')
            }
        }else{
            if (!validator.isLength(orgType,{min:5})){
                setOrgTypeEr('Organization type must be atleast 5 characters long and contains only letters ')
            }else{
                setOrgTypeEr(null)
            }
        }
        if (!validator.isAlphanumeric(add1)){
            setAdd1Er('Enter address')
        }else{
            setAdd1Er(null);
        } 
        if (!validator.isAlpha(city)){
            setCityEr('Enter city')
        }else{
            setCityEr(null);
        }
        if (!validator.isAlpha(region)){
            setRegionEr('Enter region')
        }else{
            setRegionEr(null);
        }
        if (!validator.isNumeric(postal)){
            setPostalEr('Enter Postal / Zip')
        }else{
            if (validator.isLength(postal,{min:6,max:6})){
                setPostalEr(null);
            }else{
                setPostalEr('Enter Postal / Zip')
            }
        }
        if (!validator.isAlpha(country)){
            setCountryEr('Enter country')
        }else{
            setCountryEr(null);
            if (orgNameEr !==null && orgTypeEr !==null && add1Er !==null && cityEr !==null && countryEr !==null && regionEr !==null && postalEr!==null){
            
            }else{
                props.pressed()
                props.selected(pressed2)
                props.data({
                    "address":add1,
                    "city":city,
                    "region":region,
                    "postal":postal,
                    "country":country,
                    "orgtype":orgType,
                    "orgName":orgName,
                       })
            }
        }

    }
    
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
        <text style={{userSelect:'none',fontFamily:'Segoe UI',color:'#313030',fontSize:18}}>Organization name*</text>
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
                value={orgName}
                onFocus={()=>setOrgNameEr(null)}
                onChange={(val)=>{setOrgName(val.target.value);setOrgNameEr(null)}}
                onMouseUpCapture={()=>setPressed('PortalId')} 
                onMouseEnter={()=>setState('PortalId')}
                onMouseLeave={()=>setState(null)}
                style={{width:'100%',height:Wheight/(1080/57),outline:'0px',fontFamily:'Segoe UI',padding:3,
                borderRadius:5,border:`0.5px solid ${orgNameEr?'red': pressed === 'PortalId' || state === 'PortalId'?'#275473':'#C3C1C1'}`,
                backgroundColor:'#F2F2F2',marginTop:'5%'}}
                required
                // onChange={(e) => {
                //   setOtp(e.target.value);
                // }}
              />
              <div style={{marginTop:'2%',marginBottom:'2%'}}>
                <text style={{userSelect:'none',fontFamily:'Segoe UI',color:'red',fontSize:13,marginTop:'15%'}}>
            {orgNameEr}</text></div>
        <div style={{marginTop:'5%'}}>
        <text style={{userSelect:'none',fontFamily:'Segoe UI',color:'#313030',fontSize:18}}>Organization type*</text>
        </div>
        <input  onBlurCapture={()=>setPressed(null)}
                id="Organization type"
                name="Organization type"
                placeholder='Enter Organization type'
                type="text"
                value={orgType}
                onFocus={()=>setOrgTypeEr(null)}
                onChange={(val)=>{setOrgType(val.target.value);setOrgTypeEr(null)}}
                onMouseUpCapture={()=>setPressed('Psd')} 
                onMouseEnter={()=>setState('Psd')}
                onMouseLeave={()=>setState(null)}
                style={{width:'100%',height:Wheight/(1080/57),outline:'0px',fontFamily:'Segoe UI',padding:3,
                borderRadius:5,border:`0.5px solid ${orgTypeEr?'red': pressed === 'Psd' || state === 'Psd'?'#275473':'#C3C1C1'}`,
                backgroundColor:'#F2F2F2',marginTop:'5%'}}
                required
                // onChange={(e) => {
                //   setOtp(e.target.value);
                // }}
              />
              <div style={{marginTop:'2%',marginBottom:'2%'}}>
                <text style={{userSelect:'none',fontFamily:'Segoe UI',color:'red',fontSize:13,marginTop:'15%'}}>
            {orgTypeEr}</text></div>
        <div style={{marginTop:'5%'}}>
        <text style={{userSelect:'none',fontFamily:'Segoe UI',color:'#313030',fontSize:18}}>Address*</text>
        </div>
        <input  onBlurCapture={()=>setPressed(null)}
                id="Line1"
                name="Address Line1"
                placeholder='Address Line 1'
                type="text"
                value={add1}
                onFocus={()=>setAdd1Er(null)}
                onChange={(val)=>{setAdd1(val.target.value);setAdd1Er(null)}}
                onMouseUpCapture={()=>setPressed('Line1')} 
                onMouseEnter={()=>setState('Line1')}
                onMouseLeave={()=>setState(null)}
                style={{width:'100%',height:Wheight/(1080/57),outline:'0px',fontFamily:'Segoe UI',padding:3,
                borderRadius:5,border:`0.5px solid ${add1Er?'red': pressed === 'Line1' || state === 'Line1'?'#275473':'#C3C1C1'}`,
                backgroundColor:'#F2F2F2',marginTop:'5%'}}
                required
                // onChange={(e) => {
                //   setOtp(e.target.value);
                // }}
              />
              <div style={{marginTop:'2%',marginBottom:'2%'}}>
                <text style={{userSelect:'none',fontFamily:'Segoe UI',color:'red',fontSize:13,marginTop:'15%'}}>
            {add1Er}</text></div>
        <div style={{width:'100%',marginTop:'2%',flexDirection:'row',display:'flex',justifyContent:'space-between'}}>
            <div style={{width:'48%'}}>
            <input  onBlurCapture={()=>setPressed(null)}
                    id="City"
                    name="City"
                    placeholder='City'
                    type="text"
                    onFocus={()=>setCityEr(null)}
                    value={city}
                    onChange={(val)=>{setCity(val.target.value);setCityEr(null)}}
                    onMouseUpCapture={()=>setPressed('City')} 
                    onMouseEnter={()=>setState('City')}
                    onMouseLeave={()=>setState(null)}
                    style={{width:'100%',height:Wheight/(1080/57),outline:'0px',fontFamily:'Segoe UI',padding:3,
                    borderRadius:5,border:`0.5px solid ${cityEr?'red': pressed === 'City' || state === 'City'?'#275473':'#C3C1C1'}`,
                    backgroundColor:'#F2F2F2'}}
                    required
                    // onChange={(e) => {
                    //   setOtp(e.target.value);
                    // }}
                />
                <div style={{marginTop:'2%',marginBottom:'2%'}}>
                <text style={{userSelect:'none',fontFamily:'Segoe UI',color:'red',fontSize:13,marginTop:'15%'}}>
            {cityEr}</text></div>
            </div>
            <div style={{width:'48%'}}>
            <input  onBlurCapture={()=>setPressed(null)}
                    id="Region"
                    name="Region"
                    placeholder='Region'
                    type="text"
                    onFocus={()=>setRegionEr(null)}
                    value={region}
                    onChange={(val)=>{setRegion(val.target.value);setRegionEr(null)}}
                    onMouseUpCapture={()=>setPressed('Region')} 
                    onMouseEnter={()=>setState('Region')}
                    onMouseLeave={()=>setState(null)}
                    style={{width:'100%',height:Wheight/(1080/57),outline:'0px',fontFamily:'Segoe UI',padding:3,
                    borderRadius:5,border:`0.5px solid ${regionEr?'red': pressed === 'Region' || state === 'Region'?'#275473':'#C3C1C1'}`,
                    backgroundColor:'#F2F2F2'}}
                    required
                    // onChange={(e) => {
                    //   setOtp(e.target.value);
                    // }}
                />
                <div style={{marginTop:'2%',marginBottom:'2%'}}>
                <text style={{userSelect:'none',fontFamily:'Segoe UI',color:'red',fontSize:13,marginTop:'15%'}}>
            {regionEr}</text></div>
                </div>
        </div>
        <div style={{width:'100%',marginTop:'2%',flexDirection:'row',display:'flex',justifyContent:'space-between'}}>
            <div style={{width:'48%'}}>
            <input  onBlurCapture={()=>setPressed(null)}
                    id="Postal"
                    name="Postal"
                    placeholder='Postal / Zip'
                    type="text"
                    value={postal}
                    onFocus={()=>setPostalEr(null)}
                    onChange={(val)=>{setPostal(val.target.value);setPostalEr(null)}}
                    onMouseUpCapture={()=>setPressed('Postal')} 
                    onMouseEnter={()=>setState('Postal')}
                    onMouseLeave={()=>setState(null)}
                    style={{width:'100%',height:Wheight/(1080/57),outline:'0px',fontFamily:'Segoe UI',padding:3,
                    borderRadius:5,border:`0.5px solid ${postalEr?'red': pressed === 'Postal' || state === 'Postal'?'#275473':'#C3C1C1'}`,
                    backgroundColor:'#F2F2F2'}}
                    required
                    // onChange={(e) => {
                    //   setOtp(e.target.value);
                    // }}
                />
                <div style={{marginTop:'2%',marginBottom:'2%'}}>
                <text style={{userSelect:'none',fontFamily:'Segoe UI',color:'red',fontSize:13,marginTop:'15%'}}>
            {postalEr}</text></div>
            </div>
            <div style={{width:'48%'}}>
            <input  onBlurCapture={()=>setPressed(null)}
                    id="Country"
                    name="Country"
                    placeholder='Country'
                    type="text"
                    value={country}
                    onFocus={()=>setCountryEr(null)}
                    onChange={(val)=>{setCountry(val.target.value);setCountryEr(null)}}
                    onMouseUpCapture={()=>setPressed('Country')} 
                    onMouseEnter={()=>setState('Country')}
                    onMouseLeave={()=>setState(null)}
                    style={{width:'100%',height:Wheight/(1080/57),outline:'0px',fontFamily:'Segoe UI',padding:3,
                    borderRadius:5,border:`0.5px solid ${countryEr?'red': pressed === 'Country' || state === 'Country'?'#275473':'#C3C1C1'}`,
                    backgroundColor:'#F2F2F2'}}
                    required
                    // onChange={(e) => {
                    //   setOtp(e.target.value);
                    // }}
                />
                <div style={{marginTop:'2%',marginBottom:'2%'}}>
                <text style={{userSelect:'none',fontFamily:'Segoe UI',color:'red',fontSize:13,marginTop:'15%'}}>
            {countryEr}</text></div>
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
        <div onMouseUpCapture={()=>next()} 
        style={{width:'100%',height:Wheight/(1080/57),marginTop:'8%',
        cursor:'pointer',
        borderRadius:5,boxShadow:"0px 0.5px 3px #9E9E9E",alignItems:'center',justifyContent:'center'
        ,display:'flex',backgroundColor:'#275473'}}>
            <text style={{fontFamily:'Segoe UI Semibold',fontSize:14,color:'white'}}>Next</text>
        </div>
                </div>
    }

    export default Signup