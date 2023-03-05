
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartContainer from "./components/CartContainer";
import Modal from "./components/modal";
import Navbar from "./components/navBar";
import { clearCart } from "./features/cart/cartSlice";
import { closeModal, openModal } from "./features/modal/modalSlice";

function App() {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state) => state.modal);
 

  const handleConfirmed = () => {
    dispatch(clearCart());
    dispatch(closeModal());
  }
  
  return(
   <main>
    { isOpen && <Modal handleCancel = { () =>  dispatch(closeModal()) } handleConfirmed = { handleConfirmed }/>}
    <Navbar/>
    <CartContainer handleClearCart = { () =>  dispatch(openModal()) }/>
   </main>
  )
}
export default App;
