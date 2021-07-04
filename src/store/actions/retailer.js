
export const PRODUCT_RETAILER_RETAILERS='PRODUCT_RETAILER_RETAILERS';
export const TOP_RETAILER_RETAILERS='TOP_RETAILER_RETAILERS';
export const INLOSS_RETAILER_PRODUCTS='INLOSS_RETAILER_PRODUCTS'
export const TOP_RETAILER_PRODUCTS_REGIONAL='TOP_RETAILER_PRODUCTS_REGIONAL';
export const TOP_RETAILER_PRODUCTS='TOP_RETAILER_PRODUCTS';
export const  ADD_RETAILER_PRODUCT = 'ADD_RETAILER_PRODUCT';
export const  UPDATE_RETAILER_PRODUCT_RETAILER_STOCK = 'UPDATE_RETAILER_PRODUCT_RETAILER_STOCK';
export const  UPDATE_RETAILER_UNITS= 'UPDATE_RETAILER_UNITS';
export const  PRODUCTS_RETAILER_ANSWER= 'PRODUCTS_RETAILER_ANSWER';
export const RETAILER_PRODUCTS='RETAILER_PRODUCTS';
export const RETAILER_CATEGORIES='RETAILER_CATEGORIES';
export const SELECT_PRODUCT='SELECT_PRODUCT';
export const NEW_PRODUCT='NEW_PRODUCT'

export const selectProduct = prod =>{
    return async dispatch=>{
        dispatch({type:SELECT_PRODUCT,
        product:prod});
    }
}
export const retailerNewProduct = (data,token) => {
    return async dispatch => {
        try{const response=await fetch('http://welcome-to-kassandra.azurewebsites.net/retailer/newProduct',{
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
        const response2=await fetch('http://welcome-to-kassandra.azurewebsites.net/retailer/products',{
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
            type:NEW_PRODUCT,
            products:resData.products
        })
        
    }catch(err){
            console.log(err)
            throw err
        }
    }
}
export const getRetailerCategories = () => {
    return async dispatch => {
        try{const response=await fetch('http://welcome-to-kassandra.azurewebsites.net/allCategories',{
            method:'GET',
             
        });
        if(!response.ok){
            let errorId= ((await response.json()).error);
            throw new Error('Error in Fetching Data');
        }
        const resData=await response.json();
        console.log('categories fetched :'+resData.obj)
        console.log(resData)
        dispatch({
            type:RETAILER_CATEGORIES,
            categories:resData.obj
        })
        localStorage.setItem('stateRetailCat',JSON.stringify({
            categories:resData.obj
        }))
    }catch(err){
            console.log(err)
            throw err
        }
    }
}
export const retailerGetProducts = (token) => {
    return async dispatch => {
        const response=await fetch('http://welcome-to-kassandra.azurewebsites.net/retailer/myProducts',{
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
        console.log(resData);
        
        dispatch({
            type:RETAILER_PRODUCTS,
            products:resData.arr,
            product:resData.arr[0]
        })
    
    }
}
export const retailerGetTopRegionalProducts = (token) => {
    return async dispatch => {
        try{const response=await fetch('http://welcome-to-kassandra.azurewebsites.net/retailer/myPopProds',{
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
            type:TOP_RETAILER_PRODUCTS_REGIONAL,
            products:resData.arr
        })
        
    }catch(err){
            console.log(err)
            throw err
        }
    }
}
export const retailerGetTopProducts = (token) => {
    return async dispatch => {
        try{const response=await fetch('http://welcome-to-kassandra.azurewebsites.net/retailer/prodbyPop',{
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
            type:TOP_RETAILER_PRODUCTS,
            products:resData.products
        })
        
    }catch(err){
            console.log(err)
            throw err
        }
    }
}
export const retailerGetInLossProducts = (token) => {
    return async dispatch => {
        try{const response=await fetch('http://welcome-to-kassandra.azurewebsites.net/retailer/top-products',{
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
            type:INLOSS_RETAILER_PRODUCTS,
            products:resData.products
        })
        
    }catch(err){
            console.log(err)
            throw err
        }
    }
}

export const retailerGetTopRetialersForProduct = (prodId,token) => {
    return async dispatch => {
        try{const response=await fetch(`http://welcome-to-kassandra.azurewebsites.net/retailer/top-retailers/${prodId} `,{
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
            type:TOP_RETAILER_RETAILERS,
            retailers:resData.RetailerReg
        })
        
    }catch(err){
            console.log(err)
            throw err
        }
    }
}

export const retailerUpdateProductStock = (data,token) => {
    return async dispatch => {
        try{const response=await fetch('http://welcome-to-kassandra.azurewebsites.net/retailer/updateProdRegionSales',{
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
        const response2=await fetch('http://welcome-to-kassandra.azurewebsites.net/retailer/myProducts',{
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
            type:UPDATE_RETAILER_PRODUCT_RETAILER_STOCK,
            products:resData.products
        })
        
    }catch(err){
            console.log(err)
            throw err
        }
    }
}

export const retailerUpdateUnits = (prodId,unitsToAdd,token) => {
    return async dispatch => {
        try{const response=await fetch('http://welcome-to-kassandra.azurewebsites.net/retailer/updateStocks',{
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
        const response2=await fetch('http://welcome-to-kassandra.azurewebsites.net/retailer/myProducts',{
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
            type:UPDATE_RETAILER_UNITS,
            products:resData.products
        })
        
    }catch(err){
            console.log(err)
            throw err
        }
    }
}