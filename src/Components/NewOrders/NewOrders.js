import React from 'react'
import Pant from '../../Assets/pant.jpg'
import Phone from '../../Assets/phone.jpg'
import Tshirt from '../../Assets/tshirt.png'
import Earpod from '../../Assets/earpod.jpeg'
import Tshirt2 from '../../Assets/tshirt2.jpg'
import User from '../../Assets/user.png'

import NewOrderItem from './NewOrderItem'
const NewOrders= props => {
    const Wwidth = window.innerWidth;
    const Wheight = window.innerHeight;
    const data_tags=['Item','Category','Buyer','Total Units','Action']
    const data=[
    {
        src:Pant,itemCategory:'Pant',itemAddress:"10050",userSrc:User 
    },
    {
        src:Earpod,itemCategory:'Earpod',itemAddress:"10050",userSrc:User 
    },
    {
        src:Tshirt2,itemCategory:'T-Shirt',itemAddress:"10050",userSrc:User 
    },
    {
        src:Phone,itemCategory:'Phone',itemAddress:"10050",userSrc:User 
    },
    {
        src:Earpod,itemCategory:'Earpod',itemAddress:"10050",userSrc:User 
    },
    {
        src:Tshirt2,itemCategory:'T-Shirt',itemAddress:"10050",userSrc:User 
    },
    {
        src:Phone,itemCategory:'Phone',itemAddress:"10050",userSrc:User 
    }]
    return <div style={{
        width:Wwidth*.9/(1920/769),
        height:Wheight*.8,
        backgroundColor:'white',
        borderRadius:Wwidth*.8/(1920/30),
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
            <text style={{color:'#3E42B5',fontSize:15,fontFamily:'Segoe UI Semibold'}}>New Orders</text>
        </div>
        <div style={{width:'100%',flexDirection:'row',height:'5%',marginTop:'1.5%',marginRight:'2%',marginBottom:'1.5%',alignItems:'center',justifyContent:'space-evenly',display:'flex'}}>
            {data_tags.map((item,index)=>{
                return <div style={{width:'20%',height:'100%',padding:3,alignItems:'center',justifyContent:'center',display:'flex'}}>
                    <text style={{fontFamily:'Segoe UI Semibold',fontSize:14,color:'#3E42B5'}}>{item}</text>
                </div>
            })}
        </div>
        <div style={{
            width:'100%',
            height:'90%',
            padding:5,
            overflowY:'auto',
            backgroundColor:'white',
            justifyContent:'flex-start',
            alignItems:'center',
            flexDirection:'column',
            display:'flex',
            
        }}>
            {data.map((item)=>
            <NewOrderItem 
            src={item.src} 
            itemCategory={item.itemCategory}
            userSrc={item.userSrc} 
            itemAddress={item.itemAddress}/>)}
            
        </div>
    </div>;
}

export default NewOrders