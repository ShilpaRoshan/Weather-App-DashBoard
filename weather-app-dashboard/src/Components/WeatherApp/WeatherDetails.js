import React from "react";

const WeatherDetails = () => {
    return (
        <div className="weather-details-wrapper">
            <div className="city-weather-details">
                <div className="detail-header-wrapper">
                    <div className="back-button-container">
                        <button type="submit" className="back-button">
                            Back
                        </button>
                    </div>
                    <h3 className="city-name">Berlin</h3>
                    <div className="empty-div"></div>
                </div>

                <div className="details-wrapper">
                    <div className="first-details-container">
                        <div className="city-weather">Cloudy</div>
                        <div className="city-temp">17°C</div>
                        <div className="temp-wrapper">
                            <div className="temp-container">
                                <label className="max-temp-label">H:</label>
                                <div className="city-temp-max">25°C</div>
                            </div>
                            <div className="temp-container">
                                <label className="min-temp-label">L:</label>
                                <div className="city-temp-min">12°C</div>
                            </div>
                        </div>
                    </div>

                    <div className="second-details-container">
                        <div className="first-container">
                            <div className="sun-rise-container">
                                <label className="sunrise-label">Sunrise</label>
                                <div className="city-sunrise-time">
                                    05:40 AM
                                </div>
                            </div>
                            <div className="sun-set-container">
                                <label className="sunset-label">Sunset</label>
                                <div className="city-sunset-time">20:26 PM</div>
                            </div>
                        </div>
                        <div className="second-container">
                            <div className="humidity-container">
                                <label className="humidity-label">
                                    Humidity
                                </label>
                                <div className="city-humidity">26%</div>
                            </div>
                            <div className="visibility-container">
                                <label className="visibility-label">
                                    Visibility
                                </label>
                                <div className="city-visibility">16.2 km</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeatherDetails;
