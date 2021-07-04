import React from 'react'

const ProductPreview = props => {
    const Wwidth=window.innerWidth;
    const Wheight=window.innerHeight;
    return <div style={{
        maxWidth:Wwidth*.85/(1920/323),
        maxHeight:Wheight*.9/(1080/122),
        width:Wwidth*.85/(1920/323),
        height:Wheight*.8/(1080/122),
        borderRadius:Wwidth/(1920/21),
        padding:10,
        boxShadow:"0px 2px 4px #9E9E9E",
        backgroundColor:'white',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        display:'flex'
    }}>
        <div style={{
            width:'30%',
            height:'100%',
            }}>
            <div style={{
            width:Wwidth*.75/(1920/70),
            maxHeight:Wwidth*.75/(1920/70),
            maxWidth:Wwidth*.75/(1920/70),
            height:Wwidth*.75/(1920/70),
            borderRadius:Wwidth*.75/(1920/70),
            border:`1px solid ${props.borderColor} `,
            backgroundColor:props.backgroundColor,
            borderColor:props.borderColor,
            padding:3,
            alignItems:'center',
            justifyContent:'center',
            display:'flex',
            overflow:'hidden'
        }}>
            <img src={props.src} style={{width:'90%',height:'90%',}} />
        </div>
        </div>
        <div style={{
            width:'70%',
            height:'100%'
        }}>
            <div style={{height:'30%',width:'100%'}}>
            <text style={{color:'#707070',fontSize:15,fontFamily:'Segoe UI Bold'}}>{props.previewTitle}</text>
            </div>
            <div style={{width:'100%',height:'90%',flexDirection:'row',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <div style={{width:'60%'}}><text style={{color:'#707070',fontSize:15,fontFamily:'Segoe UI Bold'}}>{props.previewTitleData}</text></div>
            
            </div>
        </div>
    </div>
}


export default ProductPreview