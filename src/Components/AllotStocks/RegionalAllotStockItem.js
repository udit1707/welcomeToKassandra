import React, { useState } from 'react'
import tshirt from '../../Assets/tshirt.png'
import Sli from "../../Assets/slider.png"
import CategoryButton from '../CategoryButton';
import ToggleButtonComponent from '../ToggleButton/ToggleButton'
import tab from '../../Assets/tabs.png'
import RetailerListItem from './RetailerListItem';

const RegionalAllotStockItem = props => {
    const Wwidth = window.innerWidth;
    const Wheight = window.innerHeight;
    const [toggle,setToggle]=useState('true');
    const [stockAssigned,setAssigned]=useState(0);
    const [stockLeft,setLeft]=useState(150);
    const [RetailerData,setRetailerData]=useState([
        {name:'Retailer1',stock:0},
        {name:'Retailer2',stock:0},
        {name:'Retailer3',stock:0},
        {name:'Retailer4',stock:0},
        {name:'Retailer5',stock:0},]);
        const [RetailerDataUpdated,setRetailerDataUpdated]=useState([
            {name:'Retailer1',stock:0},
            {name:'Retailer2',stock:0},
            {name:'Retailer3',stock:0},
            {name:'Retailer4',stock:0},
            {name:'Retailer5',stock:0},])
    var RegionalData=[
        {region:'Uttar Pradesh',sales:12.3},
        {region:'Madhya Pradesh',sales:15.3},
        {region:'Delhi',sales:18},
        {region:'Mumbai',sales:20.3}]
        const Sort=(order)=>{
            const newData=RegionalData.sort((a,b)=>{return order === 'high to low'?b.sales-a.sales:a.sales-b.sales});
            RegionalData=newData;
            return RegionalData;

        }
    const [selected,setSelected]=useState('high to low')
    const [FilterShow,setFilterShow]=useState(false)
    const [category,setCategory]=useState(null)
    const [hoverFilter,setHoverFilter]=useState(false)
    return <div style={{width:'100%',marginTop:'2%',display:'flex',justifyContent:'space-evenly',alignItems:'flex-start'}}>
    <div style={{
        width:'30%',
        height:Wheight*0.8/(1080/670),
        marginLeft:'3.5%',
        marginRight:'3.5%',
        backgroundColor:'white',
        borderRadius:15,
        padding:15,
        boxShadow:"2px 2px 5px #9E9E9E",}}>
            <div style={{width:'100%',height:'60%',flexDirection:'row',display:'flex',justifyContent:'space-around'}}>
                <div style={{width:'52%',height:'100%',justifyContent:'center',alignItems:'center',display:'flex'}}>
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
            
            <div style={{
                width:Wwidth*0.8/(1920/500),
                height:Wheight*0.8/(1080/670),
                backgroundColor:'white',
                borderRadius:10,
                flexDirection:'column',
                display:'flex',
                marginRight:'3.5%',
                padding:15,
                boxShadow:"2px 2px 5px #9E9E9E",}}>
                    <div style={{width:'100%',height:Wheight*0.05,justifyContent:'space-between',display:'flex'}}>
                        <div style={{width:'50%'}}>
                    <text style={{fontFamily:'Segoe UI Semibold',fontSize:14,color:'#464242',}}>
                        Regional Demand</text>
                        </div>
                    
                    <div style={{flexDirection:'row',display:'flex',justifyContent:'center',width:'50%'}}>
                    <div style={{flexDirection:'column',display:'flex',width:'100%',height:Wheight*0.4}}>
                    <div style={{width:'100%'}}>
                        <text style={{userSelect:'none',fontFamily:'Segoe UI Semibold',color:'#707070',fontSize:14}}>Sort by {selected}</text>
                    </div>
                    <div style={{
                        visibility:FilterShow?'visible':'hidden',
                        width:'100%',
                        borderRadius:0,
                        paddingBottom:5,
                        boxShadow:"0px 0.5px 3px #9E9E9E",
                        backgroundColor:'white',
                        flexDirection:'column',
                        alignItems:'center',
                        overflowX:'hidden',
                        marginTop:'2%',
                        overflowY:'auto',
                        zIndex:1,
                        justifyContent:'flex-start',
                        display:'flex'}}>
                            {['high to low','low to high'].map(item=>
                            <div 
                            onBlur={()=>setFilterShow(false)}
                            onMouseEnter={()=>setHoverFilter(item)}
                            onMouseLeave={()=>setHoverFilter(null)}
                            onMouseUpCapture={()=>{setSelected(item);setFilterShow(false)}}
                            style={{
                                width:'100%',
                                backgroundColor:selected === item ?'#E3DFDF':hoverFilter === item ?'#F5F3F3':null,
                                justifyContent:'center',
                                alignItems:'center',
                                padding:3}}>
                                <text  style={{userSelect:'none',fontFamily:'Segoe UI',color:'#707070',fontSize:12}}>{item}</text>
                            </div>)}
                    </div>  
        
                    </div>
                    <div
                    onMouseUpCapture={()=>setFilterShow(state=>!state)}
                    style={{
                        width:Wwidth*0.8/(1920/30),
                        height:Wwidth*0.8/(1920/30),
                        justifyContent:'center',
                        alignItems:'center',
                        display:'flex',
                        padding:2
                    }}>
                        <img src={Sli} style={{width:'100%',height:'100%',transform:!FilterShow ?"rotate(180deg)":null}} />

                    </div>
                    </div>
                    </div>

                    {Sort(selected).map(item=>{
                        return <div style={{justifyContent:'space-between',display:'flex',width:'100%',marginBottom:'5%'}}>
                            <div style={{justifyContent:'flex-start',display:'flex'}}><text style={{
                                fontFamily:'Segoe UI Semibold',
                                fontSize:15,
                                color:'#464242'}}>{item.region}</text>
                                </div>
                                <div style={{width:'30%',justifyContent:'flex-start',display:'flex'}}>
                            <text style={{
                                fontFamily:'Segoe UI Semibold',
                                fontSize:15,
                                color:'#376BF0'}}><text style={{
                                    fontFamily:'Segoe UI Semibold',
                                    fontSize:15,
                                    color:'#464242'}}>Sales </text>{item.sales} %</text>
                                    </div>
                            </div>})}

                </div>
            <div style={{flexDirection:'column',display:'flex',height:300,marginRight:'3.5%'}}>
            <div style={{flexDirection:'column',display:'flex'}}>
            <text style={{
                        fontFamily:'Segoe UI Semibold',
                        fontSize:16,
                        color:'#464242',
                        }}>
                    Stock Left</text>
            <div style={{
                width:Wwidth*0.08,
                height:Wheight*0.07,
                backgroundColor:'white',
                padding:5,
                borderRadius:10,
                boxShadow:"2px 2px 5px #9E9E9E",
                marginTop:'5%',
                justifyContent:'center',
                alignItems:'center',
                display:'flex'}}>
                    <text style={{
                        fontFamily:'Segoe UI Semibold',
                        fontSize:16,
                        color:'#707070',
                        }}>
                    {stockLeft} units</text>
            </div>
            </div>
            {/* <div style={{flexDirection:'column',display:'flex',marginTop:'20%'}}>
            <text style={{
                        fontFamily:'Segoe UI Semibold',
                        fontSize:16,
                        color:'#464242',
                        }}>
                    Stock Assigned</text>
            <div style={{
                width:Wwidth*0.08,
                height:Wheight*0.07,
                backgroundColor:'white',
                padding:5,
                borderRadius:10,
                boxShadow:"2px 2px 5px #9E9E9E",
                marginTop:'5%',
                justifyContent:'center',
                alignItems:'center',
                display:'flex'}}>
                    <text style={{
                        fontFamily:'Segoe UI Semibold',
                        fontSize:16,
                        color:'#707070',
                        }}>
                    {stockAssigned} units</text>
            </div>
            </div> */}
            </div>
            <div style={{
                width:Wwidth*0.8/(1920/500),
                height:Wheight*0.8/(1080/670),
                backgroundColor:'white',
                borderRadius:10,
                flexDirection:'column',
                display:'flex',
               
                padding:15,
                boxShadow:"2px 2px 5px #9E9E9E",}}>
                    <div style={{width:'100%',height:Wheight*0.05,justifyContent:'space-between',display:'flex'}}>
                    <text style={{fontFamily:'Segoe UI Semibold',fontSize:16,color:'#464242',}}>
                        Retailers</text>
                    <div style={{
                        backgroundColor:'#376BF0',
                        padding:8,
                        visibility:category?'visible':'hidden', 
                        cursor:'pointer',
                        borderRadius:10,
                        justifyContent:'center',
                        alignItems:'center',
                        boxShadow:"2px 2px 5px #9E9E9E",
                        display:'flex'}}>
                            <text style={{fontFamily:'Segoe UI ',fontSize:13,color:'white',}}>
                         Allocate Request</text>

                    </div>
                    </div>
                    <div style={{width:'100%',height:Wheight*.05,display:'flex',justifyContent:'space-between'}}>
                    <div style={{marginTop:'5%'}}>
                        <text style={{fontFamily:'Segoe UI Semibold ',fontSize:16,color:'#464242',}}>
                         Select region</text>
                         </div>
                         <div >
                    <CategoryButton 
                    style={{
                        width:Wwidth*0.8/(1920/210),
                        height:Wheight*0.8/(1080/60),
                    }}
                    title='No Region'
                    data={['UP','MP','Delhi','Mumbai']}
                    setCategory={(val)=>setCategory(val)} />
                    </div>
                    </div>
                    <div style={{width:'100%',marginTop:'5%',height:'90%',overflowY:'auto'}}>
                        {category?RetailerData.map((item,index)=>
                        <RetailerListItem  
                        placeholder={item.stock} 
                        name={item.name} 
                        onChange={(val)=>setRetailerDataUpdated(da=>{
                            var newData=[...da]
                            const newDataItem={name:newData[index].name,stock:val}
                            console.log(newDataItem)
                            newData[index]=newDataItem
                            return newData
                        })} />):<div style={{width:'100%',height:'60%',justifyContent:'center',alignItems:'center',display:'flex'}}>
                            <text style={{fontFamily:'Segoe UI Semibold ',textAlign:'center',fontSize:16,color:'#464242',}}>
                        Select region</text></div>}
                    </div>
                </div>
                
                         
        </div>
}

export default RegionalAllotStockItem;