import axios from 'axios';
import React, { useState } from 'react'
import { BsFillCloudSunFill } from 'react-icons/bs'

import './weather.css';

function Weather() {
    const [data, setData] = useState({})
    const [weather, setWeather] = useState("")

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${weather}&appid=a25cd7042784f847b1939291b23b6644`

    const getData = (e) => {
        if (e.key === "Enter"){
            axios.get(url).then(response => {
                setData(response.data)
                console.log(response.data);
            }).catch((err) => {
                console.log(err);
            })
            setWeather('')
        }
    }

    const today = new Date()


    
  return (
    <div className='weather'>
     <div className="container">
        <h1>Weather App</h1>
        <h3>{today.getDate()}-{today.getMonth()}-{today.getFullYear()}</h3>

        <input type="text"
        placeholder='Search city name'
        value={weather}
        onChange={e => setWeather(e.target.value)}
        onKeyPress={getData}
        />
     
      {data.name != undefined && 
       <div className="result">
        <h2>{data.name} {data.sys ? data.sys.country : null}</h2>
        <div className="cloud">
        <BsFillCloudSunFill />
        </div>
        <h2>{data.main ? data.main.temp.toFixed() : null }°C</h2>
        <p>{data.weather ? data.weather[0].main : null}</p>
        <p>Humidity : {data.main ? data.main.humidity : null}%</p>
        <p>Temp Range: {data.wind ? data.wind.deg : null}°C</p>
        <p>Wind Speed : {data.wind ? data.wind.speed.toFixed() : null} MPH</p>
       </div>
      }
        
     </div>
    </div>
  )
}

export default Weather