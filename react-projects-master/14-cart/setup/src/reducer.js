import { DECREASE_QTY, GET_ITEMS, INCREASE_QTY } from "./action"

const reducer = (state, action) => {
   
    switch (action.type){
        case GET_ITEMS:  return { 
            ...state, cart: action.payload, loading: false
         }
        case INCREASE_QTY:  
            let incTem = state.cart.map((item) => {
                if(item.id === action.payload ){
                    return { ...item, qty: item.qty + 1,}
                }
                return item
              }).filter((cart) => cart.qty !== 0)
              return {
                ...state, cart: incTem, loading: false
              }
      
        case DECREASE_QTY:  
        let decItem = state.cart.map((item) => {
            if(item.id === action.payload ){
                return { ...item, qty: item.qty - 1,}
            }
            return item
          }).filter((cart) => cart.qty !== 0)
          return {
            ...state, cart: decItem, loading: false
          }
        default:
            return state
    }
 
}

export default reducer