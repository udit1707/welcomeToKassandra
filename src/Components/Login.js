import { regex } from '@syncfusion/ej2-inputs';
import axios from 'axios';
import { Alert } from 'bootstrap';
import React, { useCallback, useState } from 'react'
import { useHistory } from 'react-router-dom';
import validator from 'validator'
import Loader from 'react-loader-spinner'
import { login } from '../store/actions/auth';
import { useDispatch } from 'react-redux';
import { getCategories } from '../store/actions/manufacturer';
const Login = (props) => {
    const Wwidth=window.innerWidth*0.95;
    const Wheight=window.innerHeight;
    const history=useHistory();
    const [pressed,setPressed]=useState(null);
    const [nextPressed,setNextPressed]=useState(false)
    const [pidError,setPidError]=useState(null);
    const [passwordError,setPasswordError]=useState(null);
    const [pid,setPid]=useState("");
    const [ps,setPs]=useState("");
    const [state,setState]=useState(null);

    const dispatch=useDispatch()

    const fn2 = useCallback(async ()=>{
        props.nextPressed(true);
        setNextPressed(true); 
        try{
        var data = JSON.stringify({"kassandraPortalId":pid,"password":ps});
            const result = await dispatch(login(data));
            console.log(result);
            try{
                    const result = await dispatch(getCategories());
                    console.log(result);                    
                    props.nextPressed(false);
                    history.push('/Home')
                    setNextPressed(false);
                }catch(err){
                    props.nextPressed(false);
                    setNextPressed(false);
                    console.log(err);
                    window.alert(err.message)
                }                    
            
        }catch(err){
            props.nextPressed(false);
            setNextPressed(false);
            console.log(err);
            window.alert(err.message)
        }
        setNextPressed(false)
        return ;
    },[dispatch,setNextPressed,props.nextPressed,history]);

    
    const next=()=>{
        if (!validator.isLength(pid,{min:5})){
            setPidError('Portal Id must contain atleast 5 characters')
        }else{
            setPidError(null)
        }
        if (validator.isEmpty(ps)){
            setPasswordError('Enter Password')
        }else{
            setPasswordError(null);
            if (pidError !== null && passwordError !== null){

            }else{
                fn2();
                // axios(config)
                // .then(function (response) {
                //     console.log(response.data);
                //     props.nextPressed(false);
                //     history.push('/Dashboard')
                //     setNextPressed(false);
                //     return;
                // })
                // .catch(err=> {
                //     props.nextPressed(false);
                //     setNextPressed(false);
                //     console.log(err);
                    
                    
                //     window.alert('Error Occured while Log In')
                // });
                    }
        }
    }
    const component =nextPressed?<div style={{width:'100%',height:'100%',justifyContent:'center',alignItems:'center',display:'flex',flexDirection:'column'}}>
    <Loader
        type="Puff"
        color="#019A02"        
        height={80}
        width={80}
         //3 secs
      />
      <text style={{fontFamily:'Segoe UI Semibold ',fontSize:20,color:'#275473',marginTop:'3%'}}>Loging In....</text>
    </div>:<div style={{width:'100%',height:'100%',marginTop:'5%'}}>
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
                value={pid}
                onFocus={()=>setPidError(null)}
                onBlur={()=>setPressed(null)}
                onChange={val=>setPid(val.target.value)}
                onMouseUpCapture={()=>setPressed('PortalId')} 
                onMouseEnter={()=>setState('PortalId')}
                onMouseLeave={()=>setState(null)}
                style={{width:'100%',height:Wheight/(1080/57),outline:'0px',padding:3,
                borderRadius:5,border:`1px solid ${pidError ?'red':pressed === 'PortalId' || state === 'PortalId'?'#275473':'#C3C1C1'}`,
                backgroundColor:'#F2F2F2',marginTop:'5%'}}
                required
                />
            <div style={{marginTop:'2%',marginBottom:'2%'}}>
                <text style={{userSelect:'none',fontFamily:'Segoe UI',color:'red',fontSize:13,marginTop:'15%'}}>
            {pidError}</text></div>
            <text style={{userSelect:'none',fontFamily:'Segoe UI',color:'#313030',fontSize:18,marginTop:'5%'}}>Password</text>
        <input
                id="Password"
                name="Password"
                placeholder='Enter Password'
                type="password"
                onFocus={()=>setPasswordError(null)}
                onBlur={()=>setPressed(null)}
                onMouseUpCapture={()=>setPressed('Psd')} 
                onMouseEnter={()=>setState('Psd')}
                onMouseLeave={()=>setState(null)}
                val={ps}
                onChange={val=>setPs(val.target.value)}
                style={{width:'100%',height:Wheight/(1080/57),outline:'0px',padding:3,
                borderRadius:5,border:`1px solid ${passwordError?'red': pressed === 'Psd' || state === 'Psd'?'#275473':'#C3C1C1'}`,
                backgroundColor:'#F2F2F2',marginTop:'5%'}}
                required
                // onChange={(e) => {
                //   setOtp(e.target.value);
                // }}
              /><div style={{marginTop:'2%',marginBottom:'2%'}}>
              <text style={{userSelect:'none',fontFamily:'Segoe UI',color:'red',fontSize:13,marginTop:'15%'}}>
          {passwordError}</text></div>
          <div style={{width:'100%',flexDirection:'row',marginTop:'2%',display:'flex',overflow:'hidden',justifyContent:'space-between',alignItems:'center'}}>
            <div style={{flexDirection:'row',width:'50%',display:'flex',alignItems:'center'}}>
                <div style={{width:10,height:10,backgroundColor:'#FFFFFF',border:'1px solid #707070'}}>
            </div>
            <text style={{fontFamily:'Segoe UI Semibold',fontSize:14,color:'#656565',marginLeft:'5%'}}>Remember</text>
            </div>
            <text style={{fontFamily:'Segoe UI Semibold',fontSize:14,color:'#656565'}}>Forgot Password</text>
        </div>
        <div onMouseUpCapture={()=>next()} 
        style={{width:'100%',height:Wheight/(1080/57),marginTop:'8%',
        cursor:'pointer',
        borderRadius:5,boxShadow:"0px 0.5px 3px #9E9E9E",alignItems:'center',justifyContent:'center'
        ,display:'flex',backgroundColor:'#275473'}}>
            <text style={{fontFamily:'Segoe UI Semibold',fontSize:14,color:'white'}}>Next</text>
        </div>
        </div>
    return component
    }

    export default Login