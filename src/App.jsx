import React from "react";
import Navbar from "./Navbar";

const App = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Carosoul */}

      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div id="home" className="carousel-inner">
          <div className="carousel-item active">
            <img src="/pic1.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption">
              <h2>Explore the World</h2>
              <p>
                Discover breathtaking destinations and unforgettable adventures.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/pic2.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption">
              <h2>Your Journey, Our Priority</h2>
              <p>Tailor-made travel plans for a seamless experience.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/pic3.jpg" className="d-block w-100 h-75" alt="..." />
            <div className="carousel-caption">
              <h2>Dream. Travel. Repeat.</h2>
              <p>Start your next chapter of exploration with us.</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Popular Destination */}

      <div id="travel" className="container my-5">
  <h2>Popular Destinations</h2>
  <p>Vacations to make your experience enjoyable!</p>
  <div
    className="row flex-nowrap overflow-auto"
    style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
  >
    {/* Card 1 */}
    <div
      className="col-lg-3 col-md-4 col-6 mb-4"
      style={{ padding: "0 10px", display: "flex" }}
    >
      <div
        className="card"
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <img
          src="fsd.jpg"
          className="card-img-top"
          alt="Faisalabad"
          style={{ height: "200px", objectFit: "cover" }}
        />
        <div className="card-body" style={{ flexGrow: 1 }}>
          <h5 className="card-title">Faisalabad</h5>
          <p className="card-text">
            Faisalabad, known as the "Manchester of Pakistan," is Pakistan's
            industrial hub, famous for its textile industry and trade. Its
            iconic Ghanta Ghar...
          </p>
          <a href="#contact" className="btn btn-dark">
            More Details
          </a>
        </div>
      </div>
    </div>

    {/* Card 2 */}
    <div
      className="col-lg-3 col-md-4 col-6 mb-4"
      style={{ padding: "0 10px", display: "flex" }}
    >
      <div
        className="card"
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <img
          src="dubai.jpg"
          className="card-img-top"
          alt="Dubai"
          style={{ height: "200px", objectFit: "cover" }}
        />
        <div className="card-body" style={{ flexGrow: 1 }}>
          <h5 className="card-title">Dubai</h5>
          <p className="card-text">
            Dubai is a global city renowned for its futuristic skyline, Burj
            Khalifa, and luxury shopping. It serves as the Middle East's
            business and tourism hub.
          </p>
          <a href="#contact" className="btn btn-dark">
            More Details
          </a>
        </div>
      </div>
    </div>

    {/* Card 3 */}
    <div
      className="col-lg-3 col-md-4 col-6 mb-4"
      style={{ padding: "0 10px", display: "flex" }}
    >
      <div
        className="card"
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <img
          src="paris.jpeg"
          className="card-img-top"
          alt="Paris"
          style={{ height: "200px", objectFit: "cover" }}
        />
        <div className="card-body" style={{ flexGrow: 1 }}>
          <h5 className="card-title">Paris</h5>
          <p className="card-text">
            Paris, the "City of Light," is celebrated for its romance, the
            Eiffel Tower, and world-class art museums like the Louvre. It is a
            global center for fashion...
          </p>
          <a href="#contact" className="btn btn-dark">
            More Details
          </a>
        </div>
      </div>
    </div>

    {/* Card 4 */}
    <div
      className="col-lg-3 col-md-4 col-6 mb-4"
      style={{ padding: "0 10px", display: "flex" }}
    >
      <div
        className="card"
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <img
          src="lahor.jpg"
          className="card-img-top"
          alt="Lahore"
          style={{ height: "200px", objectFit: "cover" }}
        />
        <div className="card-body" style={{ flexGrow: 1 }}>
          <h5 className="card-title">Lahore</h5>
          <p className="card-text">
            Lahore, Pakistan's cultural capital, is famous for its historical
            landmarks, vibrant food scene, and rich artistic heritage.
          </p>
          <a href="#contact" className="btn btn-dark">
            More Details
          </a>
        </div>
      </div>
    </div>
  </div>
</div>


      {/* Why Choose us */}

      <section id="about" className="container my-3">
        <h2>Why Choose Us?</h2>
        <div className="row">
          {/* Left Side (Image) */}
          <div className="col-lg-6">
            <img
              src="/pic4.jpg"
              alt="Travel Image"
              className="img-fluid w-100"
            />
          </div>

          {/* Right Side (Content) */}
          <div className="col-lg-6 p-4">
            <div className="card m-2">
              <div className="card-body">
                <h5>Our Mission</h5>
                <p>
                  Delivering unforgettable travel experiences at affordable
                  prices.
                </p>
              </div>
            </div>
            <div className="card m-2">
              <div className="card-body">
                <h5>What We Offer</h5>
                <p>
                  Customizable travel packages for adventure, relaxation, and
                  culture.
                </p>
              </div>
            </div>
            <div className="card m-2">
              <div className="card-body">
                <h5>Why Choose Us?</h5>
                <p>
                  Expertise, hassle-free planning, and quality service for every
                  journey.
                </p>
              </div>
            </div>
            <div className="card m-2">
              <div className="card-body">
                <h5>Customer Testimonials</h5>
                <p>
                  Hear from our happy travelers who loved their experiences with
                  us.
                </p>
              </div>
            </div>
            <div className="card m-2">
              <div className="card-body">
                <h5>Quality Services</h5>
                <p>
                  Premium quality with attention to detail.Industry-best
                  practices for guaranteed satisfaction.
                </p>
              </div>
            </div>
            <div className="card m-2">
              <div className="card-body">
                <h5>Affordable Pricing</h5>
                <p>
                  High-quality services at competitive rates.Transparent pricing
                  with no hidden fees.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <div id="contact" className="container my-3">
        <h2 className="text-center mb-4">Contact Us</h2>
        <div className="row">
          {/* <!-- Left side (Image) --> */}
          <div className="col-lg-6 ">
            <img
              src="contact.jpg"
              className="img-fluid h-100 w-100 "
              alt="Contact Us"
            />
          </div>

          {/* <!-- Right side (Form) --> */}
          <div className="col-lg-6 col-md-6 col-12">
            <div className="card p-4">
              <div className="card-body">
                <form
                  onSubmit={(e) => {
                    e.preventDefault(); // Prevent page reload
                    const name = document.getElementById("name").value;
                    const email = document.getElementById("email").value;
                    const message = document.getElementById("message").value;

                    const phoneNumber = "923366190190"; // Replace with your WhatsApp number
                    const whatsappMessage = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;

                    // Redirect to WhatsApp
                    window.open(
                      `https://wa.me/${phoneNumber}?text=${whatsappMessage}`,
                      "_blank"
                    );
                  }}
                >
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">
                      Message
                    </label>
                    <textarea
                      className="form-control"
                      id="message"
                      rows="4"
                      placeholder="Enter your message"
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary w-100">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white py-4">
        <div className="container">
          <div className="row">
            {/* <!-- Column 1: Logo and Description --> */}
            <div className="col-lg-4 col-md-6 col-12 mb-3">
              <h5 className="text-uppercase">TravelWithUs</h5>
              <p>
                Your travel companion for amazing adventures around the world.
                Let us help you plan your next unforgettable journey.
              </p>
            </div>

            {/* <!-- Column 2: Quick Links --> */}
            <div className="col-lg-4 col-md-6 col-12 mb-3">
              <h5 className="text-uppercase">Quick Links</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#home" className="text-white text-decoration-none">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-white text-decoration-none">
                    About
                  </a>
                </li>
                <li>
                  <a href="#travel" className="text-white text-decoration-none">
                    Travel
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-white text-decoration-none"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* <!-- Column 3: Contact Info --> */}
            <div className="col-lg-4 col-md-12 col-12 mb-3">
              <h5 className="text-uppercase">Contact Info</h5>
              <ul className="list-unstyled">
                <li>
                  <i className="bi bi-geo-alt"></i> Faisalabad
                </li>
                <li>
                  <i className="bi bi-envelope"></i> contact@travelwithus.com
                </li>
                <li>
                  <i className="bi bi-phone"></i> +92 321 1234567
                </li>
              </ul>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-12 text-center">
              <p>&copy; 2024 TravelWithUs. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
