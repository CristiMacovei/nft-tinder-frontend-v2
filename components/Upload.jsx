import axios from 'axios'
import { getCookie } from 'cookies-next'

const Upload = () => {
  async function handleSubmit(evt) {
    evt.preventDefault()

    const token = getCookie('token')
    if (typeof token === 'undefined') {
      window.location.href = '/login'
    }

    const fileInput = document.querySelector('#file-input')
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
    }
  }

  return (
    <div className='h-2/3'>
      <div>
        <p> Upload your NFT Collection</p>
      </div>

      <div>
        <input type="file" id="file-input" accept='image/png' multiple/>

        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  )
}

export default Upload