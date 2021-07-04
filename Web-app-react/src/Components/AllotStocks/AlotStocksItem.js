import React, { useCallback, useState } from 'react'
import tshirt from '../../Assets/tshirt.png'
import tshirt2 from '../../Assets/tshirt2.jpg'
import lap from '../../Assets/lap.jpg'
import phone from '../../Assets/phone.jpg'
import earpod from '../../Assets/earpod.jpeg'
import tab from '../../Assets/tabs.png'

import ScrollMenu from 'react-horizontal-scrolling-menu'
import ToggleButtonComponent from '../ToggleButton/ToggleButton'
import Platform from './platform'
import { useDispatch, useSelector } from 'react-redux'
import Loader from 'react-loader-spinner'
import edit from '../../Assets/edit.png'
import { updateProductStock } from '../../store/actions/manufacturer'

const AllotStocksItem =props => {
    const [toggle,setToggle]=useState('true');
    const [retail,setRetail]=useState(null);
    const [amazon,setAmazon]=useState(0);
    const [flipkart,setFlipkart]=useState(0);
    const [ebay,setEbay]=useState(0);
    const [myntra,setMyntra]=useState(0);
    const [alibaba,setAlibaba]=useState(0);
    const [contain,setContain]=useState(true);
    const dispatch=useDispatch();
    const token=JSON.parse(localStorage.getItem('stateRetail')).token;
    const role=`${JSON.parse(localStorage.getItem('stateRetail')).role}`.toLowerCase();

    const press=useCallback(async ()=>{
        setContain(false)
        try{
            const data=JSON.stringify({
                "offUnits":retail,
                "amazonUnits":amazon,
                "ebayUnits":ebay,
                "aliBabaUnits":alibaba,
                "flipkartUnits":flipkart,
                "myntraUnits":myntra,
                "prodId":props.item.prodId
            })
            const result = await dispatch(updateProductStock(data,token));
            console.log(result);                    
            setContain(true);
        }catch(err){
            setContain(true)
            console.log(err);
            window.alert(err.message)
        }
        return ;
    },[dispatch,setContain,props])
    
    const Wwidth = window.innerWidth;
    const Wheight = window.innerHeight;
    const component =!contain?
        <div style={{
            width:Wwidth*0.85/(1920/505),
            height:Wheight/(1080/496),
            justifyContent:'center',
            alignItems:'center',display:'flex',flexDirection:'column'}}>
            <Loader
            type="Puff"
            color="#376BF0"        
            height={80}
            width={80}
            //3 secs
        />
        <text style={{fontFamily:'Segoe UI Semibold ',fontSize:20,color:'#275473',marginTop:'3%'}}>Fetching In....</text>
        </div>:<div style={{width:'100%',marginTop:'4%',display:'flex',justifyContent:'center',alignItems:'flex-start'}}>
    <div style={{
        width:'30%',
        height:Wheight*0.8/(1080/670),
        backgroundColor:'white',
        marginRight:'4%',
        borderRadius:15,
        padding:15,
        boxShadow:"2px 2px 5px #9E9E9E",}}>
            <div style={{width:'100%',height:'60%',flexDirection:'row',display:'flex',justifyContent:'space-around'}}>
                <div style={{width:'52%',height:'100%',justifyContent:'center',alignItems:'center',display:'flex'}}>
                    <img src={props.item.image} style={{width:'100%',height:'100%'}} />

                </div>
                <div style={{width:'48%',marginLeft:'5%',height:'100%',flexDirection:'column',
                justifyContent:'flex-start',alignItems:'flex-start',display:'flex'}}>
                    <text style={{fontFamily:'Segoe UI Semibold',color:'#707070',fontSize:15}}>Title</text>
                     <div style={{
                         width:'90%',
                         marginTop:'5%',
                         marginBottom:'5%',
                         alignItems:'center',
                         justifyContent:'flex-start',
                         display:'flex',
                         padding:'5px 10px',
                         backgroundColor:'#F2F2F2',
                         borderRadius:5,
                        boxShadow:"0px 1px 3px #9E9E9E"}}>
                            <text style={{fontFamily:'Segoe UI Semibold',color:'#707070',fontSize:14}}>
                                {props.item.prodName}</text>
                    </div>
                    <text style={{fontFamily:'Segoe UI Semibold',color:'#707070',fontSize:15}}>Category</text>
                     <div style={{
                         width:'90%',
                         marginTop:'5%',
                         marginBottom:'5%',
                         alignItems:'center',
                         justifyContent:'flex-start',
                         display:'flex',
                         padding:'5px 10px',
                         backgroundColor:'#F2F2F2',
                         borderRadius:5,
                        boxShadow:"0px 1px 3px #9E9E9E"}}>
                            <text style={{fontFamily:'Segoe UI Semibold',color:'#707070',fontSize:14}}>
                                {props.item.category}</text>
                    </div>
                    <text style={{fontFamily:'Segoe UI Semibold',color:'#707070',fontSize:15}}>Pricing</text>
                     <div style={{
                         marginTop:'5%',
                         marginBottom:'5%',
                         alignItems:'center',
                         justifyContent:'flex-start',
                         display:'flex',
                         padding:'5px 10px',
                         backgroundColor:'#F2F2F2',
                         borderRadius:5,
                        boxShadow:"0px 1px 3px #9E9E9E"}}>
                            <text style={{fontFamily:'Segoe UI Semibold',color:'#707070',fontSize:14}}>
                                $ 100</text>
                    </div>
                    <text style={{fontFamily:'Segoe UI Semibold',color:'#707070',fontSize:16}}>Specs</text>
                     <div style={{
                         width:45,
                         height:45,
                         marginTop:'5%',
                         marginBottom:'5%',
                         alignItems:'center',
                         justifyContent:'flex-start',
                         display:'flex',
                         padding:'5px 10px',
                         backgroundColor:'#F2F2F2',
                         borderRadius:5,
                        boxShadow:"0px 1px 3px #9E9E9E"}}>
                            <img src={tab} style={{width:'100%',height:'100%'}} />
                    </div>

                </div>
            </div>
            <div style={{height:'35%',alignItems:'flex-end',justifyContent:'flex-end',display:'flex',width:'100%',paddingRight:20}}>
            <div style={{flexDirection:'row',display:'flex'}}>
                <div><ToggleButtonComponent value={toggle} onChange={()=>setToggle(!toggle)}/></div>
                <div style={{marginLeft:'10%',alignItems:'center',display:'flex'}}>
                <text style={{fontFamily:'Segoe UI Semibold',fontSize:13.5,color:toggle?'#3E42B5':'#707070'}}>
                    {toggle ? 'Active':'Inactive'}</text>
                </div>

                </div>
            </div>
            </div>
            <div style={{flexDirection:'column',display:'flex',marginRight:'4%'}}>
            <text style={{
                        fontFamily:'Segoe UI Semibold',
                        fontSize:17,
                        color:'#464242',
                        }}>
                    Stock Left</text>
            <div style={{
                width:Wwidth*0.08,
                height:Wheight*0.07,
                backgroundColor:'white',
                padding:5,
                borderRadius:10,
                boxShadow:"2px 2px 5px #9E9E9E",
                marginTop:'5%',
                justifyContent:'center',
                alignItems:'center',
                display:'flex'}}>
                    <text style={{
                        fontFamily:'Segoe UI Semibold',
                        fontSize:18,
                        color:'#707070',
                        }}>
                    {props.item.unitsAvailable}</text>
            </div>
            </div>
            <div style={{flexDirection:'column',display:'flex',marginRight:'4%'}}>
            <text style={{
                        fontFamily:'Segoe UI Semibold',
                        fontSize:17,
                        color:'#464242',
                        }}>
                     Assign Retailers</text>
                     <div style={{
                        width:'40%',
                        height:'100%',
                        marginLeft:'5%',
                        alignItems:'center',
                        justifyContent:'space-around',
                        flexDirection:'row',
                        display:'flex',padding:'20px 10px',backgroundColor:'#F2F2F2',borderRadius:5,
                        boxShadow:"0px 1px 3px #9E9E9E"}}>
                    <input  type='text' value={retail} placeholder={props.item.retailerStock} 
                    style={{borderStyle:'none',backgroundColor:'transparent',width:'60%'}} onChange={(e)=>setRetail(e.target.value)} />  
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
            <div style={{
                width:Wwidth*0.8/(1920/500),
                height:Wheight*0.8/(1080/670),
                backgroundColor:'white',
                borderRadius:10,
                userSelect:'none',
                flexDirection:'column',
                display:'flex',
                padding:15,
                boxShadow:"2px 2px 5px #9E9E9E",}}>
                    <div style={{width:'100%',justifyContent:'space-between',display:'flex'}}>
                    <text style={{fontFamily:'Segoe UI Semibold',fontSize:17,color:'#464242',}}>
                        Platform Allotment</text>
                    <div onMouseUpCapture={()=>press()} style={{
                        backgroundColor:'#376BF0',
                        width:Wwidth*0.05,
                        height:Wheight*0.05,
                        cursor:'pointer',
                        borderRadius:10,
                        justifyContent:'center',
                        alignItems:'center',
                        boxShadow:"2px 2px 5px #9E9E9E",
                        display:'flex'}}>
                            <text style={{fontFamily:'Segoe UI ',fontSize:15,color:'white',}}>
                        Save</text>

                    </div>
                    </div>
                    <div style={{marginTop:'5%',width:'100%',height:'100%',flexDirection:'column',overflowY:'auto'}}>
                   <Platform name='Amazon' value={amazon} setValue={(e)=>setAmazon(e)} disabled={false} stocks={props.item.amazonStock} />
                   <Platform name='Flipkart' value={flipkart} setValue={(e)=>setFlipkart(e)} disabled={false} stocks={props.item.flipkarStock} />
                   <Platform name='E-bay' value={ebay} setValue={(e)=>setEbay(e)} disabled={false} stocks={props.item.ebayStock} />
                   <Platform name='Alibaba' value={alibaba} setValue={(e)=>setAlibaba(e)} disabled={false} stocks={props.item.amazonStock} />
                   <Platform name='Myntra' value={myntra} setValue={(e)=>setMyntra(e)} disabled={false} stocks={props.item.amazonStock} />
                   </div>

            </div>
        </div>;
        return component
}

export default AllotStocksItem;