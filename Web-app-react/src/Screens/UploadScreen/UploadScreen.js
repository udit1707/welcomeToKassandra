import React from 'react'
import Header from '../../Components/Headers/Header'
import NavHeader from '../../Components/Headers/NavHeader'
import Upload from '../../Components/Upload/Upload'
const UploadScreen = props =>{
    const Wwidth=window.innerWidth*0.95;
    const Wheight=window.innerHeight;
    console.log(window.innerWidth  + "  "+ window.innerHeight)
    return <div style={{width:window.innerWidth,height:'100%',paddingBottom:10,backgroundColor:'#F2F2F2',cursor:'auto'}}>
        <Header />
        <NavHeader />
        <div style={{width:'100%',alignItems:'center',marginTop:'2%',justifyContent:'center',height:'100%',display:'flex',cursor:'auto'}}>
        <Upload />
        </div>
    </div>

    
}

export default UploadScreen