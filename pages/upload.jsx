import React from 'react'

import Nav from '../components/Nav.jsx'
import Upload from '../components/Upload.jsx'
import BottomBar from '../components/BottomBar.jsx'

const UploadPage = () => {
  return (
    <div className='custom-scale'>
      <Nav></Nav>
      
      <Upload />

      <BottomBar></BottomBar>
    </div>
  )
}

export default UploadPage