import { setCookies } from 'cookies-next'
import axios from 'axios'

import Logo from '../components/Logo'

const Signup = () => {
  async function handleSubmit(evt) {
    evt.preventDefault()

    const fData = new FormData(document.querySelector('#main-form'))

    const data = {
      username: fData.get('username'),
      password: fData.get('password')
    }

    const apiUrl = process.env.NEXT_PUBLIC_API_URL + '/signup'

    const response = await axios.post(apiUrl, data)

    console.log(response)

    if (response.data.status === 'success') {
      setCookies('token', response.data.user.token)
      window.location.href = '/home'
    }
  }

  function handleSignupClick() {
    window.location.href = '/login'
  }

  return (
    <div className='h-screen'>
      <div className='flex items-center justify-center h-1/6'>
        <Logo />
      </div>

      <div className='h-1/2'>
        <div className='h-1/3'></div>
        
        <div className='w-3/5 mx-auto h-1/2'>          
          <form className='h-full' id='main-form' onSubmit={handleSubmit} autoComplete='off'>
            <div className='h-1/4'>
              <input className='w-full h-full text-center rounded-md' name='username' type='text' placeholder='username' />
            </div>

            <div className='mt-3 h-1/4'>
              <input className='w-full h-full text-center rounded-md' name='password' type='password' placeholder='password' />
            </div>
            
            <div className='mt-3 h-1/4'>
              <input className='w-full h-full text-center' type='submit' value='Sign up' />
            </div>
          </form>
        </div>

        <p className='text-center h-1/6'>
          Already have an account? Log in <span className='text-blue-500 underline border-0 cursor-pointer hover:text-blue-600' onClick={handleSignupClick}>here</span>!
        </p>
      </div>
    </div>
  )
}

export default Signup