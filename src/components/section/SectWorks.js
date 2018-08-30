import React from 'react';


class SectWorks extends React.Component {

  render() {
    const {works} = this.props;
    console.log(works);
    return (
      <section id="works" className="s-works target-section">
          <div className="row section-header has-bottom-sep narrow target-section" data-aos="fade-up">
              <div className="col-full">
                  <h3 className="subhead">{this.props.worksTitle}</h3>
                  <h1 className="display-1">{this.props.payoff}</h1>
              </div>
          </div>

          <div className="row masonry-wrap">

              <div className="masonry">

                {works.map(work =>
                  <div key={work._id} className="masonry__brick" data-aos="fade-up">
                      <div className="item-folio">
                          <div className="item-folio__thumb">
                              <a href="" className="thumb-link" title={work.title} data-size="1050x700">
                                  <img src={work.poster} alt="" />
                              </a>
                          </div>

                          <div className="item-folio__text">
                              <h3 className="item-folio__title">
                                  {work.title}
                              </h3>
                              <p className="item-folio__cat">
                                  {work.cats.length > 0 ? work.cats.join(', '): 'No cats'}
                              </p>
                          </div>

                      </div>
                  </div>
                )}

              </div>
          </div>

      </section>
    )
  }

}

export default SectWorks;
