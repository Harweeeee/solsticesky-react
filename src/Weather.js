import React from 'react'
import './Weather.css'

export default function Weather() {
    return (
        <div className="Weather">
            <header className="searchbar">
                <input
                    className="inputcity"
                    type="text"
                    placeholder="Enter a city"
                ></input>
                <input className="submitbutton" type="submit"></input>
            </header>
            <main className="weatherinfo">
                <div className="row">
                    <div class="col-12">
                        <h1>Sydney</h1>
                    </div>

                    <div class="col-12">
                        <p className="datetime primarypink">
                            Sunday, 14th April 2024
                        </p>
                    </div>

                    <div className="col-6 icon">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/3052/3052783.png"
                            alt="weather-icon"
                        />
                    </div>
                    <div className="col-6 temp">°25</div>
                    <div className="col-12 primarypink">
                        <p>
                            <strong>C</strong> | F
                        </p>
                    </div>
                    <div className="col-12 secondarypink additionalinfo">
                        <div>Humidity: 30%</div>
                        <div>Wind: 15 km/H</div>
                    </div>
                </div>
            </main>
        </div>
    )
}