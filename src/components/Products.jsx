import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import ProductCard from './ProductCard'

const Products = () => {
  const [productData, setProductData] = useState([])
  const [errorMessage, setErrorMessage] = useState(false)
  const activeTab = useSelector(state=> state.products.activeTab)

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
    .then((data) => setProductData(data.data))
    .catch((err) => setErrorMessage(!errorMessage))
  },[])

  let filterdData;
  if(productData.length > 0){
    filterdData = productData.filter(item => item.category === activeTab);
  }


  return (
    <>
      {productData.length > 0 ? 
        errorMessage === false ? 

        <ul className='product-grid-container'>
        {filterdData.map((each,index ) => 
          <li key={index} className='grid-product-li-container '>
            <ProductCard    productInfo={each} />
          </li>  

          )}
    </ul>
        : <p>Somethign went wrong</p>
        : <svg class="pl" width="240" height="240" viewBox="0 0 240 240">
      <circle class="pl__ring pl__ring--a" cx="120" cy="120" r="105" fill="none" stroke="#000" stroke-width="20" stroke-dasharray="0 660" stroke-dashoffset="-330" stroke-linecap="round"></circle>
      <circle class="pl__ring pl__ring--b" cx="120" cy="120" r="35" fill="none" stroke="#000" stroke-width="20" stroke-dasharray="0 220" stroke-dashoffset="-110" stroke-linecap="round"></circle>
      <circle class="pl__ring pl__ring--c" cx="85" cy="120" r="70" fill="none" stroke="#000" stroke-width="20" stroke-dasharray="0 440" stroke-linecap="round"></circle>
      <circle class="pl__ring pl__ring--d" cx="155" cy="120" r="70" fill="none" stroke="#000" stroke-width="20" stroke-dasharray="0 440" stroke-linecap="round"></circle>
    </svg>

    
      }
    </>
  )
}

export default Products
