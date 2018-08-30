import React, { Component } from 'react';
import PropTypes from 'prop-types';
class HomeHero extends Component {


  render() {

    return(
      <section id="home"
        className="s-home page-hero target-section add-bottom"
        data-parallax="scroll"
        data-image-src="images/hero-bg.jpg"
        data-natural-width="3000"
        data-natural-height="2000"
        data-position-y="center"
        >
        {this.props.children}
          <div className="grid-overlay">
              <div></div>
          </div>
          <div className="home-content">
              <div className="row home-content__main">
                <h1>{this.props.heroTitle}</h1>
                <h3>{this.props.payoff}</h3>

                  <div className="home-content__button">
                      <a href="#styles" className="smoothscroll btn btn--primary btn--large">
                          {this.props.primaryCta}
                      </a>
                      <a href="#contact" className="smoothscroll btn btn--large">
                        {this.props.secondaryCta}
                      </a>
                  </div>
              </div>
              <div className="home-content__scroll">
                  <a href="#styles" className="scroll-link smoothscroll">
                      Scroll
                  </a>
              </div>
          </div>

          <ul className="home-social">
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
          </ul>
      </section>
    )
  }
}

HomeHero.propTypes = {

  heroTitle: PropTypes.string,
  primaryCta: PropTypes.string,
  secondaryCta: PropTypes.string,

  children: PropTypes.element,


}

export default HomeHero;
