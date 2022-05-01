import { useEffect, useState } from 'react'
import { getCookie } from 'cookies-next'
import axios from 'axios'

const Admin = () => {
  useEffect(() => {
    (async () => {
      const token = getCookie('token')

      if (typeof token === 'undefined') {
        window.location.href = '/login'
      }

      const response = await axios.get(process.env.NEXT_PUBLIC_API_URL + '/test-admin', {
        headers: {
          'Authorization': token
        }
      })

      if (response.data.status === 'success' && response.data.admin) {
        document.querySelector('#main').classList.remove('hidden')
      }
      else {
        window.location.href = '/home'
      }
      
    })()
  }, [])

  async function handleClick(evt) {
    evt.preventDefault()

    const token = getCookie('token')
    if (typeof token === 'undefined') {
      window.location.href = '/login'
    }

    const response = await axios.post(process.env.NEXT_PUBLIC_API_URL + '/verify', {
      targetToken: document.querySelector('#target').value
    }, {
      headers: {
        Authorization: token
      }
    })

    console.log(response)

    document.querySelector('#target').value = ''
  }
  
  return (
    <div className='h-2/3'>
      <div className='hidden w-full h-full' id='main'>
        <div className='h-1/3'></div>

        <div className='h-1/3'>
          <div className='flex items-center justify-center'>
            <input id='target' className='w-3/4 text-center' type="text" placeholder='Target token'/>
          </div>

          <div className='flex items-center justify-center mt-4'>
            <button className='w-1/4 py-2 text-white bg-green-700 rounded-lg' onClick={handleClick}> Verify</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Admin