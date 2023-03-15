
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartContainer from "./components/CartContainer";
import Modal from "./components/modal";
import Navbar from "./components/navBar";
import { clearCart, getCartItems } from "./features/cart/cartSlice";
import { closeModal, openModal } from "./features/modal/modalSlice";

function App() {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state) => state.modal);
  const { isLoading, cartItems } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getCartItems());
  },[])

  const handleConfirmed = () => {
    dispatch(clearCart());
    dispatch(closeModal());
  }
  if(isLoading){
   return(
    <div className="loading">
      <h1>Loading....</h1>
    </div>
   );
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
