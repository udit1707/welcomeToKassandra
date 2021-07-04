import React,{useEffect, useState} from 'react'
import Order from '../../Assets/order.png'
import Tshirt from '../../Assets/tshirt.png'
import Tshirt2 from '../../Assets/tshirt2.jpg'
import Pant from '../../Assets/pant.jpg'
import Inco from '../../Assets/inco.png'
import Feed from '../../Assets/feed.png'
import Prof from '../../Assets/prof.png'
import tab from '../../Assets/tabs.png'
import Similar from './Similar';
import PricingItem from './PricingItem'
import ToggleButtonComponent from '../ToggleButton/ToggleButton';
import { selectProduct } from '../../store/actions/retailer'
import INDIA_TOPO_JSON from '../AllotStocks/india.topo.json'
import { useSelector } from 'react-redux'
const Pricing = props => {

    const Wwidth = window.innerWidth;
    const [toggle,setToggle]=useState('true');
    const Wheight = window.innerHeight;
    const data_tags=['Platform','Present Sales','Target Sales','Present Profit','Profit Expectation','Present Price','Price Recommended']
    const role=`${JSON.parse(localStorage.getItem('stateRetail')).role}`.toLowerCase();
    const selected=useSelector(state=>state[role].product);
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
        soldPositiveCount:'42',soldNegativeCount:'12',price:120,platformName:'Amazon'},];
    
    const data=selected.regionStats.map(item=>{
        return {
            categoryId:selected.productInfo.categoryId,
            regionId:item.id,
            salesValue:item.sold_count,
            presentProfit:item.sold_count*item.regional_price*0.35,
            platformName:INDIA_TOPO_JSON.objects.india.geometries.find(region=>region.id === item.map_id).properties.name,
            targetedSales:item.stock_count+item.sold_count,
            presentPrice:item.regional_price,
            retailPrice:item.regional_price*1.57,
            suggestedPrice:null
        }})

    // const data=[{
    //     salesValue:100,
    //     presentProfit:850,
    //     platformName:'Amazon',
    //     targetedSales:2000,
    //     presentPrice:250,
    //     retailPrice:350,
    //     suggestedPrice:200,
    //     },
    //     {
    //     salesValue:100,
    //     presentProfit:850,
    //     platformName:'Ebay',
    //     targetedSales:2000,
    //     presentPrice:250,
    //     retailPrice:350,
    //     suggestedPrice:200,
    //     },
    //     {
    //     salesValue:100,
    //     presentProfit:850,
    //     platformName:'Alibaba',
    //     targetedSales:2000,
    //     presentPrice:250,
    //     retailPrice:350,
    //     suggestedPrice:200,
    //     },
    //     {
    //     salesValue:100,
    //     presentProfit:269,
    //     platformName:'GO ready',
    //     targetedSales:2000,
    //     presentPrice:150,
    //     retailPrice:350,
    //     suggestedPrice:200,
    //     }]

    

    return <div style={{width:'100%',height:'100%',flexDirection:'column',alignItems:'center',display:'flex',marginTop:'1%'}}>
            <div style={{width:'100%',flexDirection:'row',display:'flex',justifyContent:'space-evenly',marginTop:'1.5%'}}>
                <div >
                <div style={{
                width:Wwidth*0.35,
                height:Wheight*0.55,
                backgroundColor:'white',
                borderRadius:15,
                padding:10,
                boxShadow:"2px 2px 5px #9E9E9E",}}>
            <div style={{width:'100%',height:'60%',flexDirection:'row',display:'flex',justifyContent:'space-around'}}>
                <div style={{width:'53%',height:'100%',justifyContent:'center',alignItems:'center',display:'flex'}}>
                    <img src={props.src} style={{width:'100%',height:'100%'}} />

                </div>
                <div style={{width:'48%',height:'70%',flexDirection:'column',marginLeft:'5%',
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
                                {selected.productInfo.prod_name}</text>
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
                            {selected.category}</text>
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

            </div>
            <div >
            <div style={{
                width:Wwidth*0.5,
                borderRadius:15,
                padding:15,
                backgroundColor:'white',
                boxShadow:"2px 2px 5px #9E9E9E",
                height:Wheight*0.6,
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
            </div>
            <div style={{
                width:'90%',
                marginTop:'1.5%',
                padding:15,
                backgroundColor:'white',
                height:Wheight/(1080/1008),
                
                justifyContent:'flex-start',
                flexDirection:'column',
                boxShadow:"2px 2px 5px #9E9E9E",
                borderRadius:15}}>
                    <div style={{width:'100%',height:'5%',justifyContent:'flex-start',alignItems:'center',display:'flex'}}>
                        <text style={{color:'#383839',fontSize:17,fontFamily:'Segoe UI Semibold'}}>Price Predictor</text>
                        
                    </div>
                    <div style={{flexDirection:'row',height:'3%',width:'100%',display:'flex',marginTop:'2%'}}>
                        {data_tags.map(item=><div style={{width:item==='Present Profit'?'10%':'14.28%',justifyContent:'center',alignItems:'center',display:'flex'}}>
                            <text style={{fontFamily:'Segoe UI Semibold',fontSize:14,color:'#3E42B5'}}>{item}</text>
                        </div>)}
                    </div>
                    <div style={{overflowY:'auto',height:'90%',width:'100%'}}>{data.map(item=><div style={{marginTop:'2%'}}><PricingItem
                    regionId={item.regionId}
                    categoryId={item.categoryId} 
                    setContain={(val)=>props.setContain(val)}
                    salesValue={item.salesValue} 
                    presentProfit={item.presentProfit}
                    presentPrice={item.presentPrice}
                    retailPrice={item.retailPrice}
                    suggestedPrice={item.suggestedPrice}
                    targetedSales={item.targetedSales}
                    platformName={item.platformName} /></div>)}
                    </div>

            </div>
        </div> ;
}


export default Pricing;