import React from "react";
import mainlogo from "../../../assets/images/main-logo.png";
import "../../../assets/css/style.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div> <header id="top_hd" className="main_header">
    <div className="top-header">
      <div className="container">
        <div className="row">
          {/* TOP LEFT */}
          <div className="col-12 col-md-8 col-lg-8">
            <div className="top-address">
              <p className="mb-0">
                <a href="mailto:contactsimsansolutions@gmail.com">
                  <i className="far fa-envelope" />
                  contactsimsansolutions@gmail.com
                </a>{" "}
                {/*<span><i class="fa fa-street-view"></i>1st Floor New World.</span>*/}
                <a href="tel:+880 320 432 242">
                  <i className="fa fa-phone" />
                  +91 99151 94075
                </a>
              </p>
            </div>
          </div>
          {/* TOP RIGHT */}
          <div className="col-12 col-md-4 col-lg-4">
            <div className="top-right-menu">
              <ul className="social-icons text-end">
                <li>
                  <a className="facebook social-icon" href="#" title="Facebook">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a className="twitter social-icon" href="#" title="Twitter">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a className="instagram social-icon" href="#" title="Instagram">
                    <i className="fab fa-instagram" />
                  </a>
                </li>
                <li>
                  <a className="dribbble social-icon" href="#" title="Dribbble">
                    <i className="fab fa-dribbble" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="bottom-header" id="dynamic">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <section className="navigation">
              <div className="nav-container navbar navbar-expand-lg">
                <div className="brand">
                  <a href="">
                    <img src={mainlogo} className="brand-img" />
                  </a>
                </div>
                <nav className="ms-auto">
                  <div className="nav-mobile">
                    <a id="navbar-toggle" href="#!">
                      <span />
                    </a>
                  </div>
                  <ul
                    className="nav-list navbar-nav ms-auto mt-2 mt-lg-0"
                    style={{ display: "none" }}
                  >
                    <li className="nav-item active menu-item-has-children">
                      <Link className="nav-link" to="/">
                        Home
                      </Link>
                    
                    </li>
                    <li className="nav-item menu-item-has-children">
                      <Link className="nav-link" to="Company">
                        Company
                      </Link>
                      
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="Services">
                        Services
                      </Link>
                    </li>
                    <li className="nav-item menu-item-has-children">
                      <Link className="nav-link" to="Products">
                      Products
                      </Link>
                      
                    </li>
                    <li className="nav-item menu-item-has-children">
                      <Link className="nav-link" to="Blogs">
                        Blogs
                      </Link>
                      
                    </li>
                    <li className="nav-item nav-last">
                      <Link className="nav-link" to="Contact">
                        Contact
                      </Link>
                    </li>
                    <a href="" className="get-btn">
                      GET A QUOTE
                    </a>
                  </ul>
                </nav>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  </header>
  
    </div>
  )
}

export default Header;
