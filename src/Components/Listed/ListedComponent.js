import React, { useState } from 'react'
import PlatformSpecific from './PlatformSpecific';
import Similar from './Similar';
import ProductPreview from './ProductPreview';
import Order from '../../Assets/order.png'
import Tshirt from '../../Assets/tshirt.png'
import Tshirt2 from '../../Assets/tshirt2.jpg'
import Pant from '../../Assets/pant.jpg'
import Inco from '../../Assets/inco.png'
import Feed from '../../Assets/feed.png'
import Prof from '../../Assets/prof.png'
import tab from '../../Assets/tabs.png'

import ToggleButtonComponent from '../ToggleButton/ToggleButton';
const ListedComponent = props => {
    const Wwidth = window.innerWidth;
    const [toggle,setToggle]=useState('true');
    const Wheight = window.innerHeight;
    const data_tags=['Platform','Total Sales','Total Revenue','Total Profit','Recommend'];
    const data=[
        {platformName:'Amazon',
        totalSales:1500,
        totalRevenue:1000,
        totalProfit:890,
        platformRecommendStatus:'increase',
        platformRecommendValue:5,
        mssg:'Increase by'},

        {platformName:'Flipkart',
        totalSales:1400,
        totalRevenue:1900,
        totalProfit:1100,
        platformRecommendStatus:'decrease',
        platformRecommendValue:3,
        mssg:'Decrease by'},

        {platformName:'Ebay',
        totalSales:1500,
        totalRevenue:1000,
        totalProfit:890,
        platformRecommendStatus:'constant',
        platformRecommendValue:null,
        mssg:'Keep constant'},

        {platformName:'Alibaba',
        totalSales:1500,
        totalRevenue:1000,
        totalProfit:890,
        platformRecommendStatus:'increase',
        platformRecommendValue:5,
        mssg:'Increase by'}];

    const webData=[{
        src:Tshirt,itemTitle:'Black Round Neck T -Shirt,sizes - X, L,XL ',
        itemId:'#124513',soldUnits:'1000',
        soldPositiveCount:'42',soldNegativeCount:'12',price:120,platformName:'Amazon'},
        {
        src:Tshirt2,itemTitle:'Black Round Neck T -Shirt,sizes - X, L,XL ',
        itemId:'#124513',soldUnits:'1000',
        soldPositiveCount:'42',soldNegativeCount:'12',price:120,platformName:'Ebay'},
        {
        src:Tshirt,itemTitle:'Black Round Neck T -Shirt,sizes - X, L,XL ',
        itemId:'#124513',soldUnits:'1000',
        soldPositiveCount:'42',soldNegativeCount:'12',price:120,platformName:'Alibaba'},
        {
        src:Pant,itemTitle:'Black Round Neck T -Shirt,sizes - X, L,XL ',
        itemId:'#124513',soldUnits:'1000',
        soldPositiveCount:'42',soldNegativeCount:'12',price:120,platformName:'Amazon'},]

    return <div style={{width:'100%',padding:20,flexDirection:'row',display:'flex',marginTop:'1%'}}>
            <div style={{width:'50%',flexDirection:'column',display:'flex',marginLeft:'0%',padding:25}}>
            <div style={{
                width:'80%',
                height:'45%',
                flexDirection:'column',
                justifyContent:'space-between',
                backgroundColor:'white',
                borderRadius:15,
                padding:10,
                boxShadow:"2px 2px 5px #9E9E9E",}}>
            <div style={{width:'100%',height:'55%',flexDirection:'row',display:'flex',justifyContent:'space-around'}}>
                <div style={{width:'53%',height:'100%',justifyContent:'center',alignItems:'center',display:'flex'}}>
                    <img src={props.src} style={{width:'100%',height:'100%'}} />

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
                                Tshirt Green Light</text>
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
                                Casual Wear</text>
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
            <div style={{height:'45%',alignItems:'flex-end',justifyContent:'flex-end',display:'flex',width:'100%',paddingRight:20}}>
            <div style={{flexDirection:'row',display:'flex'}}>
                <div><ToggleButtonComponent value={toggle} onChange={()=>setToggle(!toggle)}/></div>
                <div style={{marginLeft:'10%',alignItems:'center',display:'flex'}}>
                <text style={{fontFamily:'Segoe UI Semibold',fontSize:13.5,color:toggle?'#3E42B5':'#707070'}}>
                    {toggle ? 'Active':'Inactive'}</text>
                </div>

                </div>
            </div>
            </div>
            <div style={{width:'90%',
                borderRadius:15,
                padding:15,
                marginTop:'5%',
                boxShadow:"2px 2px 5px #9E9E9E",
                backgroundColor:'white',
                height:Wheight*0.8/(1080/700),
                alignItems:'center',
                justifyContent:'flex-start',
                flexDirection:'column',
                display:'flex'     
                }}>
                    <div style={{height:'3%',alignSelf:'flex-start'}}>
                        <text style={{color:'#383839',fontSize:15,fontFamily:'Segoe UI Semibold'}}>Platform Specific</text>
                    </div>
                    <div style={{width:'100%',flexDirection:'row',height:'5%',marginBottom:'1.5%',marginRight:'1%',marginTop:"5%",alignItems:'center',justifyContent:'space-evenly',display:'flex'}}>
                        {data_tags.map((item,index)=>{
                            return <div style={{width:item==='Recommend'?'28%':'20%',
                            height:'100%',padding:3,alignItems:'center',justifyContent:'center',display:'flex'}}>
                                <text style={{fontFamily:'Segoe UI Semibold',fontSize:14,color:'#3E42B5'}}>{item}</text>
                            </div>
                        })}
                    </div>
                    <div style={{
                        width:'100%',
                        height:'90%',
                        padding:5,
                        overflowY:'scroll',
                        marginTop:'2%',
                        flexDirection:'column',
                        backgroundColor:'white',
                        justifyContent:'flex-start',
                        alignItems:'center',
                        display:'flex',
                                    
                    }}>
                        {data.map((item)=>
                        <PlatformSpecific 
                        platformName={item.platformName} 
                        totalSales={item.totalSales}
                        totalRevenue={item.totalRevenue}
                        totalProfit={item.totalProfit} 
                        platformRecommendStatus={item.platformRecommendStatus} 
                        platformRecommendValue={item.platformRecommendValue}
                        mssg={item.mssg} />
                        )}
                    </div>
            </div>
            </div>
            <div style={{width:'50%',flexDirection:'column',display:'flex'}}>
                <div style={{width:'70%',justifyContent:'space-between',display:'flex'}}>
                <ProductPreview
                src={Order}
                backgroundColor='#FDF4E9'
                borderColor='#EDAF60'
                previewTitle='Total Orders'
                previewTitleData='1000'
                previewAnalytics='1.2%'               
                />
                <ProductPreview
                src={Inco}
                backgroundColor='#EAF0FE'
                borderColor='#376BF0'
                previewTitle='Total Income'
                previewTitleData='2000'
                previewAnalytics='1.2%'              
                />
                </div>
                <div style={{width:'70%',justifyContent:'space-between',display:'flex',marginTop:'3%'}}>
                <ProductPreview
                src={Prof}
                backgroundColor='#EDEEF8'
                borderColor='#5356BD'
                previewTitle='Total Profits'
                previewTitleData='3000'
                previewAnalytics='1.2%'
                />
                <ProductPreview
                src={Feed}
                backgroundColor='#F4FAF5'
                borderColor='#219434'
                previewTitle='Feedbacks'
                previewTitleData='1000'
                previewAnalytics='2.9%'
                />
                </div>
                <div style={{width:'95%',
                borderRadius:15,
                padding:15,
                marginTop:'5%',
                backgroundColor:'white',
                boxShadow:"2px 2px 5px #9E9E9E",
                height:Wheight*0.8/(1080/790),
                alignItems:'center',
                justifyContent:'flex-start',
                flexDirection:'column',
                display:'flex'     
                }}> 
                    <div style={{height:'3%',alignSelf:'flex-start'}}>
                        <text style={{color:'#383839',fontSize:15,fontFamily:'Segoe UI Semibold'}}>Similar Products on Web</text>
                    </div>
                    <div style={{width:'100%',flexDirection:'row',height:'5%',marginBottom:'1.5%',marginLeft:"4%",marginRight:'1%',marginTop:"3%",alignItems:'center',display:'flex'}}>
                        <div style={{width:'35%',height:'100%',position:'relative',padding:3,alignItems:'center',justifyContent:'flex-start',display:'flex'}}>
                            <text style={{fontFamily:'Segoe UI Semibold',fontSize:14,color:'#3E42B5'}}>Item</text>
                        </div>
                        <div style={{width:'30%',height:'100%',position:'relative',padding:3,alignItems:'center',justifyContent:'flex-start',display:'flex'}}>
                            <text style={{fontFamily:'Segoe UI Semibold',fontSize:14,color:'#3E42B5'}}>Performance</text>
                        </div>
                        <div style={{width:'15%',marginLeft:'2%',height:'100%',position:'relative',padding:3,alignItems:'center',justifyContent:'flex-start',display:'flex'}}>
                            <text style={{fontFamily:'Segoe UI Semibold',fontSize:14,color:'#3E42B5'}}>Price</text>
                        </div>
                        <div style={{width:'15%',marginLeft:'0%',height:'100%',position:'relative',padding:3,alignItems:'center',justifyContent:'flex-start',display:'flex'}}>
                            <text style={{fontFamily:'Segoe UI Semibold',fontSize:14,color:'#3E42B5'}}>Platform</text>
                        </div>
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
                        {webData.map((item)=>
                        <Similar 
                        src={item.src} 
                        itemTitle={item.itemTitle}
                        soldNegativeCount={item.soldNegativeCount} 
                        soldPositiveCount={item.soldPositiveCount} 
                        soldUnits={item.soldUnits}
                        price={item.price}
                        platformName={item.platformName} />
                        )}
                    </div>

                </div>
            </div>
        </div> ;
}


export default ListedComponent