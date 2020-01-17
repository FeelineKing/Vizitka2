import React, {Component} from 'react';

import logo from '../../img/logo.png';

class Welcome extends Component {
  constructor() {
    super();

    this.state = {
      
    }
  }

  render() {
    return(
      <aside className={'welcome ' + this.props.className}>
        <a href='#' className='welcome__mainLink'>
          <img src={logo} className='welcome__logo' alt='logo'/>
        </a>
        <div className='welcome__logoTextContainer'>
          <span className='welcome__logoText'>KungFurher@animevost.com <br/> "See you later with glass of vodka"</span>
        </div>
      </aside>
    )
  }
}

export default Welcome;