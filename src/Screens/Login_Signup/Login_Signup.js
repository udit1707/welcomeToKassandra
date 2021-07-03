import { SelectedDataIndexDirective } from '@syncfusion/ej2-react-charts';
import React, { useState } from 'react'
import { useHistory, useLocation, useParams } from 'react-router-dom';
import Logo from "../../Assets/index.png"
import Login from '../../Components/Login';
import Signup from '../../Components/Signup';
import Signup2 from '../../Components/Signup2';
const Login_Signup = () => {
    const Wwidth=window.innerWidth*0.95;
    const Wheight=window.innerHeight;
    const history=useHistory();
    const [selected,setSelected]=useState(null);
    const [nextPressed,setNextPressed]=useState(false);
    const [data,setData]=useState(null)
    const [hover,setHover]=useState(null);
    const [pressed,setPressed]=useState('Login')
    return <div style={{width:window.innerWidth,height:Wheight,paddingBottom:10,backgroundColor:'#FAFAFA',cursor:'auto',overflowY:'auto',
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
                        <div style={{width:'50%',marginTop:'2%',visibility:nextPressed?'hidden':'visible',
                        height:'6%',flexDirection:'row',display:'flex',
                        borderBottom:`2px solid #F2F2F2`}}>
                            <div  onMouseUpCapture={()=>setPressed('Login')} 
                            onMouseEnter={()=>setHover('Login')}
                            onMouseLeave={()=>setHover(pressed)}
                            style={{width:'25%',height:'100%',
                            marginTop:'2px',
                            justifyContent:'center',
                            alignItems:'center',
                            display:'flex',
                            backgroundColor:pressed!=='Login' && hover==='Login' ? '#F2F2F2':null ,                            
                            borderBottom:`2px solid ${pressed==='Login'?'#019A02':'#F2F2F2'}`}}>
                              <text style={{userSelect:'none',
                              fontFamily:'Segoe UI',
                              color:pressed==='Login' || hover==='Login'?'#019A02':'#777978',fontSize:19}}>Login</text>
                            </div>
                            <div onMouseUpCapture={()=>setPressed('Signup')} 
                            onMouseEnter={()=>setHover('Signup')} 
                            onMouseLeave={()=>setHover(pressed)} 
                            style={{width:'25%',height:'100%',
                            marginTop:'2px',
                            justifyContent:'center',
                            alignItems:'center',
                            display:'flex',
                            backgroundColor:pressed!=='Signup' && hover==='Signup'&& pressed !=='Signup2' ? '#F2F2F2':null ,                            
                            borderBottom:`2px solid ${pressed==='Signup'|| pressed === 'Signup2' ?'#019A02':'#F2F2F2'}`
                            }}>
                              <text style={{userSelect:'none',
                              fontFamily:'Segoe UI',
                              color:pressed==='Signup' || hover==='Signup' || hover==='Signup2'?'#019A02':'#777978',fontSize:19}}>Sign Up</text>
                            </div>
                        </div>
                        {pressed === 'Login'?
                        <div style={{width:'56%',height:'30%'}}>
                          <Login nextPressed={(val)=>setNextPressed(val)} />
                        </div>:
                        <div style={{width:'56%',height:pressed === 'Signup'?'60%':'40%'}}>
                         {pressed === 'Signup'?<Signup data={(val)=>setData(val)} pressed={()=>setPressed('Signup2')} selected={(val)=>setSelected(val)} />:
                         <Signup2 data={data} nextPressed={(val)=>setNextPressed(val)} selected={selected} pressedLogin={()=>setPressed('Login')}
                          pressed={()=>setPressed('Signup')} />}
                        </div>}                        
                        
                    </div>

        </div>
}

export default Login_Signup;