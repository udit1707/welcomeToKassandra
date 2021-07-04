import React, { useState } from 'react'

import './geo.css';
import tab from '../../Assets/tabs.png'
import Sli from "../../Assets/slider.png"

import LinearGradient from './LinearGradient.js'
import GeoMap from '../GeoMap';
const INDIA_TOPO_JSON = require('./india.topo.json');

const GeographicalStockItem = props => {
    const [hoverFilter,setHoverFilter]=useState(false);
    const [FilterShow,setFilterShow]=useState(false);
    const [selected,setSelected]=useState('high to low')
    const data=[
        { map_id: 'AP',sold_count: 15,price:180 },
        { map_id: 'AR',sold_count: 14,price:180 },
        { map_id: 'AS',sold_count: 13,price:180 },
        { map_id: 'BR',sold_count: 21,price:180 },
        { map_id: 'CT',sold_count: 10 ,price:180}];  
  
  const Sort=(order)=>{
    const newData=data.sort((a,b)=>{return order === 'high to low'?b.sold_count-a.sold_count:a.sold_count-b.sold_count});
    return newData;

}
  
  const Wwidth = window.innerWidth;
  const Wheight = window.innerHeight;
  
    return <div style={{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-around',
        marginTop:'5%',
        alignItems:'center',
        display:'flex'}} 
    >
        <GeoMap analysis='Region Wise Demand Analysis' title2='Feasible Pricing' title1='Ongoing Demand' />
      <div style={{width:'30%'}} >
      <div style={{
                width:Wwidth*0.8/(1920/550),
                height:Wheight*0.8/(1080/670),
                backgroundColor:'white',
                borderRadius:10,
                flexDirection:'column',
                display:'flex',               
                padding:15,
                boxShadow:"2px 2px 5px #9E9E9E",}}>
                    <div style={{width:'100%',height:Wheight*0.05,justifyContent:'space-between',display:'flex'}}>
                        <div style={{width:'50%'}}>
                    <text style={{fontFamily:'Segoe UI Semibold',fontSize:16,color:'#464242',}}>
                        Regional Demand</text>
                        </div>
                    
                    <div style={{flexDirection:'row',display:'flex',justifyContent:'center',width:'45%'}}>
                    <div style={{flexDirection:'column',display:'flex',width:'100%',height:Wheight*0.4}}>
                    <div style={{width:'100%'}}>
                        <text style={{userSelect:'none',fontFamily:'Segoe UI Semibold',color:'#707070',fontSize:14}}>Sort by {selected}</text>
                    </div>
                    <div style={{
                        visibility:FilterShow?'visible':'hidden',
                        width:'100%',
                        borderRadius:0,
                        paddingBottom:5,
                        boxShadow:"0px 0.5px 3px #9E9E9E",
                        backgroundColor:'white',
                        flexDirection:'column',
                        alignItems:'center',
                        overflowX:'hidden',
                        marginTop:'2%',
                        overflowY:'auto',
                        zIndex:1,
                        justifyContent:'flex-start',
                        display:'flex'}}>
                            {['high to low','low to high'].map(item=>
                            <div 
                            onBlur={()=>setFilterShow(false)}
                            onMouseEnter={()=>setHoverFilter(item)}
                            onMouseLeave={()=>setHoverFilter(null)}
                            onMouseUpCapture={()=>{setSelected(item);setFilterShow(false)}}
                            style={{
                                width:'100%',
                                backgroundColor:selected === item ?'#E3DFDF':hoverFilter === item ?'#F5F3F3':null,
                                justifyContent:'center',
                                alignItems:'center',
                                padding:3}}>
                                <text  style={{userSelect:'none',fontFamily:'Segoe UI',color:'#707070',fontSize:12}}>{item}</text>
                            </div>)}
                    </div>  
        
                    </div>
                    <div
                    onMouseUpCapture={()=>setFilterShow(state=>!state)}
                    style={{
                        width:Wwidth*0.8/(1920/30),
                        height:Wwidth*0.8/(1920/30),
                        justifyContent:'center',
                        alignItems:'center',
                        display:'flex',
                        padding:2
                    }}>
                        <img src={Sli} style={{width:'100%',height:'100%',transform:!FilterShow ?"rotate(180deg)":null}} />

                    </div>
                    </div>
                    </div>

                    {Sort(selected).map(item=>{
                        return <div style={{justifyContent:'space-between',display:'flex',width:'100%',marginBottom:'5%'}}>
                            <div style={{justifyContent:'flex-start',display:'flex'}}><text style={{
                                fontFamily:'Segoe UI Semibold',
                                fontSize:15,
                                color:'#464242'}}>{
                                INDIA_TOPO_JSON.objects.india.geometries.find(region=>region.id === item.map_id).properties.name}</text>
                                </div>
                                <div style={{width:'30%',justifyContent:'flex-start',display:'flex'}}>
                            <text style={{
                                fontFamily:'Segoe UI Semibold',
                                fontSize:15,
                                color:'#376BF0'}}><text style={{
                                    fontFamily:'Segoe UI Semibold',
                                    fontSize:15,
                                    color:'#464242'}}>Sales </text>{item.sold_count} %</text>
                                    </div>
                            </div>})}

                </div>
                </div>
    </div> ;
}

export default GeographicalStockItem;