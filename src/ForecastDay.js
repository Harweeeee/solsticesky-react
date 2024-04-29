import React from 'react'

export default function ForecastDay(props) {
    if (!props.forecast) {
        return null
    }

    function maxTemperature() {
        let temperature = Math.round(props.forecast.temp.max)
        return `${temperature}`
    }

    function minTemperature() {
        let temperature = Math.round(props.forecast.temp.min)
        return `${temperature}`
    }

    function day() {
        let date = new Date(props.forecast.dt * 1000)
        let day = date.getDay()
        let days = [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
        ]
        return days[day]
    }

    return (
        <div className="ForecastDay">
            <div className="row">
                <div className="col, ForecastName">{day()}</div>
                <div className="WeatherForecastIcon">
                    <img
                        className="ForecastIcon"
                        src="https://images.vexels.com/media/users/3/205087/isolated/preview/a41d84a485d960a7d929fd95ece1acf1-weather-stroke-icon.png"
                        alt="Forecast Icon"
                    />
                </div>
                <div className="ForecastTemperature">
                    <span className="maxTemp">{maxTemperature()}</span> | {''}
                    <span className="minTemp">{minTemperature()}</span>
                </div>
            </div>
        </div>
    )
}
