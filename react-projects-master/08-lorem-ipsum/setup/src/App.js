import React, { useState } from 'react';
import data from './data';
function App() {

  const checkNumber = (number) => {
    if (number < 0) {
      return 0;
    }
    if (number > data.length) {
      return data.length;
    }
    return number;
  }

  const [number, setNumber] = useState(0);
  const [paragraphs, setParagraphs] = useState([]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const dataForm = new FormData(e.currentTarget);
    setNumber(Object.fromEntries(dataForm).number);
    setParagraphs(data.slice(0,checkNumber(number)));
    e.currentTarget.reset();
  }
  
  return (
      <section className='section-center'>
         <h3>tired of boring lorem ipsum?</h3>
        <form className='lorem-form' onSubmit={ handleOnSubmit}>
          <label htmlFor='amount'>paragraphs:</label>
          <input type={'number'} name={'number'} id={'number'} value={number} onChange={(e) => setNumber(e.target.value)}/>
          <button button='submit' className='btn'>generate</button>
        </form>
        <article className='lorem-text'>
         {
          paragraphs.map((item, index) => {
            return <p key={index}>{item}</p>
          })
         }
      </article>
      </section>
    )
}

export default App;
