import React, { useState } from 'react'

export default function WeatherUnit(props) {
    const [unit, setUnit] = useState('celcius')
    let fahrenheitTemp = Math.round((props.celciustemp * 9) / 5 + 52)

    function convertToFahrenheit(event) {
        event.preventDefault()
        setUnit('fahrenheit')
    }

    function convertToCelcius(event) {
        event.preventDefault()
        setUnit('celcius')
    }

    if (unit === 'celcius') {
        return (
            <div className="celciusunit">
                <div class="row">
                    <div className="col-6 icon">
                        <img src={props.icon} alt="weather-icon" />
                    </div>
                    <div className="col-6 temp">{props.celciustemp}°</div>
                    <div></div>
                    <p>
                        <strong>C</strong> |{' '}
                        <a href="/" onClick={convertToFahrenheit}>
                            F
                        </a>
                    </p>
                </div>
            </div>
        )
    } else {
        return (
            <div className="fahrenheitunit">
                <div class="row">
                    <div className="col-6 icon">
                        <img src={props.icon} alt="weather-icon" />
                    </div>
                    <div className="col-6 temp">{fahrenheitTemp}°</div>
                    <div></div>
                    <p>
                        <a href="/" onClick={convertToCelcius}>
                            C
                        </a>{' '}
                        | <strong>F</strong>
                    </p>
                </div>
            </div>
        )
    }
}
