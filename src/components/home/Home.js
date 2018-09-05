import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ScrollTo } from '../'

class HomeHero extends Component {


  render() {

    return(
      <section id="home" className="s-home page-hero target-section add-bottom">
        {this.props.children}
          <div className="grid-overlay">
              <div></div>
          </div>
          <div className="home-content">
              <div className="row home-content__main">
                <h1>{this.props.heroTitle}</h1>
                <h3>{this.props.payoff}</h3>
                <a ref={this.getPositionY}>here</a>
                  <div className="home-content__button">
                      <a onClick={()=>ScrollTo('#works',400)} href={'#'+this.props.primaryCta.anchor} className="smoothscroll btn btn--primary btn--large">
                          {this.props.primaryCta.label}
                      </a>
                      <a onClick={()=>ScrollTo('#'+this.props.secondaryCta.anchor,400)} href={'#'+this.props.secondaryCta.anchor} className="smoothscroll btn btn--large">
                        {this.props.secondaryCta.label}
                      </a>
                  </div>

              </div>
              {/*<div className="home-content__scroll">
                  <a href="#styles" className="scroll-link smoothscroll">
                      Scroll
                  </a>
              </div>*/}
          </div>

          {/*<ul className="home-social">
              <li>
                  <a href="#0"><i className="fab fa-facebook-f" aria-hidden="true"></i><span>Facebook</span></a>
              </li>
              <li>
                  <a href="#0"><i className="fab fa-twitter" aria-hidden="true"></i><span>Twiiter</span></a>
              </li>
              <li>
                  <a href="#0"><i className="fab fa-instagram" aria-hidden="true"></i><span>Instagram</span></a>
              </li>
              <li>
                  <a href="#0"><i className="fab fa-behance" aria-hidden="true"></i><span>Behance</span></a>
              </li>
              <li>
                  <a href="#0"><i className="fab fa-dribbble" aria-hidden="true"></i><span>Dribbble</span></a>
              </li>
          </ul>*/}
      </section>
    )
  }
}

HomeHero.propTypes = {

  heroTitle: PropTypes.string,
  primaryCta: PropTypes.object,
  secondaryCta: PropTypes.object,

  children: PropTypes.element,


}

export default HomeHero;
