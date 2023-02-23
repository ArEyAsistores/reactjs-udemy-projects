import React from 'react'

const Tabs = ({tabs, index , onChangeTab}) => {
  
    const getTab = (index) =>{
        onChangeTab(tabs.indexOf(index));
        console.log(tabs.indexOf(index));
    }
  return (
    <div className="btn-container">
        {
            tabs.map((tab,i) =>{
                return(
                    <button key={i} className={`job-btn ${tab === tabs[index] && 'active-btn'}`} onClick={() => getTab(tab) }>{tab}</button>
                )
            })
        }
    </div>
  )
}

export default Tabs