

import { CATEGORIES, INLOSS_PRODUCTS, PRODUCTS, TOP_PRODUCTS, TOP_RETAILERS, UPDATE_PRODUCT_STOCK } from "../actions/manufacturer";

const initialState={
    products:[],
    topProducts:null,
    topRetailers:null,
    inLossProducts:null,
    categories:null,
   

}

export default (state=initialState,action)=>{
    switch(action.type){
        case PRODUCTS:
             return {...state,
                products:action.products}
        
        case UPDATE_PRODUCT_STOCK:{
            return {...state,
                products:action.products
            }   
        }
        case TOP_PRODUCTS:{
            return {
                ...state,
                topProducts:action.products
            }
        }
        case CATEGORIES:{
            return {
                ...state,
                categories:action.categories
            }
        }
        case INLOSS_PRODUCTS:{
            return {
                ...state,
                inLossProducts:action.products
            }
        }
        case TOP_RETAILERS:{
            return {
                ...state,
                topRetailers:action.retailers
            }
        }
        
        default:
            return state
    }
}