import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  
  const numberCheck = (num) => {
    if(num > people.length - 1){
      return num = 0;
    }
    if(num < 0){
      return num = people.length - 1;
    }
    return num;
  }
  const [index, setIndex] = useState(numberCheck(0));
  let { id, name, job, image, text } = people[index];

  const handleNext = () => {
    setIndex((prevState) => numberCheck(prevState + 1) );
  }
  const handlePrev = () => {
    setIndex((prevState) => numberCheck(prevState - 1));
  }

  const handleRandom = () => {
    const randomIndex = Math.floor(Math.random() * people.length);
    setIndex((prevState) => prevState !== randomIndex ? randomIndex : numberCheck(randomIndex + 1));
  }

  return(
    <article className='review'>
      <div className='img-container' key={id}>
        <img className='person-img' src={image}/>
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={handlePrev}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={handleNext} >
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' onClick={handleRandom} >
        surprise me
      </button>
    </article>
  );
};

export default Review;
