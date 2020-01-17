import React, {Component} from 'react';
import './styles/styles.css';

import Header from './components/Header/Header';
import Main from './components/Main/Main';

class App extends Component {
  constructor() {
    super();

    this.state = {

    }
  }

  render() {
    return(
      <>
      <Header/>
      </>
    )
  }
}

export default App;
