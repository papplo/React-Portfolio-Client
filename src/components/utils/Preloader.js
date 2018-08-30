import React, { Component } from 'react';

class Preloader extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      opacity: 0
    }
  }

  preLoad = (event) => {
    document.body.classList.add('ss-loaded');
    this.setState({ loading: false, opacity: 1 });
  }

  render() {
    return (
      <div id="preloader"
        onClick={(e)=>this.preLoad()}
        className={this.props.loading === true ? 'loading':'loaded'}
        >
          <div id="loader" className="dots-fade" >
              <div></div>
              <div></div>
              <div></div>
          </div>
      </div>
    );
  }
}

export default Preloader;
