// App.js
import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Current from "./components/Current";
import Forecast from "./components/Forecast";
import '../node_modules/bootstrap/dist/js/bootstrap';

function App() {
  const [city, setCity] = useState("");
  const [citySuggestion, setCitySuggestion] = useState([]);
  const [currentWeather, setCurrent] = useState();
  const [forecastWeather, setForecast] = useState();
  const [location, setLocation] = useState();
  const [ClickedCity, setClickedCity] = useState();
  const [theme, setTheme] = useState("light");

  const autoCompleteURL =
    "https://api.weatherapi.com/v1/search.json?key=83c0b17cb2774eac95723527231501&q=";
  const WeatherURL = (city) =>
    `https://api.weatherapi.com/v1/forecast.json?key=83c0b17cb2774eac95723527231501&q=${city}&days=7&aqi=no&alerts=no`;

  

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    if (city && city.length > 3) {
      fetchAutoCompAPI(city); // Pass the city value to fetchAutoCompAPI
    }
  }, [city]);
  

  const handlSelectedCity = (selectedCity) => {
    console.log("clicked city", selectedCity);
    setClickedCity(selectedCity);
    fetchWeatherAPI(selectedCity); // Pass the selected city to fetchWeatherAPI
  };

  const fetchAutoCompAPI = async (city) => {
    try {
      const response = await axios.get(autoCompleteURL + city);
      const resp = response.data;
      console.log(resp);

      const cityData = resp.map((data) => {
        return `${data.name},${data.region},${data.country}`;
      });
      setCitySuggestion(cityData);
    } catch (e) {
      console.log("error", e);
    }
  };

  const fetchWeatherAPI = async (city) => {
    try {
      const response = await axios.get(WeatherURL(city));
      const resp = response.data;
      console.log(resp);
      setCurrent(resp.current);
      setForecast(resp.forecast);
      setLocation(resp.location);
      console.log('Current', resp.current);
      console.log('Forecast', resp.forecast);
      console.log('Location', resp.location);
    } catch (e) {
      console.log("weather API error", e);
    }
  };

  return (
    <div className="container p-5 rounded mt-5 opacity-75">
      <header className="d-flex justify-content-between align-items-center mb-3">
       <div className="d-flex">
        <button onClick={toggleTheme} className="btn btn-secondary me-2">
          {theme === "light" ? "Dark" : "Light"} Mode
        </button>
        <button
  onClick={() => {
    setCity("");
    setCitySuggestion([]);
    setCurrent(null);
    setForecast(null);
    setLocation(null);
    setClickedCity(null);
  }}
  className="btn btn-secondary"
>
  Clear
</button>
</div>
      </header>

      <input
        type="text"
        value={ClickedCity}
        placeholder="ENTER THE CITY NAME"
        className="form-control input-width"
        onChange={(e)=>{setCity(e.target.value);
         
            //if (e.target.value === "") {
             // setCitySuggestion([]);
              //setCurrent(null);
             // setForecast(null);
             // setLocation(null);
              //setClickedCity(null);
          //  }
          }
          }
      
      
        
      />

      {citySuggestion &&
        citySuggestion.map((data, index) => {
          return (
            <div
              key={index}
              className="suggestion-box text-center rounded p-2 mb-2 mt-2 border border-secondary"
              style={{ cursor: "pointer" }}
              onClick={() => handlSelectedCity(data)}
            >
              <h4>{data}</h4>
            </div>
          );
        })}

      {currentWeather && <Current currentWeather={currentWeather} location={location} />}
      {forecastWeather && <Forecast forecastWeather={forecastWeather} location={location} />}
    </div>
  );
}

export default App;
