import React from "react";
import getWeatherPic from "../../helpers/getWeatherPic";
import './Forecast.css'

const Forecast = props => (
    <div className="forecast__info">
        <h1>Forecast info</h1>
        {
            props.city  && <p className="forecast__info-item"> City:
                <span> { props.city } </span>
            </p>
        }
        {
            props.temperature && <p className="forecast__info-item"> Temperature:
                <span> { props.temperature } </span>
            </p>
        }
        {
            props.weather && <p className="forecast__info-item"> Weather:
                <span> {(props.weather)} </span>
            </p>
        }
        {
            props.weather && <p className="forecast__info-item forecast__info-image">
                 { getWeatherPic(props.weather) }
            </p>
        }
        {
            props.error && <p className="forecast__info-item">{ props.error }</p>
        }
        <button className="back" onClick={props.clearData}>Back</button>

    </div>
);

export default Forecast;


