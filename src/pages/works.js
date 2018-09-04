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
    console.log('go back');
    this.props.history.goBack()
  }
  render() {
    const {title,subtitle,poster,mainImage,body} = this.props.location.state;
    console.log(this.props.location.state);
    return (
            <div>

        <SectWork
          subtitle={subtitle}
          body={body}
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
