import React, { useState } from 'react'
import axios from 'axios'
import './WeatherForecast.css'
import ForecastDay from './ForecastDay'

export default function WeatherForecast(props) {
    let [forecast, setForecast] = useState(null)
    let apiKey = 'a2dda52dce059eb8a14e95aaa0db6ab7'
    if (!props.coordinates) {
        return null
    }
    let longitude = props.coordinates.lon
    let latitude = props.coordinates.lat
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`

    function handleResponse(response) {
        setForecast(response.data.daily)
    }

    axios.get(apiUrl).then(handleResponse)
    return (
        <div className="WeatherForecast">
            <ForecastDay forecast={forecast} />
        </div>
    )
}
