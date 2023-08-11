import React from 'react'

function Footer() {
  return (
    <>
    <div className="row justify-content-evenly bg-dark text-white pt-2 pb-5">
  <div className="col-md-3 pt-4">
  <h5 className="pb-2">tours &Travels</h5>
  We create memories for life Get your travel therapy We have the best travel deals We’ve got your adventure fix
  </div>
  <div className="col-md-3 pt-4">
    <h5 className="pb-2">Important links</h5>
    <p>
      <a href="/" className="link-light text-decoration-none">Home</a><br/>
      <a href="/" className="link-light text-decoration-none">About us</a><br/>
      <a href="/" className="link-light text-decoration-none">contact us</a><br/>
      <a href="/" className="link-light text-decoration-none">Our team</a><br/>
      <a href="/" className="link-light text-decoration-none">client</a><br/>
    </p>
  </div>
  <div className="col-md-3 pt-4">
    <h5 className="pb-2">Contact Us</h5>
    <p>
      Tour operator Surendranagar,Gujarat<br/>India-0257<br/>
      <i className="bi bi-telephone">7990480799</i>
    </p>
  </div>
  </div>
  
    </>
  )
}

export default Footer