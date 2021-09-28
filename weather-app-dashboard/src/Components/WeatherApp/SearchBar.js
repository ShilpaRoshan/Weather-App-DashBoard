import React, { useState } from "react";
import axios from "axios";

const api = {
    key: "98f50f7518cdc2d04a58254249039a9f",
    base: "https://api.openweathermap.org/data/2.5/",
};

const SearchBar = (props) => {
    const [location, setLocation] = useState("");

    //To get the city name and temperature details and handle the form submition
    const handlerSubmit = (event) => {
        event.preventDefault();
        axios
            .get(
                `${api.base}weather?q=${location}&units=metric&APPID=${api.key}`
            )
            .then((response) => {
                const data = [...props.tiles];
                const cityExists = data.find((x) => x.name === location);
                if (cityExists === undefined) {
                    data.push({
                        id: response.data.id,
                        name: response.data.name,
                        temp: response.data.main.temp,
                    });
                    props.setTiles(data);
                } else {
                    alert("City is already exists.");
                }
            })
            .catch((error) => {
                console.log(error.message);
            });
        console.log({ location });
        setLocation("");
    };

    const onChange = (event) => {
        setLocation(event.target.value);
    };

    return (
        <div className="search-container">
            <form
                className="form-container"
                onSubmit={handlerSubmit}
                data-testid="form-wrapper"
            >
                <input
                    type="text"
                    name="searchBar"
                    placeholder="Search for location"
                    className="search-bar"
                    onChange={onChange}
                    value={location}
                />
                <div className="search-button-container">
                    <button
                        type="submit"
                        className="search-button"
                        data-testid="search-button"
                        onClick={handlerSubmit}
                    >
                        Search
                    </button>
                </div>
            </form>
        </div>
    );
};
export default SearchBar;
