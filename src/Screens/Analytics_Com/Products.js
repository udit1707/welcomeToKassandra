import React from 'react'

import Header from '../../Components/Headers/Header'
import NavHeader from '../../Components/Headers/NavHeader'
import NewOrders from '../../Components/NewOrders/NewOrders';
import ProductsSold from '../../Components/ProductsSold/ProductsSold';
import TotalSales from "../../Components/TotalSales/TotalSales"

const Products = props =>{
    const Wwidth=window.innerWidth*0.95;
    const Wheight=window.innerHeight;
    console.log(window.innerWidth  + "  "+ window.innerHeight)
    return <div style={{width:window.innerWidth,height:'100%',paddingBottom:15,backgroundColor:'#F2F2F2'}}>
        <Header />
        <NavHeader />
        <div style={{
            width:'100%',
            height:'2.5%',
            alignItems:'center',
            flexDirection:'row',
            display:'flex',
            justifyContent:'flex-start'}}>

        </div>
        <div style={{
            width:'100%',
            height:'70%',
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
                      
        </div>
    </div>

    
}

export default Products