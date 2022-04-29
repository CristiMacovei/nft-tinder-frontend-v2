import React from 'react'
import { getCookie } from 'cookies-next'
import axios from 'axios'

const UserProfile = () => {
  function redirectUpload() {
    window.location.href = '/upload'
  }
  
  function copyToken() {
    const token = getCookie('token')
    if (typeof token === 'undefined') {
      window.location.href = '/login'
    }

    navigator.clipboard.writeText(token)
  }
  
  function downloadStats() {
    alert('Dead')
  }

  function deleteData() {
    const token = getCookie('token')
    if (typeof token === 'undefined') {
      window.location.href = '/login'
    }

    axios.post(process.env.NEXT_PUBLIC_API_URL + '/delete', {}, {
      headers: {
        'Authorization': token
      }
    })
  }

  return (
    <div className='flex flex-col h-2/3'>
      <div className='flex items-center justify-center text-5xl font-semibold h-1/2'>
        <p className='text-center'>PROFILE</p>
      </div>

      <div className='flex flex-col items-center justify-end h-1/2'>
        <div className='mb-5 text-center'>
          <button className='text-2xl' onClick={deleteData}> Delete Data </button>
        </div>
        
        <div className='mb-5 text-center'>
          <button className='text-2xl' onClick={downloadStats}> Download Stats </button>
        </div>

        <div className='mb-5 text-center'>
          <button className='text-2xl' onClick={copyToken}> Copy Token </button>
        </div>

        <div className="mb-16 text-center">
          <button className="text-2xl" onClick={redirectUpload}>Upload Your NFTs</button>
        </div>
      </div>
    </div>
  )
}

export default UserProfile