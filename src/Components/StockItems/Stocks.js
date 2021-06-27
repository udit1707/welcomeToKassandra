import React, { useCallback, useEffect, useState } from 'react'
import Pant from '../../Assets/pant.jpg'
import Phone from '../../Assets/phone.jpg'
import Tshirt from '../../Assets/tshirt.png'
import Earpod from '../../Assets/earpod.jpeg'
import Tshirt2 from '../../Assets/tshirt2.jpg'
import User from '../../Assets/user.png'

import StockItem from './StockItem'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Loader from 'react-loader-spinner'
import { getProducts } from '../../store/actions/manufacturer'

const Stocks= props => {
    const Wwidth = window.innerWidth;
    const Wheight = window.innerHeight;
    const history=useHistory()
    const [contain,setContain] = useState(false);
    const token=JSON.parse(localStorage.getItem('stateRetail')).token;
    const role=`${JSON.parse(localStorage.getItem('stateRetail')).role}`.toLowerCase();
    const products=useSelector(state=>state[role].products);
    const [newData,setNewData]=useState(null);
    const dispatch=useDispatch()
    const fn2 = useCallback(async ()=>{
        setContain(false)
        try{
            const result = await dispatch(getProducts(token));
            console.log(result); 
                  
            setContain(true);
        }catch(err){
            setContain(true)
            console.log(err);
            window.alert(err.message)
        }
        return ;
    },[dispatch,setContain]);
    
    useEffect(()=>{
        fn2();
    },[fn2]);
    
    // [{
    //     src:Tshirt,stockActive:true,stockPrice:"$ 100",itemTitle:'Black Round Neck T -Shirt,sizes - X, L,XL ',
    //     itemId:'#124513',soldUnits:'1000',
    //     soldPositiveCount:'42',soldNegativeCount:'12',stockRemain:'120'}]
    const component =!contain?
        <div style={{
            width:Wwidth*0.85/(1920/505),
            height:Wheight/(1080/496),
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
        </div>:<div style={{
        width:Wwidth/(1920/1200),
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
        <div style={{flexDirection:'row',width:'100%',justifyContent:'space-between',userSelect:'none',alignItems:'center',display:'flex'}}>
            <div style={{height:'5%',alignSelf:'flex-start',marginTop:0}}>
                <text style={{color:'#3E42B5',fontSize:15,fontFamily:'Segoe UI Semibold'}}>Units Sold</text>
            </div>
            
        </div>  
        
        <div style={{width:'100%',flexDirection:'row',height:'5%',marginBottom:'1.5%',marginLeft:"4%",marginRight:'1%',marginTop:"1%",alignItems:'center',display:'flex'}}>
            <div style={{width:'24%',height:'100%',position:'relative',padding:3,alignItems:'center',justifyContent:'flex-start',display:'flex'}}>
                <text style={{fontFamily:'Segoe UI Semibold',fontSize:14,color:'#3E42B5'}}>Item</text>
            </div>
            <div style={{width:'26%',height:'100%',position:'relative',padding:3,alignItems:'center',justifyContent:'flex-start',display:'flex'}}>
                <text style={{fontFamily:'Segoe UI Semibold',fontSize:14,color:'#3E42B5'}}>Performance</text>
            </div>
            <div style={{width:'17%',height:'100%',position:'relative',padding:3,alignItems:'center',justifyContent:'flex-start',display:'flex'}}>
                <text style={{fontFamily:'Segoe UI Semibold',fontSize:14,color:'#3E42B5'}}>Stock</text>
            </div>
            <div style={{width:'18%',marginLeft:'0%',height:'100%',position:'relative',padding:3,alignItems:'center',justifyContent:'flex-start',display:'flex'}}>
                <text style={{fontFamily:'Segoe UI Semibold',fontSize:14,color:'#3E42B5'}}>Price</text>
            </div>
            <div style={{width:'10%',marginLeft:'0%',height:'100%',position:'relative',padding:3,alignItems:'center',justifyContent:'flex-start',display:'flex'}}>
                <text style={{fontFamily:'Segoe UI Semibold',fontSize:14,color:'#3E42B5'}}>Status</text>
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
            {products !== null && products.length !==0 ?products.map((item)=>{
                const no=Math.floor(Math.random()*(100-1)+1)                
                return <StockItem 
                src={item.image}
                prodId={item.id}
                setContain={(val)=>setContain(val)} 
                itemId={item.SNO}
                itemTitle={item.prodName}
                soldNegativeCount={100-no} 
                soldPositiveCount={no} 
                soldUnits={item.retailerStock+item.amazonStock+item.ebayStock+item.flipkarStock}
                stockActive={!item.sold?true:false}
                stockPrice={"$ 100"}
                stockRemain={item.unitsAvailable} />}
            ):<text style={{fontFamily:'Segoe UI ',fontSize:16,color:'#030303'}}>No Data, add items in stock</text>}
        </div>
    </div>;

    return component
}
export default Stocks;