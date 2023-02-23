import React, { useState, useEffect } from 'react'
import Expierence from './components/Expierence';
import Tabs from './tabs';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'

function App() {
  const [ data, getData ] = useState([]);

  const [ isLoading, setIsLoading ] = useState(false);
  const [ selectedTab, setSelectedTab ] = useState([]);
  const [ index, setIndex ] = useState(0);
 
  const fetchData = async () =>{
    try {
      const request = await fetch(url);
      const response = await request.json();
      getData(response);
      setSelectedTab([...new Set(response.map((data) => data.company))]);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchData();
    
  },[]);

  const onChangeTab = (index) => {
    setIndex(index);
  }

  return(
    <section className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <div className="btn-container">
          <Tabs tabs = { selectedTab } index = { index } onChangeTab = { onChangeTab }/>
         </div>
        <Expierence expierence = { data } selectedTab = { selectedTab[index] }/>
      </div>
      <button type="button" className="btn">
        more info
      </button>
    </section>
  );
}

export default App
