// Include the Main React Dependencies
// import React from 'react';
// import ReactDOM from 'react-dom';

// import Main from './components/Main';

// Renders the contents according to the route page
// Displays the contents in the div app of index.html
// Note how ReactDOM takes in two parameters (the contents and the location)
// ReactDOM.render(<Main/>, document.getElementById('app'));
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { firebaseApp } from '../firebase';
// import { logUser } from './actions';
// import reducer from './reducers';

import App from './components/Main';
import SignIn from './SignIn.js';
import SignUp from './SignUp.js';

// const store = createStore(reducer);

firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
    console.log('user has signed in or up', user);
    // const { email } = user;
    // store.dispatch(logUser(email));
    // browserHistory.push('/app');
  } else {
    console.log('user has signed out or still needs to sign in.')
  //   browserHistory.replace('/signin');
  }
})

ReactDOM.render(
  <Router path="/" history={browserHistory}>
      <Route path="/app" component={App} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
    </Router>, document.getElementById('app')
 )