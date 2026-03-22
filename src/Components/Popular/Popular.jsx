import React, { useEffect, useState } from 'react';
import './Popular.css'
import Item from '../Items/Item';


const Popular = () => {

    const [data_product, setDataProduct] = useState([])

    const fetchInfo = () => {
        fetch(`${import.meta.env.VITE_API_URL}/popularinwomen`)
        .then((resp) => resp.json())
        .then((data) => setDataProduct(data))
    }

    useEffect(() => {
        fetchInfo()
    },[])

  return (
    <div className='popular'>
        <h1>POPULAR IN SHIMA</h1>
        <hr />
        <div className="popular-item">
            {data_product.map((item, i) => {
                return(
                    <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                )
            })}
        </div>
        
    </div>
  )
}

export default Popular