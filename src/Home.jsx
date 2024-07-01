import React from "react";
import Service from "./Service";
import Project from "./Project";
import Team from "./Team";

function Home() {
  return (
    <>
      <div className="container mt-3">
        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="images/BANNER.jpg"
                className="d-block w-100"
                alt="Mobile App Development"
              />
              <div className="carousel-caption">
                <h1>Mobile App Development</h1>
                <p>
                  Since our establishment, we have been delivering high-quality
                  and sustainable software solutions for corporate purposes of
                  worldwide businesses.
                </p>
                <button className="btn-001">GET IN TOUCH</button>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="images/BANNER.jpg"
                className="d-block w-100"
                alt="Software Development"
              />
              <div className="carousel-caption">
                <h1>Software Development</h1>
                <p>
                  The software solutions developed by our company have been
                  numerously awarded for usability and innovative features.
                </p>
                <button className="btn-001">GET IN TOUCH</button>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="images/BANNER.jpg"
                className="d-block w-100"
                alt="Well Experience Team"
              />
              <div className="carousel-caption">
                <h1>Well Experience Team</h1>
                <p>
                  We are a team of qualified software developers, aimed at
                  creating unique and powerful tools for your business &
                  everyday life.
                </p>
                <button className="btn-001">GET IN TOUCH</button>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev "
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      {/* Service */}
      <Service />
      {/* card section */}
      <Project />
      {/* Team */}
      <Team />

      <div className="container">
        <h1 className="text-center mt-5">Pricing</h1>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 mt-4 d-flex justify-content-center align-items-center">
          {/* Card 1 */}
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="card w-100 border-0 mb-3 col-12">
              <div className="card-body crd-3bdr d-flex justify-content-center flex-column align-items-center">
                <h6 className="card-title fw-medium mt-4">BASIC</h6>
                <h3
                  className="card-title fw-medium"
                  style={{ letterSpacing: "1.8px" }}
                >
                  $500.00
                </h3>
                <h6
                  className="card-title fw-medium text-uppercase"
                  style={{ fontSize: "12px", letterSpacing: "1.8px" }}
                >
                  STARTING AT
                </h6>
                <div
                  className="main-tick mt-2"
                  style={{ borderTop: "1px solid rgb(93, 98, 100)" }}
                >
                  <div className="tick d-flex mt-4 align-items-baseline gap-3">
                    <span style={{ color: "#007bff" }}>✔</span>
                    <p style={{ fontSize: "13px" }}>Concept Development</p>
                  </div>
                  <div className="tick d-flex align-items-baseline gap-3">
                    <span style={{ color: "#007bff" }}>✔</span>
                    <p style={{ fontSize: "13px" }}>UI design</p>
                  </div>
                  <div
                    className="tick d-flex align-items-baseline gap-3"
                    style={{ color: "rgb(93, 98, 100)" }}
                  >
                    <span>✔</span>
                    <p style={{ fontSize: "13px" }}>Configuration management</p>
                  </div>
                  <div
                    className="tick d-flex align-items-baseline gap-3"
                    style={{ color: "rgb(93, 98, 100)" }}
                  >
                    <span>✔</span>
                    <p style={{ fontSize: "13px" }}>
                      Software quality assurance
                    </p>
                  </div>
                  <div
                    className="tick d-flex align-items-baseline gap-3"
                    style={{ color: "rgb(93, 98, 100)" }}
                  >
                    <span>✔</span>
                    <p style={{ fontSize: "13px" }}>App integration</p>
                  </div>
                </div>
              </div>
              <div
                className="card-footer text-center text-white fw-medium"
                style={{ background: "rgb(73, 76, 81)" }}
              >
                Get Started
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="card w-100 border-0 mb-3 col-12">
              <div className="card-body crd-3bdr d-flex justify-content-center flex-column align-items-center">
                <h6 className="card-title fw-medium mt-4">OPTIMAL</h6>
                <h3
                  className="card-title fw-medium"
                  style={{ letterSpacing: "1.8px" }}
                >
                  $800.00
                </h3>
                <h6
                  className="card-title fw-medium text-uppercase"
                  style={{ fontSize: "12px", letterSpacing: "1.8px" }}
                >
                  STARTING AT
                </h6>
                <div
                  className="main-tick mt-2"
                  style={{ borderTop: "1px solid rgb(93, 98, 100)" }}
                >
                  <div className="tick d-flex mt-4 align-items-baseline gap-3">
                    <span style={{ color: "#007bff" }}>✔</span>
                    <p style={{ fontSize: "13px" }}>Concept Development</p>
                  </div>
                  <div className="tick d-flex align-items-baseline gap-3">
                    <span style={{ color: "#007bff" }}>✔</span>
                    <p style={{ fontSize: "13px" }}>UI design</p>
                  </div>
                  <div className="tick d-flex align-items-baseline gap-3">
                    <span style={{ color: "#007bff" }}>✔</span>
                    <p style={{ fontSize: "13px" }}>Configuration management</p>
                  </div>
                  <div className="tick d-flex align-items-baseline gap-3">
                    <span style={{ color: "#007bff" }}>✔</span>
                    <p style={{ fontSize: "13px" }}>
                      Software quality assurance
                    </p>
                  </div>
                  <div
                    className="tick d-flex align-items-baseline gap-3"
                    style={{ color: "rgb(93, 98, 100)" }}
                  >
                    <span>✔</span>
                    <p style={{ fontSize: "13px" }}>App integration</p>
                  </div>
                </div>
              </div>
              <div
                className="card-footer text-center text-white fw-medium"
                style={{ background: "#007bff" }}
              >
                Get Started
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-sm-12 crd-99 col-md-6 col-lg-4">
            <div className="card w-100 border-0 mb-3 col-12">
              <div className="card-body crd-3bdr text-white d-flex justify-content-center flex-column align-items-center">
                <h6 className="card-title fw-medium mt-4">ULTIMATE</h6>
                <h3
                  className="card-title fw-medium"
                  style={{ letterSpacing: "1.8px" }}
                >
                  $1200.00
                </h3>
                <h6
                  className="card-title fw-medium text-uppercase"
                  style={{ fontSize: "12px", letterSpacing: "1.8px" }}
                >
                  STARTING AT
                </h6>
                <div
                  className="main-tick mt-2"
                  style={{ borderTop: "1px solid rgb(93, 98, 100)" }}
                >
                  <div className="tick d-flex mt-4 align-items-baseline gap-3">
                    <span style={{ color: "#007bff" }}>✔</span>
                    <p style={{ fontSize: "13px" }}>Concept Development</p>
                  </div>
                  <div className="tick d-flex align-items-baseline gap-3">
                    <span style={{ color: "#007bff" }}>✔</span>
                    <p style={{ fontSize: "13px" }}>UI design</p>
                  </div>
                  <div className="tick d-flex align-items-baseline gap-3">
                    <span style={{ color: "#007bff" }}>✔</span>
                    <p style={{ fontSize: "13px" }}>Configuration management</p>
                  </div>
                  <div className="tick d-flex align-items-baseline gap-3">
                    <span style={{ color: "#007bff" }}>✔</span>
                    <p style={{ fontSize: "13px" }}>
                      Software quality assurance
                    </p>
                  </div>
                  <div className="tick d-flex align-items-baseline gap-3">
                    <span style={{ color: "#007bff" }}>✔</span>
                    <p style={{ fontSize: "13px" }}>App integration</p>
                  </div>
                </div>
              </div>
              <div
                className="card-footer text-center text-white fw-medium"
                style={{ background: "rgb(73, 76, 81)" }}
              >
                Get Started
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mb-5 mt-5">
        <div className="row d-flex gap-2 justify-content-center">
          {/* Box 1 */}
          <div className="col-sm-12 border border-dark bx d-flex flex-column justify-content-center align-items-center col-md-6 col-lg-3">
            <div className="logo mt-4">
              <img
                src="images/smartphone.png"
                alt="smartphone images"
                height="80px"
                width="80px"
              />
            </div>
            <div className="text-99 mt-3">
              <p>+1 323-913-4688</p>
              <p>+1 323-888-4554</p>
            </div>
          </div>

          {/* Box 2 */}
          <div className="col-sm-12 border border-dark bx d-flex flex-column justify-content-center align-items-center col-md-6 col-lg-3">
            <div className="logo mt-4">
              <img
                src="images/home.png"
                alt="home icon"
                height="90px"
                width="80px"
              />
            </div>
            <div className="text-99 mt-3">
              <p className="m-auto bx text-center">
                4730 Crystal Springs Dr, Los Angeles, CA 90027
              </p>
            </div>
          </div>

          {/* Box 3 */}
          <div className="col-sm-12 bx border border-dark d-flex flex-column justify-content-center align-items-center col-md-6 col-lg-3">
            <div className="logo mt-4">
              <img
                src="images/bubble-chat.png"
                alt="bubble"
                height="80px"
                width="80px"
              />
            </div>
            <div className="text-99 mt-3">
              <p>mailde'@'molink.org</p>
              <p>infode'@'molink.org</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5 g-0">
        <div className="row">
          <div className="col-md-12">
            <div className="input-group gap-2">
              <input
                type="text"
                className="form-control"
                placeholder="Your Name"
              />
              <input
                type="email"
                className="form-control"
                placeholder="E-mail"
              />
              <input type="text" className="form-control" placeholder="Phone" />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 mt-3">
            <div className="message-box">
              <textarea
                className="form-control"
                rows="5"
                placeholder="Message"
                style={{
                  background: "rgb(239, 239, 239)",
                  fontWeight: 600,
                  height: "180px",
                }}
              ></textarea>
            </div>
          </div>
        </div>
        <button className="btn-001 mt-5 mb-3">GET IN TOUCH</button>
      </div>
    </>
  );
}

export default Home;
