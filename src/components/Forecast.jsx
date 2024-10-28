import React from "react";



// eslint-disable-next-line react/prop-types
const Forecast = ({ forecastWeather, location }) => {
    
  return (
    <div className="container mt-3"
    >
            <><h4 className="text-white text-center">
              Forecast weather of {location.name}, {location.region}
          </h4> 
      {forecastWeather.forecastday.map((data, index) => {
        return (
          // eslint-disable-next-line react/jsx-key
          <div
            className=" forecast-card accordion accordion-flush mt-3"
            id="accordionFlushExample"
          >
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#${index}`}
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  <div className="d-flex flex-row align-items-center mb-3  ">
                    <div className=" forecast-date p-2 ">{data.date}</div>
                    <div className=" forecast-icon p-2 ">
                      <img src={data.day.condition.icon} />
                    </div>
                    <div className="  forecast-temp-text p-2" >
                      {data.day.condition.text}
                    </div>
                    <div className="forecast-temp p-2">
                      <h5>Max temperature of the day</h5>
                      {data.day.maxtemp_c}
                    </div>
                  </div>
                </button>
              </h2>
              <div
                id={`${index}`}
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  {data.hour.map((data) => {
                    return (
                     <> 
                    <h6> {data.time} Max temp:{data.temp_c}</h6>
                      <div
                        className="progress"
                        role="progressbar"
                        aria-label="Success example"
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <div
                          className="progress-bar bg-success"
                          style={{ width: `${data.temp_c}%` }}
                        >
                          
                        </div>
                      </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        
        );
      })}
      </>
    </div>
  );
};
export default Forecast;
