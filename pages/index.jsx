import {useEffect, useRef, useState} from 'react'
import {getCookie, setCookies} from 'cookies-next'
import axios from 'axios'

import Logo from '../components/Logo.jsx'
import Loading from '../components/Loading.jsx'

export default function App() {
  async function verifyToken() {
    const cookie = getCookie('token')

    if (typeof cookie === 'undefined') {
      return false
    }

    // todo verify with axios and backend server

    return true
  }

  useEffect(() => {
    (async () => {
      const isLoggedIn = await verifyToken()

      if (isLoggedIn) {
        window.location.href = '/home' 
      }
      else {
        document.querySelector('#loading-spinner').classList.add('hidden')
        document.querySelector('#main').classList.remove('hidden')
      }
    })()
  }, [])

  function handleLoginClick(evt) {
    window.location.href = '/login'
  }

  function handleSignupClick(evt) {
    window.location.href = '/signup'
  }

  return (
    <>
      <Loading />

      <div id='main' className='hidden custom-scale'>
        <div className='h-2/5'></div>
        
        <div className='flex items-start justify-center h-1/5'>
          <Logo />
        </div>
        
        <div className='h-2/5'>
          <div className='w-4/5 mx-auto text-xs text-center h-2/5'>
            By tapping Create Account or Sign In, you agree to our
            &nbsp; <a className='font-semibold underline' href='/terms'> Terms</a>
            . Learn how we process your data in our
            &nbsp;<a className='font-semibold underline' href='/privacy_policy'>Privacy Policy</a>
            &nbsp;and&nbsp;
            <a className='font-semibold underline' href='/cookies_policy'>Cookies Policy</a>
            .
          </div>

          <div className='flex flex-col items-center justify-start h-3/5'>
            <div className='flex items-center justify-center w-2/3 mb-2 border-2 rounded-3xl h-1/4 border-slate-300'>
              <button onClick={handleLoginClick}>Log In</button>
            </div>

            <div className='flex items-center justify-center w-2/3 mt-2 border-2 rounded-3xl h-1/4 border-slate-300'>
              <button onClick={handleSignupClick}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}
