import React from 'react'
import Weather from './Weather'
import './App.css'

export default function App() {
    return (
        <div className="App">
            <Weather defaultcity="Sydney" />
            <footer>
                This app was created by{' '}
                <a href="https://github.com/Harweeeee">Harleigh Gallant</a> and
                open-sourced on{' '}
                <a href="https://github.com/Harweeeee/solsticesky-react">
                    Github
                </a>
            </footer>
        </div>
    )
}
