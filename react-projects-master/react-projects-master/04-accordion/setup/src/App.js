import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {

  const questionList = data.map((question, i) =>{
    return(
      <SingleQuestion {...question} key = {i}/>
    );
  })

  return(
    <main>
      <div className='container'>
        <h3>questions and answers about login</h3>
        <section>
         { questionList }
        </section>
      </div>
    </main>
  );
}

export default App;
