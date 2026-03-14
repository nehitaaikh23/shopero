import React from 'react'
import './Items.css'
import { Link } from 'react-router-dom';

const Item = (props) => {

  const {product} = props;
  
  return (
    <div className='item'>
      <Link to={`/product/${props.id}`}>
        <img src={props.image} alt="" onClick={window.scrollTo(0,0)}/>
        <p>{props.name}</p>
      </Link>
      
      <div className='item-prices'>
        <div className="item-price-new">₦{props.new_price.toLocaleString()}</div>
        <div className="item-price-old">₦{props.old_price.toLocaleString()}</div>
      </div>
    </div>
  )
}

export default Item;