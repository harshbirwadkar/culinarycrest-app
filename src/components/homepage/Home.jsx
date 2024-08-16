import React from 'react'
import HeroPage from './HeroSection'
import BentoboxSection from './BentoboxSection'
import LeftRightSection from './LeftRightSection'
import AllRecipeSection from './AllRecipeSection'

function Home() {
  return (
    <div className=''>
      <HeroPage/>
      <BentoboxSection/>
      <LeftRightSection/>
      <AllRecipeSection/>
    </div>
  )
}

export default Home