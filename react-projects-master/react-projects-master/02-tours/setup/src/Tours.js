import React from 'react';
import Tour from './Tour';
const Tours = ({tour, removeTour}) => {

  const tourList = tour.map((tour) =>{
     return(
      <Tour tour = {tour} key= {tour.id} removeTour = { () => removeTour(tour.id) }/>
     );
  })

 return(
    <section>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        <h4>Tours</h4>
        { tourList }
      </div>
    </section>
 );
};

export default Tours;
