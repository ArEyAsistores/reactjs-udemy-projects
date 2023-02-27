import React from 'react'
import { data } from '../../../data'
import { REMOVE_ITEM, REMOVE_LIST, RESET_LIST } from './actions';

const reducer = (state, action) => {
    switch (action.type) {
      case REMOVE_LIST:
        console.log(state, 'from reducer');
        return {
        ...state,
          people: [],
        }
      case REMOVE_ITEM:
        return {
        ...state,
          people: state.people.filter(item => item.id!== action.payload),
        }
      case RESET_LIST:
        return {
        ...state,
          people: action.payload,
        }
      default:
        return state
    }
  }

export default reducer