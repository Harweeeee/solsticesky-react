import React from 'react'
import FormatDate from './FormatDate'
import WeatherUnit from './WeatherUnit'
import './WeatherData.css'

export default function WeatherData(props) {
    return (
        <div className="WeatherData">
            <div className="col-12">
                <p className="dateTime">
                    <FormatDate date={props.data.date} />
                </p>
            </div>
            <main className="weatherInfo">
                <div className="row">
                    <div className="col">
                        <h1 className="searchedCity">{props.data.cityName}</h1>
                        <div className="">
                            <p className="condition">
                                {props.data.description}
                            </p>
                        </div>
                        <WeatherUnit celciustemp={props.data.temperature} />
                        <div className="additionalInfo">
                            <div>Humidity: {props.data.humidity}%</div>
                            <div>Wind: {props.data.wind} km/H</div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="iconImg">
                            <img
                                src={props.data.iconUrl}
                                alt="Weather Icon"
                            ></img>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
