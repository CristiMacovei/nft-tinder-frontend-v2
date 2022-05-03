import { useEffect, useState } from 'react'
import { getCookie } from 'cookies-next'
import axios from 'axios'

import Loading from './Loading'

const NftTinder = () => {
  function showLoadingSpinner() {
    document.querySelector('#main').classList.add('hidden')
    document.querySelector('#loading-spinner').classList.remove('hidden')
  }

  function hideLoadingSpinner() {
    document.querySelector('#loading-spinner').classList.add('hidden')
    document.querySelector('#main').classList.remove('hidden')
  }
  
  
  async function fetchNewImage() {
    showLoadingSpinner()

    const token = getCookie('token')

    if (typeof token === 'undefined') {
      window.location.href = '/login'
    }

    const response = await axios.get(process.env.NEXT_PUBLIC_API_URL + '/next-image', {
      headers: {
        'Authorization': token
      }
    })

    hideLoadingSpinner()

    if (response.data.status === 'success') {
      const imageDiv = document.querySelector('#image-div')
      const nameDiv = document.querySelector('#name-div')
      
      imageDiv.innerHTML = response.data.image
      nameDiv.textContent = response.data.name
    }
    else {
      const imageDiv = document.querySelector('#image-div')
      const nameDiv = document.querySelector('#name-div')

      imageDiv.innerHTML = `
        <div class="text-black font-bold text-xl flex items-center justify-center h-full">
          No images found!
        </div>
      `

      nameDiv.textContent = ''
    }
  }

  async function handleLike() {
    const token = getCookie('token')

    const response = await axios.get(process.env.NEXT_PUBLIC_API_URL + '/like', {
      headers: {
        'Authorization': token
      }
    })

    console.log(response)

    if (response.data.status === 'success') {
      fetchNewImage()
    }
  }

  async function handleDislike() {
    const token = getCookie('token')

    const response = await axios.get(process.env.NEXT_PUBLIC_API_URL + '/dislike', {
      headers: {
        'Authorization': token
      }
    })

    console.log(response)

    if (response.data.status === 'success') {
      fetchNewImage()
    }
  }

  useEffect(() => {
    fetchNewImage()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return (
    <>      
      <div className='h-2/3'>
        <div className='w-5/6 h-full mx-auto rounded-3xl'>
          
          <Loading />
          
          <div id='main' className='w-full h-full'>            
            <div className='absolute z-10 retarded-engineering'>
              <div className='h-2/3'>
              
              </div>

              <div className='flex items-center justify-center h-1/6'>
                <div className='text-xl font-bold' id='name-div'>
                  
                </div>
              </div>

              <div className='flex justify-center w-4/5 mx-auto h-1/6'>
                <button className='w-12 h-12 my-auto mr-3 rounded-full bg-slate-400' onClick={handleLike}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </button>

                <button className='w-12 h-12 my-auto ml-3 rounded-full bg-slate-400' onClick={handleDislike}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div id='image-div' className='absolute flex items-start justify-center retarded-engineering rounded-3xl'>
              
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NftTinder