import React, { useReducer } from 'react';
import { data } from '../../../data';
import { REMOVE_ITEM, REMOVE_LIST, RESET_LIST } from './actions';
import reducer from './reducer';

const defaultState = {
  people: data,
}

const ReducerBasics = () => {
  
const [ state, dispatch ] =  useReducer(reducer, defaultState);
const { people } = state;

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload:id });
  };
  const handleClearList = (id) => {
    dispatch({ type: REMOVE_LIST});
  };
  const handleReset = (data) => {
    dispatch({ type: RESET_LIST, payload: data });
  }
  return (
   
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      <button
        className='btn'
        style={{ marginTop: '2rem' }}
        onClick={people.length -1  < 0 ? () => handleReset(data) : () => handleClearList()}>
        {people.length - 1 < 0 ? "Reset" : "Clear"}
      </button>
    </div>
  );
};

export default ReducerBasics;
