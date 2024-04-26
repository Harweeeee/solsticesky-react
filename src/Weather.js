import React, { useState } from 'react'
import './Weather.css'
import axios from 'axios'

import WeatherData from './WeatherData'
import WeatherForecast from './WeatherForecast'

export default function Weather(props) {
    const apiKey = '2c8f992cd76a9e5483846f53b921753f'
    let [city, setCity] = useState('')
    const [weatherData, setWeatherData] = useState({})
    let [ready, setReady] = useState(false)

    function handleResponse(c) {
        axios
            .get(
                `https://api.openweathermap.org/data/2.5/weather?q=${c}&appid=${apiKey}&units=metric`
            )
            .then(function (response) {
                setWeatherData({
                    temperature: Math.round(response.data.main.temp),
                    wind: response.data.wind.speed,
                    humidity: response.data.main.humidity,
                    cityName: response.data.name,
                    description: response.data.weather[0].description,
                    date: new Date(response.data.dt * 1000),
                    iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
                    coordinates: response.data.coord,
                })
                setReady(true)
            })
    }

    function updateCity(event) {
        event.preventDefault()
        setCity(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        handleResponse(city)
    }

    if (city === '') {
        setCity(props.defaultcity)
        handleResponse(props.defaultcity)
    }

    return (
        <div className="Weather">
            <header className="searchbar">
                <form id="inputform" onSubmit={handleSubmit}>
                    <input
                        className="inputcity"
                        type="text"
                        placeholder="Enter a city"
                        onChange={updateCity}
                    ></input>
                    <input
                        className="submitbutton"
                        type="submit"
                        value="search"
                    ></input>
                </form>
            </header>
            <main>
                {!ready ? (
                    <p>Loading...</p>
                ) : (
                    <WeatherData data={weatherData} />
                )}
            </main>
            <WeatherForecast coordinates={weatherData.coordinates} />
        </div>
    )
}
