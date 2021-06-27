import React, { useCallback, useState } from 'react'
import { Next } from 'react-bootstrap/esm/PageItem';
import PhoneInput from 'react-phone-input-2'
import {Button,Spinner} from 'react-bootstrap'
import 'react-phone-input-2/lib/material.css'
import { useHistory } from 'react-router-dom';
import validator from 'validator';
import Loader from 'react-loader-spinner';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { signup } from '../store/actions/auth';


const Signup2 = (props) => {
    const Wwidth=window.innerWidth*0.95;
    const Wheight=window.innerHeight;
    const history = useHistory();
    const [nextPressed,setNextPressed]=useState(false)
    const [pressed,setPressed]=useState(null);
    const [contact,setContact]=useState('');
    const selected = props.selected
    const [cname,setCName]=useState('');
    const [kId,setKId]=useState('');
    const [KIdEr,setKIdEr]=useState(null);
    const [cPass,setCPass]=useState('');
    const [cpassEr,setCPassEr]=useState(null);
    const [cLname,setCLName]=useState('');
    const [cemail,setCEmail]=useState('');
    const [cnameEr,setCNameEr]=useState(null);
    const [contactEr,setContactEr]=useState(null);
    const [cemailEr,setCEmailEr]=useState(null);

    const [state,setState]=useState(null);
    const dispatch=useDispatch();

    const fn= useCallback(async ()=>{
          props.nextPressed(true);
          setNextPressed(true); 
      try{
        var data = JSON.stringify({
          "kassandraPortalID":kId,
          "email":cemail,
          "mobile":`+${contact}`,
          "fname":cname,
          "password":cPass,
          "lname":cLname,
          "address":props.data.add1,
          "city":props.data.city,
          "region":props.data.region,
          "postal":props.data.postal,
          "country":props.data.country,
          "orgtype":props.data.orgType,
          "orgName":props.data.orgName, 
            })
          await dispatch(signup(data,props.selected));
            props.nextPressed(false);
            props.pressedLogin();
            setNextPressed(false);
        }catch(err){
          window.alert(err.message)
        }
      setNextPressed(false)
      return ;
    },[dispatch,setNextPressed,props.nextPressed,props.pressedLogin]);

    const next = () => {      
      if (!validator.isEmail(cemail)){
        setCEmailEr('Enter correct email')
      }else{
        setCEmailEr(null)
      }
      if (!validator.isLength(cname,{min:5})){
        setCNameEr('Contact name must be atleast 5 characters long')
      }else{
        setCNameEr(null);
        
      }
      if (!validator.isLength(kId,{min:5})){
        setKIdEr('Id must be atleast 5 characters long')
      }else{
        setKIdEr(null);
        
      }
      
      if (!validator.isStrongPassword(cPass,{minLength:5,minUppercase:0,minLowercase:0,minNumbers:0,minSymbols:0})){
        setCPassEr('Create strong password')
      }else{
        setCPassEr(null);
      }
      if (!validator.isMobilePhone(contact.substring(2),'en-IN')){
        setContactEr('Enter phone number')
        console.log(contact)
      }else{
        setContactEr(null);
        console.log(contact)
        if (KIdEr !== null && cnameEr !== null && cemailEr !== null && contactEr !==null ){
        
        }else{
          fn();
        }
      }
                  
    }
    const component= !nextPressed?<div style={{width:'100%',height:'100%',marginTop:'5%'}}>
      <div style={{marginTop:'5%'}}>
            <text style={{userSelect:'none',fontFamily:'Segoe UI Semibold',color:'#313030',fontSize:18}}>Create kassandra Portal ID</text>
            </div>
        
            <input  onBlurCapture={()=>setPressed(null)}
            id="KId"
            name="KId"
            placeholder='Create Portal Id'
            type="text"
            value={kId}
            onChange={(val)=>{setKId(val.target.value);setKIdEr(null)}}
            onFocus={()=>setKIdEr(null)}
            onMouseUpCapture={()=>setPressed('KId')} 
            onMouseEnter={()=>setState('KId')}
            onMouseLeave={()=>setState(null)}
            style={{width:'100%',height:Wheight/(1080/57),outline:'0px',fontSize:14,fontFamily:'Segoe UI ',padding:3,marginTop:'2%',
            borderRadius:5,border:`.5px solid ${KIdEr?'red': pressed === 'KId' || state === 'KId'?'#275473':'#C3C1C1'}`,
            backgroundColor:'#F2F2F2'}}
            required
            // onChange={(e) => {
            //   setOtp(e.target.value);
            // }}
          />
          <div style={{marginTop:'2%',marginBottom:'2%'}}>
            <text style={{userSelect:'none',fontFamily:'Segoe UI Semibold',color:'red',fontSize:13,marginTop:'15%'}}>
        {KIdEr}</text></div>
    <div style={{marginTop:'5%'}}>
    <text style={{userSelect:'none',fontFamily:'Segoe UI Semibold',color:'#313030',fontSize:18}}>Contact name*</text>
    </div>
    
    <div style={{width:'100%',marginTop:'2%',flexDirection:'row',display:'flex',justifyContent:'space-between'}}>
        <div style={{width:'48%'}}>
        <input  onBlurCapture={()=>setPressed(null)}
                id="first"
                name="first name"
                placeholder='First name'
                type="text"
                value={cname}
                onChange={(val)=>{setCName(val.target.value);setCNameEr(null)}}
                onFocus={()=>setCNameEr(null)}
                onMouseUpCapture={()=>setPressed('First')} 
                onMouseEnter={()=>setState('First')}
                onMouseLeave={()=>setState(null)}
                style={{width:'100%',height:Wheight/(1080/57),outline:'0px',fontSize:14,fontFamily:'Segoe UI ',padding:3,
                borderRadius:5,border:`.5px solid ${cnameEr?'red': pressed === 'First' || state === 'First'?'#275473':'#C3C1C1'}`,
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
                value={cLname}
                onChange={(val)=>{setCLName(val.target.value);setCNameEr(null)}}
                onFocus={()=>setCNameEr(null)}
                onMouseUpCapture={()=>setPressed('Last')} 
                onMouseEnter={()=>setState('Last')}
                onMouseLeave={()=>setState(null)}
                style={{width:'100%',height:Wheight/(1080/57),outline:'0px',fontSize:14,fontFamily:'Segoe UI ',padding:3,
                borderRadius:5,border:`.5px solid ${cnameEr?'red': pressed === 'Last' || state === 'Last'?'#275473':'#C3C1C1'}`,
                backgroundColor:'#F2F2F2'}}
                required
                // onChange={(e) => {
                //   setOtp(e.target.value);
                // }}
            />
            
            </div>
            </div>
            <div style={{marginTop:'2%',marginBottom:'2%'}}>
            <text style={{userSelect:'none',fontFamily:'Segoe UI Semibold',color:'red',fontSize:13,marginTop:'15%'}}>
        {cnameEr}</text></div>
            <div style={{marginTop:'5%'}}>
            <text style={{userSelect:'none',fontFamily:'Segoe UI Semibold',color:'#313030',fontSize:18}}>Contact email</text>
            </div>
        
            <input  onBlurCapture={()=>setPressed(null)}
            id="email"
            name="email"
            placeholder='Enter email'
            type="text"
            value={cemail}
            onChange={(val)=>{setCEmail(val.target.value);setCEmailEr(null)}}
            onFocus={()=>setCEmailEr(null)}
            onMouseUpCapture={()=>setPressed('Email')} 
            onMouseEnter={()=>setState('Email')}
            onMouseLeave={()=>setState(null)}
            style={{width:'100%',height:Wheight/(1080/57),outline:'0px',fontSize:14,fontFamily:'Segoe UI ',padding:3,marginTop:'2%',
            borderRadius:5,border:`.5px solid ${cemailEr?'red': pressed === 'Email' || state === 'Email'?'#275473':'#C3C1C1'}`,
            backgroundColor:'#F2F2F2'}}
            required
            // onChange={(e) => {
            //   setOtp(e.target.value);
            // }}
          />
          <div style={{marginTop:'2%',marginBottom:'2%'}}>
            <text style={{userSelect:'none',fontFamily:'Segoe UI Semibold',color:'red',fontSize:13,marginTop:'15%'}}>
        {cemailEr}</text></div>
          <div style={{marginTop:'5%'}}>
            <text style={{userSelect:'none',fontFamily:'Segoe UI Semibold',color:'#313030',fontSize:18}}>Create Password</text>
            </div>
        
            <input  onBlurCapture={()=>setPressed(null)}
            id="CPassword"
            name="password"
            placeholder='Create Password'
            type="password"
            value={cPass}
            onChange={(val)=>{setCPass(val.target.value);setCPassEr(null)}}
            onFocus={()=>setCPassEr(null)}
            onMouseUpCapture={()=>setPressed('CPass')} 
            onMouseEnter={()=>setState('CPass')}
            onMouseLeave={()=>setState(null)}
            style={{width:'100%',height:Wheight/(1080/57),outline:'0px',fontSize:14,fontFamily:'Segoe UI ',padding:3,marginTop:'2%',
            borderRadius:5,border:`.5px solid ${cpassEr?'red': pressed === 'CPass' || state === 'CPass'?'#275473':'#C3C1C1'}`,
            backgroundColor:'#F2F2F2'}}
            required
            // onChange={(e) => {
            //   setOtp(e.target.value);
            // }}
          />
          <div style={{marginTop:'2%',marginBottom:'2%'}}>
            <text style={{userSelect:'none',fontFamily:'Segoe UI Semibold',color:'red',fontSize:13,marginTop:'15%'}}>
        {cpassEr}</text></div>
          <div style={{marginTop:'5%'}}>
            <text style={{userSelect:'none',fontFamily:'Segoe UI Semibold',color:'#313030',fontSize:18}}>Phone</text>
            </div>
          <div style={{width:'100%',marginTop:'3%'}}>
        <PhoneInput specialLabel=''  containerStyle={{padding:3}} 
        inputStyle={{width:'100%',height:Wheight/(1080/70),backgroundColor:'#F2F2F2',border:`0.5px solid ${contactEr?'red':'#C3C1C1'}`}}
        country={'in'}
        onFocus={()=>setContactEr(null)}
        value={contact}        
        onChange={contact =>setContact(contact)}
      />
      </div>
      <div style={{marginTop:'2%',marginBottom:'2%'}}>
            <text style={{userSelect:'none',fontFamily:'Segoe UI Semibold',color:'red',fontSize:13,marginTop:'15%'}}>
        {contactEr}</text></div>
      <div style={{width:'100%',flexDirection:'row',marginTop:'8%',display:'flex',justifyContent:'space-between'}}>
                      <div onMouseUpCapture={props.pressed} style={{width:'45%',height:Wheight/(1080/57),cursor:'pointer',
                      borderRadius:5,boxShadow:"0px 0.5px 3px #9E9E9E",alignItems:'center',justifyContent:'center'
                      ,display:'flex',backgroundColor:'#ECECEC'}}>
                          <text style={{fontFamily:'Segoe UI Semibold ',fontSize:14,color:'#313030'}}>Back</text>
                        </div>
                          <div onMouseUpCapture={()=>next()} style={{width:'45%',height:Wheight/(1080/57),cursor:'pointer',
                      borderRadius:5,boxShadow:"0px 0.5px 3px #9E9E9E",alignItems:'center',justifyContent:'center'
                      ,display:'flex',backgroundColor:'#275473'}}>
                          <text style={{fontFamily:'Segoe UI Semibold ',fontSize:14,color:'white'}}>Next</text>
                        </div>
                      </div>
    </div>:<div style={{width:'100%',height:'100%',justifyContent:'center',alignItems:'center',display:'flex',flexDirection:'column'}}>
    <Loader
        type="Puff"
        color="#019A02"
        
        height={80}
        width={80}
         //3 secs
      />
      <text style={{fontFamily:'Segoe UI Semibold ',fontSize:20,color:'#275473',marginTop:'3%'}}>Registering....</text>
    </div>
    
    return component
        {/* <div style={{marginTop:'5%'}}>
        <text style={{userSelect:'none',fontFamily:'Segoe UI Semibold',color:'#313030',fontSize:18}}>Contact name</text>
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
                    style={{width:'100%',height:Wheight/(1080/57),outline:'0px',fontSize:14,fontFamily:'Segoe UI Semibold',padding:3,
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
                    style={{width:'100%',height:Wheight/(1080/57),outline:'0px',fontSize:14,fontFamily:'Segoe UI Semibold',padding:3,
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