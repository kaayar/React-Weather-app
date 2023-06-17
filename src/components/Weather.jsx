import React from "react"
import { UilTemperature, UilTear, UilWind, UilSun, UilSunset, UilArrowUp, UilArrowDown }from '@iconscout/react-unicons'
import { formatToLocalTime, iconUrl } from "../weatherService";

function Weather({weather: {
    details, icon, temp_min, temp_max, feels_like, humidity, temp, sunrise, sunset, speed, city
}}) {
    return(
        <div>
            <div className="text-cyan-400 items-center flex justify-center text-xl my-2">{details}</div>
            <div className="flex flex-row items-center justify-between">
                <img src={iconUrl(icon)} alt="" />
                <p className="text-4xl text-white ">{`${temp.toFixed()}°`}</p>
                <div>
                    <div className="flex flex-row mb-1 text-sm font-light text-white">
                        <UilTemperature size = {20}/>
                        Real felt:
                        <span className="font-medium text-sm ml-1">{`${feels_like.toFixed()}°`}</span>
                    </div>

                    <div className="flex flex-row mb-1 text-sm font-light text-white">
                        <UilTear size = {20}/>
                        Humidity:
                        <span className="font-medium text-sm ml-1">{`${humidity.toFixed()}%`}</span>
                    </div>

                    <div className="flex flex-row mb-1 text-sm font-light text-white">
                        <UilWind size = {20}/>
                        Wind:
                        <span className="font-medium text-sm ml-1">{`${speed.toFixed()}km/h`}</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-row items-center justify-around text-sm">
                <div className="flex flex-row text-yellow-100">
                    <UilSun size={19}/>
                    Rise:
                    <span className="ml-1 ">{formatToLocalTime(sunrise, city, 'hh:mm a')}</span>
                </div>
                <div className="flex flex-row text-red-200">
                    <UilSunset size={19}/>
                    Set:
                    <span className="ml-1">{formatToLocalTime(sunset, city, 'hh:mm a')}</span>
                </div>
                <div className="flex flex-row text-sky-100">
                    <UilArrowUp size={19}/>
                    High:
                    <span className="ml-1">{`${temp_max.toFixed()}°`}</span>
                </div>
                <div className="flex flex-row text-rose-100">
                    <UilArrowDown size={19}/>
                    Low:
                    <span className="ml-1">{`${temp_min.toFixed()}°`}</span>
                </div>
            </div>
        </div>
    );
}

export default Weather;