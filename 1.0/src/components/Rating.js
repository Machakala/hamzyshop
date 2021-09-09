import React, { useState } from 'react';

export default function Rating(props) {
  const { rating, numReviews, caption,} = props;
  const[count,setCount]=useState(0);
    const[negcount,setnegCount]=useState(0);

  const inc= (e) => {
      e.preventDefault();
    setCount(count+1);
  }
  const dec= (e) => {
      e.preventDefault();
    setnegCount(negcount-1);
  }
  return (
    <div className="row">
    <div className="rating ">
      <span>
        <i
          className={
            rating >= 1
              ? 'fa fa-star'
              : rating >= 0.5
              ? 'fa fa-star-half-o'
              : 'fa fa-star-o'
          }
        ></i>
      </span>
      <span>
        <i
          className={
            rating >= 2
              ? 'fa fa-star'
              : rating >= 1.5
              ? 'fa fa-star-half-o'
              : 'fa fa-star-o'
          }
        ></i>
      </span>
      <span>
        <i
          className={
            rating >= 3
              ? 'fa fa-star'
              : rating >= 2.5
              ? 'fa fa-star-half-o'
              : 'fa fa-star-o'
          }
        ></i>
      </span>
      <span>
        <i
          className={
            rating >= 4
              ? 'fa fa-star'
              : rating >= 3.5
              ? 'fa fa-star-half-o'
              : 'fa fa-star-o'
          }
        ></i>
      </span>
      <span>
        <i
          className={
            rating >= 5
              ? 'fa fa-star'
              : rating >= 4.5
              ? 'fa fa-star-half-o'
              : 'fa fa-star-o'
          }
        ></i>
      </span>
      {caption ? (
        <span>{caption}</span>
      ) : (
        <span>{numReviews + ' reviews'}</span>
        )}
        <div>
        <button
        onClick={inc}
        > {count} <i className='fa fa-thumbs-up'></i>
        </button>
        <button
        onClick={dec}
        > {negcount}<i className='fa fa-thumbs-down'></i>
        </button>

        </div>
        
    </div>
    </div>
  );
}