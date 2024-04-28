import React from 'react'
import axios from 'axios'
import './WeatherForecast.css'

export default function WeatherForecast(props) {
    let apiKey = 'a2dda52dce059eb8a14e95aaa0db6ab7'
    if (!props.coordinates) {
        return null
    }
    let longitude = props.coordinates.lon
    let latitude = props.coordinates.lat
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`

    function handleResponse(response) {
        console.log(response)
    }

    axios.get(apiUrl).then(handleResponse)
    return (
        <div className="WeatherForecast">
            <div className="row">
                <div className="col, ForecastName">Monday</div>
                <div className="WeatherForecastIcon">
                    <img
                        className="ForecastIcon"
                        src="https://images.vexels.com/media/users/3/205087/isolated/preview/a41d84a485d960a7d929fd95ece1acf1-weather-stroke-icon.png"
                        alt="Forecast Icon"
                    />
                </div>
                <div className="ForecastTemperature">
                    <span className="maxTemp">18°</span> | {''}
                    <span className="minTemp">10°</span>
                </div>
            </div>
        </div>
    )
}
