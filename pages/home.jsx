import { useEffect } from 'react'
import { getCookie } from 'cookies-next'

import Nav from '../components/Nav.jsx'
import NftTinder from '../components/NftTinder.jsx'
import BottomBar from '../components/BottomBar.jsx'

const Home = () => {
  return (
    <div className='custom-scale'>
      <Nav></Nav>

      <NftTinder></NftTinder>

      <BottomBar></BottomBar>
    </div>
  )
}

export default Home