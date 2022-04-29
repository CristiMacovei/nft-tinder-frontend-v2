import React from 'react'

const BottomBar = () => {

  function handleHomeClick() {
    window.location.href = '/home'
  }

  function handleStatsClick() {
    window.location.href = '/stats'
  }

  function handleUserClick() {
    window.location.href = '/user'
  }

  return (
    <div className='h-1/6'>
      <div className="flex items-center h-full">
        <div className='flex items-center justify-between w-4/5 px-10 mx-auto rounded-lg h-1/2 bg-slate-200'>
          <button className='w-8 h-8 rounded-full bg-slate-300' onClick={handleHomeClick}>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </button>

          <button className='w-8 h-8 rounded-full bg-slate-300' onClick={handleStatsClick}>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
            </svg>
          </button>
          
          <button className='w-8 h-8 rounded-full bg-slate-300' onClick={handleUserClick}>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default BottomBar