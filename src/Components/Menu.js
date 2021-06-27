import React from 'react'
const MenuItem = ({setSelected, src,title,key, selected }) => {
    const Wwidth = window.innerWidth;
    const Wheight = window.innerHeight;
    console.log('name '+title)
    return <div 
    // onMouseEnter={()=>setHover(item.title)}
    // onMouseLeave={()=>setHover(null)}
    key={title}
    onMouseUpCapture={()=>setSelected(title)}
    style={{
        width:Wwidth*0.03,
        height:Wwidth*0.03,
        borderRadius:Wwidth*0.03,
        padding:1,
        marginRight:10,
        boxShadow:"0px 0.5px 3px #9E9E9E",
        overflow:'hidden',
        border:`2px solid ${selected === title ? '#376BF0':null}`}}>
            <img src={src} style={{width:'100%',height:'100%'}} />
    </div>
  };
  
export const Menu = (list, selected,onSelect) =>
list.map(el => {
    const { name } = el.title;
    

    return <MenuItem  setSelected={(key)=>onSelect(key)} src={el.src} title={name} key={name} selected={selected} />;
});