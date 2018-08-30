import React from 'react';


class SectWorks extends React.Component {

  listWorks = (arr) => {
    const list = arr.map((work) => {
      console.log(work)
    })
    return list;

  }

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
                  <div className="masonry__brick" data-aos="fade-up">
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

                          <a href="https://www.behance.net/" className="item-folio__project-link" title="Project link">
                              <i className="icon-link"></i>
                          </a>

                          <div className="item-folio__caption">
                              <p>Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi.</p>
                          </div>

                      </div>
                  </div>
                )}




                  <div className="masonry__brick" data-aos="fade-up">
                      <div className="item-folio">

                          <div className="item-folio__thumb">
                              <a href="images/portfolio/gallery/g-woodcraft.jpg" className="thumb-link" title="Woodcraft" data-size="1050x700">
                                  <img src="images/portfolio/woodcraft.jpg"
                                       srcset="images/portfolio/woodcraft.jpg 1x, images/portfolio/woodcraft@2x.jpg 2x" alt="" />
                              </a>
                          </div>

                          <div className="item-folio__text">
                              <h3 className="item-folio__title">
                                  Woodcraft
                              </h3>
                              <p className="item-folio__cat">
                                  Web Design
                              </p>
                          </div>

                          <a href="https://www.behance.net/" className="item-folio__project-link" title="Project link">
                              <i className="icon-link"></i>
                          </a>

                          <div className="item-folio__caption">
                              <p>Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi.</p>
                          </div>

                      </div>
                  </div>

                  <div className="masonry__brick" data-aos="fade-up">
                      <div className="item-folio">

                          <div className="item-folio__thumb">
                              <a href="images/portfolio/gallery/g-beetle.jpg" className="thumb-link" title="The Beetle Car" data-size="1050x700">
                                  <img src="images/portfolio/the-beetle.jpg"
                                       srcset="images/portfolio/the-beetle.jpg 1x, images/portfolio/the-beetle@2x.jpg 2x" alt="" />
                              </a>
                          </div>

                          <div className="item-folio__text">
                              <h3 className="item-folio__title">
                                  The Beetle
                              </h3>
                              <p className="item-folio__cat">
                                  Web Development
                              </p>
                          </div>

                          <a href="https://www.behance.net/" className="item-folio__project-link" title="Project link">
                              <i className="icon-link"></i>
                          </a>

                          <div className="item-folio__caption">
                              <p>Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi.</p>
                          </div>

                      </div>
                  </div>

                  <div className="masonry__brick" data-aos="fade-up">
                      <div className="item-folio">

                          <div className="item-folio__thumb">
                              <a href="images/portfolio/gallery/g-salad.jpg" className="thumb-link" title="Grow Green" data-size="1050x700">
                                  <img src="images/portfolio/salad.jpg"
                                       srcset="images/portfolio/salad.jpg 1x, images/portfolio/salad@2x.jpg 2x" alt="" />
                              </a>
                          </div>

                          <div className="item-folio__text">
                              <h3 className="item-folio__title">
                                  Salad
                              </h3>
                              <p className="item-folio__cat">
                                  Branding
                              </p>
                          </div>

                          <a href="https://www.behance.net/" className="item-folio__project-link" title="Project link">
                              <i className="icon-link"></i>
                          </a>

                          <div className="item-folio__caption">
                              <p>Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi.</p>
                          </div>

                      </div>
                  </div>

                  <div className="masonry__brick" data-aos="fade-up">
                      <div className="item-folio">

                          <div className="item-folio__thumb">
                              <a href="images/portfolio/gallery/g-lamp.jpg" className="thumb-link" title="Guitarist" data-size="1050x700">
                                  <img src="images/portfolio/lamp.jpg"
                                       srcset="images/portfolio/lamp.jpg 1x, images/portfolio/lamp@2x.jpg 2x" alt="" />
                              </a>
                          </div>

                          <div className="item-folio__text">
                              <h3 className="item-folio__title">
                                  Lamp
                              </h3>
                              <p className="item-folio__cat">
                                  Web Design
                              </p>
                          </div>

                          <a href="https://www.behance.net/" className="item-folio__project-link" title="Project link">
                              <i className="icon-link"></i>
                          </a>

                          <div className="item-folio__caption">
                              <p>Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi.</p>
                          </div>

                      </div>
                  </div>

                  <div className="masonry__brick" data-aos="fade-up">
                      <div className="item-folio">

                          <div className="item-folio__thumb">
                              <a href="images/portfolio/gallery/g-fuji.jpg" className="thumb-link" title="Palmeira" data-size="1050x700">
                                  <img src="images/portfolio/fuji.jpg"
                                       srcset="images/portfolio/fuji.jpg 1x, images/portfolio/fuji@2x.jpg 2x" alt="" />
                              </a>
                          </div>

                          <div className="item-folio__text">
                              <h3 className="item-folio__title">
                                  Fuji
                              </h3>
                              <p className="item-folio__cat">
                                  Web Design
                              </p>
                          </div>

                          <a href="https://www.behance.net/" className="item-folio__project-link" title="Project link">
                              <i className="icon-link"></i>
                          </a>

                          <div className="item-folio__caption">
                              <p>Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi.</p>
                          </div>

                      </div>
                  </div>

              </div>
          </div>

      </section>
    )
  }

}

export default SectWorks;
