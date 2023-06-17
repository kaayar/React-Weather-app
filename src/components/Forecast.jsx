import React from 'react'
import Slider from './Slider';
import Dayforcast from './Dayforcast';


function Forecast({weather}) {
  return (
    <div className='mt-2'>
        <p className='text-[#cdf0fe] text-base mb-1'>HOURLY FORECAST</p>
        <Slider items = {weather.list}/>
        <p className='text-[#cdf0fe] text-base mb-1 mt-2'>DAILY FORECAST</p>
        <Dayforcast items = {weather.daily}/>
    </div>
  )
}

export default Forecast;