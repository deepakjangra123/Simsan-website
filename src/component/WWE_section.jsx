import React from "react";
import videoimg from "../assets/images/video-img.png"

const WWE_section = () => {
  return <div><div className="who-we-are-section">
  <div className="container">
    <div className="row">
      <div className="col-lg-6 col-md-12 col-12 mb-lg-0 mb-md-4 mb-5">
        <div id="parallax-video" className="single-video">
          <div className="em-video-image">
            <img src={videoimg} alt="" />
          </div>
          <div className="choose-video-icon">
            <div className="video-icon">
              <a
                className="video-vemo-icon venobox vbox-item"
                data-vbtype="youtube"
                data-autoplay="true"
                href=""
              >
                <i aria-hidden="true" className="fas fa-play-circle" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-md-12 col-12">
        <div className="right-box">
          <div className="heading-section">
            <div className="section-title t_left">
              <h5>// WHO WE ARE</h5>
              <div className="title">
                {/*<h3>25+ Years Of Experienced With</h3>*/}
                <h2>
                  IT<span> Solution Services</span>
                </h2>
              </div>
              <div className="bar-main">
                <div className="bar bar-big" />
              </div>
            </div>
          </div>
          <p className="fw-bold mt-5 pt-3">
            Simsan Solutions is a business solution IT industry headquartered in
            India that offers world-class IT solutions to clients.{" "}
          </p>
          <p>
            We always comprehend all of our clients' problems and solve them in
            real time using the best methods possible. Our expertise encompasses
            a wide range of services including Creative Design, Mac OSX
            Development, Mobile Application Development, Web Development, Data
            Visualisation, Machine Learning, AI, Custom Software Development,
            and Total Quality Management.
          </p>
          <div className="custom-counters single-counter">
            <div className="single_counter_inner">
              <div className="counter_icon">
                <i className=" " />
              </div>
              <div className="countr_text">
                <h1>5</h1>
                <h3>K</h3>
              </div>
              <div className="counter_title">
                <h4>Аpps Developed</h4>
              </div>
            </div>
            <div className="single_counter_inner">
              <div className="counter_icon">
                <i className=" " />
              </div>
              <div className="countr_text">
                <h1>100</h1>
                <h3>+</h3>
              </div>
              <div className="counter_title">
                <h4>Consultant</h4>
              </div>
            </div>
            <div className="single_counter_inner">
              <div className="counter_icon">
                <i className=" " />
              </div>
              <div className="countr_text">
                <h1>40</h1>
                <h3>+</h3>
              </div>
              <div className="counter_title">
                <h4>Employers</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>;
};

export default WWE_section;
