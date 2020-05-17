import React from "react";
import "./Main.css"

const Main = props => (
    <>
        <div className="container">
            <input
                value={props.inputValue}
                onChange={props.setInputValue}
                name='city' className="inputCity"
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
         maps
        </div>
    </>

);

export default Main;
