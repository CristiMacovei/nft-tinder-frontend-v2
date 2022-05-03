import { useEffect, useState } from 'react'
import axios from 'axios'
import { getCookie } from 'cookies-next'
import 'chart.js/auto'
import {Pie} from 'react-chartjs-2'

const StatsContainer = () => {
  const [data, setData] = useState( [ 0, 0, 0] )

  useEffect(() => {
    (async () => {
      const token = getCookie('token')
      if (typeof token === 'undefined') {
        window.location.href = '/login'
      }

      const response = await axios.get(process.env.NEXT_PUBLIC_API_URL + '/stats', {
        headers: {
          'Authorization': token
        }
      })

      if (response.data.status === 'success') {
        const {active, discarded, kept} = response.data.data

        setData([active, discarded, kept])
      }
    })()
  }, [])

  async function downloadStats() {
    const token = getCookie('token')
    if (typeof token === 'undefined') {
      window.location.href = '/login'
    }

    const response = await axios.get(process.env.NEXT_PUBLIC_API_URL + '/csv', {
      headers: {
        Authorization: token
      }
    })

    console.log(response)
    window.location.assign(response.data.csv)
  }

  return (
    <div className='h-2/3'>
      <div className='w-full h-2/3'>
        <Pie 
          data = {
            {
              labels: ['Unsorted', 'Discarded', 'Liked'],
              datasets: [{
                label: 'nigger',
                data: data,
                backgroundColor: [
                  'rgb(208, 104, 237)',
                  'rgb(230, 174, 34)',
                  'rgb(25, 227, 123)'
                ],
                hoverOffset: 4
              }]
            }
          }
          options = {{
            maintainAspectRatio: false
          }}
        />
      </div>

      <div className='h-1/3'>        
        <div className='w-5/12 mx-auto mt-6'>
          <button className='w-full h-8 text-lg font-semibold rounded-lg bg-slate-200' onClick={downloadStats}>DOWNLOAD IDS</button>
        </div>

        <div className='mt-4'>
          <div className='flex justify-between w-7/12 mx-auto text-xl'>
            <span>Unsorted</span>
            <span>{
              (100 * data[0] / (data[0] + data[1] + data[2])).toFixed(1) + '%'
            }</span>
          </div>

          <div className='flex justify-between w-7/12 mx-auto text-xl'>
            <span>Discarded</span>
            <span>{
              (100 * data[1] / (data[0] + data[1] + data[2])).toFixed(1) + '%'
            }</span>
          </div>

          <div className='flex justify-between w-7/12 mx-auto text-xl'>
            <span>Liked</span>
            <span>{
              (100 * data[2] / (data[0] + data[1] + data[2])).toFixed(1) + '%'  
            }</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StatsContainer