import React, {Component} from 'react';

import AboutMe from './AboutMe';

class Main extends Component {
  constructor() {
    super();

    this.state = {
      
    };
  };

  render() {
    return(
      <main className='main'>
        <AboutMe></AboutMe>
      </main>
    );
  };
};

export default Main;