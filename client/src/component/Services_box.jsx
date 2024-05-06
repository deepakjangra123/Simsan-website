import React from "react";

const Services_box = () => {
  return <div><div className="services-box">
  <div className="container">
    <div className="row">
      <div className="col-12 heading-section">
        <div className="section-title t_center">
          <h5>// OUR SERVICES</h5>
          <div className="title">
            <h3>What We Provide</h3>
            <h2>
              <span />
            </h2>
          </div>
          <div className="bar-main">
            <div className="bar bar-big" />
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-4 col-12">
        <div className="service-box service-style-two">
          <div className="service-box-icon">
            <i className="fas fa-pen-nib" />
          </div>
          <div className="service-box-content">
            <div className="service-box-title">
              <h2>UX/UI Design</h2>
            </div>
            <div className="service-box-desc">
              <p>
                UX design focuses on providing a smooth and meaningful user
                experience by understanding user needs, conducting research, and
                building intuitive interfaces.
              </p>
            </div>
            <div className="service-btn">
              <a href="">
                {" "}
                <i className="fa fa-angle-right solid" />{" "}
              </a>
            </div>
            {/* .service-btn */}
          </div>
          {/* .service-box-content */}
        </div>
      </div>
      <div className="col-lg-4 col-md-4 col-12">
        <div className="service-box service-style-two">
          <div className="service-box-icon">
            <i className="fas fa-code" />
          </div>
          <div className="service-box-content">
            <div className="service-box-title">
              <h2>Web Developments</h2>
            </div>
            <div className="service-box-desc">
              <p>
                Websites are classified into a variety of types to better serve
                the diverse needs of businesses and individuals, including
                Business Websites, E-commerce Websites, Portfolio Websites,
                Educational Websites, News and Media Websites, Real Estate
                Websites, and many others, each with its own set of features and
                functionality.
              </p>
            </div>
            <div className="service-btn">
              <a href="">
                {" "}
                <i className="fa fa-angle-right solid" />{" "}
              </a>
            </div>
            {/* .service-btn */}
          </div>
          {/* .service-box-content */}
        </div>
      </div>
      <div className="col-lg-4 col-md-4 col-12">
        <div className="service-box service-style-two">
          <div className="service-box-icon">
            <i className="fas fa-pen-nib" />
          </div>
          <div className="service-box-content">
            <div className="service-box-title">
              <h2>QA &amp; Testing</h2>
            </div>
            <div className="service-box-desc">
              <p>
                We use an excellent assortment of QA testing technology to help
                you release the highest-quality product possible.
              </p>
            </div>
            <div className="service-btn">
              <a href="">
                {" "}
                <i className="fa fa-angle-right solid" />{" "}
              </a>
            </div>
            {/* .service-btn */}
          </div>
          {/* .service-box-content */}
        </div>
      </div>
      <div className="col-12">
        <a
          className="btn btn-gradient btn-md btn-animated-none btn-see-more"
          href="#"
          target="_blank"
          tabIndex={0}
        >
          See More Services
        </a>
      </div>
    </div>
  </div>
</div>
</div>;
};

export default Services_box;
