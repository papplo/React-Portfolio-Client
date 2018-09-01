import React, { Component } from 'react';

import sanityClient from './lib/sanity'
import {
  HomeHero,
  FilmStrip,
  SectContact,
  SectWorks } from './components/'


const query = `*[_type == "works"] {
  _id,
  title,
  publishedAt,
  mainImage,
  "cats": categories[]->title,
  "poster": mainImage.asset->url,
  }[0...50]
`

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      loading : true,
      content : {
        works: [],
        loading: false,
        error: null
      },
    }
  }
  componentDidMount () {
    console.log('did mount');
    this.apiFetch()
  }
  apiFetch () {
    sanityClient.fetch(query)
    .then(works => {
      this.setState({'content': works})
    })
  }

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
        <SectWorks
          works={this.state.content}
          worksTitle={"Our Works"}
          payoff={"We create brands, products, and experiences that people love."}
          />
        <SectContact />
      </div>
    );
  }

}

export default App;
