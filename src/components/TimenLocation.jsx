import React from "react";
import { formatToLocalTime } from "../weatherService";

function TimenLocation({weather: {dt, city, name, country}}) {
    return(
        <div>
            <div className="flex justify-center font-extralight text-xl text-slate-100  ">
                <p>{formatToLocalTime(dt, city)}</p>
            </div>

            <div className=" flex justify-center my-3">
                <p className="text-3xl text-white">{name}, {' '}{country}</p>
            </div>
        </div>
    );
}

export default TimenLocation;