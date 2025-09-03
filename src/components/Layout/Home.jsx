import React from 'react'
// import Sample from '../Extra/Sample'
import HeroSection from '../Pages/HeroSection'
import ColorVisuals from '../Pages/ColorVisuals'
import UsefulTools from '../Pages/UsefullTools'
import ProductInfo from '../Pages/ProductInfo'

function Home() {
  return (
    <div className='bg-gray-100'>
      <HeroSection/>
      <ProductInfo/>
      <ColorVisuals/>
      <UsefulTools/>
      
    </div>
  )
}

export default Home