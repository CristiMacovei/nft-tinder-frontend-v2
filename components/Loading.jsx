import Image from 'next/image'

const Loading = (props) => {
  return (
    <div id='loading-spinner' className='hidden w-full h-full rounded-3xl'>
      <div className='flex items-center justify-center w-full h-full rounded-3xl'>
        <Image src='/loading.gif' width='100%' height='100%' alt='Loading'/>
      </div>
    </div>
  )
}

export default Loading