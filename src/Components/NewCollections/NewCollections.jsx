import React, { use, useEffect, useState } from 'react'
import './NewCollections.css'
import Item from '../Items/Item'

const NewCollections = () => {

  const [new_collections, setNewCollection] = useState([]);

  const fetchInfo = () => {
    fetch('http://localhost:4000/newcollections')
    .then((resp) => resp.json())
    .then((data) => setNewCollection(data))
  }

  useEffect(() => {
    fetchInfo()
  },[])

  return (
    <div className='new-collections'>
        <h1>NEW COLLECTIONS</h1>
        <hr />
        <div className="collections">
          {new_collections.map((item, i) => {
              return(<Item key={i} id={item.id} name={item.name} image={item.image} old_price={item.old_price} new_price={item.old_price}/>)
          })}
        </div>
    </div>
  )
}

export default NewCollections;