import React, {Component} from 'react';

import Welcome from '../Welcome/Welcome';

class NavBar extends Component {
  constructor() {
    super();

    this.state = {
      width: window.innerWidth,
      height: window.innerHeight,
      burger: false,
    }

    this.burgerWasNotTouched = true;
  };

  componentDidMount() {
    window.addEventListener('resize', () => {
      this.setState({
        width: window.innerWidth,
        height: window.innerHeight
      });
    });
  };

  componentDidUpdate() {
    if(this.state.burger && !document.querySelector('#burgerSwitcher')) {
      this.setState({
        burger: false,
      })
    }
  }

  linkClick = (event) => {
    let id = event.target.id;
    let currentLink = document.querySelector(`#${id}`);

    if (currentLink.classList.contains('hoverLink')) {
      currentLink.classList.replace('hoverLink', 'activeLink');

      for (let i = 1; i <= 6; i++) {
        let ids = document.querySelector(`#link${i}`);

        if (i !== +id.replace(/[a-z]/g, '') && ids.classList.contains('activeLink')) {
          ids.classList.replace('activeLink', 'hoverLink');
        };
      };
    };
  };

  burgerSwitcher = () => {
    this.setState(prev => {
      return {
        burger: !prev.burger
      };
    }, () => {
      let element = document.querySelector('#burgerSwitcher');
      let button = document.querySelector('#burgerButton');
      let list = document.querySelector('#burgerList');

      button.classList.toggle('navBar__switcher_active');
      element.classList.toggle('navBar__burgerItem_active');

      if(this.state.burger && this.burgerWasNotTouched) {
        list.classList.add('navBar__burgerListActivate');
      } else if(this.state.burger) {
        list.classList.replace('navBar__burgerListDisable', 'navBar__burgerListActivate');
      } else {
        list.classList.replace('navBar__burgerListActivate', 'navBar__burgerListDisable');
      }
    });
  };

  renderNavBar = () => {
    switch(true) {
      case this.state.width >= 1000:
      return (
        <nav className={'navBar ' + this.props.className}>
          <ul className='navBar__list'>
            <li className='navBar__item'>
              <a href='#' className='navBar__link hoverLink' id='link1' onClick={this.linkClick}>Главная</a>
            </li>
            <li className='navBar__item'>
              <a href='#' className='navBar__link hoverLink' id='link2' onClick={this.linkClick}>Обо мне</a>
            </li>
            <li className='navBar__item'>
              <a href='#' className='navBar__link hoverLink' id='link3' onClick={this.linkClick}>Навыки</a>
            </li>
            <li className='navBar__item'>
              <a href='#' className='navBar__link hoverLink' id='link4' onClick={this.linkClick}>Интересы</a>
            </li>
            <li className='navBar__item'>
              <a href='#' className='navBar__link hoverLink' id='link5' onClick={this.linkClick}>Портфолио</a>
            </li>
            <li className='navBar__item'>
              <a href='#' className='navBar__link navBar__lastLink hoverLink' id='link6' onClick={this.linkClick}>Контакты</a>
            </li>
          </ul>
        </nav>
      );

      case this.state.width < 1000:
      return (
        <nav className={'navBar ' + this.props.className}>
          <Welcome className='navBar__welcome'></Welcome>
          <div className='navBar__switcher' id='burgerButton' onClick={this.burgerSwitcher}>
            <span className='navBar__burgerItem' id='burgerSwitcher'></span>
          </div>
          <ul className='navBar__burgerList' id='burgerList'>
            <li className='navBar__item navBar__adaptiveItem'>
              <a href='#' className='navBar__link hoverLink navBar__link_adaptive activeLink' id='link1' onClick={this.linkClick}>Главная</a>
            </li>
            <li className='navBar__item navBar__adaptiveItem'>
              <a href='#' className='navBar__link hoverLink navBar__link_adaptive' id='link2' onClick={this.linkClick}>Обо мне</a>
            </li>
            <li className='navBar__item navBar__adaptiveItem'>
              <a href='#' className='navBar__link hoverLink navBar__link_adaptive' id='link3' onClick={this.linkClick}>Навыки</a>
            </li>
            <li className='navBar__item navBar__adaptiveItem'>
              <a href='#' className='navBar__link hoverLink navBar__link_adaptive' id='link4' onClick={this.linkClick}>Интересы</a>
            </li>
            <li className='navBar__item navBar__adaptiveItem'>
              <a href='#' className='navBar__link hoverLink navBar__link_adaptive' id='link5' onClick={this.linkClick}>Портфолио</a>
            </li>
            <li className='navBar__item navBar__adaptiveItem'>
              <a href='#' className='navBar__link navBar__lastLink hoverLink navBar__link_adaptive' id='link6' onClick={this.linkClick}>Контакты</a>
            </li>
          </ul>
        </nav>
      );
    }
  }

  render() {
    return(
      this.renderNavBar()
    );
  };
};

export default NavBar;