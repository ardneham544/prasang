import React from 'react'
import './Service.css'
import { FaRegAddressCard, FaUtensils, FaCameraRetro, FaMusic, FaLightbulb, FaUsers, FaBusAlt, FaCube, FaBriefcase, FaRing, FaBirthdayCake, FaPalette, FaShieldAlt, FaChair, FaFireAlt } from 'react-icons/fa';
import { MdLocationOn } from "react-icons/md";

function Service() {
  return (
    <section className="services" id="services">
      <h1 className="section-title">Our Services</h1>

      <div className="services-container">

        <div className="box">
          <FaRegAddressCard className="icon" />
          <h3>Invitation Cards</h3>
          <p>Custom-designed digital and printed invitations tailored to your theme.</p>
        </div>

        <div className="box">
          <MdLocationOn className="icon" />
          <h3>Venue Booking & Decoration</h3>
          <p>Perfect venue selection and creative décor that match your event style.</p>
        </div>

        <div className="box">
          <FaUtensils className="icon" />
          <h3>Catering & Beverages</h3>
          <p>Multi-cuisine catering and personalized menu planning for your guests.</p>
        </div>

        <div className="box">
          <FaCameraRetro className="icon" />
          <h3>Photography & Videography</h3>
          <p>High-quality coverage with candid, traditional, and cinematic shoots.</p>
        </div>

        <div className="box">
          <FaMusic className="icon" />
          <h3>Entertainment & Music</h3>
          <p>Live bands, DJs, performers, and cultural shows to make your event lively.</p>
        </div>

        <div className="box">
          <FaLightbulb className="icon" />
          <h3>Lighting & Sound</h3>
          <p>Professional stage setup, ambient lighting, and crystal-clear audio systems.</p>
        </div>

        <div className="box">
          <FaUsers className="icon" />
          <h3>Guest Management</h3>
          <p>RSVP management, seating arrangements, and hospitality staff support.</p>
        </div>

        <div className="box">
          <FaBusAlt className="icon" />
          <h3>Logistics & Transport</h3>
          <p>Travel arrangements, valet parking, and shuttle services for guests.</p>
        </div>

        <div className="box">
          <FaCube className="icon" />
          <h3>Stage Design & Fabrication</h3>
          <p>Custom stage setups for weddings, concerts, conferences, and shows.</p>
        </div>

        <div className="box">
          <FaBriefcase className="icon" />
          <h3>Corporate Events</h3>
          <p>Meetings, product launches, exhibitions, and team-building events.</p>
        </div>

        <div className="box">
          <FaRing className="icon" />
          <h3>Wedding Planning</h3>
          <p>Complete wedding solutions including rituals, décor, food, and ceremonies.</p>
        </div>

        <div className="box">
          <FaBirthdayCake className="icon" />
          <h3>Birthday Parties</h3>
          <p>Fun-filled party planning with themes, games, cakes, and entertainment.</p>
        </div>

        <div className="box">
          <FaPalette className="icon" />
          <h3>Theme Events</h3>
          <p>Special theme-based décor, costumes, and entertainment experiences.</p>
        </div>

        <div className="box">
          <FaChair className="icon" />
          <h3>Event Rentals</h3>
          <p>Chairs, tables, tents, furniture, AV equipment, and décor rentals.</p>
        </div>

        <div className="box">
          <FaFireAlt className="icon" />
          <h3>Fireworks & Special Effects</h3>
          <p>Cold pyros, confetti blasts, smoke machines, and laser shows.</p>
        </div>

      </div>
    </section>
  )
}

export default Service
