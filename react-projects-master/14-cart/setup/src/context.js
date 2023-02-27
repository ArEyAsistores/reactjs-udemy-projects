import React, { useState, useContext, useReducer, useEffect } from 'react'
import { DECREASE_QTY, GET_ITEMS, INCREASE_QTY } from './action'
import cartItems from './data'
import reducer from './reducer'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext()

const initialState = {
  loading: false,
  cart: cartItems.map((item) => { return {...item, qty: 1}}),
  total: 0,
  amount: 0,
}
const AppProvider = ({ children }) => {
 
  const [ state, despatch ] = useReducer(reducer, initialState);

  const fetchItems = async () =>{
    const request = await fetch(url);
    const response = await request.json();

    despatch({
      type: GET_ITEMS,
      payload: response.map((item) => { return {...item, qty: 1}})
    })
  }

  const increaseItem = (id) => {
    despatch({
      type: INCREASE_QTY,
      payload: id
    })
  }
  const decreaseItem = (id) => {
    despatch({
      type: DECREASE_QTY,
      payload: id
    })
  }

  useEffect(() => {
    fetchItems()
  }, [])

  return (
    <AppContext.Provider
      value={{
        ...state,
        increaseItem,
        decreaseItem
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
