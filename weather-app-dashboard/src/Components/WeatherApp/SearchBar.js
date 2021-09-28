import React from "react";

const SearchBar = () => {
    return (
        <div className="search-container">
            <form className="form-container" data-testid="form-wrapper">
                <input
                    type="text"
                    name="searchBar"
                    placeholder="Search for location"
                    className="search-bar"
                />
                <div className="search-button-container">
                    <button
                        type="submit"
                        className="search-button"
                        data-testid="search-button"
                    >
                        Search
                    </button>
                </div>
            </form>
        </div>
    );
};
export default SearchBar;
