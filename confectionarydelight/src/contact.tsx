import * as React from 'react';

import './style.css';

class Contact extends React.Component {
  render () {
  return (
    <div>
      <div className="jumbotron d-flex justify-content-center bg-secondary"><h3 className="text-center">Contact</h3></div>
      <img src="https://i.postimg.cc/VkL2zCnH/contactimage.jpg" className="img-fluid mx-auto d-block"/><br/>
      {/* https://unsplash.com/photos/pink-and-brown-medication-pill-on-white-plastic-container-IHAHIpHl5UU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash */}

      <h2 className="text-center">📞 Contact Us</h2><br/>

      <h1 className="text-center">Thank you for your interest in Confectionary Delight! If you have any questions, special requests, or just want to share your sweet thoughts with us, we'd love to hear from you.</h1><br/>

      <h1 className="text-center">Visit Us:<br/>
      Confectionary Delight Bakery<br/>
      123 Sugar Lane<br/>
      Sweetville, CA 98765<br/>
      United States</h1><br/>

      <h1 className="text-center">Email Us:
      confectionarydelight@bakery.net</h1><br/>

      <h1 className="text-center">Call Us:
      Customer Service: (208) 123-4567</h1><br/>

      <h1 className="text-center">Business Hours:
      Monday - Friday: 8:00 AM - 8:00 PM
      Saturday - Sunday: 9:00 AM - 6:00 PM</h1><br/><br/>
    </div>
    );
  }
};
export default Contact;