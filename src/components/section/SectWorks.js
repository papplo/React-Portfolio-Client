import React from 'react';
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';
import imageUrlBuilder from '@sanity/image-url'

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
                            <Link to={{
                                pathname: `/works/${work.slug.current}`,
                                state: work}}
                                className="thumb-link">
                              <img src={work.poster+'?h=350&w=600&fit=min'} alt={work.poster} />
                            </Link>
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

SectWorks.propTypes = {
  works: PropTypes.array.isRequired,
  limit: PropTypes.number,
  worksTitle: PropTypes.string,
  payoff: PropTypes.string
};

SectWorks.defaultProps = {
    limit: 6,
    works: [
      {
      worksTitle: 'Test Title',
      title: 'Test Title',
      payoff: 'This is the subtitle',
      _id: 12345,
      poster: 'image.jpg',
      alt: 'placeholder from defaultprops',
      cats: ['ux', 'dux', 'flux'],

    },
  ]
  }

export default SectWorks;
