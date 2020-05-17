import React from "react";
import Maps from "../Maps/Maps";
import "./Main.css"

const Main = props => (
    <>
        <div className="container">
            <input
                value={props.inputValue}
                onChange={props.setInputValue}
                name='city'
                className="inputCity"
                type="text"
                placeholder="Enter the city..."
            />
            <button
                className="getForecastButton"
                onClick={props.getWeather}>
                Get forecast
            </button>
        </div>

        <div>
            <Maps setLocation={props.setLocation}/>
        </div>
    </>

);

export default Main;
