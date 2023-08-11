import React from 'react'

function Contact() {
  return (
   

    
        <div className="contact">
          <div className="container-fluid">
            <h3 className="title">Contact Us</h3>
            <div className="contact-block-left">
              <form action="/" method="post">
                <input type="text" placeholder="Name" required name="Name" />
                <input
                  type="email"
                  className="email"
                  placeholder="Email"
                  name="Email"
                  required
                />
                <textarea
                  placeholder="Message"
                  name="message"
                  required
                ></textarea>
                <input type="submit" value="Submit" />
              </form>
            </div>
            <div className="contact-seco">
              <div className="col-md-5 col-xs-5 contact-left-w3ls">
                <h3>Get In Touch</h3>
                <div className="visit">
                  <div className="col-md-2 col-sm-2 col-xs-2 contact-icon-wthree">
                    <i className="fa fa-home" aria-hidden="true"></i>
                  </div>
                  <div className="col-md-10 col-sm-10 col-xs-10 contact-text-agileinf0">
                    <h4>Visit us</h4>
                    <p>Parma Via Modena, BO, Italy</p>
                    <p>Lorem ipsum dolor.</p>
                  </div>
                  <div className="clearfix"></div>
                </div>
                <div className="mail-w3">
                  <div className="col-md-2 col-sm-2 col-xs-2 contact-icon-wthree">
                    <i className="fa fa-envelope-o" aria-hidden="true"></i>
                  </div>
                  <div className="col-md-10 col-sm-10 col-xs-10 contact-text-agileinf0">
                    <h4>Mail us</h4>
                    <p>
                      <a href="mailto:info@example.com">info@example.com</a>
                    </p>
                  </div>
                  <div className="clearfix"></div>
                </div>
                <div className="call">
                  <div className="col-md-2 col-sm-2 col-xs-2 contact-icon-wthree">
                    <i className="fa fa-phone" aria-hidden="true"></i>
                  </div>
                  <div className="col-md-10 col-sm-10 col-xs-10 contact-text-agileinf0">
                    <h4>Call us</h4>
                    <p>+18044261149</p>
                  </div>
                  <div className="clearfix"></div>
                </div>
              </div>
              <div className="col-md-6 col-xs-6 social-w3">
                <div className="main">
                  <ul>
                    <li className="f1">
                      <a href="/" className="social-contact-w3">
                        <i className="fa fa-facebook f1" aria-hidden="true"></i>
                        <p>Facebook</p>
                      </a>
                    </li>
                    <li className="f2">
                      <a href="/" className="social-contact-w3">
                        <i className="fa fa-google-plus f2" aria-hidden="true"></i>
                        <p>Google Plus</p>
                      </a>
                    </li>
                    <li className="f3">
                      <a href="/" className="social-contact-w3">
                        <i className="fa fa-twitter f3" aria-hidden="true"></i>
                        <p>Twitter</p>
                      </a>
                    </li>
                    <li className="f4">
                      <a href="/" className="social-contact-w3">
                        <i className="fa fa-linkedin f5" aria-hidden="true"></i>
                        <p>Linkedin</p>
                      </a>
                    </li>
                    <li className="f5">
                      <a href="/" className="social-contact-w3">
                        <i className="fa fa-dribbble f6" aria-hidden="true"></i>
                        <p>Dribbble</p>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="clearfix"></div>
            </div>
          </div>
        </div>

  )
}

export default Contact