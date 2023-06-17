import React from 'react'
import { UilAngleLeft, UilAngleRight } from '@iconscout/react-unicons'
import { iconUrl } from '../weatherService';

function Slider({items}) {
  return (
    <div className='flex relative items-center'>
      <UilAngleLeft  className=' items-start shrink-0 fill-[#b7fffd]'/>
    <div className='flex flex-row overflow-x-auto items-center text-slate-50 scrollbar-hide mx-5'>
        {items.map((item) => (
          <div className='flex flex-col items-center w-30 shrink-0'>
            <p className='font-light text-xs'>{item.title}</p>
            <img src={iconUrl(item.icon)} alt="" className=' w-[70px]'/>
            <p className='font-light text-xs'>{`${item.temp.toFixed()}°`}</p>
          </div>

        ))}
        {/* <div className='flex flex-col items-center w-30 shrink-0'>
          <p className='font-light text-xs'>03:30 PM</p>
          <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="" className=' w-[70px]'/>
          <p className='font-light text-xs'>35°C</p>
        </div>
        <div className='flex flex-col items-center w-30 shrink-0'>
          <p className='font-light text-xs'>03:30 PM</p>
          <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="" className=' w-[70px]'/>
          <p className='font-light text-xs'>35°C</p>
        </div>
        <div className='flex flex-col items-center w-30 shrink-0'>
          <p className='font-light text-xs'>03:30 PM</p>
          <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="" className=' w-[70px]'/>
          <p className='font-light text-xs'>35°C</p>
        </div>
        <div className='flex flex-col items-center w-30 shrink-0'>
          <p className='font-light text-xs'>03:30 PM</p>
          <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="" className=' w-[70px]'/>
          <p className='font-light text-xs'>35°C</p>
        </div>
        <div className='flex flex-col items-center w-30 shrink-0'>
          <p className='font-light text-xs'>03:30 PM</p>
          <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="" className=' w-[70px]'/>
          <p className='font-light text-xs'>35°C</p>
        </div>
        <div className='flex flex-col items-center w-30 shrink-0'>
          <p className='font-light text-xs'>03:30 PM</p>
          <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="" className=' w-[70px]'/>
          <p className='font-light text-xs'>35°C</p>
        </div>
        <div className='flex flex-col items-center w-30 shrink-0'>
          <p className='font-light text-xs'>03:30 PM</p>
          <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="" className=' w-[70px]'/>
          <p className='font-light text-xs'>35°C</p>
        </div>
        <div className='flex flex-col items-center w-30 shrink-0'>
          <p className='font-light text-xs'>03:30 PM</p>
          <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="" className=' w-[70px]'/>
          <p className='font-light text-xs'>35°C</p>
        </div>
        <div className='flex flex-col items-center w-30 shrink-0'>
          <p className='font-light text-xs'>03:30 PM</p>
          <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="" className=' w-[70px]'/>
          <p className='font-light text-xs'>35°C</p>
        </div>
        <div className='flex flex-col items-center w-30 shrink-0'>
          <p className='font-light text-xs'>03:30 PM</p>
          <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="" className=' w-[70px]'/>
          <p className='font-light text-xs'>35°C</p>
        </div>
        <div className='flex flex-col items-center w-30 shrink-0'>
          <p className='font-light text-xs'>03:30 PM</p>
          <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="" className=' w-[70px]'/>
          <p className='font-light text-xs'>35°C</p>
        </div> */}
        
    </div>
    <UilAngleRight className='shrink-0 items-end fill-[#b7fffd]'/>
    </div>
  )
}

export default Slider;