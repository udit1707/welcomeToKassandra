import React, { useCallback, useEffect, useState } from 'react'
import Header from '../../Components/Headers/Header'
import slider from '../../Assets/sli_whi.png';
import tshirt from '../../Assets/tshirt.png';
import tshirt2 from '../../Assets/tshirt2.jpg'
import lap from '../../Assets/lap.jpg'
import phone from '../../Assets/phone.jpg'
import earpod from '../../Assets/earpod.jpeg'
import NavHeader from '../../Components/Headers/NavHeader'
import ListedComponent from '../../Components/Listed/ListedComponent';
import Doughnut_Sales from '../../Components/Graphs/Doughnut_Sales';
import CategoryButton from '../../Components/CategoryButton';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import { Menu } from '../../Components/Menu';
import Pricing from '../../Components/Listed/Pricing';
import { useDispatch, useSelector } from 'react-redux';
import { retailerGetProducts, selectProduct } from '../../store/actions/retailer';
import { getProducts } from '../../store/actions/manufacturer';
import Loader from 'react-loader-spinner';
const Listed  = props => {
    const [hover,setHover]=useState(null)
    const [state,setState]=useState('Overall');
    
    const [category,setCategory]=useState(null);
    const data=[{src:tshirt,title:'1'},{src:tshirt2,title:'2'},{src:lap,title:'3'},{src:earpod,title:'4'},{src:phone,title:'5'},{src:earpod,title:'6'},{src:phone,title:'7'}];
    const [contain,setContain]=useState(false);
    const Wwidth = window.innerWidth;
    const Wheight = window.innerHeight;
    const token=JSON.parse(localStorage.getItem('stateRetail')).token;
    const role=`${JSON.parse(localStorage.getItem('stateRetail')).role}`.toLowerCase();
    const products = useSelector(state=>state[role].products);
    const categories = JSON.parse(localStorage.getItem('stateRetailCat')).categories;
    const selected=useSelector(state=>state[role].product);
    const dispatch=useDispatch()
    const press=useCallback(async(prod)=>{
        setContain(false)
        try{
            const result = await dispatch(selectProduct(prod));
            console.log(result);
            setContain(true)  
        }catch(err){
            setContain(true)
            console.log(err);
            window.alert(err.message)
        }
        
        return ;
    },[dispatch,setContain,props,selectProduct])
    const f2=useCallback(async ()=>{
        setContain(false)
        try{
            const result =role==='retailer'? await dispatch(retailerGetProducts(token)):await dispatch(getProducts(token));
            console.log(result);
            setContain(true)  
        }catch(err){
            setContain(true)
            console.log(err);
            window.alert(err.message)
        }
        
    },[dispatch,setContain,props,retailerGetProducts])

    useEffect(()=>{
        f2();
    },[f2])
    
    var menuData= (products !== null) && (products.length  !== 0) ? products.map(item=>{
                        
        if (selected.productInfo.id === item.productInfo.id || hover === item.productInfo.id){
            return <div 
                    onMouseEnter={()=>setHover(item.productInfo.id)}
                    onMouseLeave={()=>setHover(null)}
                    key={item.id}
                    onMouseUpCapture={()=>press(item)}
                    style={{
                        width:Wwidth*0.03,
                        height:Wwidth*0.03,
                        borderRadius:Wwidth*0.03,
                        padding:1,
                        marginRight:10,
                        boxShadow:"0px 0.5px 3px #9E9E9E",
                        overflow:'hidden',
                        border:`2px solid #376BF0`}}>
                            <img src={item.productInfo.image} style={{width:'100%',height:'100%'}} />
                    </div>}
                    else{
                    return <div 
                    onMouseEnter={()=>setHover(item.productInfo.id)}
                    onMouseLeave={()=>setHover(null)}
                    key={item.id}
                    onMouseUpCapture={()=>press(item)}
                    style={{
                        width:Wwidth*0.03,
                        height:Wwidth*0.03,
                        borderRadius:Wwidth*0.03,
                        padding:1,
                        marginRight:10,
                        boxShadow:"0px 0.5px 3px #9E9E9E",
                        overflow:'hidden',
                        }}>
                            <img src={item.productInfo.image} style={{width:'100%',height:'100%'}} />
                    </div>}}):null;

        const component =!contain?
        <div style={{
            width:Wwidth,
            height:Wheight*0.5,
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
        </div>: <div style={{width:Wwidth,height:'100%',paddingBottom:15,backgroundColor:'#FAFAFA',cursor:'auto'}}>
    <Header />
    <NavHeader />
    <div style={{width:'100%',height:Wheight*0.06,marginTop:'2%',display:'flex',justifyContent:'space-around',alignItems:'center'}}>
        <CategoryButton
        style={{
            width:Wwidth/(1920/260),
            height:Wheight/(1080/60),
        }}
        category={category}
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
                backgroundColor:'white',
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
                <div onMouseUpCapture={()=>setState("Overall")} 
                style={{
                    width:'50%',
                    backgroundColor:state === 'Overall'?'#376BF0':null,
                    height:'100%',
                    alignItems:'center',
                    justifyContent:'center',
                    display:'flex'}}>
                    <text style={{fontFamily:'Segoe UI',fontSize:15,color:state === 'Overall'?'white':'#376BF0'}}>Overall</text>
                </div>
                <div onMouseUpCapture={()=>setState("Pricing")} 
                style={{
                    width:'50%',
                    backgroundColor:state === 'Pricing'?'#376BF0':null,
                    height:'100%',
                    alignItems:'center',
                    justifyContent:'center',
                    display:'flex'}}>
                    <text style={{fontFamily:'Segoe UI',fontSize:15,color:state === 'Pricing'?'white':'#376BF0'}}>Pricing</text>
                </div>                            
                </div>
            </div>
            {state === 'Overall'?
            <div style={{width:'100%',flexDirection:'column',justifyContent:'flex-start',display:'flex'}}>
                <ListedComponent src={selected.productInfo.image} />
                <div style={{flexDirection:'row',justifyContent:'space-evenly',width:'100%',display:'flex',marginTop:'2%'}}>
                    <Doughnut_Sales title="Audience" labels={['Kids', 'Others', 'Male', 'Female']}/>
                    <Doughnut_Sales title="Age group"  labels={['18 - 25', '10 - 12', '26 - 40', '> 40']} />
                    <Doughnut_Sales title="Platform used"  labels={['Flipkart', 'FBB', 'Ebay', 'Amazon']} />    
                </div>
            </div>:<Pricing setContain={(val)=>setContain(val)} src={selected.productInfo.image} />}
            
    </div> ;
    return component
}

export default Listed;