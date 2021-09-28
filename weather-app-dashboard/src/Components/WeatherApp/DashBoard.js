import React from "react";
import SearchBar from "./SearchBar";

const DashBoard = () => {
    return (
        <div className="dash-board-wrapper">
            <SearchBar />
            <h1 className="header-dashboard">Dashboard</h1>

            <div className="dash-board-container">
                <div className="tile-wrapper">
                    <label htmlFor="city-name" className="city-label">
                        My Location
                    </label>
                    <div className="temp">17°C</div>
                </div>

                <div className="tile-wrapper">
                    <label htmlFor="city-name" className="city-label">
                        Berlin
                    </label>
                    <div className="temp">20°C</div>
                </div>

                <div className="tile-wrapper">
                    <label htmlFor="city-name" className="city-label">
                        London
                    </label>
                    <div className="temp">18°C</div>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;
