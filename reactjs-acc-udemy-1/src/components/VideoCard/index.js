import React from 'react'

const VideoCard = (props) => {
    
const {name, desc, getId, id, img, number} = props;

//prop ref from parent
const getVideoCardId = () => {
    getId(id); 
};

  return (
    <article  className='gpu'>
        <span className='number'>{ `#${number + 1}` } </span>
        <img src={ img } alt = { id }/>
        <h1>{ name }</h1>
        <h4>{ desc }</h4>
        <button onClick={ getVideoCardId }> Buy me! </button>
    </article>
  )

}

export default VideoCard