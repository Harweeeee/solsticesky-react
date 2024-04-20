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
                    <WeatherUnit
                        celciustemp={props.data.temperature}
                        icon={props.data.iconUrl}
                    />
                    <div className="col-12 secondarypink additionalinfo">
                        <div>Humidity: {props.data.humidity}%</div>
                        <div>Wind: {props.data.wind} km/H</div>
                    </div>
                </div>
            </main>
        </div>
    )
}
