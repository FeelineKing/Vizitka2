import React, {Component} from 'react';

import Bonfire from '../../effects/bonfire/Bonfire';
import Blick from '../../effects/blick/Blick';
import Fireflies from '../../effects/fireflies/Fireflies';

import NavBar from '../NavBar/NavBar';
import Welcome from '../Welcome/Welcome';

class Header extends Component {
  constructor() {
    super();

    this.state = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  };

  componentDidMount() {
    window.addEventListener('resize', () => {
      this.setState({
        width: window.innerWidth,
        height: window.innerHeight
      });
    });
  };

  render() {
    return(
      <header className='header'>
        <NavBar className={'header__navBar'}></NavBar>
        {this.state.width >= 1000 
          ? <Welcome className={'header__welcome'}></Welcome>
          : null}
        <Fireflies amount={60}></Fireflies>
        <span className='header__person'>
          <Blick className={'header__blick'}></Blick>
        </span>
        <Bonfire className={'header__bonfire'}></Bonfire>
      </header>
    );
  };
};

export default Header;