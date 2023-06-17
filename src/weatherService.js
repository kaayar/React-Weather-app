import {DateTime} from 'luxon';
const API_KEY = 'c61ff80b36dfce21ef383ec075ccace7';
const URL_BASE = 'https://api.openweathermap.org/data/2.5';
const URL_PRO = 'https://pro.openweathermap.org/data/2.5';

const getWeatherData = (URL_, InfoType, searchParams) => {
    const url = new URL(URL_ + '/' + InfoType);
    url.search = new URLSearchParams({...searchParams, appid: API_KEY});

    return fetch(url)
    .then((res) => res.json())
};

const formatCurrentWeather = (data) => {
    const {
        
        main: {temp, feels_like, temp_min, temp_max, humidity},
        wind: {speed},
        name,
        dt,
        weather,
        sys: {sunrise, sunset, country},
    } = data

    const {main: details, icon} = weather[0];
    return {temp, temp_max, temp_min, feels_like, humidity, speed, name, dt, sunrise, details, icon, sunset, country}
}

const formatForecastHourly = (data) => {
    let {city, list} = data;
    city = city.timezone;
    list = list.slice(1,13).map((d) =>{
        return{
            title: formatToLocalTime(d.dt, city, 'hh:mm a'),
            temp: d.main.temp,
            icon: d.weather[0].icon
        }
    });
    return {city, list};
};

const formatForecastDaily = (data) => {
    let {city, list} = data;
    city = city.timezone;
    list = list.slice(1,7).map((d) =>{
        return{
            title: formatToLocalTime(d.dt, city, 'ccc'),
            temp: d.temp.day,
            icon: d.weather[0].icon
        }
    });
    let daily = list;
    return {city, daily};
};



const getFormattedweatherData = async(searchParams) => {
    const FormattedweatherData = await getWeatherData(URL_BASE,'weather', searchParams).then(formatCurrentWeather);
    // const {lat, lon} = FormattedweatherData;
    
    const FormattedHourlyData = await getWeatherData(URL_PRO, 'forecast/hourly', searchParams).then(formatForecastHourly);

    const FormattedDailyData = await getWeatherData(URL_BASE, 'forecast/daily', searchParams).then(formatForecastDaily);

    return {...FormattedweatherData, ...FormattedDailyData, ...FormattedHourlyData};
}

const formatToLocalTime = (secs, zone, format = "cccc, dd LLL yyyy' | Local Time: 'hh:mm a") => DateTime.fromSeconds(secs).toFormat(format);

const iconUrl = (code) => `https://openweathermap.org/img/wn/${code}@2x.png`;
export default getFormattedweatherData;

export {formatToLocalTime, iconUrl}