import React, { useContext } from 'react'
import '../Pages/css/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../assets/dropdown_icon.png'
import Item from '../Components/Items/Item'


const ShopCategory = (props) => {

  const {all_product} = useContext(ShopContext)

  const noProductsInDisplay = all_product.length;

  return (
    <div className='shop-category'>
      <img src={props.banner} alt="" className='banner'/>
      <div className="shop-category-indexSort">
        <p><span>Showing 1-12 of {noProductsInDisplay} products</span></p>
        <div className="shop-category-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shop-category-products">
        {all_product.map((item, i) => {
        if(props.category===item.category){
          return(<Item key={i} id={item.id} name={item.name} image={item.image} old_price={item.old_price} new_price={item.new_price}/>)
        } else {
          return null;
        }
            
          
        })}
      </div>
      <div className="shop-category-load-more-btn">Explore More</div>
    </div>
  )
}

export default ShopCategory