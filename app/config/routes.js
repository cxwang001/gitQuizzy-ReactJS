// Inclue the React library
import React from 'react';
import router from 'react-router';
// Include the BrowserRouter, Route component, Switch (redirect routes)
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import app from '../app';
// Here's the path for the Headers, includes the Nav bar
import Headers from './components/Headers';
// Import the game section using the Card path
import Card from './components/Card';


export default () => (
  <Switch>
    <Route path="/" exact component={app} />
  </Switch>
);

// Register the Callback route
// import Callback from './components/Callback';
// Register the AuthService route
// import requireAuth from '../utils/AuthService';
// Reference the high-level components
// import Saved from '../components/Saved';
// import Results from '../components/Results';
// Include the browserHistory prop to configure client side routing
// https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#browserhistory
// import Login from '../components/Login';


// We get our Client ID and Domain from the .env file. It is inserted in this format via our Webpack build system
// const auth = new AuthService(
// {
//     clientID: 'pjINX1tXd47TzHRmwuIbI3aXBM7ZWWPe',
//     domain: 'cxwang001.auth0.com'
// });

// // onEnter callback to validate authentication in private routes
// const requireAuth = (nextState, replace) => {
//   if (!auth.loggedIn()) {
//     replace({ pathname: '/login' })
//   }
// }

// // Our application has two routes: home and login. When we launch our application, it by default tries to go to /home. The home route has an onEnter callback which calls a requireAuth function. The requireAuth function is implemented above, and checks to see if a user is logged in. If not, it redirects to the login page.
// export const Routes = () => {
//   return (
//     <Route path="/" component={Header} auth={auth}>
//       <IndexRedirect to="/header" />
//       <Route path="header" component={Header} onEnter={requireAuth} />
//       <Route path="login" component={Login} />
//       <Route path="access_token=:token" component={Login} /> //to prevent router errors
//     </Route>
//   )
// }

// export default Routes;