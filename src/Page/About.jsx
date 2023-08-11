import React from 'react'

function About() {
  return (
    <div>
    <div className="welcome" id="about">
    <div className="container">
      <h3 className="title">About Us</h3>
      <div className="col-md-6 welcome-left">
        <h3>Welcome</h3>
        <h4>
          We are committed to offering travel services of the highest
          quality, combining our energy and enthusiasm, with our years of
          experience. Our greatest satisfaction comes in serving large
          numbers of satisfied clients who have experienced the joys and
          inspiration of travel.
        </h4>
        <p>
          Our travel packages are designed to provide you with an
          unforgettable experience. Discover new destinations, make
          memories, and explore the world with our expertly crafted tours.
        </p>
        <div className="readmore-w3-agileits about-read">
          <a href="/" data-toggle="modal" data-target="#myModal1">
            Read More
          </a>
        </div>
      </div>
      <div className="col-md-6 welcome-right">
        <div className="welcome-right-top">
          <img src="assets2/images/ab.jpg" alt="Beauty" />
        </div>
        <div className="welcome-right-bottom">
          <img src="assets2/images/ab1.jpg" alt="Beauty" />
        </div>
        <div className="clearfix"></div>
      </div>
      <div className="clearfix"></div>
    </div>
  </div>

  {/* Middle Section */}
  <div className="middle-w3l">
    <div className="container">
      <div className="middle-left-w3l">
        <h4>Find Travel Perfection With the Professionalism of Experts</h4>
        <p>Go, fly, roam, travel, voyage, explore, journey, discover, adventure.</p>
        <div className="readmore-w3-agileits about-read">
          <a href="contact.html">Contact Us</a>
        </div>
      </div>
    </div>
  </div>

  

  {/* Services Section */}
 

  {/* Testimonials Section */}
  <div className="testimonials">
    <div className="container">
      <h3 className="title">What Our Clients Say</h3>
      <div className="w3_testimonials_grids">
        <section className="slider">
          <div className="flexslider">
            <ul className="slides">
              <li>
                <div className="w3_testimonials_grid">
                  <img
                    src="assets2/images/te1.jpg"
                    alt="Testimonial 1"
                    className="img-responsive"
                  />
                  <h4>
                    <i>
                      "Nam libero tempore, cum soluta nobis est eligendi optio
                      cumque nihil impedit quo minus id quod possimus, omnis
                      voluptas."
                    </i>
                  </h4>
                  <h5>John Frank</h5>
                  <p>Tempore Quo</p>
                </div>
              </li>
              <li>
                <div className="w3_testimonials_grid">
                  <img
                    src="assets2/images/te2.jpg"
                    alt="Testimonial 2"
                    className="img-responsive"
                  />
                  <h4>
                    <i>
                      "Nam libero tempore, cum soluta nobis est eligendi optio
                      cumque nihil impedit quo minus id quod possimus, omnis
                      voluptas."
                    </i>
                  </h4>
                  <h5>Michael Doe</h5>
                  <p>Maxime Omni</p>
                </div>
              </li>
              <li>
                <div className="w3_testimonials_grid">
                  <img
                    src="assets2/images/te3.jpg"
                    alt="Testimonial 3"
                    className="img-responsive"
                  />
                  <h4>
                    <i>
                      "Nam libero tempore, cum soluta nobis est eligendi optio
                      cumque nihil impedit quo minus id quod possimus, omnis
                      voluptas."
                    </i>
                  </h4>
                  <h5>Thomas Carl</h5>
                  <p>Placeat Quo</p>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  </div>
</div>
  )
}

export default About