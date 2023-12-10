import * as React from 'react';

import './style.css';

class About extends React.Component {
  render () {
  return (
    <div>
      <h2 className="text-center">Welcome to Confectionary Delight!</h2><br/>
      <img src="https://i.postimg.cc/2ScMySxj/aboutimage.jpg" className="img-fluid mx-auto d-block"/>
      {/* https://unsplash.com/photos/fruit-cake-on-white-plate--UgrmeAC06E?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash */}

      <h1 className="text-center">Welcome to Confectionary Delight, where the art of baking meets the joy of indulgence. Our journey began with a simple yet profound belief – that every moment, big or small, deserves to be celebrated with something sweet.</h1>

      <h1 className="text-center">Confectionary Delight was founded with a passion for crafting exquisite pastries and desserts that not only satiate your cravings but also become a centerpiece for your celebrations. From the first flour-dusted kitchen to our present-day haven of confections, each step of our journey has been guided by a commitment to quality and creativity.</h1>

      <h1 className="text-center">Our skilled team of bakers and pastry chefs brings a blend of expertise and love to every creation. From the delicate layers of our cakes to the flaky perfection of our pastries, each item is a masterpiece, meticulously crafted to delight your senses.</h1>

      <h1 className="text-center">Thank you for being a part of the Confectionary Delight family. Join us in this sweet journey, where every day is an opportunity to savor the joy of life.</h1><br/>
    </div>
    );
  }
};
export default About;