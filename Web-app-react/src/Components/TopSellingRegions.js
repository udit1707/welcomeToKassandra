import React from 'react'
import Mug from '../Assets/mug.jpg'
import Lap from '../Assets/lap.jpg'
import Tshirt2 from '../Assets/tshirt2.jpg'
import Ear from '../Assets/earpod.jpeg'
const INDIA_TOPO_JSON = require('../Components/AllotStocks/india.topo.json')

const TopSellingRegions = props => {
    const Wwidth=window.innerWidth;
    const Wheight=window.innerHeight;
    const data_li=[
        { map_id: 'AP',volumeSold: 15,profits:180 },
        { map_id: 'AR',volumeSold: 14,profits:180 },
        { map_id: 'AS',volumeSold: 13,profits:180 },
        { map_id: 'BR',volumeSold: 21,profits:180 },
        { map_id: 'CT',volumeSold: 10 ,profits:180}]
    return <div style={{
        width:'100%',
        height:'100%',
        backgroundColor:'white',
        
        scrollbarWidth:'thin',
        borderRadius:Wwidth/(1920/10),
        paddingLeft:10,
        paddingRight:10,
        paddingTop:20,
        paddingBottom:10,
        flexDirection:'column',
        display:'flex',
        alignItems:'center',
        justifyContent:'flex-start',
        boxShadow:"0px 2px 4px #9E9E9E",
    }}>
        <div style={{width:'95%'}}>
            <text style={{color:'#3E42B5',alignSelf:'flex-start',fontSize:18,fontFamily:'Segoe UI Semibold'}}>Top Selling Regions</text>
        </div>
        <div style={{
            width:'95%',
            alignSelf:'center',
            height:Wheight/(1080/55),
            backgroundColor:'white',
            flexDirection:'row',
            alignItems:'center',
            display:'flex',
            marginTop:'2%',
            justifyContent:'space-evenly',
           
        }}>
            <div style={{
                width:'40%',
                height:'100%',
                justifyContent:'center',
                alignItems:'center',
                display:'flex'
            }}>
                <text style={{color:'#B1B0B0',fontSize:14,fontFamily:'Segoe UI'}}>Region</text>
            </div>
            <div style={{
                width:'30%',
                height:'100%',
                justifyContent:'center',
                alignItems:'center',
                display:'flex'
            }}>
                <text style={{color:'#B1B0B0',fontSize:14,fontFamily:'Segoe UI'}}>Volume Sold</text>
            </div>
            <div style={{
                width:'35%',
                height:'100%',
                justifyContent:'center',
                alignItems:'center',
                display:'flex'
            }}>
                <text style={{color:'#B1B0B0',fontSize:14,fontFamily:'Segoe UI'}}>
                   Profits</text>
            </div>

        </div>
        <div style={{
            width:'95%',
            height:'80%',
            justifyContent:'flex-start',
            overflowY:'scroll',
            position:'relative',
            alignItems:'center',
            borderEndStartRadius:Wwidth/(1920/10),
            borderEndEndRadius:Wwidth/(1920/10),
        }}>
            {data_li.map((item,index)=><div style={{
                width:"100%",
                height:Wheight*0.9/(1080/83),
                flexDirection:'row',
                justifyContent:'space-evenly',
                padding:3,
                alignItems:'center',
                backgroundColor:index%2 === 0 ? '#376BF0' : '#CFCFCF' ,
                display:'flex'
            }}>
                <div style={{
                    width:'40%',
                    height:'100%',
                    justifyContent:'flex-start',
                    alignItems:'center',
                    display:'flex'
                }}>
                    <text style={{color:index%2 === 0 ? 'white':'#030303',fontSize:14,fontFamily:'Segoe UI'}}> 
                    {INDIA_TOPO_JSON.objects.india.geometries.find(region=>region.id === item.map_id).properties.name}</text>
                </div>
                <div style={{
                width:'30%',
                height:'100%',
                justifyContent:'center',
                alignItems:'center',
                display:'flex'
                }}>
                    <text style={{color:index%2 === 0 ? 'white':'#030303',fontSize:14,fontFamily:'Segoe UI'}}>{item.volumeSold}</text>
                </div>

                <div style={{
                width:'30%',
                height:'100%',
                justifyContent:'center',
                alignItems:'center',
                display:'flex'
                }}>
                    <text style={{color:index%2 === 0 ? 'white':'#030303',fontSize:14,fontFamily:'Segoe UI'}}>{item.profits}</text>
                </div>
                </div>
            )}

        </div>
    </div>;
}

export default TopSellingRegions;