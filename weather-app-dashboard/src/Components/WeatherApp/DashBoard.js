import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

const api = {
    key: "98f50f7518cdc2d04a58254249039a9f",
    base: "https://api.openweathermap.org/data/2.5/",
};

const DashBoard = (props) => {
    const { history } = props;
    const checkTiles = localStorage.getItem("tiles");
    const initialTiles = checkTiles === null ? [] : JSON.parse(checkTiles);
    const [tiles, setTiles] = useState(initialTiles);
    const [coords, setCoords] = useState({});
    const [currentLocation, setCurrentLocation] = useState({});

    //to get the coordinates (latitude and longitude)
    useEffect(() => {
        const getLocation = () => {
            if (navigator.geolocation) {
                return navigator.geolocation.getCurrentPosition(showPosition);
            }
            return false;
        };
        getLocation();
    }, []);

    //To get the city name using the latitude and longitude from getCurrentPosition and set the state to that particular location
    useEffect(() => {
        if (Object.entries(coords).length !== 0) {
            axios
                .get(
                    `${api.base}weather?lat=${coords.lat}&lon=${coords.lon}&units=metric&APPID=${api.key}`
                )
                .then((response) => {
                    if (response.data) {
                        setCurrentLocation(response.data);
                    }
                })
                .catch((error) => {
                    console.log(error.message);
                });
        }
    }, [coords]);
    //If currentLocation is not empty then Mylocation tile will be shown.
    useEffect(() => {
        if (Object.entries(currentLocation).length !== 0) {
            const data = [...tiles];
            const cityExists = data.find((x) => x.name === "My Location");
            if (cityExists === undefined) {
                data.push({
                    id: currentLocation.id,
                    name: "My Location",
                    temp: currentLocation.main.temp,
                });
                setTilesData(data);
            }
        }
    }, [currentLocation]);

    //To set the data in localStorage.
    const setTilesData = (data) => {
        setTiles(data);
        localStorage.setItem("tiles", JSON.stringify(data));
    };

    //This function sets the coordinates(latitude and longitude) to get the current position
    const showPosition = (position) => {
        setCoords({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
        });
    };
    //this is the function to handle the click the tile which directs to weather-details page of paticular city
    const handleClick = (city) => {
        history.push(`/weather-details/${city}`);
    };

    //This function creates the tile when clicked on search button
    const createTile = () => {
        const tileData = tiles.map((x) => {
            return (
                <div
                    className="tile-wrapper"
                    key={x.id}
                    onClick={() => handleClick(x.name)}
                >
                    <label htmlFor="city-name" className="city-label">
                        {x.name}
                    </label>
                    <div className="temp">{Math.round(x.temp)}°C</div>
                </div>
            );
        });
        return tileData;
    };
    return (
        <div className="dash-board-wrapper">
            <SearchBar setTiles={setTilesData} tiles={tiles} />
            <h1 className="header-dashboard">Dashboard</h1>

            <div className="dash-board-container">{createTile()}</div>
        </div>
    );
};

export default DashBoard;
