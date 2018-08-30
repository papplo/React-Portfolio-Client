import React, { Component } from 'react';

import { HomeHero, FilmStrip } from './components/'

class App extends Component {
  render() {
    return (
      <div>
        <HomeHero
          heroTitle="Graphik Semibold"
          payoff="I'm fond of the user experience in the digital consumer field"
          primaryCta={'Explore my world'}
          secondaryCta={`Let's talk `}
          >
          <FilmStrip />
        </HomeHero>
      </div>
    );
  }
}

export default App;
