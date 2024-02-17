import React from "react";
import "./displayweather.css";

function DisplayWeather(props) {
  const { data } = props;
  const icon =
    "https://openweathermap.org/img/wn/" +
    `${data.cod != 404 ? data.weather[0].icon : null}` +
    ".png";

  console.log(icon);
  return (
    <div className="displayweather">
      {data.cod != 404 ? (
        <React.Fragment>
          <div className="maincard">
            <span className="cardtitle">
              {data.name} {data.sys.country} Weather
            </span>
            <span className="cardsubtitle">
              As of {new Date().toLocaleString()}
            </span>
            <h1>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {Math.floor(data.main.temp - 273.15)}
              <sup>°</sup>
            </h1>
            <span className="weather-main">{data.weather[0].main}</span>
            <div>
              &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
              <img src={icon} alt="imageicon" className="weather-icon" />
            </div>
            <span className="weather-description">
              {data.weather[0].description}
            </span>
            <div className="weatherdetails">
              <div className="section1">
                <table>
                  <tr>
                    <td>
                      <h4>High/Low</h4>
                    </td>
                    <td>
                      {Math.floor(data.main.temp_max - 273.15)} /{" "}
                      {Math.floor(data.main.temp_min - 273.15)} <sup>o</sup>C
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h4>Humidity </h4>
                    </td>
                    <td>{data.main.humidity}%</td>
                  </tr>
                  <tr>
                    <td>
                      <h4>Presure</h4>
                    </td>
                    <td>{data.main.pressure}hPa</td>
                  </tr>
                  <tr>
                    <td>
                      <h4>visibility</h4>
                    </td>
                    <td>{data.visibility / 1000} Km</td>
                  </tr>
                </table>
              </div>

              <div className="section2">
                <table>
                  <tr>
                    <td>
                      <h4>Wind</h4>
                    </td>
                    <td>
                      <span>
                        {Math.floor((data.wind.speed * 18) / 5)} Km/Hr
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h4>Wind direction </h4>
                    </td>
                    <td>
                      {data.wind.deg}
                      <sup>o</sup>deg
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h4>Sunrise</h4>
                    </td>
                    <td>
                      {new Date(data.sys.sunrise * 1000).toLocaleTimeString()}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h4>Sunset</h4>
                    </td>
                    <td>
                      {new Date(data.sys.sunset * 1000).toLocaleTimeString()}
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </React.Fragment>
      ) : (
        <div className="maincard">
          <h2> {data.message}</h2>
        </div>
      )}
    </div>
  );
}

export default DisplayWeather;
