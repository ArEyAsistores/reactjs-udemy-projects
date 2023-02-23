import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {

  const [items, setItems] = useState([]);
  const [itemInput, setItemInput] = useState('');
  const [alert, setAlert] = useState({type: '', msg: ''});
  
  const [isEditable, setEditable] = useState({
    oldValue: '',
    edit: false
  });

  const updateItems = (item) => {
    const oldItems = [...items];
    oldItems[items.indexOf(isEditable.oldValue)] = item;
    setItems(oldItems);
    setEditable(() => {
      return {
        edit:!isEditable.edit,
        oldValue: ''
      }
    })
    setAlert({type: 'success', msg:'update successfully'})

  }
  const clearItems = () => {
    setItems([]);
    setEditable(() => {
      return {
        edit:false,
        oldValue: ''
      }
    })
    setAlert({type: 'danger', msg:'Clear successfully'})

  }

  const toggleEdit = (item) => {

      setEditable(() => {
        return {
          edit:!isEditable.edit,
          oldValue: item
        }
      })
    setItemInput(() => item)
  }


  const handleAddItem = (e) => {
    e.preventDefault();
    const dataFormInput = Object.fromEntries(new FormData(e.currentTarget)).grocery;
 
    if(isEditable.edit){
      updateItems(dataFormInput)
    }else{
      setItems([...items, dataFormInput])
      setAlert({type: 'success', msg:'Added successfully'})
    }
    setItemInput('');
    e.currentTarget.reset();
  }
  const removeItem = (item) => {
    setItems(items.filter((itemArr) => itemArr!== item));
    setEditable(() => {
      return {
        edit:false,
        oldValue: ''
      }
    })
    setAlert({type: 'danger', msg:'remove successfully'})
  }

  return(
    <section className='section-center'>
      
      <form className='grocery-form' onSubmit={handleAddItem}>
        <Alert alert = {alert} />
        <h3>grocery bud</h3>
        <div className='form-control'>
          <input
            type='text'
            className='grocery'
            placeholder='e.g. eggs'
            name = 'grocery'
            value= { itemInput }
            onChange={(e) => setItemInput(e.target.value)}
          />
          <button type='submit' className='submit-btn'>
            { isEditable.edit ? 'Edit' : 'Submit' }
          </button>
        </div>
      </form>

      <List items = {items} setEdit = {  toggleEdit } removeItem = {  removeItem }/>
      <button className='clear-btn' onClick={ clearItems }> clear items </button>
    </section>
  );
}

export default App
