import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
// import "./Checkout.css";
import Payment from './Payment'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Login";
import { useEffect } from 'react'
import { auth } from './firebase'
import { useStateValue } from './StateProvider'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import Orders from './Orders'
import Prime from './prime/amazonPrime/App'

const promise = loadStripe('pk_test_51IhYD2SBhy2urMOM61VO3NjEyzKyiKgUL6DCBZm5OjG6BdbK8LjMyAa6BAUlDR73rfPLm9k2ZKi1I8fWxbct528u00ETMNwRZ5')

function App() {
  const [{ }, dispatch] = useStateValue();

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
          <Route path="/prime">
            <Prime />
          </Route>
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
