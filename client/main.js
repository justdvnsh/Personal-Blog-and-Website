import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './components/app';
import Admin from './components/admin';
import Dashboard from './components/dashboard';

const routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/blockchain" exact component={App} />
      <Route path="/developement" exact component={App} />
      <Route path="/behind-the-scenes" exact component={App} />
      <Route path="/general" exact component={App} />
      <Route path="/about" exact component={App} />
      <Route path="/admin" exact component={Admin} />
      <Route path="/dashboard" exact component={Dashboard} />
    </Switch>
  </BrowserRouter>
);

Meteor.startup(() => {
  ReactDOM.render(routes, document.querySelector('#my-render-area'))
})
