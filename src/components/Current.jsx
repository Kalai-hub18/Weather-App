import React from "react";

const Current = ({ currentWeather, location }) => {
  return (
    <div className="container mt-5">
      <h4 className="text-white text-center">
        Current weather of {location.name}, {location.region}
      </h4>

      <div className="row">
        {/* Col-1 */}
        <div className="col-3">
          <div className="card">
           
            <div className="card-body">
              <h5 className="card-title">
                {currentWeather.condition.text}
              </h5>
              <p className="card-text">
                Temperature: {currentWeather.temp_c} °C
              </p>
              <p className="card-text">
                Feels like: {currentWeather.feelslike_c} °C
              </p>
            </div>
          </div>
        </div>

        {/* Col-2 */}
        <div className="col-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                Temp in Celsius: {currentWeather.temp_c} °C
              </h5>
            </div>
          </div>
        </div>

        {/* Col-3 */}
        <div className="col-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                Temp in Fahrenheit: {currentWeather.temp_f} °F
              </h5>
            </div>
          </div>
        </div>

        {/* Col-4 */}
        <div className="col-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                Humidity: {currentWeather.humidity}%
              </h5>
            



            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Current;
