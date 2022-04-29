import React from 'react'

import Nav from '../components/Nav.jsx'
import StatsContainer from '../components/StatsContainer.jsx'
import BottomBar from '../components/BottomBar.jsx'

const Stats = () => {
  return (
    <div className='h-full'>
      <Nav></Nav>
      
      <StatsContainer></StatsContainer>

      <BottomBar></BottomBar>
    </div>
  )
}

export default Stats