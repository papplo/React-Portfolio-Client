import React, { Component } from 'react';
import './filmstrip.css';

class FilmStrip extends Component {
  render() {
    return (
      <div className="slider">
        <div className="slider__row slider__row--1"></div>
        <div className="slider__row slider__row--2"></div>
        <div className="slider__row slider__row--3"></div>
        <div className="slider__row slider__row--4"></div>
      </div>
    )
  }
}

export default FilmStrip;
