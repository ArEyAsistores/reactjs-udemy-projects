import React from 'react';

const Categories = ({categories, setTab }) => {

  const getCategory = (category) => {
    setTab(category);
  }
  
  const categoriesList = categories.map((category, index) =>{
   return( <button key={index} className="filter-btn" onClick={ () => getCategory(category) }>{category}</button>)
  })
 return (
    <div className="btn-container">
     {categoriesList}
    </div>
  );
}

export default Categories;
