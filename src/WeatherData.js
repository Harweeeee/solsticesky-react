import React from 'react'
import FormatDate from './FormatDate'
import WeatherUnit from './WeatherUnit'

export default function WeatherData(props) {
    return (
        <div className="WeatherData">
            <main className="weatherinfo">
                <div className="row">
                    <div className="col-12">
                        <h1>{props.data.cityName}</h1>
                    </div>

                    <div className="col-12">
                        <p className="datetime primarypink">
                            <FormatDate date={props.data.date} />
                        </p>
                    </div>
                    <div className="col-12">
                        <p className="condition, text-capitalize">
                            {props.data.description}
                        </p>
                    </div>

                    <div className="col-6 icon">
                        <img src={props.data.iconUrl} alt="weather-icon" />
                    </div>
                    <div className="col-6 temp">°{props.data.temperature}</div>
                    <div className="col-12 primarypink">
                        <p>C</p>
                    </div>
                    <div className="col-12 secondarypink additionalinfo">
                        <div>Humidity: {props.data.humidity}%</div>
                        <div>Wind: {props.data.wind} km/H</div>
                    </div>
                </div>
            </main>
        </div>
    )
}
