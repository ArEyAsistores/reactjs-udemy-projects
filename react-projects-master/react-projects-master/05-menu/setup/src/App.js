import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {

  const categories = ['all', ...new Set(items.map((item) => {
    return item.category;
 }))]

 const [selectedTab, setSelectedTab ] = useState(categories[0]);

  const setTab = (category) => {
    setSelectedTab(category);
  }

  return(
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories = { categories } setTab = { setTab } />
        <Menu menu = { items } selectedCategory = { selectedTab }/>
      </section>
    </main>
  );
}

export default App;
