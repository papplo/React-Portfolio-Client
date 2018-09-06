import React from 'react';

class SectContact extends React.Component {

  render() {
    return (
      <section id="contact" className="s-contact target-section">

              <div className="grid-overlay">
                  <div></div>
              </div>

          <div className="row section-header narrow" data-aos="fade-up">
              <div className="col-full">
                  <h3 className="subhead">You had me at hello world</h3>
                  <h3 className="display-3">Feel free to contact me for any assignment or project idea</h3>
              </div>
          </div>

          <div className="row contact-main" data-aos="fade-up">
              <div className="col-full">
                  <p className="contact-email">
                      <a href="mailto:pablo.anttila@gmail.com">pablo.anttila@gmail.com</a>
                  </p>
                  <p className="contact-address">
                  Palmbladsvägen 1, Lgh 1303, <br />
                11258 Stockholm, Sweden
                  </p>
                  <p className="contact-numbers">
                  +46 (72) 007 38 63
                  </p>

                  <ul className="contact-social">
                      <li>
                        <a href="https://www.linkedin.com/in/pablo-anttila-bb84a24/"><i className="fab fa-linkedin"></i></a>
                      </li>
                      <li>
                          <a href="https://github.com/papplo"><i className="fab fa-github"></i></a>
                      </li>
                      <li>
                          <a href="https://www.instagram.com/pablo.anttila/"><i className="fab fa-instagram"></i></a>
                      </li>
                      <li>
                          <a href="https://www.codewars.com/users/papplo"><i className="fab fa-js-square"></i></a>
                      </li>
                      <li>
                          <a href="https://codepen.io/anttila/"><i className="fab fa-codepen"></i></a>
                      </li>
                      <li>
                          <a href="https://medium.com/@pablo.anttila"><i className="fab fa-medium-m"></i></a>
                      </li>
                  </ul>
              </div>
          </div>

      </section>

    )
  }

}

export default SectContact;
