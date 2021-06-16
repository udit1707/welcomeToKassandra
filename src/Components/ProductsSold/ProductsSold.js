import React from 'react'
import Pant from '../../Assets/pant.jpg'
import Phone from '../../Assets/phone.jpg'
import Tshirt from '../../Assets/tshirt.png'
import Earpod from '../../Assets/earpod.jpeg'
import Tshirt2 from '../../Assets/tshirt2.jpg'
import User from '../../Assets/user.png'
import ProductsSoldItem from './ProductSoldItem'
const ProductsSold= props => {
    const Wwidth = window.innerWidth;
    const Wheight = window.innerHeight;
    const data_tags=['Item','Category','Date','Time','Buyer','Total Units','Status']
    const data=[{
        src:Tshirt,itemCategory:'T-Shirt',itemDate:"11/12/2018",itemTime:"11:30",
        itemStatus:"Processing",itemAddress:"1508",userSrc:User},
    {
        src:Pant,itemCategory:'Pant',itemDate:"01/03/2018",itemTime:"8:30",
        itemStatus:"Shipped",itemAddress:"1508",userSrc:User 
    },
    {
        src:Earpod,itemCategory:'Earpod',itemDate:"11/12/2018",itemTime:"11:30",
        itemStatus:"Delivered",itemAddress:"1508",userSrc:User 
    },
    {
        src:Tshirt2,itemCategory:'T-Shirt',itemDate:"09/12/2018",itemTime:"11:00",
        itemStatus:"Cancelled",itemAddress:"1508",userSrc:User 
    },
    {
        src:Phone,itemCategory:'Phone',itemDate:"11/12/2018",itemTime:"16:45",
        itemStatus:"Processing",itemAddress:"1508",userSrc:User 
    },
    {
        src:Earpod,itemCategory:'Earpod',itemDate:"11/12/2018",itemTime:"11:30",
        itemStatus:"Delivered",itemAddress:"1508",userSrc:User 
    },
    {
        src:Tshirt2,itemCategory:'T-Shirt',itemDate:"09/12/2018",itemTime:"11:00",
        itemStatus:"Cancelled",itemAddress:"1508",userSrc:User 
    },
    {
        src:Phone,itemCategory:'Phone',itemDate:"11/12/2018",itemTime:"16:45",
        itemStatus:"Processing",itemAddress:"1508",userSrc:User 
    }]
    return <div style={{
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
            {data.map((item)=>
            <ProductsSoldItem 
            src={item.src} 
            itemCategory={item.itemCategory}
            itemDate={item.itemDate}
            itemTime={item.itemTime} 
            userSrc={item.userSrc} 
            itemAddress={item.itemAddress}
            itemStatus={item.itemStatus} />
            )}
        </div>
    </div>;
}
export default ProductsSold;