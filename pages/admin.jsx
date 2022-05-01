import { useEffect } from 'react'
import { getCookie } from 'cookies-next'

import Nav from '../components/Nav.jsx'
import Admin from '../components/Admin.jsx'
import BottomBar from '../components/BottomBar.jsx'

const AdminPage = () => {
  return (
    <div className='custom-scale'>
      <Nav></Nav>

      <Admin />

      <BottomBar></BottomBar>
    </div>
  )
}

export default AdminPage