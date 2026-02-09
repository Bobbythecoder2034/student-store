import React from 'react'
import Grid from './grid'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'

const Featured = ({name, price, category, buzzwordOne, buzzwordTwo, order}) => {
  const link = name.replaceAll(' ', '-').toLowerCase()
  var position = null
  if(!order){
    return console.log('Must have order')
  }

  if(order === 1){
     position = 'one'
  }
  else if(order === 2){
     position = 'two'
  }
  else if(order === 3){
     position = 'three'
  }
  else{
     position = 'four'
  }

  return (
<div className={`featured-product featured-product-${position}`}>
            <Grid />
            <p className="featured-product-name">{name}</p>
            <p className="featured-product-price">{price}</p>
            <p className="featured-product-category">{category}</p>
            <div className="buzzword buzzword-one">{buzzwordOne}</div>
            <div className="buzzword-two buzzword">{buzzwordTwo}</div>
            <div className="in-stock buzzword-three buzzword">In stock</div>
            <div className="featured-details">
              <p className="view"><Link to={`/${link}`}> View Detail</Link></p>
              <FaArrowRight style={{ fontSize: "small" }} />
            </div>
          </div>  )
}


export default Featured