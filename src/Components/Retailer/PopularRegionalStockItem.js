import React, { useCallback, useEffect, useState } from 'react'

import tab from '../../Assets/tabs.png'


import ToggleButtonComponent from '../ToggleButton/ToggleButton'

import ItemComponent from './ItemComponent'

const PopularRegionalStockItem =props => {
    const [toggle,setToggle]=useState('true');
    const Wwidth = window.innerWidth;
    const Wheight = window.innerHeight;
    return <div style={{width:'100%',marginTop:'4%',display:'flex',justifyContent:'center',alignItems:'flex-start'}}>
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
                    <img src={props.selected.productInfo.image} style={{width:'100%',height:'100%'}} />

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
                                {props.selected.productInfo.prodName}</text>
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
                                {props.selected.productInfo.category}</text>
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
                       
            <div>
                <ItemComponent list={props.selected.regionStats} />
            </div>
        </div>;
        
}

export default PopularRegionalStockItem;