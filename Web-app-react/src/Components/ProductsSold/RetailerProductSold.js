import React, { useCallback, useEffect, useState } from 'react'
import Pant from '../../Assets/pant.jpg'
import Phone from '../../Assets/phone.jpg'
import Tshirt from '../../Assets/tshirt.png'
import Earpod from '../../Assets/earpod.jpeg'
import Tshirt2 from '../../Assets/tshirt2.jpg'
import User from '../../Assets/user.png'
import RetailerProductSoldItem from './RetailerProductSoldItem'
import Loader from 'react-loader-spinner'
import { useDispatch, useSelector } from 'react-redux'
import { retailerGetProducts } from '../../store/actions/retailer'
import INDIA_TOPO_JSON from '../AllotStocks/india.topo.json'

const RetailerProductSold= props => {
    const Wwidth = window.innerWidth;
    const Wheight = window.innerHeight;
    const [contain,setContain] = useState(false);
    const token=JSON.parse(localStorage.getItem('stateRetail')).token;
    const role=`${JSON.parse(localStorage.getItem('stateRetail')).role}`.toLowerCase();
    const products = useSelector(state=>state[role].products)
    console.log(token);
    const data_tags=['Item','Category','Date','Time','Buyer','Total Units','Status']
    const [newData,setNewData]=useState(null);
    const dispatch=useDispatch()
    const fn2 = useCallback(async ()=>{
        setContain(false)
        try{
            const result = await dispatch(retailerGetProducts(token));
            console.log(result);
            const data=[];
        for (let i = 0; i < products.length; i++) {
            const item=products[i]
            const today= new Date();
            for (let j = 0; j < item.regionStats.length;j++ ){

                const date = Math.floor(Math.random() * (31 - 1) + 1) +' / '+Math.floor(Math.random() * (12 - 1) + 1) + ' / '+ today.getFullYear();
                var hours = Math.floor(Math.random() * (24 - 0) + 0);
                var minutes = Math.floor(Math.random() * (60 - 0) + 0);
                var ampm = hours >= 12 ? 'pm' : 'am';
                hours = hours % 12;
                hours = hours ? hours : 12; // the hour '0' should be '12'
                minutes = minutes < 10 ? '0'+minutes : minutes;
                var strTime = hours + ':' + minutes + ' ' + ampm;
                data.push({
                        src:item.productInfo.image,itemCategory:item.category,itemDate:date,itemTime:strTime,
                        itemStatus:"Processing",itemAddress:item.regionStats[j].sold_count,
                        buyer:INDIA_TOPO_JSON.objects.india.geometries.find(region=>region.id === item.regionStats[j].map_id).properties.name
                    })
                
            }
            
        };
        setNewData(data)                    
        setContain(true);
        }catch(err){
            setContain(true)
            console.log(err);
            window.alert(err.message)
        }
        return ;
    },[dispatch,setContain,setNewData]);
    useEffect(()=>{
        fn2();        
    },[fn2,setContain,setNewData]);
        
    
        
    
    
    // [{
    //     src:Tshirt,itemCategory:'T-Shirt',itemDate:"11/12/2018",itemTime:"11:30",
    //     itemStatus:"Processing",itemAddress:"1508",buyer:User},
    // {
    //     src:Pant,itemCategory:'Pant',itemDate:"01/03/2018",itemTime:"8:30",
    //     itemStatus:"Shipped",itemAddress:"1508",buyer:User 
    // },
    // {
    //     src:Earpod,itemCategory:'Earpod',itemDate:"11/12/2018",itemTime:"11:30",
    //     itemStatus:"Delivered",itemAddress:"1508",buyer:User 
    // },
    // {
    //     src:Tshirt2,itemCategory:'T-Shirt',itemDate:"09/12/2018",itemTime:"11:00",
    //     itemStatus:"Cancelled",itemAddress:"1508",buyer:User 
    // },
    // {
    //     src:Phone,itemCategory:'Phone',itemDate:"11/12/2018",itemTime:"16:45",
    //     itemStatus:"Processing",itemAddress:"1508",buyer:User 
    // },
    // {
    //     src:Earpod,itemCategory:'Earpod',itemDate:"11/12/2018",itemTime:"11:30",
    //     itemStatus:"Delivered",itemAddress:"1508",buyer:User 
    // },
    // {
    //     src:Tshirt2,itemCategory:'T-Shirt',itemDate:"09/12/2018",itemTime:"11:00",
    //     itemStatus:"Cancelled",itemAddress:"1508",buyer:User 
    // },
    // {
    //     src:Phone,itemCategory:'Phone',itemDate:"11/12/2018",itemTime:"16:45",
    //     itemStatus:"Processing",itemAddress:"1508",buyer:User 
    // }]
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
        </div>:
     <div style={{
        width:Wwidth*0.95/(1920/1074),
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
            <text style={{color:'#3E42B5',fontSize:15,fontFamily:'Segoe UI Semibold'}}>Units Sold</text>
        </div>
        <div style={{width:'100%',flexDirection:'row',height:'5%',marginBottom:'1.5%',marginRight:'1%',marginTop:"1%",alignItems:'center',justifyContent:'space-evenly',display:'flex'}}>
            {data_tags.map((item,index)=>{
                return <div style={{width:'14%',height:'100%',padding:3,alignItems:'center',justifyContent:'center',display:'flex'}}>
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
            {newData !== null && newData.length !==0 ?newData.map((item)=>
            <RetailerProductSoldItem 
            src={item.src} 
            itemCategory={item.itemCategory}
            itemDate={item.itemDate}
            itemTime={item.itemTime} 
            buyer={item.buyer} 
            itemAddress={item.itemAddress}
            itemStatus={item.itemStatus} />
            ):<text style={{fontFamily:'Segoe UI ',fontSize:16,color:'#030303'}}>No Data, add items in stock</text>}
        </div>
    </div>;

    return component;
}
export default RetailerProductSold;