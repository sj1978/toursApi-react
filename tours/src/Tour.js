import React, { useState } from 'react';

const Tour = ({id,name,image,price,info,removeTour}) => {
    const [readMore, setReadMore] = useState(false)
  return (
      <article className='single-tour'>
          <img src={image} alt={name} />
          <footer>
              <div className='tour-info'>
                  <h4>{name}</h4>
                  <h4 className="tour-price">{price}</h4>
                  <p>{ readMore ? info : `${info.substring(0,120)}...`
                  }</p>
                  <button onClick={() => setReadMore(!readMore)}> {readMore? 'show less' : 'show more'}</button>
                  <button className='delete-btn' onClick={() =>  removeTour(id)}>Not Interested</button>
              </div>
          </footer>
      </article>
  )
};

export default Tour;