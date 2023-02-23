import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {

  const [personIndex, setPersonIndex] = useState(0);

  const checkNumber = (index) => {
    if(index > data.length -1){
      return index = 0;
    }
    if(index < 0){
      return data.length - 1;
    }
    return index;
  }

  useEffect(() => {
    let autoSlider = setInterval(() => {
      setPersonIndex((prevState) => checkNumber(prevState + 1));
    }, 3700);
    return () => clearInterval(autoSlider);
  },[personIndex])


  return(
    <section className="section">
    <div className="title">
      <h2>
        <span>/</span>reviews
      </h2>
    </div>
    <div className="section-center">
        {
          data.map((item, index) => {
            let position = 'nextSlide';
          if (index === personIndex) {
            position = 'activeSlide';
          }
          if (index === personIndex - 1 || (personIndex === 0 && index === data.length - 1)) {
            position = 'lastSlide';
          }
           return(
            <article className={position} key={index}>
              <img  className="person-img" src={item.image} />
              <h4>{item.name}</h4>
              <p className="title">{item.title}</p>
              <p className="text">{item.quote}</p>
              <FaQuoteRight className="icon" />
           </article>
           )
          })
        }
         
      <button className="prev" onClick={() => setPersonIndex((prevState) => checkNumber(prevState - 1))} >
        <FiChevronLeft />
      </button>
      <button className="next" onClick={() => setPersonIndex((prevState) => checkNumber(prevState + 1))} >
        <FiChevronRight />
      </button>
    </div>
  </section>
  );
}

export default App;
