import React, { useState, useContext, createContext } from 'react';

 const AppContext = createContext();

 const TabContext = ({children}) => {

  const [isModal, setIsModal] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [tabIndex, setTabIndex] = useState(0);

  const toggleModal = () => setIsModal(!isModal);
  const toggleSideBar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <AppContext.Provider value={{ isModal, isSidebarOpen, toggleModal, toggleSideBar, tabIndex, setTabIndex}}>
        {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => { return useContext(AppContext)};

export  {TabContext, AppContext};

