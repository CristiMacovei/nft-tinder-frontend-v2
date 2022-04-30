import { useState } from 'react'
import axios from 'axios'
import { getCookie } from 'cookies-next'

import ProgressBar from './ProgressBar'

const Upload = () => {
  const [progressBarState, setProgressBarState] = useState({done: 0, target: 0})
  
  async function handleSubmit(evt) {    
    evt.preventDefault()

    const fileInput = document.querySelector('#file-input')

    setProgressBarState({done: 0, target: fileInput.files.length})
    document.querySelector('#progress-bar-wrapper').classList.remove('hidden')

    const token = getCookie('token')
    if (typeof token === 'undefined') {
      window.location.href = '/login'
    }

    
    let index = 0
    for (let file of fileInput.files) {
      ++index

      const formData = new FormData()
      formData.append('file', file)

      const response = await axios.post(process.env.NEXT_PUBLIC_API_URL + '/upload', formData, {
        headers: {
          'Authorization': token,
          'Content-Type': 'multipart/form-data; boundary=' + formData._boundary
        }
      })

      console.log('File #' + index, response)

      setProgressBarState({done: index, target: fileInput.files.length})
    }

    document.querySelector('#progress-bar-wrapper').classList.add('hidden')
  }

  return (
    <div className='w-3/4 mx-auto h-2/3'>

      <div className='h-1/4'></div>

      <div className='flex items-center justify-center h-1/4'>
        <p className='text-xl'> Upload your NFT Collection</p>
      </div>

      <div className='text-center h-1/4'>
        <input className='block w-3/4 mx-auto text-center' type="file" id="file-input" accept='image/png' multiple/>

        <button className='block p-2 mx-auto mt-2 bg-orange-200 rounded-lg' onClick={handleSubmit}>Submit</button>
      </div>

      <div id='progress-bar-wrapper' className='hidden h-1/4'>
        <ProgressBar done={progressBarState.done} target={progressBarState.target} />
      </div>
    </div>
  )
}

export default Upload