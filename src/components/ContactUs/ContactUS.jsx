import React from 'react';
import './ContactUS.css';

function ContactUS() {
  return (
    <div className="contact-container">
      {/* Title outside the card */}
      <h2 className="contact-title">Contact Us</h2>

      <div className="contact-card">
        <div className="contact-columns">
          {/* Left Column: Map + Address */}
          <div className="contact-info-column">
            <div className="company-info">
              <h3>Our Office</h3>
              <p>19-20,Chandrakant Enclave,Rajpardi, Dist. Bharuch, Gujarat, India</p>
              <p>Email: CS.IGNER544@GMAIL.COM</p>
              <p>Phone: +91 9316026002</p>
            </div>

            <div className="map-section">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d49532.60926537984!2d73.20503614572432!3d21.746240492646486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDQ2JzA3LjIiTiA3M8KwMTMnMjcuNiJF!5e1!3m2!1sen!2sin!4v1755494684624!5m2!1sen!2sin"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="contact-form-column">
            <form>
              <div className="form-group">
                <label>Name</label>
                <input type="text" placeholder='Name' required />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder='Email' required />
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea rows="6" placeholder='your message'required></textarea>
              </div>

              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUS;
