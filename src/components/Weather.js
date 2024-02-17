import React, { useState } from "react";
import "./weather.css";
import DisplayWeather from "./DisplayWeather";

function Weather({ children, ...rest }) {
  const APIKEY = "083dd0726ce1943371ccbccc43ef1727";

  const [form, setForm] = useState({
    city: "",
    country: "",
  });
  const [weather, setWeather] = useState([]);

  async function weatherData(e) {
    e.preventDefault();
    if (form.city === "") {
      alert("Add value to city ");
    } else {
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&appid=${APIKEY}`
      )
        .then((res) => res.json())
        .then((data) => data);

      setWeather({
        data: data,
      });
      console.log(weather.data);
    }
  }

  const handleChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    if (name === "city") {
      setForm({ ...form, city: value });
    }
    if (name === "country") {
      setForm({ ...form, country: value });
    }
  };
  return (
    <div {...rest}>
      <div className="weather">
        <span className="title"> Weather App</span>
        <form>
          <input
            type="text"
            name="city"
            placeholder="city"
            value={form.city}
            onChange={(e) => handleChange(e)}
          />
          &nbsp;&nbsp;&nbsp;
          <input
            type="text"
            name="country"
            placeholder="country"
            value={form.country}
            onChange={(e) => handleChange(e)}
          />
          <button className="getweather" onClick={(e) => weatherData(e)}>
            submit
          </button>
        </form>

        {weather.data !== undefined ? (
          <DisplayWeather data={weather.data} />
        ) : null}
      </div>
    </div>
  );
}

export default Weather;
