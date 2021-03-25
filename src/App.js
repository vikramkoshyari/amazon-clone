import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import "./Checkout.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Login";
import {useEffect} from 'react'
import {auth} from './firebase'
import {useStateValue} from './StateProvider'

function App() {
  const [{},dispatch] = useStateValue();

  useEffect(()=>{
    auth.onAuthStateChanged(authUser =>{
      console.log(authUser);
      if(authUser){
        dispatch({
          type:'SET_USER',
          user:authUser
        })
      }else{
        dispatch({
          type:'SET_USER',
          user:null
        })
      }
    })
  },[])

  return (
    //BEM
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
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
