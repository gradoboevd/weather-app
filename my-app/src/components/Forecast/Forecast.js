import React from "react";


const Forecast = props => (
    <div className="weather__info">
        <button onClick={props.clearData}/>
        {
            props.city  && <p className="weather__key"> Location:
                <span className="weather__value"> { props.city } </span>
            </p>
        }
        {
            props.temperature && <p className="weather__key"> Temperature:
                <span className="weather__value"> { props.temperature }	</span>
            </p>
        }
        {
            props.error && <p className="weather__error">{ props.error }</p>
        }
    </div>
);

export default Forecast;


