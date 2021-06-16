import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import Logo from "../../Assets/index.png"
import Login from '../../Components/Login';
import Signup from '../../Components/Signup';
import Signup2 from '../../Components/Signup2';
const Login_Signup = () => {
    const Wwidth=window.innerWidth*0.95;
    const Wheight=window.innerHeight;
    const history=useHistory();
    const [state,setState]=useState('Login');
    const [pressed,setPressed]=useState('Login')
    console.log(window.innerWidth  + "  "+ window.innerHeight)
    return <div style={{width:window.innerWidth,height:Wheight,paddingBottom:10,backgroundColor:'#FFFFFF',
                flexDirection:'row',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                    <div style={{width:'50%',height:'60%'}}>
                        <img src={Logo} style={{width:'100%',height:'100%'}} />
                    </div>
                    <div style={{
                        width:'50%',marginLeft:'10%',height:'100%',
                        flexDirection:'column',
                        alignSelf:'flex-start',
                        marginTop:'3%',
                        display:'flex',
                        justifyContent:'flex-start',
                        alignItems:'flex-start'}}>
                        <text style={{userSelect:'none',fontFamily:'Segoe UI',color:'#275473',fontSize:35}}>Welcome to  
                        <text style={{userSelect:'none',fontFamily:'Segoe UI Semibold',color:'#019A02',fontSize:35}}> Kassandra
                        </text>
                        </text>
                        <div style={{width:'50%',marginTop:'2%',height:'6%',flexDirection:'row',display:'flex',position:'static',
                        borderBottom:`2px solid #F2F2F2`}}>
                            <div onMouseUpCapture={()=>setPressed('Login')} 
                            onMouseEnter={()=>setState('Login')}
                            onMouseLeave={()=>setState(pressed)}
                            style={{width:'25%',height:'100%',
                            justifyContent:'center',
                            alignItems:'center',
                            display:'flex',
                            backgroundColor:pressed!=='Login' && state==='Login' ? '#F2F2F2':null ,                            
                            borderBottom:`2px solid ${pressed==='Login'?'#019A02':'#F2F2F2'}`}}>
                              <text style={{userSelect:'none',
                              fontFamily:'Segoe UI',
                              color:pressed==='Login' || state==='Login'?'#019A02':'#777978',fontSize:19}}>Login</text>
                            </div>
                            <div onMouseUpCapture={()=>setPressed('Signup')} 
                            onMouseEnter={()=>setState('Signup')} 
                            onMouseLeave={()=>setState(pressed)} 
                            style={{width:'25%',height:'100%',
                            justifyContent:'center',
                            alignItems:'center',
                            display:'flex',
                            backgroundColor:pressed!=='Signup' && state==='Signup'&& pressed !=='Signup2' ? '#F2F2F2':null ,                            
                            borderBottom:`2px solid ${pressed==='Signup'|| pressed === 'Signup2' ?'#019A02':'#F2F2F2'}`
                            }}>
                              <text style={{userSelect:'none',
                              fontFamily:'Segoe UI',
                              color:pressed==='Signup' || state==='Signup' || state==='Signup2'?'#019A02':'#777978',fontSize:19}}>Sign Up</text>
                            </div>
                        </div>
                        {pressed === 'Login'?
                        <div style={{width:'56%',height:'30%'}}>
                          <Login/>
                        </div>:
                        <div style={{width:'56%',height:pressed === 'Signup'?'60%':'40%'}}>
                         {pressed === 'Signup'?<Signup />:<Signup2 />}
                        </div>}
                        {pressed === 'Login'|| pressed === 'Signup'?<div onMouseUpCapture={
                          ()=>pressed === 'Signup'?setPressed('Signup2'):pressed === 'Signup2'?null:pressed === 'Login'?null:null} 
                        style={{width:'56%',height:Wheight/(1080/57),marginTop:'8%',
                          borderRadius:5,boxShadow:"0px 0.5px 3px #9E9E9E",alignItems:'center',justifyContent:'center'
                          ,display:'flex',backgroundColor:'#275473'}}>
                              <text style={{fontFamily:'Segoe UI Semibold',fontSize:14,color:'white'}}>Next</text>
                        </div>:
                        <div style={{width:'56%',flexDirection:'row',marginTop:'8%',display:'flex',justifyContent:'space-between'}}>
                          <div onMouseUpCapture={()=>setPressed('Signup')} style={{width:'45%',height:Wheight/(1080/57),
                          borderRadius:5,boxShadow:"0px 0.5px 3px #9E9E9E",alignItems:'center',justifyContent:'center'
                          ,display:'flex',backgroundColor:'#ECECEC'}}>
                              <text style={{fontFamily:'Segoe UI Semibold',fontSize:14,color:'#313030'}}>Back</text>
                            </div>
                              <div onMouseUpCapture={()=>history.push('/Dashboard')} style={{width:'45%',height:Wheight/(1080/57),
                          borderRadius:5,boxShadow:"0px 0.5px 3px #9E9E9E",alignItems:'center',justifyContent:'center'
                          ,display:'flex',backgroundColor:'#275473'}}>
                              <text style={{fontFamily:'Segoe UI Semibold',fontSize:14,color:'white'}}>Next</text>
                            </div>
                          </div>}
                    </div>

        </div>
}

export default Login_Signup;