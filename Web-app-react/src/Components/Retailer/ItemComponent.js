import React, { useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

import ItemComponentItem from './ItemComponentItem'

const ItemComponent= props => {
    const Wwidth = window.innerWidth;
    const Wheight = window.innerHeight;
    const data_tags=['Region','Stock','Price','Sold','Return','Expired','Status']
    const role=`${JSON.parse(localStorage.getItem('stateRetail')).role}`.toLowerCase();
    const selected=useSelector(state=>state[role].product);
    
    return <div style={{
        width:Wwidth*0.95/(1920/1000),
        height:Wheight*0.8,
        backgroundColor:'white',
        borderRadius:Wwidth*0.8/(1920/23),
        paddingLeft:20,
        paddingRight:20,
        paddingTop:15,
        paddingBottom:15,
        boxShadow:"0px 2px 4px #9E9E9E",
        alignItems:'center',
        justifyContent:'flex-start',
        flexDirection:'column',
        display:'flex'        
    }}>
        <div style={{height:'5%',alignSelf:'flex-start'}}>
            <text style={{color:'#3E42B5',fontSize:15,fontFamily:'Segoe UI Semibold'}}>Region Stats</text>
        </div>
        <div style={{width:'100%',flexDirection:'row',height:'5%',marginBottom:'1.5%',marginRight:'1%',marginTop:"1%",alignItems:'center',display:'flex'}}>
            {data_tags.map((item,index)=>{
                return item==='Price'? <div style={{width:'20%',height:'100%',padding:3,alignItems:'center',justifyContent:'center',display:'flex'}}>
                <text style={{fontFamily:'Segoe UI Semibold',fontSize:14,color:'#3E42B5'}}>{item}</text>
            </div>:<div style={{width:'15%',height:'100%',padding:3,alignItems:'center',justifyContent:'center',display:'flex'}}>
                    <text style={{fontFamily:'Segoe UI Semibold',fontSize:14,color:'#3E42B5'}}>{item}</text>
                </div>
            })}
        </div>
        <div style={{
            width:'100%',
            height:'90%',
            padding:5,
            overflowY:'scroll',
            flexDirection:'column',
            backgroundColor:'white',
            justifyContent:'flex-start',
            alignItems:'center',
            display:'flex',
                        
        }}>
            {selected.regionStats !== null && selected.regionStats.length !==0 ?selected.regionStats.map((item)=>
            <ItemComponentItem
            setContain={(val)=>props.setContain(val)} 
            regionId={item.id}
            retailerProductId ={item.retailerProductId}
            regional_price={item.regional_price}
            map_id={item.map_id}
            stock_count= {item.stock_count}
            sold_count= {item.sold_count}
            returned_count={ item.returned_count}
            expired_count= {item.expired_count}
            out_of_stock={item.out_of_stock}
            in_sale={item.in_sale}
/>
            ):<text style={{fontFamily:'Segoe UI ',fontSize:16,color:'#030303'}}>No Data, add items in stock</text>}
        </div>
    </div>;

   
}
export default ItemComponent;