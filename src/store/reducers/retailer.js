



import { RETAILER_CATEGORIES, RETAILER_PRODUCTS, SELECT_PRODUCT, TOP_RETAILER_PRODUCTS, TOP_RETAILER_PRODUCTS_REGIONAL, UPDATE_RETAILER_PRODUCT_RETAILER_STOCK, UPDATE_RETAILER_UNITS } from "../actions/retailer";

const initialState={
    products:[],
    topProducts:null,
    topProductsRegional:null,
    topRetailers:null,
    inLossProducts:null,
    categories:null,
    product:null
}

export default (state=initialState,action)=>{
    switch(action.type){
        case SELECT_PRODUCT:
            return{
                ...state,
                product:action.product
            }
        case RETAILER_PRODUCTS:
             return {...state,
                products:action.products,
                categories:action.categories,
                product:action.product}
        case UPDATE_RETAILER_PRODUCT_RETAILER_STOCK:
            return {...state,
                products:action.products}
        
        case UPDATE_RETAILER_UNITS:{
            return {...state,
                products:action.products
            }   
        }
        case TOP_RETAILER_PRODUCTS_REGIONAL:{
            return {
                ...state,
                topProductsRegional:action.products
            }
        }
        case TOP_RETAILER_PRODUCTS:{
            return {
                ...state,
                topProducts:action.products
            }
        }
        case RETAILER_CATEGORIES:{
            return {
                ...state,
                categories:action.categories
            }
        }
        
        
        default:
            return state
    }
}