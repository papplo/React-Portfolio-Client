import React, { Component } from 'react';
import {Redirect } from 'react-router-dom'
import {
  SectContact,
  SectProcess } from '../components/'

import SectWork from './works/SectWork'


class Works extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  backButtonHandler() {
    this.props.history.goBack()
  }

  backToFetch() {
    if (this.props.location.state === undefined) {
      console.log('no state, going back to index the hard way');
      window.location.href = "/";
    }
  }

  render() {
    {this.props.location.state || this.backToFetch()};
    const {subtitle,cats,poster,body} = this.props.location.state;
    return (
            <div>

        <SectWork
          subtitle={subtitle}
          body={body}
          poster={poster}
          cats={cats}
          slug={this.props.match.params.slug}
          goBack={()=>this.backButtonHandler()}
          />
        <SectProcess />
        <SectContact />
      </div>
    )
  }
}

export default Works
