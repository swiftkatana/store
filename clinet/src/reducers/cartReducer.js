
import _ from 'lodash'

import {ADD_ITEM_CART,DELETE_ITEM} from '../actions/types'


export default (state={count:0,cart:[]},action)=>{
    
        switch (action.type) {
            case ADD_ITEM_CART:
                let doIAdd=true;
                state.count=0
                for(let i=0; i<state.cart.length;i++){

                    if( state.cart[i]._id===action.payload._id)
                    {
                        state.cart[i].cartCount++;
                        doIAdd=false;
                    }
                    state.count+=state.cart[i].cartCount;

                }
                if(doIAdd){
                    state.count++;
                    action.payload.cartCount++;
                    state.cart.push(action.payload);
                    return{...state}
                }
                else return {...state}
            
            case DELETE_ITEM :
            state[0].count--
            return  _.omit(state,action.payload);
        
        
            default:
                return state
            
        }
    }