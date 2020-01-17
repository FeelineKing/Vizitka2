import React, {Component} from 'react';

import myPhoto from '../../img/myPhoto.JPG';

class AboutMe extends Component {
  constructor() {
    super();

    this.state = {
      
    };
  };

  render() {
    return(
      <section className='aboutMe main__aboutMe'>
        <article className='aboutMe__content'>
          <img src={myPhoto} alt="I'm scary and I know it" className='aboutMe__photo'/>
        </article>
      </section>
    );
  };
};

export default AboutMe;