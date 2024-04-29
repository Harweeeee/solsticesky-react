import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './WeatherForecast.css'
import ForecastDay from './ForecastDay'

export default function WeatherForecast(props) {
    let [forecast, setForecast] = useState(null)
    let apiKey = 'a2dda52dce059eb8a14e95aaa0db6ab7'

    function getForecast() {
        axios
            .get(
                `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coordinates.lat}&lon=${props.coordinates.lon}&appid=${apiKey}&units=metric`
            )
            .then(handleResponse)
    }

    useEffect(() => {
        if (props.coordinates) getForecast()
    }, [props.coordinates])

    function handleResponse(response) {
        setForecast(response.data.daily)
    }

    if (!props.coordinates) {
        return null
    }

    if (!forecast) {
        getForecast()
        return null
    }
    return (
        <div className="WeatherForecast">
            <div className="row">
                {forecast.slice(0, 5).map((f) => (
                    <div className="col">
                        <ForecastDay forecast={f} />
                    </div>
                ))}
            </div>
        </div>
    )
}
