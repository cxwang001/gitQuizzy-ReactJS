import React, { Component } from 'react';
import { Link } from 'react-router';
import app from '../app/app';
import '../App.css';

class Nav extends Component {

  function handleClick(clickedKey) {
  <button onClick={() => browserHistory.push(`/app/app?id=${account.AccountName}`)}></button>
}

const navInstance = (
  <Nav bsStyle="pills" activeKey={1} onClick={handleClick}>
    <NavItem eventKey={1} href="../app/app">Restart Game</NavItem>
    <NavItem eventKey={2} title="Item">Item</NavItem>
  </Nav>
)};

ReactDOM.render(navInstance, mountNode);

//   render() {
//     return (
//       <nav className="navbar navbar-default">
//         <div className="navbar-header">
//           <Link className="navbar-brand" to="/">GitQuizzly</Link>
//         </div>
//         <ul className="nav navbar-nav">
//           <li>
//             <Link to="/">app</Link>
//           </li>
        //   <li>
          //  <Link to="/special">app</Link>
          // </li>
//         </ul>
//         <ul className="nav navbar-nav navbar-right">
//           <li><button className="btn btn-info" id="playagain">Play again</button></li>
//           <li><button className="btn btn-danger" id="test">TEST BUTTON</button></li>
//         </ul>
//       </nav>
//     );
//   }
// }

          // 

export default Nav;