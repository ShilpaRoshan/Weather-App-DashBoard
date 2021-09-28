import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import DashBoard from "./Components/WeatherApp/DashBoard";
import WeatherDetails from "./Components/WeatherApp/WeatherDetails";
import { createBrowserHistory } from "history";
import "./App.css";

const history = createBrowserHistory();

const App = () => {
    return (
        <Router history={history}>
            <div className="App">
                <Switch>
                    <Route
                        path="/"
                        exact
                        component={(props) => <DashBoard {...props} />}
                    />
                    <Route
                        path="/weather-details/:city"
                        exact
                        component={(props) => <WeatherDetails {...props} />}
                    />
                </Switch>
            </div>
        </Router>
    );
};

export default App;
