import React from 'react'

function Topbuttons({setquery}) {
    const cities = [
        {
            id: 1,
            title: 'London'
        },
        {
            id: 2,
            title: 'New Delhi'
        },
        {
            id: 3,
            title: 'Sydney'
        },
        {
            id: 4,
            title: 'Tokyo'
        },
        {
            id: 5,
            title: 'New York'
        },

    ];
    
    return(
        <div className="flex justify-around text-lg text-slate-300 py-3">
            {
                cities.map((city)=>(
                    <button key={city.id} onClick={() => setquery({q: city.title})}>{city.title}</button>
                ))
            }
        </div>
    );
}

export default Topbuttons;