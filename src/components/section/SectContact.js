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
                      <a href="mailto:#0">pablo.anttila@gmail.com</a>
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
                          <a href="#0"><i className="fab fa-facebook"></i></a>
                      </li>
                      <li>
                          <a href="#0"><i className="fab fa-twitter"></i></a>
                      </li>
                      <li>
                          <a href="#0"><i className="fab fa-instagram"></i></a>
                      </li>
                      <li>
                          <a href="#0"><i className="fab fa-behance"></i></a>
                      </li>
                      <li>
                          <a href="#0"><i className="fab fa-dribbble"></i></a>
                      </li>
                  </ul>
              </div>
          </div>

      </section>

    )
  }

}

export default SectContact;
