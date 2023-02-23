import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
const List = ({ items, setEdit, removeItem }) => {
  
  // const getItems = (item) => {
  //   setEdit(item);
  // }

  return (
    <div className='grocery-list'>
          {
            items.map((item, index) => {
              return(
                <article className='grocery-item' key={index}>
                  <p className='title'>{item}</p>
                  <div className='btn-container'>
                    <button type='button' className='edit-btn' onClick={ () =>  setEdit(item) }>
                      <FaEdit />
                    </button>
                    <button type='button' className='delete-btn' onClick={ () =>  removeItem(item) }>
                      <FaTrash />
                    </button>
                  </div>
              </article>
              )
            })
          }
    </div>
  );
};

export default List;
