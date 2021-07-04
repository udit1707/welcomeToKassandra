import React from 'react'
import edit from '../../Assets/edit.png'
const Platform = props => {
    const Wwidth = window.innerWidth;
    const Wheight = window.innerHeight;
    return <div style={{width:'100%',justifyContent:'space-around',marginTop:'13%',height:Wheight*0.03,flexDirection:'row',display:'flex',alignItems:'center'}}>
        <div style={{height:'100%',width:'20%',flexDirection:'column',display:'flex'}}>
        <text style={{fontFamily:'Segoe UI Semibold',color:'#464242',fontSize:15}}>{props.name}</text>
        </div>
        <div style={{
        width:'40%',
        height:'100%',
        marginLeft:'5%',
        alignItems:'center',
        justifyContent:'space-around',
        flexDirection:'row',
        display:'flex',padding:'20px 10px',backgroundColor:'#F2F2F2',borderRadius:5,
            boxShadow:"0px 1px 3px #9E9E9E"}}>
            <input disabled={props.disable} type='text' value={props.value} placeholder={props.stocks} 
            style={{borderStyle:'none',backgroundColor:'transparent',width:'60%'}} onChange={(e)=>props.setValue(e.target.value)} />  
            <div style={{
                width:Wwidth*0.8/(1920/35),
                height:Wwidth*0.8/(1920/35),
                alignItems:'center',
                justifyContent:'center',
                display:'flex',
                padding:2,
                }}>
                <img src={edit} style={{width:'100%',height:'100%'}} />
            </div> 
            </div>
     </div>
}

export default Platform