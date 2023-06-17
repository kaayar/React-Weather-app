import React from 'react'
import { iconUrl } from '../weatherService';

function Dayforcast({items}) {
    return (
        <div>
          
        <div className='flex flex-row text-slate-50 justify-around items-center'>

            {items.map((item) =>(
              <div className='flex flex-col items-center'>
                <p className='font-light text-xs'>{item.title}</p>
                <img src={iconUrl(item.icon)} alt="" className=' w-[70px]'/>
                <p className='font-light text-xs'>{`${item.temp.toFixed()}°`}</p>
              </div>

            ))}
            {/* <div className='flex flex-col items-center w-30 shrink-0'>
              <p className='font-light text-xs'>Monday</p>
              <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="" className=' w-[70px]'/>
              <p className='font-light text-xs'>35°C</p>
            </div>
            <div className='flex flex-col items-center w-30 shrink-0'>
              <p className='font-light text-xs'>Tuesday</p>
              <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="" className=' w-[70px]'/>
              <p className='font-light text-xs'>35°C</p>
            </div>
            <div className='flex flex-col items-center w-30 shrink-0'>
              <p className='font-light text-xs'>Wednesday</p>
              <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="" className=' w-[70px]'/>
              <p className='font-light text-xs'>35°C</p>
            </div>
            <div className='flex flex-col items-center w-30 shrink-0'>
              <p className='font-light text-xs'>Thrusday</p>
              <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="" className=' w-[70px]'/>
              <p className='font-light text-xs'>35°C</p>
            </div>
            <div className='flex flex-col items-center w-30 shrink-0'>
              <p className='font-light text-xs'>Friday</p>
              <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="" className=' w-[70px]'/>
              <p className='font-light text-xs'>35°C</p>
            </div> */}
            
            
        </div>
        
        </div>
      )
}

export default Dayforcast;