import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'

const Home = () => {

  const { toggleSideBar, isSidebarOpen, toggleModal} = useGlobalContext();
  return(
    <main>
   {
    !isSidebarOpen &&
     <button className='sidebar-toggle' onClick={toggleSideBar} >
     <FaBars />
    </button>
   }
    <button className='btn' onClick={toggleModal}>
      show modal
    </button>
  </main>
  )
}

export default Home
