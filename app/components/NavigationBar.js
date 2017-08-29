import React, { Component } from 'react';
import { Appbar, Button, Container } from 'muicss/react';

function refreshPage(){ 
    window.location.reload(); 
};

class NavigationBar extends Component {
  render() {
    let s1 = {verticalAlign: 'middle'};
    let s2 = {
              textAlign: 'right',
              size: 'medium',
              background: 'red'
              };

    return (

      <Appbar className="appbarBrand">
       <table width="100%">
         <tbody>
           <tr style={s1}>
             <td className="mui--appbar-height brandName">GitQuizzy</td>
             <Button className="buttonRestart" style={s2} onClick={ refreshPage }>Restart Game</Button>
           </tr>
         </tbody>
       </table>
      </Appbar>
    );
    return (
        <div>
          {appNavbar}
        </div>
        );
  }
}

    export default NavigationBar;