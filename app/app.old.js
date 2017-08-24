import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
// require the foler /app/components/Main to start rendering the HTML file
import App from './app/components/Login';

const Root = () => {
  return (
    <div className="container">
      <Router history={browserHistory}>
        <Route path="/" component={Header}/>
        <Route path="/special" component={Login} onEnter={requireAuth}/>
      </Router>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
