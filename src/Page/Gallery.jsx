import React from 'react'

function Gallery() {
  
    const images = [
      "g1.jpg",
      "g2.jpg",
      "g3.jpg",
      "g4.jpg",
      "g5.jpg",
      "g6.jpg",
      "g7.jpg",
      "g8.jpg",
      "g9.jpg",
    ];
  return (
    <>
    <div className="gallery">
    <div className="container">
      <h3 className="title">Our Gallery</h3>
      <div className="w3layouts_gallery_grids">
        {images.map((image, index) => (
          <div key={index} className="col-md-4 col-xs-4 w3layouts_gallery_grid">
            <a
              href={`images/${image}`}
              className="lsb-preview"
              data-lsb-group="header"
            >
              <div className="w3layouts_news_grid">
                <img
                  src={`assets2/images/${image}`}
                  alt={`Gallery Image ${index + 1}`}
                  className="img-responsive"
                />
                <div className="w3layouts_news_grid_pos">
                  <div className="wthree_text">
                    <h3>Travel Tours</h3>
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
        <div className="clearfix"></div>
      </div>
    </div>
  </div>
</>
  )
}

export default Gallery