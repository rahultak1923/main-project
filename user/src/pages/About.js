import React, { useEffect, useState } from 'react';
import { AboutData } from '../api/about'; // adjust the path if needed

const About = () => {
  const [aboutInfo, setAboutInfo] = useState(null);

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const result = await AboutData();
        const about = result.about && result.about[0]; // Get the first about entry
        setAboutInfo(about);
      } catch (error) {
        console.error("Failed to fetch about info:", error);
      }
    };

    fetchAbout();
  }, []);

  return (
    <div>
      {/* About Section */}
      <section className="about_section layout_padding-t">
        <div className="container">
          <div className="row align-items-start">
            <div className="col-md-6">
              <div className="img-box">
                <img src="assets/images/about.png" alt="About Us" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="detail-box padding-top-2">
                <div className="heading_container">
                  <h2>{aboutInfo?.abouttitle || "Loading..."}</h2>
                </div>
                <p className="mt-3">{aboutInfo?.aboutdescription || "Loading description..."}</p>
                <a href="/allproduct" className="text-decorastion">
                  View Product
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="info_section layout_padding2">
        <div className="container">
          <div className="row info_form_social_row">
            <div className="col-md-8 col-lg-9">
              <div className="info_form">
                <form action="">
                  <input type="email" placeholder="Enter your email" />
                  <button>
                    <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  </button>
                </form>
              </div>
            </div>
            <div className="col-md-4 col-lg-3">
              <div className="social_box">
                <a href="#"><i className="fa fa-facebook"></i></a>
                <a href="#"><i className="fa fa-twitter"></i></a>
                <a href="#"><i className="fa fa-linkedin"></i></a>
              </div>
            </div>
          </div>
          <div className="row info_main_row">
            <div className="col-md-6 col-lg-3">
              <div className="info_links">
                <h4>Menu</h4>
                <div className="info_links_menu">
                  <a href="/">Home</a>
                  <a href="/about">About</a>
                  <a href="/shop">Shop</a>
                  <a href="/blog">Blog</a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="info_insta">
                <h4>Instagram</h4>
                <div className="insta_box">
                  <div className="img-box">
                    <img src="assets/assets/images/p1.png" alt="" />
                  </div>
                  <p>long established fact that a reader</p>
                </div>
                <div className="insta_box">
                  <div className="img-box">
                    <img src="assets/assets/images/p2.png" alt="" />
                  </div>
                  <p>long established fact that a reader</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="info_detail">
                <h4>{aboutInfo?.abouttitle || "About Us"}</h4>
                <p className="mb-0">
                  {aboutInfo?.aboutdescription || "Loading about description..."}
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <h4>Contact Us</h4>
              <div className="info_contact">
                <a href="#">
                  <i className="fa fa-map-marker"></i>
                  <span>Location</span>
                </a>
                <a href="tel:+011234567890">
                  <i className="fa fa-phone"></i>
                  <span>Call +01 1234567890</span>
                </a>
                <a href="mailto:demo@gmail.com">
                  <i className="fa fa-envelope"></i>
                  <span>demo@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

   
    </div>
  );
};

export default About;
