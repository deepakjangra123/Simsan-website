import React from "react";
import pf2 from "../assets/images/pf2.jpg";
import pf1 from "../assets/images/pf1.jpg";
import pf3 from "../assets/images/pf3.jpg";
import port5 from "../assets/images/port5.jpg";
import port4 from "../assets/images/port4.jpg";



const Portfolio = () => {
  return <div><div className="portfolio-section">
  <div className="container">
    <div className="row">
      <div className="col-12 heading-section">
        <div className="section-title t_center">
          <h5>// OUR PORTFOLIO</h5>
          <div className="title">
            <h3>Introduce Our Projects</h3>
            <h2>
              <span />
            </h2>
          </div>
          <div className="bar-main">
            <div className="bar bar-big" />
          </div>
        </div>
      </div>
      <div className="col-12">
        <div id="myBtnContainer">
          <button className="btn active" onclick="filterSelection('all')">
            All Works
          </button>
          <button className="btn" onclick="filterSelection('branding')">
            Branding
          </button>
          <button className="btn" onclick="filterSelection('design')">
            Design
          </button>
          <button className="btn" onclick="filterSelection('development')">
            Development
          </button>
          <button className="btn" onclick="filterSelection('portfolio')">
            Portfolio
          </button>
        </div>
        {/* Portfolio Gallery Grid */}
        <div className="row">
          <div className="column development col-lg-4 col-md-4 col-12">
            <div className="content">
              <div className="single_protfolio">
                <div className="prot_thumb">
                  <img
                    width={707}
                    height={913}
                    src={pf2}
                    className="attachment-post-thumbnail size-post-thumbnail wp-post-image"
                    alt=""
                    loading="lazy"
                    sizes="(max-width: 707px) 100vw, 707px"
                  />
                  <div className="prot_icon">
                    <div className="picon">
                      <a
                        className="portfolio-icon venobox vbox-item"
                        href="images/pf2.jpg"
                      >
                        <i className="far fa-image" />
                      </a>{" "}
                      <a href="">
                        <i className="fa fa-link" />
                      </a>
                    </div>
                  </div>
                  <div className="prot_content em_port_content">
                    <div className="prot_content_inner">
                      <div className="porttitle_inner">
                        <h3>
                          <a href="">IT Solution</a>
                        </h3>
                        <p>
                          <span className="category-item-p"> Development </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column branding col-lg-4 col-md-4 col-12">
            <div className="content">
              <div className="single_protfolio">
                <div className="prot_thumb">
                  <img
                    width={707}
                    height={913}
                    src={port5}
                    className="attachment-post-thumbnail size-post-thumbnail wp-post-image"
                    alt=""
                    loading="lazy"
                    sizes="(max-width: 707px) 100vw, 707px"
                  />
                  <div className="prot_icon">
                    <div className="picon">
                      <a
                        className="portfolio-icon venobox vbox-item"
                        href="images/port5.jpg"
                      >
                        <i className="far fa-image" />
                      </a>
                      <a href="">
                        <i className="fa fa-link" />
                      </a>
                    </div>
                  </div>
                  <div className="prot_content em_port_content">
                    <div className="prot_content_inner">
                      <div className="porttitle_inner">
                        <h3>
                          <a href="">Portfolio Branding</a>
                        </h3>
                        <p>
                          <span className="category-item-p"> Brainding </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column portfolio col-lg-4 col-md-4 col-12">
            <div className="content">
              <div className="single_protfolio">
                <div className="prot_thumb">
                  <img
                    width={707}
                    height={913}
                    src={port4}
                    className="attachment-post-thumbnail size-post-thumbnail wp-post-image"
                    alt=""
                    loading="lazy"
                    sizes="(max-width: 707px) 100vw, 707px"
                  />
                  <div className="prot_icon">
                    <div className="picon">
                      <a
                        className="portfolio-icon venobox vbox-item"
                        href="images/port4.jpg"
                      >
                        <i className="far fa-image" />
                      </a>
                      <a href="">
                        <i className="fa fa-link" />
                      </a>
                    </div>
                  </div>
                  <div className="prot_content em_port_content">
                    <div className="prot_content_inner">
                      <div className="porttitle_inner">
                        <h3>
                          <a href="">Corporate Branding</a>
                        </h3>
                        <p>
                          <span className="category-item-p"> Portfolio </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column development col-lg-4 col-md-4 col-12">
            <div className="content">
              <div className="single_protfolio">
                <div className="prot_thumb">
                  <img
                    width={707}
                    height={913}
                    src={pf3}
                    className="attachment-post-thumbnail size-post-thumbnail wp-post-image"
                    alt=""
                    loading="lazy"
                    sizes="(max-width: 707px) 100vw, 707px"
                  />
                  <div className="prot_icon">
                    <div className="picon">
                      <a
                        className="portfolio-icon venobox vbox-item"
                        href="images/pf3.jpg"
                      >
                        <i className="far fa-image" />
                      </a>
                      <a href="">
                        <i className="fa fa-link" />
                      </a>
                    </div>
                  </div>
                  <div className="prot_content em_port_content">
                    <div className="prot_content_inner">
                      <div className="porttitle_inner">
                        <h3>
                          <a href="">Network Management</a>
                        </h3>
                        <p>
                          <span className="category-item-p"> Development </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column design col-lg-4 col-md-4 col-12">
            <div className="content">
              <div className="single_protfolio">
                <div className="prot_thumb">
                  <img
                    width={707}
                    height={913}
                    src={pf2}
                    className="attachment-post-thumbnail size-post-thumbnail wp-post-image"
                    alt=""
                    loading="lazy"
                    sizes="(max-width: 707px) 100vw, 707px"
                  />
                  <div className="prot_icon">
                    <div className="picon">
                      <a
                        className="portfolio-icon venobox vbox-item"
                        href="images/pf2.jpg"
                      >
                        <i className="far fa-image" />
                      </a>
                      <a href="">
                        <i className="fa fa-link" />
                      </a>
                    </div>
                  </div>
                  <div className="prot_content em_port_content">
                    <div className="prot_content_inner">
                      <div className="porttitle_inner">
                        <h3>
                          <a href="">Project Analicys</a>
                        </h3>
                        <p>
                          <span className="category-item-p"> Desgin </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column branding col-lg-4 col-md-4 col-12">
            <div className="content">
              <div className="single_protfolio">
                <div className="prot_thumb">
                  <img
                    width={707}
                    height={913}
                    src={pf1}
                    className="attachment-post-thumbnail size-post-thumbnail wp-post-image"
                    alt=""
                    loading="lazy"
                    sizes="(max-width: 707px) 100vw, 707px"
                  />
                  <div className="prot_icon">
                    <div className="picon">
                      <a
                        className="portfolio-icon venobox vbox-item"
                        href="images/pf1.jpg"
                      >
                        <i className="far fa-image" />
                      </a>
                      <a href="">
                        <i className="fa fa-link" />
                      </a>
                    </div>
                  </div>
                  <div className="prot_content em_port_content">
                    <div className="prot_content_inner">
                      <div className="porttitle_inner">
                        <h3>
                          <a href="">UX/UI Design</a>
                        </h3>
                        <p>
                          <span className="category-item-p"> Brainding </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END GRID */}
        </div>
      </div>
    </div>
  </div>
</div>
</div>;
};

export default Portfolio;
