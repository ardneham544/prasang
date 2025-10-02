import React from 'react';
import './ContactUs.css';

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
              <p>103, Sharda Sankul, Valthan, Ta. Kamrej, Dist. Surat, Gujarat, India</p>
              <p>Email: QUERRY@PRASANG.CO.IN</p>
              <p>Phone: +91 9316026002</p>
            </div>

            <div className="map-section">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d210.37085348999472!2d72.97099109559299!3d21.212895054773526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be045e5c7335b45%3A0xdf8e14190095c10a!2sSharda%20Sankul%20Co%2C%20Shree%20Valmiki%20Vidhyalay!5e1!3m2!1sen!2sin!4v1759436359430!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
