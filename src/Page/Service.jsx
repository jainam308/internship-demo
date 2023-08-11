import React from 'react'

function Service() {
    const tourPackages = [
        {
          image: "assets2/images/k1.jpg",
          title: "Tour Package 1",
          description:
            "Explore the breathtaking beauty of nature with this 3-day tour package. Immerse yourself in the serene landscapes and enjoy a relaxing getaway. Experience the wonders of local culture and cuisine during your stay. Don't miss the chance to create unforgettable memories on this incredible journey.",
          location: "Exotic Island Retreat",
          duration: "3 Days",
          price: "$500",
          moreDetails: "For more details please contact us.",
        },
        {
          image: "assets2/images/k2.jpg",
          title: "Tour Package 2",
          description:
            "Embark on a thrilling 2-day adventure with this action-packed tour. Explore the hidden gems of the wilderness and witness the wonders of wildlife up close. Enjoy adrenaline-pumping activities and capture unforgettable moments in nature's playground. Get ready for an unforgettable escapade like no other.",
          location: "Wildlife Safari Expedition",
          duration: "2 Days",
          price: "$350",
          moreDetails: "For more details please contact us.",
        },
        {
          image: "assets2/images/k3.jpg",
          title: "Tour Package 3",
          description:
            "Indulge in a luxurious 6-day tour and experience the finest of comfort and hospitality. Unwind at deluxe resorts, savor exquisite culinary delights, and bask in the beauty of iconic landmarks. This premium tour offers a perfect blend of relaxation and exploration, making it an ideal escape for discerning travelers.",
          location: "Luxury Escapade Getaway",
          duration: "6 Days",
          price: "$800",
          moreDetails: "For more details please contact us.",
        },
      ];
  return (
    <div>
          <div className="trips-section">
     
        <h3 className="title">Beautiful Tours</h3>
        {tourPackages.map((tour, index) => (
          <div key={index} className="col-xs-4 exce-grid1-mmstyle">
            <img src={tour.image} alt={`Tour Package ${index + 1}`} />
            <div className="grid-ec1">
              <h3>{tour.title}</h3>
              <p>{tour.description}</p>
              <h4>
                <i className="fa fa-map-marker"></i> {tour.location}
              </h4>
              <h4 className="w3l-name">
                <i className="fa fa-calendar"></i> {tour.duration}
              </h4>
              <p>{tour.price}</p>
              <p>{tour.moreDetails}</p>
            </div>
          </div>
        ))}
        <div className="clearfix"></div>
      </div>
   
         <div className="wthree_services" id="services">
    <div className="container">
      <h3 className="title">Why Travel Tours</h3>
      <div className="col-md-4 wthree_services_left">
        <div className="col-xs-4 wthree_services_left_grid">
          <div className="wthree_services_left_grid1">
            <i className="fa fa-plane" aria-hidden="true"></i>
          </div>
        </div>
        <div className="col-xs-8 wthree_services_left_grid_left">
          <h3>Travel Arrangements</h3>
          <p>
            Let our team take care of all your travel arrangements, ensuring a
            smooth and enjoyable journey.
          </p>
        </div>
        <div className="clearfix"></div>
      </div>
      <div className="col-md-4 wthree_services_left mid-w3l">
        <div className="col-xs-4 w3l_banner_info_left_grid">
          <div className="wthree_services_left_grid1">
            <i className="fa fa-globe" aria-hidden="true"></i>
          </div>
        </div>
        <div className="col-xs-8 wthree_services_left_grid_left">
          <h3>Special Activities</h3>
          <p>
            Explore unique and exciting activities in your chosen destinations
            to make your journey unforgettable.
          </p>
        </div>
        <div className="clearfix"></div>
      </div>
      <div className="col-md-4 wthree_services_left">
        <div className="col-xs-4 wthree_services_left_grid">
          <div className="wthree_services_left_grid1">
            <i className="fa fa-suitcase" aria-hidden="true"></i>
          </div>
        </div>
        <div className="col-xs-8 wthree_services_left_grid_left">
          <h3>Beautiful Places</h3>
          <p>
            Visit breathtakingly beautiful places around the world with our
            carefully crafted travel packages.
          </p>
        </div>
        <div className="clearfix"></div>
      </div>
      <div className="clearfix"></div>
      <div className="wthree_about_grids">
        <div className="col-md-6 wthree_about_grid_right">
          {/* Replace the iframe src with your own video link */}
          <iframe
            src="https://player.vimeo.com/video/71319358?badge=0"
            title="video"
            allowFullScreen
          ></iframe>
        </div>
        <div className="col-md-6 wthree_about_grid_left">
          <h3>Most Popular</h3>
          <p>
            Fusce semper, nibh eu sollicitudin imperdiet, dolor magna
            vestibulum mi, vel tincidunt augue ipsum nec erat. Vestibulum congue
            leo elementum ullamcorper commodo. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos.
          </p>
        </div>
        <div className="clearfix"></div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Service