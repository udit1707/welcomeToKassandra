import React, { useState } from 'react'
import tshirt from '../../Assets/tshirt.png'
import slider from '../../Assets/sli_whi.png'
import tshirt2 from '../../Assets/tshirt2.jpg'
import lap from '../../Assets/lap.jpg'
import phone from '../../Assets/phone.jpg'
import earpod from '../../Assets/earpod.jpeg'
import tab from '../../Assets/tabs.png'
import ScrollMenu from 'react-horizontal-scrolling-menu'
import ToggleButtonComponent from '../ToggleButton/ToggleButton'
import AllotStocksItem from './AlotStocksItem'
import CategoryButton from '../CategoryButton'
import RegionalAllotStockItem from './RegionalAllotStockItem'
import GeographicalStockItem from './GeographicalStockItem'
import { Menu } from '../Menu'
import HorizontalScroll from 'react-scroll-horizontal'
import { useDispatch, useSelector } from 'react-redux'

const AllotStocks =props => {
    
    const [state,setState]=useState('Digital');
    const [view,setView]=useState('Normal');
    const [category,setCategory]=useState(null);
    const [toggle,setToggle]=useState('true ');
    const [hover,setHover]=useState(null);
    const token=JSON.parse(localStorage.getItem('stateRetail')).token;
    const role=`${JSON.parse(localStorage.getItem('stateRetail')).role}`.toLowerCase();
    const products = useSelector(state=>state[role].products);
    const categories = useSelector(state=>state[role].categories);
    const [selected,setSelected]=useState(products[0]);
    const dispatch=useDispatch();
    // [{src:tshirt,title:'1'},{src:tshirt2,title:'2'},{src:lap,title:'3'},{src:earpod,title:'4'},{src:phone,title:'5'},{src:earpod,title:'6'},{src:phone,title:'7'}];
    const Wwidth = window.innerWidth;
    const Wheight = window.innerHeight;
    const onSelect= key =>{
        console.log(`onSelect: ${key}`);
        setSelected( key );
    }
    var menuData=products.map(item=>{
                        if (selected.prodId === item.id || hover === item.id){
                            return <div 
                    onMouseEnter={()=>setHover(item.id)}
                    onMouseLeave={()=>setHover(null)}
                    key={item.id}
                    onMouseUpCapture={()=>setSelected(item)}
                    style={{
                        width:Wwidth*0.03,
                        height:Wwidth*0.03,
                        borderRadius:Wwidth*0.03,
                        padding:1,
                        marginRight:10,
                        boxShadow:"0px 0.5px 3px #9E9E9E",
                        overflow:'hidden',
                        border:`2px solid #376BF0`}}>
                            <img src={item.image} style={{width:'100%',height:'100%'}} />
                    </div>}
                    else{
                    return <div 
                    onMouseEnter={()=>setHover(item.id)}
                    onMouseLeave={()=>setHover(null)}
                    key={item.id}
                    onMouseUpCapture={()=>setSelected(item)}
                    style={{
                        width:Wwidth*0.03,
                        height:Wwidth*0.03,
                        borderRadius:Wwidth*0.03,
                        padding:1,
                        marginRight:10,
                        boxShadow:"0px 0.5px 3px #9E9E9E",
                        overflow:'hidden',
                        }}>
                            <img src={item.image} style={{width:'100%',height:'100%'}} />
                    </div>}})
    return   <div style={{width:'100%',height:'100%',flexDirection:'column',justifyContent:'flex-start',alignItems:'center',display:'flex'}}>
                    <div style={{width:'100%',height:Wheight*0.06,marginTop:'2%',display:'flex',justifyContent:'space-around',alignItems:'center'}}>
                        <CategoryButton
                        style={{
                            width:Wwidth/(1920/260),
                            height:Wheight/(1080/60),
                        }}
                        setCategory={(val)=>setCategory(val)}
                        title='Select Category' 
                        data={categories}/>
                    <div style={{alignItems:'center',justifyContent:'center',display:'flex',position:'relative'}}>
                        
                    <ScrollMenu 
                        data={menuData}
                        dragging={false}
                        inertiaScrolling={true}
                        scrollToSelected={false}                    
                        scrollBy={2}
                        arrowRight={<div style={{
                            backgroundColor:'#376BF0',
                            alignItems:'center',
                            justifyContent:'center',
                            display:'flex',
                            width:30,
                            height:30,
                            borderRadius:30,
                            padding:5,
                            marginLeft:5}}>
                            <img src={slider} style={{width:'100%',height:'100%',transform:'rotate(180deg)',color:'white'}} /></div>}
                        arrowLeft={<div style={{
                            backgroundColor:'#376BF0',
                            alignItems:'center',
                            justifyContent:'center',
                            display:'flex',
                            width:30,
                            height:30,
                            borderRadius:30,
                            padding:5,
                            marginRight:5}}>
                            <img src={slider} style={{width:'100%',height:'100%',transform:'rotate(0deg)',color:'white'}} /></div>}
                        innerWrapperStyle={{ 
                            justifyContent:'flex-start',
                            alignItems:'center',
                            display:'flex',}}
                            
                        wrapperStyle={{
                            width:Wwidth*0.2,
                            height:Wheight*0.1,
                            backgroundColor:'#FFFFFF',
                            boxShadow:"0px 0.5px 3px #9E9E9E",
                            justifyContent:'flex-start',
                            alignItems:'center',
                            display:'flex',
                            borderRadius:Wwidth*0.05}} />
                            </div>
                            <div style={{width:Wwidth*0.1,height:Wheight*0.05,
                                boxShadow:"0px 0.5px 3px #9E9E9E",
                                justifyContent:'center',
                                alignItems:'center',
                                backgroundColor:'white',
                                borderRadius:10,
                                overflow:'hidden',
                                cursor:'pointer',
                                display:'flex'}}>
                                <div onMouseUpCapture={()=>setState("Digital")} 
                                style={{
                                    width:'50%',
                                    backgroundColor:state === 'Digital'?'#376BF0':null,
                                    height:'100%',
                                    alignItems:'center',
                                    justifyContent:'center',
                                    display:'flex'}}>
                                    <text style={{fontFamily:'Segoe UI',fontSize:15,color:state === 'Digital'?'white':'#376BF0'}}>Digital</text>
                                </div>
                                <div onMouseUpCapture={()=>setState("Regional")} 
                                style={{
                                    width:'50%',
                                    backgroundColor:state === 'Regional'?'#376BF0':null,
                                    height:'100%',
                                    alignItems:'center',
                                    justifyContent:'center',
                                    display:'flex'}}>
                                    <text style={{fontFamily:'Segoe UI',fontSize:15,color:state === 'Regional'?'white':'#376BF0'}}>Regional</text>
                                </div>                            
                                </div>
                            </div>
                        {state === 'Digital'?
                        <AllotStocksItem item={selected}/>:
                        <div style={{width:'100%',marginTop:'3%',justifyContent:'space-evenly',display:'flex',flexDirection:'column',alignItems:'center'}}>
                            <div style={{height:Wheight*0.05,
                                boxShadow:"0px 0.5px 3px #9E9E9E",
                                justifyContent:'center',
                                alignItems:'center',
                                backgroundColor:'white',
                                borderRadius:10,
                                overflow:'hidden',
                                cursor:'pointer',
                                display:'flex'}}>
                                <div onMouseUpCapture={()=>setView("Normal")} 
                                style={{
                                    width:'50%',
                                    backgroundColor:view === 'Normal'?'#376BF0':null,
                                    height:'100%',
                                    alignItems:'center',
                                    padding:20,
                                    justifyContent:'center',
                                    display:'flex'}}>
                                    <text style={{fontFamily:'Segoe UI',fontSize:15,color:view === 'Normal'?'white':'#376BF0'}}>Normal</text>
                                </div>
                                <div onMouseUpCapture={()=>setView("Geographical")} 
                                style={{
                                    width:'50%',
                                    backgroundColor:view === 'Geographical'?'#376BF0':null,
                                    height:'100%',
                                    alignItems:'center',
                                    padding:20,
                                    justifyContent:'center',
                                    display:'flex'}}>
                                    <text style={{fontFamily:'Segoe UI',fontSize:15,color:view === 'Geographical'?'white':'#376BF0'}}>Geographical</text>
                                </div>                            
                                </div>
                                {view === 'Normal'?
                                <div style={{width:'100%',height:'100%'}}>
                                    <RegionalAllotStockItem src={selected.src} /></div>:<GeographicalStockItem />}
                        </div>}
                    </div>
}

export default AllotStocks;