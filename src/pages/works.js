import React, { Component } from 'react';

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
  render() {
    const {subtitle, cats, poster, body} = this.props.location.state;
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
