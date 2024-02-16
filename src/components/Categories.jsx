import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { activeTabSet } from '../redux/transactionSlice'

const categories = [{
  title : 'electronics'
},
{
  title : 'jewelery'
},
{
  title : "men's clothing"
},
{
  title : "women's clothing"
}
]



const Categories = () => {
  const [selectedTab,setSelectedTab] = useState('electronics')
  const dispatch = useDispatch()
  const activeTab = useSelector(state=> state.products.activeTab)
  console.log(activeTab)
  return (
    <div className='categories-section mb-7'>
    {categories.map((each,index) => 
      <div key={index} style={{backgroundColor : `${activeTab === each.title ? 'red' : 'white' }`,
      color : `${activeTab === each.title ? 'white' : 'red' }`
    }} category={each}>
          <button onClick={() => dispatch(activeTabSet(each.title))} >{each.title}</button>
      </div>
      
      )}
    </div>
  )
}

export default Categories
