import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { Login, Movies } from './pages';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/movies" component={Movies} />
        <Route path="*" component={() => <h1>Error 404: page not found</h1>} />
      </Switch>
    </Router>
  );
}
