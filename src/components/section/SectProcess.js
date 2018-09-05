import React from 'react';
import flowImage from '../../static/image/gitflow-bg.png'

class SectProcess extends React.Component {

  render() {
    return (
      <section id="process" className="s-process">

        <div className="row bit-narrow">

            <div className="about-heading col-twelve tab-full text-center">
                <h2 className="display-2">I like to build things incrementally</h2>
                <p className="lead">These cases have all evolved from years of practice, adding to a process that gains from experience and draws inspiration from all former assignments.
                They are all created in teams with designers, developers and product owners to become real, live products.</p>
              <img alt="Git flow, a developer process" src={flowImage} className="about-illustration"/>
          </div>

            <div className="about-process process block-1-3 block-tab-full">
                <div className="col-block item-process">
                    <div className="item-process__text">
                        <h4 className="item-title">Define</h4>
                        <p>Projects demand boundaries and scope. Thats why I start by asking what goals are achievable and how to measure their success. This phase also serves to test the hyphotesis.</p>
                    </div>
                </div>
                <div className="col-block item-process">
                    <div className="item-process__text">
                        <h4 className="item-title">Design</h4>
                        <p>Products dont come off shelves, they need consideration and the lean design process is just that, a data-driven roadmap to designing products that customers want and need.</p>
                    </div>
                </div>
                <div className="col-block item-process">
                    <div className="item-process__text">
                        <h4 className="item-title">Build</h4>
                        <p>Developing and testing applications in a version controlled codebase is best practice. Thats what i do and hopefully some of these cases can prove that.</p>
                    </div>
                </div>
            </div>

            <div className="about-stack col-twelve tab-full">
              <h5 className="text-center">Tools for daily chores</h5>
                <ul className="stats-tabs">
                    <li><a>Languages<em>JavaScript, Html, Css, Php, Sql</em></a></li>
                    <li><a>Frameworks<em>React, NodeJs, Vue, AngularJs</em></a></li>
                    <li><a>Stack<em>Frontend, Backend, MVC</em></a></li>
                    <li><a>Software<em>Atom, iTerm, Sketch, Framer, Expo</em></a></li>
                    <li><a>VCS<em>In GIT we trust!</em></a></li>
                </ul>
            </div>

        </div>

      </section>

    )
  }

}

export default SectProcess;
