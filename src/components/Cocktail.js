import React from 'react';
import { Link } from 'react-router-dom';

const Cocktail = ({ id, name, image, info, glass }) => {
  return (
    <article className='cocktail'>
      <div className='image-container'>
        <img src={image} alt={name} />
      </div>
      <div className='cocktail-footer'>
        <h3>{name}</h3>
        <h3>{glass}</h3>
        <p>{info}</p>
        <Link to={`/cocktails/${id}`} className='btn btn-primary'>
          details
        </Link>
      </div>
    </article>
  );
};

export default Cocktail;
