import React, { Component } from 'react';
import { connect } from 'react-redux'
import { FETCH_CMS } from '../store/actions'

import {
  HomeHero,
  FilmStrip,
  SectContact,
  SectWorks } from '../components/'

class Start extends Component {

  componentDidMount() {
    if (this.props.works === undefined) {
      this.FETCH_init("works","author", "category");
    }
  }
  FETCH_init(recordType) {
    for (var i = 0; i < arguments.length; i++) {
      this.props.fetchContentFromCms(arguments[i]);
    }
  }

  render() {
    return (
      <div>
          { this.props.works && <SectWorks
              works={this.props.works}
              limit={2}
              worksTitle={"Our Works"}
              payoff={"We create brands, products, and experiences that people love."}
              /> }
      </div>
    )
  }
}

const mapStateToProps = state => ({
    author:       state.FETCH.author,
    categories:   state.FETCH.category,
    works:        state.FETCH.works,
    loading:   state.FETCH.loading,
    error:     state.FETCH.error
})
const mapDispatchToProps = (dispatch) => {
  return({
    fetchContentFromCms: (recordType) => dispatch(FETCH_CMS(dispatch, recordType))
  })
}
export default connect(mapStateToProps, mapDispatchToProps)(Start)
