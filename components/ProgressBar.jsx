import React from 'react'

const ProgressBar = (props) => {  
  return (
    <>
      <div id='progress-bar' className='h-10 bg-gray-100 rounded-lg'>
        <div style={{width: (props.done / props.target * 100).toFixed(2) + '%'}} id='progress-bar-inner' className='h-10 bg-green-400 rounded-lg'>

        </div>
      </div>

      <div className='text-center'>
        {props.done??0} / {props.target??0} ({(props.done / props.target * 100).toFixed(2)}%)
      </div>
    </>
  )
}

export default ProgressBar