import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
// require the foler /app/components/Main to start rendering the HTML file
import App from './app/components/Main';

const Root = () => {
  return (
    <div className="container">
      <Router history={browserHistory}>
        <Route path="/" component={Main}/>
        <Route path="/special" component={Header}/>
      </Router>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
