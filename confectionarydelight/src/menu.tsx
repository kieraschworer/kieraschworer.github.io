import * as React from 'react';

import './style.css';

class Menu extends React.Component {
  render () {
  return (
    <div>
      <div className="jumbotron d-flex justify-content-center bg-secondary"><h3 className="text-center">Menu</h3></div>
      <img src="https://i.postimg.cc/d0gfRNXz/menuimage.jpg" className="img-fluid mx-auto d-block"/><br/>
      {/* https://unsplash.com/photos/brown-and-white-doughnuts-on-white-wooden-rack-qwzhT20ohOM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash */}

          <table className="table">
            <thead>
              <tr>
                <th>Chocolate Fudge Cake</th>
                <th>Carrot Cake</th>
                <th>Strawberry Shortcake</th>
              </tr>
              <tr>
                <th>Croissants</th>
                <th>Blueberry Muffins</th>
                <th>Scones</th>
              </tr>
              <tr>
                <th>Vanilla Bean Cupcakes</th>
                <th>Salted Caramel Cupcakes</th>
                <th>Rasberry Almond Cupcakes</th>
              </tr>
              <tr>
                <th>Cinnamon Rolls</th>
                <th>Coffee Cake</th>
                <th>Danish Pastry</th>
              </tr>
              <tr>
                <th>Apple Pie</th>
                <th>Pecan Pie</th>
                <th>Cherry Pie</th>
              </tr>
              <tr>
                <th>French Macarons</th>
                <th>Pistachio Macarons</th>
                <th>Salted Caramel Macarons</th>
              </tr>
              <tr>
                <th>Chocolate Chip Cookies</th>
                <th>Brownies</th>
                <th>Lemon Bars</th>
              </tr>
              <tr>
                <th>Strawverry Shortcake Trifle</th>
                <th>Chocolate Rasberry Trifle</th>
                <th>Lemon Blueberry Trifle</th>
              </tr>
            </thead>
          </table>
        </div>
      )
    }
  }
export default Menu;