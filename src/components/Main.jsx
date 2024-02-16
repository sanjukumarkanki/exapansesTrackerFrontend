import React from 'react'
import '../App.css'
import Categories from './Categories'
import Products from  "./Products"

const Main = () => {
  return (
    <div className='main-container'>
      <Categories />
      <Products />
    </div>
  )
}

export default Main
