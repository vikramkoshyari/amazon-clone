import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home/index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AllContent from "./components/AllContent";
import Movie from "./components/Movie/index";
import requests from "./requests";
import tvrequests from "./tvRequests";
import homeRequests from "./homeRequests";
import TV from "./components/TV/index";
import Amazon from "../../App"

function App() {
  const api_key = "35eb1b06e50886816c655c8f05742655";
  return (
    <Router>
      <div className="App">

        <div>
          <Switch>
            <Route
              exact
              path="/movies"
            >
              <Header />
              <Home
                api_key={api_key}
                requests={requests}
                slideShowUrl={`https://api.themoviedb.org/3/movie/popular?api_key=35eb1b06e50886816c655c8f05742655&language=en-US&page=1`}
              />
            </Route>

            <Route
              exact
              path="/tvShows"
            >
              <Header />
              <Home
                api_key={api_key}
                requests={tvrequests}
                slideShowUrl={`https://api.themoviedb.org/3/tv/popular?api_key=35eb1b06e50886816c655c8f05742655&language=en-US&page=1`}
              />
            </Route>
            <Route
              exact
              path="/content"
            >
              <Header />
              <AllContent API_KEY={api_key} />
            </Route>
            <Route
              exact
              path="/movie"
            >
              <Header />
              <Movie api_key={api_key} />
            </Route>
            <Route
              path="/prime"
            >
              <Header />
              <Home
                api_key={api_key}
                requests={homeRequests}
                slideShowUrl="https://api.themoviedb.org/3/trending/all/day"
              />
            </Route>
            <Route path="/tv" >
              <Header />
              <TV api_key={api_key} />
            </Route>
            <Route path='/'>
              <Amazon/>
            </Route>


          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
