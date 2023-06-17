import React, { useState } from "react"
import { UilLocationPoint, UilSearch } from '@iconscout/react-unicons'

function SearchBox({setquery, units, setunits}) {

    const [city, setcity] = useState("");
    const handlesearchclick = () => {
        if(city !== ""){
            setquery({q: city})
        }
    };

    const handleunitschange = (e) => {
        const selectedUnit = e.currentTarget.name;
        if(units !== selectedUnit){setunits(selectedUnit)};
    }

    return(
        <div className="justify-center flex-row flex my-5">
            <div className="w-3/4 flex flex-row space-x-4">
                <input 
                value = {city}
                onChange={(e) => setcity(e.currentTarget.value)}
                type="text" 
                placeholder="Search by city..."
                className="text-base w-full focus:outline-none rounded-sm text-stone-800"
                />
            <UilSearch 
            size={30} 
            className='text-white cursor-pointer transition ease-out hover:scale-125 '
            onClick={handlesearchclick}
            />
            <UilLocationPoint size={30} className='text-white cursor-pointer transition ease-out hover:scale-125 '/>  
            </div>

            <div className="flex flex-row justify-center items-center space-x-1 w-1/4">
                <button name = 'metric' className="text-white text-l" onClick={handleunitschange}>°C</button>
                <p className="text-white text-l">|</p>
                <button name='imperial' className="text-white text-l" onClick={handleunitschange}>°F</button>
            </div>

        </div>
    );
}

export default SearchBox;