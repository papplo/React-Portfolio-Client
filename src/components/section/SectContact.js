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
                  <h3 className="subhead">Keep In Touch</h3>
                  <h1 className="display-1">Feel free to contact us for any <br /> project idea or collaboration</h1>
              </div>
          </div>

          <div className="row contact-main" data-aos="fade-up">
              <div className="col-full">
                  <p className="contact-email">
                      <a href="mailto:#0">sayhello@sublime.com</a>
                  </p>
                  <p className="contact-address">
                  1600 Amphitheatre Parkway <br />
                  Mountain View, CA, 94043 US
                  </p>
                  <p className="contact-numbers">
                  +1 (917) 123 456 &nbsp; +1 (917) 333 987
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
