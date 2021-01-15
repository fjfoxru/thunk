import React from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import Services from './components/Services';
import ServiceItem from './components/ServiceItem';

function App() {
  return (
    <Router>
      <Redirect from="/" to="/services"/>
      <Switch>
        <Route path="/services/:id" component={ServiceItem}/>
        <Route path="/services" component={Services}/>
      </Switch>
    </Router>
  );
}

export default App;
