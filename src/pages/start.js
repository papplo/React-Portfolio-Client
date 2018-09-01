import React, { Component } from 'react';
import { connect } from 'react-redux'

import { FETCH_CMS } from '../store/actions'

class Start extends Component {
  componentDidMount() {
    // this.props.fetchContentFromCms();
  }
  load(recordType) {
    console.log('start');
    this.props.fetchContentFromCms(recordType);
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <button onClick={()=>this.load("works")}>Get Works</button>
        <button onClick={()=>this.load("author")}>Get Author</button>
        <button onClick={()=>this.load("category")}>Get Categories</button>
        <h1>Content:</h1>
        {this.props.loading ? <p>loading...</p> : null}
          {this.props.works.length > 0 ? (
            this.props.works.map(work => <p key={work._id}>{work.title}</p>)
          ) : null}

      </div>
    )
  }
}

const mapStateToProps = state => ({
    works:   state.FETCH.payload,
    loading: state.FETCH.loading,
    error:   state.FETCH.error
})

const mapDispatchToProps = (dispatch) => {
  return({
    fetchContentFromCms: (recordType) => dispatch(FETCH_CMS(dispatch, recordType))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Start)
