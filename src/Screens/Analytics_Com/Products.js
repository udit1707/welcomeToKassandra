import React from 'react'
import { useHistory, useLocation } from 'react-router-dom';

import Header from '../../Components/Headers/Header'
import NavHeader from '../../Components/Headers/NavHeader'
import ProdHeader from '../../Components/Headers/ProdHeader';
import NewOrders from '../../Components/NewOrders/NewOrders';
import ProductsSold from '../../Components/ProductsSold/ProductsSold';
import Stocks from '../../Components/StockItems/Stocks';
import TotalSales from "../../Components/TotalSales/TotalSales"
import AllotStocks from '../../Components/AllotStocks/AllotStocks';
import RegionalStock from '../../Components/Retailer/RegionalStock';

const Products = props =>{
    const Wwidth=window.outerWidth;
    const Wheight=window.innerHeight;
    const location=useLocation();
    const history=useHistory();
    const role=`${JSON.parse(localStorage.getItem('stateRetail')).role}`.toLowerCase();
    console.log(window.innerWidth  + "  "+ window.innerHeight)
    return <div style={{width:Wwidth,height:'100%',paddingBottom:15,backgroundColor:'#FAFAFA',cursor:'auto'}}>
        <Header />
        <NavHeader />
        <ProdHeader />
        {location.pathname === '/products/unitSales'?<div>
        <div style={{
            width:'100%',
            height:'100%',
            flexDirection:'row',
            marginTop:'1.5%',
            display:'flex',
            justifyContent:'space-evenly',
            alignItems:'flex-start'
        }}>
            <ProductsSold />
            <NewOrders />
        </div>
        <div style={{
            width:'100%',
            height:'40%', 
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-evenly',
            display:'flex',
            marginTop:'1.5%'
        }}> 
            <TotalSales 
            platform='Amazon' 
            totalUnitsSold='120' 
            totalWorth='$ 120k' 
            totalUnitsSoldReview='+14%'
            totalWorthReview='+8%' 
            reviewStatusUnits='#08DF16'
            reviewStatusWorth='#08DF16' />
            <TotalSales 
            platform='Flipkart' 
            totalUnitsSold='100' 
            totalWorth='$ 130k' 
            totalUnitsSoldReview='-14%'
            totalWorthReview='-6%' 
            reviewStatusUnits='#E72121'
            reviewStatusWorth='#E72121' />
            <TotalSales 
            platform='Ebay' 
            totalUnitsSold='100' 
            totalWorth='$ 130k' 
            totalUnitsSoldReview='-14%'
            totalWorthReview='-6%' 
            reviewStatusUnits='#E72121'
            reviewStatusWorth='#E72121' />
            <TotalSales 
            platform='Flipkart' 
            totalUnitsSold='100' 
            totalWorth='$ 130k' 
            totalUnitsSoldReview='-14%'
            totalWorthReview='-6%' 
            reviewStatusUnits='#E72121'
            reviewStatusWorth='#E72121' />
                      
        </div></div>:
        location.pathname === '/products/allotStocks'?<div style={{
            width:'100%',
            height:'100%',
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center'
        }}>
            <AllotStocks />
            </div>:role==='manufacturer'?<div style={{
            width:'100%',
            height:'100%',
            flexDirection:'row',
            marginTop:'1.5%',
            display:'flex',
            justifyContent:'center',
            alignItems:'flex-start'
        }}>
            <Stocks/>
            <div onMouseUpCapture={()=>history.push('/addProd')}  style={{width:160,height:50,marginLeft:'5%',alignItems:'center',cursor:'pointer',
            display:'flex',flexDirection:'row',justifyContent:'flex-start',userSelect:'none'
            ,backgroundColor:'#376BF0',borderRadius:10,boxShadow:"0px 0.5px 3px #9E9E9E"}}>
                
                <div style={{width:50,height:50,
                backgroundColor:'#376BF0',
                justifyContent:'center',
                alignItems:'center',
                display:'flex',
                borderRadius:10,boxShadow:"2px 0px 3px #403F3F"}}>
                    <text style={{color:'white',fontSize:40}}>+</text>
                </div>
                <text style={{fontFamily:'Segoe UI Semibold',fontSize:15,color:'white',marginLeft:12}}>Add Product </text>
            </div>
    </div>:<RegionalStock />}
    </div>}

export default Products