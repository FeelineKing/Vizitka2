import React, {Component} from 'react';
import './Fireflies.css';

class Fireflies extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: window.innerWidth,
      height: window.innerHeight,
    }

    this.firefliesArr = [];
    this.firefliesArr.length = Math.trunc(window.innerWidth / 60);
    this.firefliesArr.fill('el');
    this.wrapper = React.createRef();
  }

  componentDidMount() {
    this.setState({wasStarted: true})
    this.createFireflies();
    setTimeout(this.firefliesMove, 20);
    setInterval(this.firefliesMove, 20000);
  }

  componentDidUpdate() {
    
  }

  createFireflies = () => {
    this.firefliesArr = this.firefliesArr.map((el, index) => {
      let left;
      let top;
      let size;
      let delay;

      const randomizer = () => {
        left = Math.trunc((Math.random() * (this.state.width + 1)));
        top = Math.trunc((Math.random() * (this.state.height + 1)));
        delay = Math.trunc((Math.random() * 10 + 1));
        size = Math.trunc((Math.random() * 10 + 1));
      };

      randomizer();
      
      return (
        <span 
          className='fireflies__firefly'
          style={{
            'position': 'absolute',
            'left': `${left}px`,
            'top': `${top}px`,
            'width': `${size}px`,
            'height': `${size}px`,
            'animationDelay': `${delay}s`
          }}
          id={'firefly' + index}>
            <span className='fireflies__fireflyInsert'></span>
        </span>
      )
    });
  }

  firefliesMove = () => {
    this.firefliesArr.forEach((item, index) => {
      let left;
      let top;

      const randomizer = () => {
        left = Math.trunc((Math.random() * (this.state.width + 1)));
        top = Math.trunc((Math.random() * (this.state.height + 1)));
      };
      randomizer();

      let element = document.querySelector(`#firefly${index}`);
      element.style.left = `${left}px`;
      element.style.top = `${top}px`;
    })
  }

  render() {
    return(
      <div className='fireflies firefliesWrapper' ref={this.wrapper}>
        {this.firefliesArr}
      </div>
    )
  }
}

export default Fireflies;