import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import App from './components/app';
import Blockchain from './components/blockchain';
import BlockchainSingle from './components/blockchain-single'
import Developement from './components/developement';
import DevelopementSingle from './components/developement-single';
import BehindTheScenes from './components/behind-the-scenes';
import BehindTheScenesSingle from './components/behind-the-scenes-single'
import General from './components/general';
import GeneralSingle from './components/general-single'
import Admin from './components/admin';
import Dashboard from './components/dashboard';
import Drafts from './components/drafts';
import DashboardEdit from './components/dashboard-edit'
import { Meteor } from 'meteor/meteor';
import fourOfour from './components/fourOfour'



const routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/blockchain/:id" exact component={BlockchainSingle} />
      <Route path="/blockchain" exact component={Blockchain} />
      <Route path="/developement" exact component={Developement} />
      <Route path="/developement/:id" exact component={DevelopementSingle} />
      <Route path="/behind-the-scenes" exact component={BehindTheScenes} />
      <Route path="/behind-the-scenes/:id" exact component={BehindTheScenesSingle} />
      <Route path="/general" exact component={General} />
      <Route path="/general/:id" exact component={GeneralSingle} />
      <Route path="/admin" exact component={Admin} />
      <Route path="/dashboard/edit/:id" exact component={DashboardEdit} />
      <Route path="/dashboard" exact component={Dashboard} />
      <Route path="/drafts" exact component={Drafts} />
      <Route component = { fourOfour } />
    </Switch>
  </BrowserRouter>
);


Meteor.startup(() => {
  ReactDOM.render(routes, document.querySelector('#my-render-area'))
})
