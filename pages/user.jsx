import React from 'react'

import Nav from '../components/Nav.jsx'
import UserProfile from '../components/UserProfile.jsx'
import BottomBar from '../components/BottomBar.jsx'

const Stats = () => {
  return (
    <div className='h-full'>
      <Nav />

      <UserProfile />

      <BottomBar />
    </div>
  )
}

export default Stats