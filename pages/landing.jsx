import React from 'react'

import Link from 'next/link'

import Nav from '../components/Nav.jsx'
import BottomBar from '../components/BottomBar.jsx'

const LandingPage = () => {
  return (
    <div className='custom-scale'>
      <Nav></Nav>
      
      <div className='h-2/3'>
        <div className="flex flex-col items-center justify-center h-full">
          <Link href='/home'>
            <div className='p-2 mb-5 text-xl border-2 border-black rounded-lg'>
              Continue Review
            </div>
          </Link>

          <Link href='/upload'>
            <div className='p-2 mt-5 text-xl border-2 border-black rounded-lg'>
              Upload NFTs
            </div>
          </Link>
        </div>
      </div>

      <BottomBar></BottomBar>
    </div>
  )
}

export default LandingPage