import * as React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

import './style.css';

class Home extends React.Component {
  render () {
  return (
    <div>

      <div className="jumbotron d-flex justify-content-center bg-secondary"><h3 className="text-center">Welcome to Confectionary Delight!</h3></div>

      <div id="demo" className="carousel slide" data-bs-ride="carousel">

      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://i.postimg.cc/T1N0Y0LY/carouselimage1.jpg" alt="Los Angeles" className="d-block w-100" />
          {/* https://unsplash.com/photos/brown-and-red-pie-on-brown-wooden-table-hxYu37Imh_8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash */}
        </div>
        <div className="carousel-item">
          <img src="https://i.postimg.cc/tRB25qSQ/carouselimage2.jpg" alt="Chicago" className="d-block w-100" />
          {/* https://unsplash.com/photos/cookies-on-rectangular-plate-j2yLCAi9brQ?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash */}
        </div>
        <div className="carousel-item">
          <img src="https://i.postimg.cc/g0bDJnJR/carouselimage3.jpg" alt="New York" className="d-block w-100" />
          {/* https://unsplash.com/photos/white-and-black-floral-round-decor-qZ6uvJHLHFc?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash */}
        </div>
        <div className="carousel-item">
          <img src="https://i.postimg.cc/t4xkphXp/carouselimage4.jpg" alt="Chicago" className="d-block w-100" />
          {/* https://unsplash.com/photos/white-and-red-cake-with-strawberry-on-top-cu1-a9LSmqo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash */}
        </div>
        <div className="carousel-item">
          <img src="https://i.postimg.cc/fTk5qGp3/carouselimage5.jpg" alt="Chicago" className="d-block w-100" />
          {/* https://unsplash.com/photos/macarons-in-white-ball-selective-focus-photography-oLHk_WLupSc?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" */}
        </div>
        <div className="carousel-item">
          <img src="https://i.postimg.cc/HsKzqS16/carouselimage6.jpg" alt="Chicago" className="d-block w-100" />
          {/* https://unsplash.com/photos/close-up-photography-of-cupcakes-zk-fclJdGas?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash */}
        </div>
        <div className="carousel-item">
          <img src="https://i.postimg.cc/0Q80YF7y/carouselimage7.jpg" alt="Chicago" className="d-block w-100" />
          {/* https://unsplash.com/photos/bread-with-strawberry-jam-on-brown-wooden-table-8EMl35F5Fcc?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash */}
        </div>
        <div className="carousel-item">
          <img src="https://i.postimg.cc/vm7v6bgK/carouselimage8.jpg" alt="Chicago" className="d-block w-100" />
          {/*https://unsplash.com/photos/a-bunch-of-croissants-that-are-on-a-table-sqkXyyj4WdE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash*/}
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
        <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
        <span className="carousel-control-next-icon"></span>
        </button>
        </div>
        </div>

        <h1 className="text-center">Discover a world of sweet wonders at Confectionary Delight, your go-to destination for heavenly pastries, exquisite cakes, and delightful desserts. Indulge in the artistry of our confections, where each treat is a perfect blend of passion and flavor.</h1><br />

        <img src="https://i.postimg.cc/G3FhSjHG/homeimage1.jpg" className="img-fluid mx-auto d-block"/>

        <h1 className="text-center">At Confectionary Delight, we invite you to experience the magic of our artisanal creations. From the first bite to the last crumb, savor the joy we bake into every delightful moment. Life is sweet, and we're here to make it even sweeter!</h1><br />
        {/* https://unsplash.com/photos/brown-and-white-pastry-on-white-ceramic-plate-acw-W7oeFOk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash */}

        <img src="https://i.postimg.cc/QxjxLWTP/homeimage2.jpg" className="img-fluid mx-auto d-block"/>
        {/* https://unsplash.com/photos/close-up-photography-of-cupcakes-qJ0zGkrE1Zg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash */}

        <h1 className="text-center">Explore our tempting offerings and treat yourself to the extraordinary. Confectionary Delight – where sweetness meets perfection.</h1><br/>

        <div className="d-grid">
        <button type="button" className="btn btn-primary btn-block bg-secondary"><Link to="/menu"><h2 className="text-secondary text-center">Go to Menu</h2><br/></Link></button>
        </div><br/>
    </div>
    );
  }
};
export default Home;