import React, { useState } from 'react'
import './Weather.css'
import axios from 'axios'
import FormatDate from './FormatDate'

export default function Weather() {
    const apiKey = '2c8f992cd76a9e5483846f53b921753f'
    let [city, setCity] = useState('Sydney')
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    const [weatherData, setWeatherData] = useState({})

    function handleResponse() {
        axios.get(apiUrl).then(function (response) {
            setWeatherData({
                temperature: Math.round(response.data.main.temp),
                wind: response.data.wind.speed,
                humidity: response.data.main.humidity,
                cityName: response.data.name,
                description: response.data.weather[0].description,
                date: new Date(response.data.dt * 1000),
                iconUrl:
                    'https://cdn-icons-png.flaticon.com/512/3052/3052783.png',
            })
        })
    }

    function updateCity(event) {
        event.preventDefault()
        setCity(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        handleResponse()
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
            <main className="weatherinfo">
                <div className="row">
                    <div className="col-12">
                        <h1>{weatherData.cityName}</h1>
                    </div>

                    <div className="col-12">
                        <p className="datetime primarypink">
                            <FormatDate date={weatherData.date} />
                        </p>
                    </div>
                    <div className="col-12">
                        <p className="condition, text-capitalize">
                            {weatherData.description}
                        </p>
                    </div>

                    <div className="col-6 icon">
                        <img src={weatherData.iconUrl} alt="weather-icon" />
                    </div>
                    <div className="col-6 temp">°{weatherData.temperature}</div>
                    <div className="col-12 primarypink">
                        <p>
                            <strong>C</strong> | F
                        </p>
                    </div>
                    <div className="col-12 secondarypink additionalinfo">
                        <div>Humidity: {weatherData.humidity}%</div>
                        <div>Wind: {weatherData.wind} km/H</div>
                    </div>
                </div>
            </main>
        </div>
    )
}
