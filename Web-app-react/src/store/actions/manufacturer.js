
export const PRODUCT_RETAILERS='PRODUCT_RETAILERS';
export const TOP_RETAILERS='TOP_RETAILERS';
export const INLOSS_PRODUCTS='INLOSS_PRODUCTS'
export const TOP_PRODUCTS='TOP_PRODUCTS';
export const  ADD_PRODUCT = 'ADD_PRODUCT';
export const  UPDATE_PRODUCT_STOCK = 'UPDATE_PRODUCT_STOCK';
export const  UPDATE_UNITS= 'UPDATE_UNITS';
export const  PRODUCTS_ANSWER= 'PRODUCTS_ANSWER';
export const PRODUCTS='PRODUCTS';
export const CATEGORIES='CATEGORIES';


export const getCategories = () => {
    return async dispatch => {
        try{const response=await fetch('http://welcome-to-kassandra.azurewebsites.net/allCategories',{
            method:'GET',
            headers:{
                'Content-Type':'application/json'
            },
            
        });
        if(!response.ok){
            let errorId= ((await response.json()).error);
            throw new Error('Error in Fetching Data');
        }
        const resData=await response.json();
        
        console.log(resData)
        dispatch({
            type:CATEGORIES,
            categories:resData.categories
        })
        
    }catch(err){
            console.log(err)
            throw err
        }
    }
}

export const newProduct = async(formData,token) => {
    const response= await fetch('http://welcome-to-kassandra.azurewebsites.net/manufacturer/newProduct',{
            method:'POST',
            headers:{
                'Authorization':'Bearer '+token 
            },
            body:formData
            
        });
        console.log("done");
        if(!response.ok){
            // let errorId= ((await response.json()).error);
            console.log('Error in Fetching Data');
        }
    return async(dispatch) => {
        try{    
        const response2=await fetch('http://welcome-to-kassandra.azurewebsites.net/manufacturer/products',{
            method:'GET',
            headers:{
                'Authorization':'Bearer '+token 
            },
        });
        if(!response2.ok){
            let errorId= ((await response2.json()).error).toString();
            throw new Error('Error in Fetching Data');
        }
        const resData=await response2.json();
        console.log(resData)
        dispatch({
            type:PRODUCTS,
            products:resData.products
        })
        
    }catch(err){
            console.log(err)
            throw err
        }
    }
}

export const getProducts = (token) => {
    return async dispatch => {
        try{const response=await fetch('http://welcome-to-kassandra.azurewebsites.net/manufacturer/products',{
            method:'GET',
            headers:{
                'Authorization':'Bearer '+token 
            },
        });
        if(!response.ok){
            let errorId= ((await response.json()).error);
            throw new Error('Error in Fetching Data');
        }
        const resData=await response.json();
        console.log(resData)
        dispatch({
            type:PRODUCTS,
            products:resData.products
        })
        
    }catch(err){
            console.log(err)
            throw err
        }
    }
}
export const getTopProducts = (token) => {
    return async dispatch => {
        try{const response=await fetch('http://welcome-to-kassandra.azurewebsites.net/manufacturer/top-products',{
            method:'GET',
            headers:{
                'Authorization':'Bearer '+token 
            },
        });
        if(!response.ok){
            let errorId= ((await response.json()).error);
            throw new Error('Error in Fetching Data');
        }
        const resData=await response.json();
        console.log(resData)
        dispatch({
            type:TOP_PRODUCTS,
            products:resData.products
        })
        
    }catch(err){
            console.log(err)
            throw err
        }
    }
}
export const getInLossProducts = (token) => {
    return async dispatch => {
        try{const response=await fetch('http://welcome-to-kassandra.azurewebsites.net/manufacturer/top-products',{
            method:'GET',
            headers:{
                'Authorization':'Bearer '+token 
            },
        });
        if(!response.ok){
            let errorId= ((await response.json()).error);
            throw new Error('Error in Fetching Data');
        }
        const resData=await response.json();
        console.log(resData)
        dispatch({
            type:INLOSS_PRODUCTS,
            products:resData.products
        })
        
    }catch(err){
            console.log(err)
            throw err
        }
    }
}

export const getTopRetialersForProduct = (prodId,token) => {
    return async dispatch => {
        try{const response=await fetch(`http://welcome-to-kassandra.azurewebsites.net/manufacturer/top-retailers/${prodId} `,{
            method:'GET',
            headers:{
                'Authorization':'Bearer '+token 
            },
        });
        if(!response.ok){
            let errorId= ((await response.json()).error);
            throw new Error('Error in Fetching Data');
        }
        const resData=await response.json();
        console.log(resData)
        dispatch({
            type:TOP_RETAILERS,
            retailers:resData.RetailerReg
        })
        
    }catch(err){
            console.log(err)
            throw err
        }
    }
}

export const updateProductStock = (data,token) => {
    return async dispatch => {
        try{const response=await fetch('http://welcome-to-kassandra.azurewebsites.net/manufacturer/updateprodStock',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer '+token 
            },
            body:data
            
        });
        if(!response.ok){
            let errorId= ((await response.json()).error);
            throw new Error('Error in Fetching Data');
        }
        const response2=await fetch('http://welcome-to-kassandra.azurewebsites.net/manufacturer/products',{
            method:'GET',
            headers:{
                'Authorization':'Bearer '+token 
            },
        });
        if(!response2.ok){
            let errorId= ((await response2.json()).error).toString();
            throw new Error('Error in Fetching Data');
        }
        const resData=await response2.json();
        console.log(resData)
        
        dispatch({
            type:UPDATE_PRODUCT_STOCK,
            products:resData.products
        })
        
    }catch(err){
            console.log(err)
            throw err
        }
    }
}

export const updateUnits = (prodId,unitsToAdd,token) => {
    return async dispatch => {
        try{const response=await fetch('http://welcome-to-kassandra.azurewebsites.net/manufacturer/updateUnits',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer '+token 
            },
            body:JSON.stringify({
                "prodId":prodId,
                "unitsToAdd":unitsToAdd})
            
        });
        if(!response.ok){
            let errorId= ((await response.json()).error);
            throw new Error('Error in Fetching Data');
        }
        const response2=await fetch('http://welcome-to-kassandra.azurewebsites.net/manufacturer/products',{
            method:'GET',
            headers:{
                'Authorization':'Bearer '+token 
            },
        });
        if(!response2.ok){
            let errorId= ((await response2.json()).error)
            throw new Error('Error in Fetching Data');
        }
        const resData=await response2.json();
        console.log(resData)
        dispatch({
            type:UPDATE_PRODUCT_STOCK,
            products:resData.products
        })
        
    }catch(err){
            console.log(err)
            throw err
        }
    }
}