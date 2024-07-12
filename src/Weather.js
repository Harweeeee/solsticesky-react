import React, { useState } from 'react'
import './Weather.css'
import axios from 'axios'

import WeatherData from './WeatherData'
import WeatherForecast from './WeatherForecast'

export default function Weather(props) {
    const apiKey = 'c175bae3803235f7565671c9cbcd0465'
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
            <div>
                <img
                    src="/assets/solsticeblue.png"
                    alt="Solstice Sky Logo"
                    className="logo"
                ></img>
            </div>
            <header className="searchBar">
                <form id="inputform" onSubmit={handleSubmit}>
                    <input
                        className="inputCity"
                        type="text"
                        placeholder="Enter a city"
                        onChange={updateCity}
                    ></input>
                    <input
                        className="submitButton"
                        type="submit"
                        value="🔍"
                    ></input>
                </form>
            </header>
            <main className="weatherContentContainer">
                <div className="row">
                    <div className="col today">
                        {!ready ? (
                            <p>Loading...</p>
                        ) : (
                            <WeatherData data={weatherData} />
                        )}
                    </div>
                    <div className="col forecast">
                        <WeatherForecast
                            coordinates={weatherData.coordinates}
                        />
                    </div>
                </div>
            </main>
        </div>
    )
}
