import React,{Component} from "react";
import classes from "./Upload.css";
import cloud from "../../Assets/cloud_upload_grey_192x192.png";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector,connect } from "react-redux";
import Loader from 'react-loader-spinner'
import {  newProduct } from "../../store/actions/manufacturer";

class Upload extends Component{
    constructor(props)
    {
        super(props);            
        this.Wwidth=window.innerWidth*0.95;
        this. Wheight=window.innerHeight;
        this.handleFileSelect = this.handleFileSelect.bind(this);
        
    }
    state =  {
        selectedFile: null,
        imagePreviewUrl: null,
        
        title:null,
        description:null,
        category:null,
        gender:null,
        pressed:null,
        hoverState:null,
        brand:null,
        contain:true,
        price:null,
        units:null,
        snNo:null,
        tags:[]
      }
     setPressed = val =>{
         this.setState({pressed:val});
     }
     setHoverState = val =>{
         this.setState({hoverState:val});
     } 
     handleFileSelect = (e) => {
        e.preventDefault();
        let file=e.target.files[0];
        let reader = new FileReader();
        reader.onloadend = () => {
        this.setState({
            selectedFile:file,
            imagePreviewUrl: reader.result
      });
        }
        reader.readAsDataURL(file);
    }
    handleChange(event) {
        this.setState({category: event.target.value});
      }
    handleChange2(event) {
    this.setState({gender: event.target.value});
    }
    onChangeEventHandler=(event,ele)=>{
        if(ele === "title"){
            this.setState({title:event.target.value});
        }
        if(ele === "brand"){
            this.setState({brand:event.target.value});
        }
        if(ele === "price"){
            this.setState({price:event.target.value});
        }
        if(ele === "units"){
            this.setState({units:event.target.value});
        }
        if(ele === "snNo"){
            this.setState({snNo:event.target.value});
        }
        if(ele === "description"){
            this.setState({description:event.target.value});
        }
        
    }
     onSubmitHandler = async () => {
        
        const token=JSON.parse(localStorage.getItem('stateRetail')).token;
        const role=`${JSON.parse(localStorage.getItem('stateRetail')).role}`.toLowerCase();
        const fd = new FormData();
        fd.append("image",this.state.selectedFile);
        fd.append("prodName",this.state.title);
        fd.append("content",this.state.description);
        fd.append("category",this.state.category);
        fd.append("units",this.state.units);
        fd.append("snNo",this.state.snNo);
        fd.append("brand",this.state.brand);
        fd.append("gender",this.state.gender);
        console.log(this.state.selectedFile);
        
        try{
            this.state({contain:false});
            const result = role ==='manufacturer'? await this.newProduct(fd,token):null;
            console.log(result);                    
            this.state({contain:true});
            this.props.history.push('/products/allotStocks')
        }catch(err){
            this.state({contain:true});
            console.log(err);
            window.alert(err.message)
        }
        return ;
    }
     
    render(){
        return this.state.contain ?<div ><div  className={"upload_flow_main"}>
        <div className={"main_content"}>
            <div  className={"upload_viewer"}>
            <text style={{userSelect:'none',fontFamily:'Segoe UI ',color:'#1F1F20',fontSize:17}}>Product Image  </text>
                <div onMouseEnter={()=>this.setHoverState('Upload')}  
                    onMouseLeave={()=>this.setHoverState(null)} style={{marginTop:'2%',cursor:'default'}} className={"drag_drop_container"}>
                    <div className={"drop_area_main"}>
                    {this.state.imagePreviewUrl?
                    <div style={{width:'100%',height:'40%'}}>
                        <img style={{width:"100%",height:'40%'}} src={this.state.imagePreviewUrl} alt="imh"></img></div>:
                        <div className={"drop_area_main_content"}>
                            <div className={"cloud_container"}>
                            
                               <div><svg className={"upload_shot_cloud"} width="161" height="121" viewBox="0 0 161 121" svg-inline="" role="presentation" focusable="false" tabindex="-1">
                                <path d="M127.452 47.224C127.458 21.067 106.434 0 80.5 0 54.566 0 33.542 21.067 33.542 47.056 14.745 48.918 0 64.742 0 84.028 0 104.45 16.516 121 36.896 121h87.208C144.484 121 161 104.45 161 84.028c0-19.286-14.745-35.11-33.548-36.804z">
                                </path>
                            </svg>
                            <div className={"cloud_arrow_container"}>
                                <svg height="48" viewBox="0 0 75 48" width="75" svg-inline="" role="presentation" focusable="false" tabindex="-1" >
                                    <path d="M24 47.111H6.736c-5.978 0-8.97-7.24-4.743-11.475L37.5.056l35.507 35.58c4.226 4.235 1.235 11.475-4.743 11.475H50.995z">
                                    </path>
                                </svg>
                                <div className={"cloud_arrow_container_after"}></div>
                            </div>
                            </div>
                            </div>
                            <text style={{fontFamily:'Segoe UI',fontSize:18}}>Add a product image</text>
                            <input id='actualBtn' 
                            
                            type="file" title="Add image"  onChange={this.handleFileSelect} 
                            hidden/>
                            <label for='actualBtn' 
                            
                            style={{
                                border:'2px solid #3E42B5',opacity:this.state.hoverState === 'Upload'?1:0.7,borderRadius:20,fontSize:12,color:'#3E42B5',fontFamily:'Segoe UI Semibold',
                                cursor:'pointer',padding:10}} className={"label"}> 
                            Upload image</label>
                            </div>}
                    </div>
                </div>
            </div>
            
            <div className={"upload_details"}>
            <div>
         
                <form >
                    <div className={"form_field"}>
                        <div >
                            <label style={{userSelect:'none',fontFamily:'Segoe UI ',color:'#1F1F20',fontSize:16}} className={"label"}> Product Title</label>
                             <span className={"dd_input_wrap"}>
                                 <input
                                 onMouseEnter={()=>this.setHoverState('title')}
                                 onMouseLeave={()=>this.setHoverState(null)}
                                 onMouseUpCapture={()=>this.setPressed('title')} 
                                 onBlur={()=>this.setPressed(null)}
                                 style={{border:`1px solid ${this.state.pressed === 'title' || this.state.hoverState==='title' ?'#275473':'#C3C1C1'}`,
                             outline:'0px',}} onChange={(event)=>this.onChangeEventHandler(event,"title")}
                                  value={this.state.title} type="text" placeholder="Add a Title" maxlength="64" className={"dd_input"}>
                                     </input> 
                             </span>
                        </div>
                    </div>
                    <div style={{flexDirection:'row',justifyContent:'space-between',display:'flex',width:'80%'}} className={"form_field"}>
                        <div style={{width:'50%'}} >
                            <label style={{userSelect:'none',fontFamily:'Segoe UI ',color:'#1F1F20',fontSize:16}} className={"label"}>Select Category</label>
                             <span className={"dd_input_wrap"}>
                             <select onMouseEnter={()=>this.setHoverState('category')}
                                onMouseLeave={()=>this.setHoverState(null)}
                                onMouseUpCapture={()=>this.setPressed('category')} 
                                onBlur={()=>this.setPressed(null)} 
                                style={{width:'100%',
                                minHeight:'40px',
                                borderRadius:8,
                                padding:10,
                                border:`1px solid ${this.state.pressed === 'category' || this.state.hoverState==='category' ?'#275473':'#C3C1C1'}`,
                                outline:'0px',
                                backgroundColor:'rgb(247, 247, 247)',
                                boxSizing:'border-box',}} 
                                value={this.state.category} onChange={(e)=>this.handleChange(e)}>
                                <option value="grapefruit">Grapefruit</option>
                                <option value="lime">Lime</option>
                                <option value="coconut">Coconut</option>
                                <option value="mango">Mango</option>
                            </select> 
                             </span>
                        </div>
                        <div style={{width:'40%'}} >
                            <label style={{userSelect:'none',fontFamily:'Segoe UI ',color:'#1F1F20',fontSize:16}} className={"label"}>Select Gender</label>
                             <span className={"dd_input_wrap"}>
                             <select onMouseEnter={()=>this.setHoverState('gender')}
                                onMouseLeave={()=>this.setHoverState(null)}
                                onMouseUpCapture={()=>this.setPressed('gender')} 
                                onBlur={()=>this.setPressed(null)} 
                                style={{width:'100%',
                                minHeight:'40px',
                                borderRadius:8,
                                padding:10,
                                border:`1px solid ${this.state.pressed === 'gender' || this.state.hoverState==='gender' ?'#275473':'#C3C1C1'}`,
                                outline:'0px',
                                backgroundColor:'rgb(247, 247, 247)',
                                boxSizing:'border-box',}} 
                                value={this.state.gender} onChange={(e)=>this.handleChange2(e)}>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Others">Others</option>
                                <option value="Anyone">Anyone</option>
                            </select> 
                             </span>
                        </div>
                    </div>  
                    <div className={"form_field"}>
                        <div >
                            <label style={{userSelect:'none',fontFamily:'Segoe UI ',color:'#1F1F20',fontSize:16}} className={"label"}>Brand</label>
                             <span className={"dd_input_wrap"}>
                                 <input
                                 onMouseEnter={()=>this.setHoverState('Brand')}
                                 onMouseLeave={()=>this.setHoverState(null)}
                                 onMouseUpCapture={()=>this.setPressed('Brand')} 
                                 onBlur={()=>this.setPressed(null)}
                                 style={{border:`1px solid ${this.state.pressed === 'Brand' || this.state.hoverState==='Brand' ?'#275473':'#C3C1C1'}`,
                             outline:'0px',}} onChange={(event)=>this.onChangeEventHandler(event,"brand")}
                                  value={this.state.brand} type="text" placeholder="Add a Brand" maxlength="64" className={"dd_input"}>
                                     </input> 
                             </span>
                        </div>
                    </div>
                    <div className={"form_field"}>
                        <div >
                            <label style={{userSelect:'none',fontFamily:'Segoe UI ',color:'#1F1F20',fontSize:16}} className={"label"}>Price</label>
                             <span className={"dd_input_wrap"}>
                                 <input
                                 onMouseEnter={()=>this.setHoverState('Price')}
                                 onMouseLeave={()=>this.setHoverState(null)}
                                 onMouseUpCapture={()=>this.setPressed('Price')} 
                                 onBlur={()=>this.setPressed(null)}
                                 style={{border:`1px solid ${this.state.pressed === 'Price' || this.state.hoverState==='Price' ?'#275473':'#C3C1C1'}`,
                             outline:'0px',}} onChange={(event)=>this.onChangeEventHandler(event,"price")}
                                  value={this.state.price} type="text" placeholder="Add a price" maxlength="64" className={"dd_input"}>
                                     </input> 
                             </span>
                        </div>
                    </div>
            {/* <div className={"form_field}>
                <div >
                    <label className={"label}>
                        Tags
                        <svg className={["circle_help,"icon_16,"nudge_down_2,"nudge_right_2].join(" ")} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" svg-inline="" role="presentation" focusable="false" tabindex="-1" data-tippy="" data-original-title="Start typing tags. Hit tab, comma, or return to complete. Hit backspace/delete to remove.">
                            <path 
                                fill-rule="evenodd" clip-rule="evenodd" d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zm-11.332 1.968h-2.24c0-1.344.336-1.984 1.216-2.72.175-.152.366-.292.554-.43.584-.427 1.142-.836 1.142-1.538 0-.736-.64-1.2-1.52-1.2-1.088 0-1.808.752-1.824 1.744H7.5C7.564 7.68 9.148 6 11.916 6c2.496 0 4.064 1.28 4.064 3.216 0 1.2-.56 1.936-1.184 2.432-.382.297-.71.519-.988.706-.35.236-.617.417-.804.622-.256.288-.32.528-.336.992zm-2.576 2.816c0-.8.608-1.424 1.424-1.424s1.424.624 1.424 1.424c0 .8-.608 1.424-1.424 1.424a1.397 1.397 0 01-1.424-1.424z" fill="0">
                            </path>
                        </svg>
                    </label> 
                        <div>
                            <input type="text" tabindex="-1" value="" className={"dd_input} style={{display:""}}>
                                </input>
                            
                            </div>
                </div>
                </div>  */}
                        {/* <div className={"suggested_tag_wrapper}>
                            <p className={["pt20,"text_uppercase,"text_size_12,"text_medium,"text_weight_500,"lh_copy].join(" ")}>
                        Suggested Tags
                        <svg className={["circle_help,"icon_16,"nudge_down_2,"nudge_right_2].join(" ")} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" svg-inline="" role="presentation" focusable="false" tabindex="-1" data-tippy="" data-original-title="These tags are recommended based on your tag history and popular tags across Dribbble.">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zm-11.332 1.968h-2.24c0-1.344.336-1.984 1.216-2.72.175-.152.366-.292.554-.43.584-.427 1.142-.836 1.142-1.538 0-.736-.64-1.2-1.52-1.2-1.088 0-1.808.752-1.824 1.744H7.5C7.564 7.68 9.148 6 11.916 6c2.496 0 4.064 1.28 4.064 3.216 0 1.2-.56 1.936-1.184 2.432-.382.297-.71.519-.988.706-.35.236-.617.417-.804.622-.256.288-.32.528-.336.992zm-2.576 2.816c0-.8.608-1.424 1.424-1.424s1.424.624 1.424 1.424c0 .8-.608 1.424-1.424 1.424a1.397 1.397 0 01-1.424-1.424z" fill="0">
                            </path>
                        </svg>
                        </p>
                        <ul className={["inline_flex,"flex_wrap,"lh_copy,"suggested_tag_list].join(" ")}>
                            <li className={"text_size_14}>
                                <a href="/">
                                    illustration
                                </a>
                            </li>
                        <li className={"text_size_14}>
                            <a href="/">
                        design
                    </a></li>
                    <li className={"text_size_14}><a href="/">
                        logo
                    </a></li>
                    <li className={"text_size_14}><a href="/">
                        ui
                    </a></li>
                    <li className={"text_size_14}><a href="/">
                        vector
                    </a></li>
                    <li className={"text_size_14}><a href="/">
                        branding
                    </a></li>
                    <li className={"text_size_14}><a href="/">
                        typography
                    </a></li>
                    <li className={"text_size_14}><a href="/">
                        ux
                    </a></li>
                    <li className={"text_size_14}><a href="/">
                        icon
                    </a></li>
                    <li className={"text_size_14}><a href="/">
                        app
                    </a></li>
                    </ul>
                </div> */}
                <div className={"form_field"}>
                    <div style={{width:'100%',height:'50%'}} >
                        <label style={{userSelect:'none',fontFamily:'Segoe UI ',color:'#1F1F20',fontSize:16}} className={"label"}>
                        Description
                    <svg className={["circle_help","icon_16","nudge_down_2","nudge_right_2"].join(" ")} 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg" 
                    svg-inline="" 
                    role="presentation" 
                    focusable="false" 
                    tabindex="-1" 
                    data-tippy="" 
                    data-original-title="URLs are automatically hyperlinked. Line breaks and paragraphs are automatically generated. a, em, strong and code tags are accepted.">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zm-11.332 1.968h-2.24c0-1.344.336-1.984 1.216-2.72.175-.152.366-.292.554-.43.584-.427 1.142-.836 1.142-1.538 0-.736-.64-1.2-1.52-1.2-1.088 0-1.808.752-1.824 1.744H7.5C7.564 7.68 9.148 6 11.916 6c2.496 0 4.064 1.28 4.064 3.216 0 1.2-.56 1.936-1.184 2.432-.382.297-.71.519-.988.706-.35.236-.617.417-.804.622-.256.288-.32.528-.336.992zm-2.576 2.816c0-.8.608-1.424 1.424-1.424s1.424.624 1.424 1.424c0 .8-.608 1.424-1.424 1.424a1.397 1.397 0 01-1.424-1.424z" fill="0">
                        </path>
                    </svg>
                      </label> 
                    <textarea 
                    onMouseEnter={()=>this.setHoverState('descr')}
                    onMouseLeave={()=>this.setHoverState(null)}
                    onMouseUpCapture={()=>this.setPressed('descr')} 
                    onBlur={()=>this.setPressed(null)}
                    style={{border:`1px solid ${this.state.pressed === 'descr' || this.state.hoverState==='descr' ?'#275473':'#C3C1C1'}`,
                    outline:'0px',fontSize:13,padding:10,height:this.Wheight*0.15}}  onChange={(event)=>this.onChangeEventHandler(event,"description")} 
                    value={this.state.description} 
                    placeholder="Tell us about your process and how you arrived at this design." 
                    className={"dd_input"}>
                    </textarea>
                    </div>
                </div>
                 
            </form>
            </div>
        </div>
        <div  className="upload_details">
        <div className={"form_field"}>
                <div >
                    <label style={{userSelect:'none',fontFamily:'Segoe UI ',color:'#1F1F20',fontSize:16}} className={"label"}> Set Units</label>
                        <span style={{width:'50%'}} className={"dd_input_wrap"}>
                            <input
                            onMouseEnter={()=>this.setHoverState('units')}
                            onMouseLeave={()=>this.setHoverState(null)}
                            onMouseUpCapture={()=>this.setPressed('units')} 
                            onBlur={()=>this.setPressed(null)}
                            style={{border:`1px solid ${this.state.pressed === 'units' || this.state.hoverState==='units' ?'#275473':'#C3C1C1'}`,
                        outline:'0px',}} onChange={(event)=>this.onChangeEventHandler(event,"units")}
                            value={this.state.units} type="text" placeholder="Add Units" maxlength="64" className={"dd_input"}>
                                </input> 
                        </span>
                </div>
            </div>
            <div className={"form_field"}>
                <div >
                    <label style={{userSelect:'none',fontFamily:'Segoe UI ',color:'#1F1F20',fontSize:16}} className={"label"}> Serial Number</label>
                        <span style={{width:'50%'}} className={"dd_input_wrap"}>
                            <input
                            onMouseEnter={()=>this.setHoverState('snNo')}
                            onMouseLeave={()=>this.setHoverState(null)}
                            onMouseUpCapture={()=>this.setPressed('snNo')} 
                            onBlur={()=>this.setPressed(null)}
                            style={{border:`1px solid ${this.state.pressed === 'snNo' || this.state.hoverState==='snNo' ?'#275473':'#C3C1C1'}`,
                        outline:'0px',}} onChange={(event)=>this.onChangeEventHandler(event,"snNo")}
                            value={this.state.snNo} type="text" placeholder="Add Serial No." maxlength="64" className={"dd_input"}>
                                </input> 
                        </span>
                </div>
            </div>
        </div>
        </div>
        
    </div>
    
    <footer role="banner" className={"upload_flow_footer"}>
        <div onClick={this.history.push('/products/unitSales')} className={"footer_actions_left"}>
          <a style={{textDecoration:"none"}} href="" className={["dd_btn","dd_btn_tertiary"].join(" ")}>Cancel</a>                          
        </div>
        <div onClick={this.onSubmitHandler} style={{width:'7%',marginLeft:'3%',backgroundColor:'#3E42B5'}} className={["dd_btn2","dd_btn_tertiary"].join(" ")} >
            <text style={{userSelect:'none',fontFamily:'Segoe UI ',color:'white',fontSize:17}}>Push</text>
        </div>
    </footer>
    </div>:<div style={{width:'100%',height:'100%',justifyContent:'center',alignItems:'center',display:'flex',flexDirection:'column'}}>
    <Loader
        type="Puff"
        color="#376BF0"        
        height={80}
        width={80}
         //3 secs
      />
      <text style={{fontFamily:'Segoe UI Semibold ',fontSize:20,color:'#275473',marginTop:'3%'}}>Adding Product....</text>
    </div>
    }
    
}
const mapStateToProps=state =>{
    return {
        token:state.auth.token,
        role:state.auth.role
    }
}

export default connect(mapStateToProps,{newProduct})(Upload);
