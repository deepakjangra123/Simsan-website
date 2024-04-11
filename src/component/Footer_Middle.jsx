import React from "react";
import blog21106x106 from '../assets/images/blog2-1-106x106.jpg';
import blog3106x106 from '../assets/images/blog3-106x106.jpg';
import trlogo from '../assets/images/tr-logo.png';

const Footer_Middle = () => {
  return <div><div className="footer-middle">
  <div className="container">
    <div className="row">
      <div className="col-lg-3 col-md-6 col-12">
        <div id="about_us-widget-2" className="widget about_us">
          <h2 className="widget-title" />
          {/* About Widget */}
          <div className="about-footer">
            <div className="footer-widget address">
              <div className="footer-logo">
                <img src={trlogo} alt="" />
                {/*<p>Lorem ipsum dolor sit amet, consetur acing elit, sed do eiusmod ligal</p>*/}
              </div>
              <div className="footer-address">
                <div className="footer_s_inner">
                  <div className="footer-sociala-icon">
                    <i className="fa fa-home" />
                  </div>
                  <div className="footer-sociala-info">
                    <p />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="nav_menu-2" className="widget widget_nav_menu">
          <div className="menu-social-menu-container">
            <ul id="menu-social-menu" className="menu">
              <li
                id="menu-item-1213"
                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1213"
              >
                <a href="#">
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
              <li
                id="menu-item-1214"
                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1214"
              >
                <a href="#">
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li
                id="menu-item-1215"
                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1215"
              >
                <a href="#">
                  <i className="fab fa-pinterest" />
                </a>
              </li>
              <li
                id="menu-item-1216"
                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1216"
              >
                <a href="#">
                  <i className="fab fa-linkedin" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-12">
        <div id="nav_menu-3" className="widget widget_nav_menu">
          <h2 className="widget-title">Help Links</h2>
          <div className="menu-help-link-container">
            <ul id="menu-help-link" className="menu">
              <li
                id="menu-item-1220"
                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1220"
              >
                <a href="#">Customers Services</a>
              </li>
              <li
                id="menu-item-1221"
                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1221"
              >
                <a href="#">IT Department</a>
              </li>
              <li
                id="menu-item-1222"
                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1222"
              >
                <a href="#">About Our Company</a>
              </li>
              <li
                id="menu-item-1223"
                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1223"
              >
                <a href="#">Business Growth</a>
              </li>
              <li
                id="menu-item-1224"
                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1224"
              >
                <a href="#">Make An Appointment</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-12">
        <div id="about_us-widget-3" className="widget about_us">
          <h2 className="widget-title">Contact Information</h2>
          {/* About Widget */}
          <div className="about-footer">
            <div className="footer-widget address">
              <div className="footer-logo" />
              <div className="footer-address">
                <div className="footer_s_inner">
                  <div className="footer-sociala-icon">
                    <i className="fa fa-home" />
                  </div>
                  <div className="footer-sociala-info">
                    <p>
                      <b>Adress:</b> Plot no: C-127, Industrial Area Phase - 8{" "}
                      <br />
                      S.A.S Nagar, Mohali, Punjab
                    </p>
                  </div>
                </div>
                <div className="footer_s_inner">
                  <div className="footer-sociala-icon">
                    <i className="fa fa-phone" />
                  </div>
                  <div className="footer-sociala-info">
                    <p>
                      <b>Phone:</b> +91 99151 94075 <br />
                    </p>
                  </div>
                </div>
                <div className="footer_s_inner">
                  <div className="footer-sociala-icon">
                    <i className="fa fa-globe" />
                  </div>
                  <div className="footer-sociala-info">
                    <p>
                      <b>Email:</b> contactsimsansolutions@gmail.com{" "}
                      <b>Website:</b>
                      https://www.simsansolutions.com/
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-12last">
        <div id="em_recent_post_widget-2" className="widget widget_recent_data">
          <div className="single-widget-item">
            <h2 className="widget-title">Recent Posts</h2>
            <div className="recent-post-item">
              <div className="recent-post-image">
                <a href="">
                  <img
                    width={80}
                    height={80}
                    src={blog3106x106}
                    className="attachment-simsan-recent-image size-simsan-recent-image wp-post-image"
                    alt=""
                    loading="lazy"
                    sizes="(max-width: 80px) 100vw, 80px"
                  />
                </a>
              </div>
              <div className="recent-post-text">
                <h4>
                  <a href="">How to Make Website With Elementor?</a>
                </h4>
                <span className="rcomment">October 22, 2020</span>
              </div>
            </div>
            <div className="recent-post-item">
              <div className="recent-post-image">
                <a href="">
                  <img
                    width={80}
                    height={80}
                    src={blog21106x106}
                    className="attachment-simsan-recent-image size-simsan-recent-image wp-post-image"
                    alt=""
                    loading="lazy"
                    sizes="(max-width: 80px) 100vw, 80px"
                  />
                </a>
              </div>
              <div className="recent-post-text">
                <h4>
                  <a href="">The Next Big Challenge for Content Marketer</a>
                </h4>
                <span className="rcomment">September 24, 2020</span>
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

export default Footer_Middle;
