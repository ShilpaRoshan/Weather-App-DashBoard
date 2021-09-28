# Weather-App-DashBoard

Weather-App-DashBoard

An application used to show the weather details of the city from an open source API using React, Hooks,JavaScript and CSS.

## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine.

Clone the repository:

`git clone https://github.com/ShilpaRoshan/Weather-App-DashBoard.git `

Go inside the repo:

`cd weather-app-dashboard`

Installations:

`npm install`

Start the Server:

`npm start`

Visit App:

`http://localhost:3000/`

Run Test Suite:

`npm test`

## Tech Stack

1. React 17.0.2
2. Axios 0.21.4
3. Hooks
4. CSS
5. HTML
6. JSX
7. React-testing-library 11.2.7

## Explanation

1. I chose to use the `create-react-app` boilerplate to minimize initial setup and invest more time in diving into technological rabbit holes.
2. App.js is injecting DashBoard.js to list the different cities and respective temperatures visited by user .This component extracts the data from an open source API `https://api.openweathermap.org/data/2.5/` using Axios.
3. The DashBoard.js component has two child components
   i. SearchBar.js :- Searches for a paticular city through API. Once the user clicks on the search button .It checks if there is any tile with same city name else through DashBoard.js component a tile is created with city-name and temperature.
   ii. WeatherDetails.js :- When a user clicks on the tile detailed weather information of a given location is displayed.
4. LocalStorage has been used to store the city name and temperature which the user tried to see the details of the location.
5. App.css:- This files includes the CSS3 Styling techniques including FlexBox. To create the the modal design.
6. App.test.js & DashBoard.test.js:- This files includes the testing of code using React-testing-library.

## Enhancements

1. Display Unit Selection - A drop down of display unit option next to the search bar.
2. Delete city option - This feature would allow the user to remove a partiular city (tile) from the dashboard.
3. Responsive background - Ability to have dynamic backgrounds in relation to the weather conditions.
