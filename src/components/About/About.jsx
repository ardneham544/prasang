import React from 'react'
import './About.css'

function About() {
  return (
    <section className="about" id="about">
      <div className="about-hero">
        <div className="about-text">
          <h2>Crafting Unforgettable Events with Passion & Precision</h2>
          <p>
            We are a passionate team of event organizers dedicated to turning your dreams into reality.
            From weddings and birthdays to corporate events and concerts, we specialize in planning and
            executing celebrations that leave lasting memories.
          </p>
          <p>
            With creativity, professionalism, and attention to detail, we take care of every aspect—venue,
            decoration, catering, entertainment, logistics, bookings and more. Whether it's an intimate gathering or a
            grand exhibition, we ensure every event is flawless and unique.
          </p>
        </div>

        <div className="about-image">
          <img src="assets/about/founder2.jpg" alt="Founder" />
        </div>
      </div>
    </section>
  )
}

export default About
