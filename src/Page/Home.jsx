import React from 'react'


function Home() {
  return (
    <>
      <div className="container-fluid">
{/* 
<!-- banner --> */}
<div className="row justify-content-center" id="banner">
  <div className="className col-md-6 col-11" id="bannertext">
    <h1>A More Rewarding <br/>Way To Travel.</h1>
    <p>Tourism is travel for pleasure or business; also the theory and practice of touring, the business of attracting, accommodating, and entertaining tourists, and the business of operating tours</p>
    <button type="button" className="btn" id="banner-btn-1" > Contact us</button>
    <button type="button"className="btn" id="banner-btn-2"> Our Services</button>
  
  </div>
  <div className="className col-md-4 d-none d-md-block" id="bannerimg">
    <img src="assets/image/tour3.jpg" alt="" className="img-fluid " width="90%"/>
  </div>
   </div>
   {/* <!-- service --> */}
   <div className="row justify-content-center pt-4 pb-3">
    <div className="col-md-5 col-11" id="service-text">
      <h4 >Let’s make new memories<br/> Your biggest adventure awaits you! </h4>
      <p>Tourism has various forms based on the purpose of the visit and alternative forms. These are further divided into many types according to their nature. Forms of tourism are the following: Some most basic forms of tourism are the following: 1. Adventure Tourism 2. Atomic Tourism 3. Bicycle Tours 4. Beach Tourism 5. Cultural Tourism 6. Ecotourism</p>
      <button type="button" className="btn" id="service-btn"  >Our Services</button>
    </div>
    <div className="col-md-5" id="service-img">
      <img src="assets/image/tajmahal.jpg" alt="" className="img-fluid"/>
   </div>
   </div>
   {/* <!-- counter --> */}
   <div className="row justify-content-center" id="counter-section">
    <div className="col-md-3 text-center text-danger mt-5 mb-3">
      <i className="bi bi-truck-front-fill"></i>
      <h3>25+<br/><b>Total Bus</b></h3>
    </div>
    <div className="col-md-3 text-center text-danger mt-5 mb-3">
      <i className="bi bi-people"></i>
      <h3>25682+<br/><b>Total traveller</b></h3>
    </div>
    <div className="col-md-3 text-center text-danger mt-5 mb-3">
      <i className="bi bi-car-front-fill"></i>
      <h3>30+<br/><b>Total cars</b></h3>
    </div>
   </div>
   {/* <!-- blog --> */}
   <div className="row justify-content-center" id="blog">
    <div className="col-12 text-center" >
      <h1 id="blog title">Recent post</h1>
      <p id="blog-p">Tourism has different meanings in different languages and different regions and can be defined in different ways. <br/>The present day tourism is not the same as travels of the early periods of human history</p>
    </div>
   <div className="col-md-3 col-11 mt-4">
    <img src="assets/image/tajmahal.jpg" alt="" className="img-fluid"/>
    <div className="article-detail">
      <h4 className="article-title">Tour To tajmahal</h4>
      <p className="article-date">september,09,2020</p>
    <p className="article-desc">Visit the iconic Taj Mahal—India's most stunning homage to love, and learn how this World Wonder was built by Shah Jahan for his Mumtaz. Make a stop at Agra Fort, and learn about the 16th-century Mughal monument from your guide.  Private day trip to Taj Mahal and Agra Fort from Delhi Learn about the Mughal Empire from your expert guide Visit the iconic Taj Mahal and Agra Fort Experience personalized attention from your private guide.
    </p>
    <p><a href="/" className="article-link"> read more+</a></p>
  </div>
   </div>
   <div className="col-md-3 col-11 mt-4">
    <img src="assets/image/manali.jpg" alt="" className="img-fluid"/>
    <div className="article-detail">
      <h4 className="article-title">Tour To manali </h4>
      <p className="article-date">june,15,2012</p>
    <p className="article-desc">It is a prominent honeymoon destination as well. Activities like Trekking in Parvati Valley, skiing in the Solang Valley are popular there. Also, sports like Paragliding, Rafting and Mountaineering in the Pir Panjal Mountain there are one the major attractions of that resort towns very beautiful place awkwardly managed by the govt. if managed properly it will be one of the top destinations in india to visit.to experience live snowfall was just amazing. 
    </p>
    <p><a href="/" className="article-link"> read more+</a></p>
  </div>
   </div>
   <div className="col-md-3 col-11 mt-4">
    <img src="assets/image/kashmir.jpg" alt="" className="img-fluid"/>
    <div className="article-detail">
      <h4 className="article-title">Tour To Kashmir</h4>
      <p className="article-date">september,09,2010</p>
    <p className="article-desc">Kashmir is not your ordinary escapade. It is, afterall, known as the Heaven on Earth. It is unique in every sense of the word, its weather, landscape, lakes, culture, cuisine, people and more are some of the finest in the country. If you are truly looking for a memorable holiday, you can simply head to Kashmir.A valley surrounded by snow capped mountains, Gurez Valley leaves a lasting impression.it was a very good experience travelling at kashmir.
    </p>
    <p><a href="/"className="article-link"> read more+</a></p>
  </div>
   </div>
   </div>
   </div>
    </>
  )
};

export default Home
