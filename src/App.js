import React, { useEffect, useState } from 'react';
import Topbuttons from './components/Topbuttons';
import './App.css';
import SearchBox from './components/SearchBox';
import TimenLocation from './components/TimenLocation';
import Weather from './components/Weather';
import Forecast from './components/Forecast';
import getFormattedweatherData from './weatherService';

function App() {
  const [query, setquery] = useState({q: 'delhi'});
  const [units, setunits] = useState('metric');
  const [weather, setweather] = useState(null);

  useEffect(() =>{
    const fetchWeather = async()=>{
      await getFormattedweatherData({...query, units}).then(data =>
        {
          setweather(data);
          console.log(data);
        });
    };
    fetchWeather();

  }, [query, units]);

  const formatbackground = () => {
    if(!weather) return " from-blue-500   to-blue-800 "
    const threshold = units === 'metric' ? 20:60;
    if(weather.temp < threshold) return " from-blue-500   to-blue-800 "
    
    return "from-yellow-700 to-orange-700";
  }


  return <div className={`App mx-auto max-w-screen-md mt-5 py-5 px-32 bg-gradient-to-tr h-fit shadow-slate-700 
  shadow-xl ${formatbackground()}`}>
    <Topbuttons setquery={setquery}/>
    <SearchBox setquery={setquery} units = {units} setunits = {setunits}/>
    {weather && <div>
      <TimenLocation weather = {weather}/>
      <Weather weather = {weather}/>
      <Forecast weather = {weather}/>
      </div>}
  </div>;
}

export default App;
