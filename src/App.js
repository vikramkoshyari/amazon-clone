import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Payment from './Payment'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Login";
import { useEffect } from 'react'
import { auth } from './firebase'
import { useStateValue } from './StateProvider'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import Orders from './Orders'

import PrimeHeader from "./prime/amazonPrime/components/Header";
import PrimeHome from "./prime/amazonPrime/components/Home/index";
import AllContent from "./prime/amazonPrime/components/AllContent";
import Movie from "./prime/amazonPrime/components/Movie/index";
import requests from "./prime/amazonPrime/requests";
import tvrequests from "./prime/amazonPrime/tvRequests";
import homeRequests from "./prime/amazonPrime/homeRequests";
import TV from "./prime/amazonPrime/components/TV/index";

const promise = loadStripe('pk_test_51IhYD2SBhy2urMOM61VO3NjEyzKyiKgUL6DCBZm5OjG6BdbK8LjMyAa6BAUlDR73rfPLm9k2ZKi1I8fWxbct528u00ETMNwRZ5')

function App() {
  const [{ }, dispatch] = useStateValue();
  const api_key = "35eb1b06e50886816c655c8f05742655";


  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log(authUser);
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    //BEM
    <BrowserRouter>
      <div className="app">
        <Switch>

          <Route path="/login">
            <Login />
          </Route>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>

          </Route>



          <Route
            exact
            path="/movies"
          >
            <PrimeHeader />
            <PrimeHome
              api_key={api_key}
              requests={requests}
              slideShowUrl={`https://api.themoviedb.org/3/movie/popular?api_key=35eb1b06e50886816c655c8f05742655&language=en-US&page=1`}
            />
          </Route>

          <Route
            exact
            path="/tvShows"
          >
            <PrimeHeader />
            <PrimeHome
              api_key={api_key}
              requests={tvrequests}
              slideShowUrl={`https://api.themoviedb.org/3/tv/popular?api_key=35eb1b06e50886816c655c8f05742655&language=en-US&page=1`}
            />
          </Route>
          <Route
            exact
            path="/content"
          >
            <PrimeHeader />
            <AllContent API_KEY={api_key} />
          </Route>

          <Route
            exact
            path="/movie"
          >
            <PrimeHeader />
            <Movie api_key={api_key} />
          </Route>

          <Route
            path="/prime"
          >
            <PrimeHeader />
            <PrimeHome
              api_key={api_key}
              requests={homeRequests}
              slideShowUrl="https://api.themoviedb.org/3/trending/all/day"
            />
          </Route>

          <Route path="/tv" >
            <PrimeHeader />
            <TV api_key={api_key} />
          </Route>






          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
