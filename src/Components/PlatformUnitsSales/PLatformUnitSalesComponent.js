import React from 'react'
import Sli from "../../Assets/slider.png"
const PlatformUnitSalesComponent = props => {
    const Wwidth=window.innerWidth*0.95;
    const Wheight=window.innerHeight;
    return <div style={{
        width:Wwidth/(1920/408),
        height:Wheight/(1080/353),
        backgroundColor:'white',
        boxShadow:"0px 2px 4px #9E9E9E",
    }}>
        <div style={{width:'100%',height:'3%',flexDirection:'row',justifyContent:'center',alignItems:'center',display:'flex'}}>
            <div style={{width:Wwidth/(1920/136),height:'100%',justifyContent:'center',padding:2,
            borderBottomLeftRadius:10,borderBottomRightRadius:10,
            alignItems:'center',display:'flex',backgroundColor:'#3D6FEF'}}>
                <text style={{fontFamily:'Segoe UI Semibold',color:'white',fontSize:14}}>{props.platform}</text>
            </div>
            <text style={{marginLeft:'3%',marginRight:'2%'}}>{props.chosenFormat}</text>
            <div style={{
                        width:Wwidth*0.6/(1920/35),
                        height:Wwidth*0.6/(1920/35),
                        padding:2
                    }}>
                        <img src={Sli} style={{width:'100%',height:'100%',transform:"rotate(180deg)"}} />
            </div>
        </div>
        <div>
            
        </div>

    </div>
}

export default PlatformUnitSalesComponent