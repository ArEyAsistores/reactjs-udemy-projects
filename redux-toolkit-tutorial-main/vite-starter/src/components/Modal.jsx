import React from 'react'

const Modal = (props) => {

  const { handleCancel, handleConfirmed } = props;
  return (
    <aside className='modal-container'>
        <div className='modal'>
            <h4>Remove all items from your shopping cart?</h4>
            <div className='btn-container'>
                <button type='button' className='btn confirm-btn' onClick={ handleConfirmed } >Confirm</button>
                <button  type='button' className='btn clear-btn' onClick={ handleCancel }>Cancel</button>
            </div>
        </div>
    </aside>
  )
}

export default Modal