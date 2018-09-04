import React, { Component } from 'react';
import './filmstrip.css';
import bgImage from '../../static/image/gitflow-bg.png'

class FilmStrip extends Component {
  render() {
    return (
      <div className="slider">
        <div className="slider__row slider__row--1"
          style={{backgroundImage: "url(" + bgImage + ")"}}
          ></div>
        <div className="slider__row slider__row--2"
          style={{backgroundImage: "url(" + bgImage + ")"}}
          ></div>
        <div className="slider__row slider__row--3"
          style={{backgroundImage: "url(" + bgImage + ")"}}
          ></div>
        <div className="slider__row slider__row--4"
          style={{backgroundImage: "url(" + bgImage + ")"}}
          ></div>
        <div className="slider__row slider__row--2"
          style={{backgroundImage: "url(" + bgImage + ")"}}
          ></div>
        <div className="slider__row slider__row--3"
          style={{backgroundImage: "url(" + bgImage + ")"}}
          ></div>
      </div>
    )
  }
}

export default FilmStrip;
