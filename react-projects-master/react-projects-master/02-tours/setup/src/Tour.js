import React, { useState } from 'react';

const Tour = ({tour, removeTour }) => {
  const { id, name, info, price, image } = tour;
  
  const [readMore, setReadMore] = useState(false);

  const notInterestedHandler = () => {
    removeTour(id);
  }

  return (
    <article className="single-tour">
      <img src={image} alt={name}/>
      <footer>
        <div className="tour-info">
          <h4>{name}: here</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>{readMore ? info :`${info.substring(0, 200)}...`}
          <button type='button' onClick={() => setReadMore(!readMore)}> {readMore ?' show less' : 'Read More' }  </button></p>
        <button className="delete-btn" onClick={ notInterestedHandler } >
          not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
