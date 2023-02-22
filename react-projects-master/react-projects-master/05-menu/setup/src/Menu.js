import React from 'react';

const Menu = ({menu, selectedCategory}) => {

  const menuList = menu.filter((item) =>selectedCategory === 'all' ? item.category : item.category === selectedCategory)
  .map((item) =>{
    const { id, title, price, img, desc } = item;
    return (
    <article className='menu-item' key={id}>
       <img src={img} className='photo' alt={title}></img>
       <div className='item-info'>
        <header>
          <h4>{title}</h4>
          <h4 className='price'>{price}</h4>
        </header>
        <p className='item-text'>{desc}</p>
       </div>
    </article>
  )});


  return (
    <div className='section-center'>
      {menuList}
    </div>
  );
};

export default Menu;
