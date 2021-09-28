import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const api = {
    key: "98f50f7518cdc2d04a58254249039a9f",
    base: "https://api.openweathermap.org/data/2.5/",
};

const WeatherDetails = (props) => {
    const { history } = props;
    const { city } = useParams();
    const [details, setDetails] = useState(null);

    useEffect(() => {
        axios
            .get(`${api.base}weather?q=${city}&units=metric&APPID=${api.key}`)
            .then((response) => {
                console.log(response.data);
                if (response.data) {
                    setDetails(response.data);
                }
            })
            .catch((error) => {
                console.log(error.message);
            });
    }, []);

    const formatTime = (timeUnformated) => {
        let unix_timestamp = timeUnformated;
        // multiplied by 1000 so that the argument is in milliseconds, not seconds.
        var date = new Date(unix_timestamp * 1000);
        // Hours part from the timestamp
        var hours = date.getHours();
        // Minutes part from the timestamp
        var minutes = "0" + date.getMinutes();

        // Will display time in 10:30 format
        var formattedTime = hours + ":" + minutes.substr(-2);

        return formattedTime;
    };

    const formatVisibility = (meter) => {
        return meter / 1000;
    };

    return (
        <div className="weather-details-wrapper">
            <div className="city-weather-details">
                <div className="detail-header-wrapper">
                    <div className="back-button-container">
                        <button
                            type="submit"
                            className="back-button"
                            onClick={() => history.push("/")}
                        >
                            Back
                        </button>
                    </div>
                    <h3 className="city-name">{city}</h3>
                    <div className="empty-div"></div>
                </div>

                <div className="details-wrapper">
                    {details === null ? (
                        <span>Fetching details...</span>
                    ) : (
                        <>
                            <div className="first-details-container">
                                <div className="city-weather">
                                    {details.weather[0].main}
                                </div>
                                <div className="city-temp">
                                    {Math.round(details.main.temp)}°C
                                </div>
                                <div className="temp-wrapper">
                                    <div className="temp-container">
                                        <label className="max-temp-label">
                                            H:
                                        </label>
                                        <div className="city-temp-max">
                                            {Math.round(details.main.temp_max)}
                                            °C
                                        </div>
                                    </div>
                                    <div className="temp-container">
                                        <label className="min-temp-label">
                                            L:
                                        </label>
                                        <div className="city-temp-min">
                                            {Math.round(details.main.temp_min)}
                                            °C
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="second-details-container">
                                <div className="first-container">
                                    <div className="sun-rise-container">
                                        <label className="sunrise-label">
                                            Sunrise
                                        </label>
                                        <div className="city-sunrise-time">
                                            {formatTime(details.sys.sunrise)}
                                        </div>
                                    </div>
                                    <div className="sun-set-container">
                                        <label className="sunset-label">
                                            Sunset
                                        </label>
                                        <div className="city-sunset-time">
                                            {formatTime(details.sys.sunset)}
                                        </div>
                                    </div>
                                </div>
                                <div className="second-container">
                                    <div className="humidity-container">
                                        <label className="humidity-label">
                                            Humidity
                                        </label>
                                        <div className="city-humidity">
                                            {details.main.humidity}%
                                        </div>
                                    </div>
                                    <div className="visibility-container">
                                        <label className="visibility-label">
                                            Visibility
                                        </label>
                                        <div className="city-visibility">
                                            {Math.round(
                                                formatVisibility(
                                                    details.visibility
                                                )
                                            )}{" "}
                                            km
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default WeatherDetails;
