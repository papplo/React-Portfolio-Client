import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import BlockContent from '@sanity/block-content-to-react'


const serializers = {
  types: {
    code: props => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    )
  }
}

export default (props) => {
  return (
    <section id="about" className="s-about target-section">

        <div className="row section-header bit-narrow aos-init aos-animate" data-aos="fade-up">
            <div className="col-full">
                <h3 className="subhead">
                  <a onClick={()=>props.goBack()} className="backlink">works </a> / {props.slug}</h3>
                <h1 className="display-1">
                  {props.subtitle}</h1>
            </div>
        </div>

        <div className="row bit-narrow aos-init aos-animate" data-aos="fade-up">
            <div className="col-full">
                <p className="lead"></p>
                <BlockContent
                  blocks={props.body}
                  serializers={serializers}
                />
            </div>
        </div>

    </section>
  )
}
