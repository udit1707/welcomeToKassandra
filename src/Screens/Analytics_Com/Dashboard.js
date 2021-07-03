import React, { useCallback, useEffect, useState } from 'react'
import Back from "../../Assets/back.png"
import Sear from "../../Assets/sear.png"
import Sli from "../../Assets/slider.png"
import Bell from "../../Assets/bell.png"
import Sett from "../../Assets/sett.png"
import User from "../../Assets/dummy.png"
import Header from '../../Components/Headers/Header'
import NavHeader from '../../Components/Headers/NavHeader'
import Sales from '../../Components/Graphs/Sales'
import TopSellingProducts from '../../Components/TopSellingProducts'
import Preview from '../../Components/Preview'
import Order from '../../Assets/order.png'
import Inco from '../../Assets/inco.png'
import Feed from '../../Assets/feed.png'
import Prof from '../../Assets/prof.png'
import Up from '../../Assets/tri.png'
import Down from '../../Assets/down.png'
import Doughnut_Sales from '../../Components/Graphs/Doughnut_Sales'
import GeoMap from '../../Components/GeoMap'
import TopSellingRegions from '../../Components/TopSellingRegions'
import { useDispatch, useSelector } from 'react-redux'
import TopSellingRetailerProducts from '../../Components/TopSellingRetailerProducts'
import { getProducts } from '../../store/actions/manufacturer'
import Loader from 'react-loader-spinner'
import { retailerGetProducts } from '../../store/actions/retailer'
const Dashboard = props =>{
    const Wwidth=window.innerWidth;
    const Wheight=window.innerHeight;
    const [selected,setSelected]=useState('Digital');
    const dispatch=useDispatch();
    const token=JSON.parse(localStorage.getItem('stateRetail')).token;
    const role=`${JSON.parse(localStorage.getItem('stateRetail')).role}`.toLowerCase();
    const products=useSelector(state=>state[role].products);
    const [contain,setContain]=useState(false);
    const f2= useCallback(async ()=>{
        setContain(false)
        try{
            const result = role==='manufacturer'? await dispatch(getProducts(token)):
            role==='retailer'?dispatch(retailerGetProducts(token)):null;
            console.log(result);                    
            setContain(true);
        }catch(err){
            setContain(true)
            console.log(err);
            window.alert(err.message)
        }
        return ;
    },[setContain,dispatch]);
    useEffect(()=>{
        f2();
    },[f2])
    
    console.log(window.innerWidth  + "  "+ window.innerHeight)
    return <div style={{overflowX:'hidden',height:'100%',paddingBottom:10,backgroundColor:'#FAFAFA',cursor:'auto'}}>
        <Header />
        <NavHeader />
        {contain?
        <div>
        <div style={{width:'90%',marginTop:'2%',height:'5%',justifyContent:'flex-end',alignItems:'center',display:'flex'}}>
        <div style={{
            width:Wwidth*0.1,
            height:Wheight*0.05,
            boxShadow:"0px 0.5px 3px #9E9E9E",
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'white',
            borderRadius:10,
            overflow:'hidden',
            cursor:'pointer',
            display:'flex'}}>
            <div onMouseUpCapture={()=>setSelected("Digital")} 
            style={{
                width:'50%',
                backgroundColor:selected === 'Digital'?'#376BF0':null,
                height:'100%',
                alignItems:'center',
                justifyContent:'center',
                display:'flex'}}>
                <text style={{fontFamily:'Segoe UI',fontSize:15,color:selected === 'Digital'?'white':'#376BF0'}}>Digital</text>
            </div>
            <div onMouseUpCapture={()=>setSelected("Regional")} 
            style={{
                width:'50%',
                backgroundColor:selected === 'Regional'?'#376BF0':null,
                height:'100%',
                alignItems:'center',
                justifyContent:'center',
                display:'flex'}}>
                <text style={{fontFamily:'Segoe UI',fontSize:15,color:selected === 'Regional'?'white':'#376BF0'}}>Regional</text>
            </div>                            
            </div>

        </div>
        {selected === 'Digital'?products !== null && products.length !== 0 ?<div>
        <div style={{
            width:'100%',
            paddingLeft:10,
            paddingRight:10,
            marginTop:'2%',
            flexDirection:'row',
            justifyContent:'space-evenly',
            alignItems:'flex-start',
            display:'flex'
        }}>
            <Sales />
            {role === 'manufacturer'?<TopSellingProducts />:<TopSellingRetailerProducts />}
            
        </div>
        <div style={{
            width:'100%',
            marginTop:'2%',
            flexDirection:'row',
            alignItems:'center',
            display:'flex',
            justifyContent:'space-evenly'
        }}>
            <Preview
            src={Order}
            backgroundColor='#FDF4E9'
            borderColor='#EDAF60'
            previewTitle='Total Orders'
            previewTitleData='1000'
            previewAnalytics='1.2%'
            analyticsColor='#4DEC15'
            analyticsSrc={Up}
             />
             <Preview
            src={Inco}
            backgroundColor='#EAF0FE'
            borderColor='#376BF0'
            previewTitle='Total Income'
            previewTitleData='2000'
            previewAnalytics='1.2%'
            analyticsColor='#EC4815'
            analyticsSrc={Down}
             />
             <Preview
            src={Prof}
            backgroundColor='#EDEEF8'
            borderColor='#5356BD'
            previewTitle='Total Profits'
            previewTitleData='3000'
            previewAnalytics='1.2%'
            analyticsColor='#4DEC15'
            analyticsSrc={Up}
             />
             <Preview
            src={Feed}
            backgroundColor='#F4FAF5'
            borderColor='#219434'
            previewTitle='Feedbacks'
            previewTitleData='1000'
            previewAnalytics='2.9%'
            analyticsColor='#4DEC15'
            analyticsSrc={Up}
             />
        </div>
        <div style={{
            width:'100%',
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-evenly',
            display:'flex',
            marginTop:'3%'
        }}> 
            <Doughnut_Sales title="Audience" labels={['Kids', 'Others', 'Male', 'Female']}/>
            <Doughnut_Sales title="Age group"  labels={['18 - 25', '10 - 12', '26 - 40', '> 40']} /> 
            <Doughnut_Sales title="Price range"  labels={['2k - 3.5k', '3.6k - 4.9k', '<2k', '>5k']} />           
        </div>
        <div style={{ 
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-evenly',
            display:'flex',
            marginTop:'3%'
        }}> 
            
            <Doughnut_Sales title="Platform used"  labels={['Flipkart', 'FBB', 'Ebay', 'Amazon']} />
        </div>
        </div>:
        <text style={{fontFamily:'Segoe UI',fontSize:15,color:selected === 'Regional'?'white':'#376BF0'}}>No data, add items in stock</text>:
        products!==null && products.length !==0? <div>
        <div style={{
            width:'100%',
            paddingLeft:10,
            paddingRight:10,
            marginTop:'2%',
            flexDirection:'row',
            justifyContent:'space-around',
            alignItems:'flex-start',
            display:'flex'
        }}>
            <GeoMap analysis='Region Wise Sales Analysis' title2='Sales' title1='Profits' />
            <div style={{width:'30%',height:Wheight*0.6,justifyContent:'center',display:'flex'}}>
            <TopSellingRegions />
            </div>
            
        </div>
        <div style={{
            width:'100%',
            marginTop:'2%',
            flexDirection:'row',
            alignItems:'center',
            display:'flex',
            justifyContent:'space-evenly'
        }}>
            <Preview
            src={Order}
            backgroundColor='#FDF4E9'
            borderColor='#EDAF60'
            previewTitle='Total Orders'
            previewTitleData='1000'
            previewAnalytics='1.2%'
            analyticsColor='#4DEC15'
            analyticsSrc={Up}
             />
             <Preview
            src={Inco}
            backgroundColor='#EAF0FE'
            borderColor='#376BF0'
            previewTitle='Total Income'
            previewTitleData='2000'
            previewAnalytics='1.2%'
            analyticsColor='#EC4815'
            analyticsSrc={Down}
             />
             <Preview
            src={Prof}
            backgroundColor='#EDEEF8'
            borderColor='#5356BD'
            previewTitle='Total Profits'
            previewTitleData='3000'
            previewAnalytics='1.2%'
            analyticsColor='#4DEC15'
            analyticsSrc={Up}
             />
             <Preview
            src={Feed}
            backgroundColor='#F4FAF5'
            borderColor='#219434'
            previewTitle='Feedbacks'
            previewTitleData='1000'
            previewAnalytics='2.9%'
            analyticsColor='#4DEC15'
            analyticsSrc={Up}
             />
        </div>
        
        
        </div>:
        <text style={{fontFamily:'Segoe UI',fontSize:15,color:selected === 'Regional'?'white':'#376BF0'}}>No data, add items in stock</text>}
    </div>:
    <div style={{width:'100%',height:'100%',justifyContent:'center',alignItems:'center',display:'flex',flexDirection:'column'}}>
        <Loader
            type="Puff"
            color="#376BF0"        
            height={80}
            width={80}
            //3 secs
        />
        <text style={{fontFamily:'Segoe UI Semibold ',fontSize:20,color:'#275473',marginTop:'3%'}}>Fetching Product....</text>
    </div>}
    </div>

    
}

export default Dashboard