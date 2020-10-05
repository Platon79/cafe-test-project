import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Header from './components/header';
import RestaurantsList from './components/restaurants-list';
import Restaurant from './components/restaurant';
import HomePage from './components/home';
import Order from './components/order';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <RestaurantsList />
        <div className="cafe-content container">
          <div className="cafe-main">
            <Switch>
              <Route path={'/restaurant/:restaurantId'} render={({match}) => (
                <Restaurant restaurantId={match.params.restaurantId} />
              )} />
              <Route path="/home" component={HomePage} />
              <Route exact path="/" render={() => <Redirect to={'/home'} />} />
              <Route path="/" render={() => <h1>Page not found</h1>} />
            </Switch>
          </div>
          <Order />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
