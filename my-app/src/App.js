import React from "react";
import Main from "./components/Main/Main";
import Forecast from "./components/Forecast/Forecast";

const API_KEY = "044d7f948470c764cfa74a9e48c9fd08";

class App extends React.Component {
    state = {
        temperature: null,
        city: null,
        error: null,
        inputValue: '',
        weather: null,
    };
    setLocation= (location) => this.setState( (state) => ({...state, inputValue: location}));
    clearData = () => this.setState(state => ({
        ...state,
        city: null,
        temperature: null,
    }));
    getWeather = async (e) => {
        e.preventDefault();

        const api_call = await fetch(
            `http://api.openweathermap.org/data/2.5/weather?q=${this.state.inputValue}&appid=${API_KEY}`
        );
        const data = await api_call.json();
        if (this.state.inputValue.trim()) {
            this.setState({
                temperature: data.main.temp,
                city: data.name,
                weather: data.weather[0].main,
                error: ""
            });
        } else {
            this.setState({
                temperature: null,
                city: null,
                weather: null,
                error: "Please enter the values."
            });
        }
    };
    setInputValue = (e) => {
        const inputValue = e.target.value;
        this.setState((state) => ({...state, inputValue}));
    };
    render() {
        const {inputValue, temperature, city, error, weather} = this.state;
        return (
                <div className="">
                    {!(temperature && city) ?
                        <Main
                            setLocation={this.setLocation}
                            inputValue={inputValue}
                            setInputValue={this.setInputValue}
                            getWeather={this.getWeather}
                        />
                    :
                        <Forecast
                            weather={weather}
                            clearData={this.clearData}
                            temperature={temperature}
                            city={city}
                            error={error}
                        />
                    }
                </div>
        );
    }
}

export default App;
