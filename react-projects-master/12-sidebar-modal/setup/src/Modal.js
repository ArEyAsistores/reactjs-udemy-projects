import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from './context'
import { links } from './data';
const Modal = () => {

  const {isModal, toggleModal, tabIndex} = useGlobalContext();

  console.log(tabIndex);

  return (
    <div
    className={`${
      isModal ? 'modal-overlay show-modal' : 'modal-overlay'
    }`}
  >
    <div className='modal-container'>
      <h3>modal content</h3>
      <button className='close-modal-btn' onClick={toggleModal}>
        <FaTimes></FaTimes>
      </button>
    </div>
  </div>
  );
}

export default Modal
