import React from 'react'
import '../App.css'

import { FaBookmark } from "react-icons/fa";
import { BsBagFill } from "react-icons/bs";

const ProductCard = ({productInfo : {category,description,image,price,title}}) => {
  

  return (
    <>
      <div className='img-container'>
         <img draggable={false} src={image} alt={`${title}-Image`} />
         <FaBookmark className='img-container-icons nav-icon' />
      </div>
      <div className='product-description-container space-y-2'>
          <h3>{title}</h3>
          <div style={{display : 'flex', justifyContent : 'space-between', alignItems : 'center'}}>
          <span>&#x24; {price}</span>
          <BsBagFill className=' nav-icon' />
          </div>
      </div>
    </>
  )
}

export default ProductCard