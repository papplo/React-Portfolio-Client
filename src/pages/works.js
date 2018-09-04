import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BlockContent from '@sanity/block-content-to-react'

import {
  SectContact,
  SectProcess } from '../components/'

const serializers = {
  types: {
    code: props => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    )
  }
}

class Works extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    const {title,subtitle,poster,mainImage,body} = this.props.location.state;
    console.log(this.props.location.state);
    return (
            <div>
      <section id="about" className="s-about target-section">

          <div className="row section-header bit-narrow aos-init aos-animate" data-aos="fade-up">
              <div className="col-full">
                  <h3 className="subhead">
                  <Link to='/' className="backlink">works </Link> / {this.props.match.params.slug}</h3>
                  <h1 className="display-1">
                    {/*poster && <img className="pull-left" src={poster+'?h=160&w=160&fit=min'} />*/}
                    {subtitle}</h1>
              </div>
          </div>

          <div className="row bit-narrow aos-init aos-animate" data-aos="fade-up">
              <div className="col-full">
                  <p className="lead"></p>
                  <BlockContent
                    blocks={body}
                    serializers={serializers}
                  />
              </div>
          </div>

      </section>

        <SectProcess />
        <SectContact />
      </div>
    )
  }
}

export default Works
