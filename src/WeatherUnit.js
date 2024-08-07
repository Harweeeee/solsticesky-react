import React, { useState } from 'react'
import './WeatherUnit.css'

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
                <div class="">
                    <div className="temp">{props.celciustemp}°</div>
                    <div></div>
                    <p className="secondarypink">
                        <strong>C</strong>
                        <a
                            className="templink"
                            href="/"
                            onClick={convertToFahrenheit}
                        >
                            {' '}
                            | F
                        </a>
                    </p>
                </div>
            </div>
        )
    } else {
        return (
            <div className="fahrenheitunit">
                <div class="">
                    <div className="temp">{fahrenheitTemp}°</div>
                    <div></div>
                    <p className="secondarypink">
                        <a
                            className="templink"
                            href="/"
                            onClick={convertToCelcius}
                        >
                            C |
                        </a>{' '}
                        <strong>F</strong>
                    </p>
                </div>
            </div>
        )
    }
}
