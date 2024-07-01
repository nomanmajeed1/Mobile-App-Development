import React from "react";

function Project() {
  return (
    <>
      <div className="container mt-5 custom-container">
        <div
          className="row position-relative"
          style={{ margin: "7% 10% 0% 0%" }}
        >
          <div
            className="col-lg-6 end-0 position-absolute"
            style={{ margin: "11% 0% 50% 50%" }}
          >
            <h4 className="mt-5">Let's Develop Your Next Great App!</h4>
            <p style={{ fontSize: "12px" }}>
              Do you need a unique software solution for your company? We know
              how to help you!
            </p>
            <div className="btn-grp">
              <button className="btn-001 mx-2">GET IN TOUCH</button>
              <button className="btn-001 ">LEARN MORE</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="center-container">
          <div className="center-container-inner">
            <h2>Latest Projects</h2>
            <p
              className="mt-4 fw-medium"
              style={{ fontSize: "15px", textAlign: "center" }}
            >
              In our portfolio, you can browse the latest products developed for
              <br />
              our clients for different corporate purposes. Our qualified team
              of <br />
              interface designers and software developers is always ready to
              <br />
              create something unique for you.
            </p>
          </div>
        </div>
      </div>
      <div className="main-card-section border-top">
        <div className="container mt-4">
          <div className="row">
            <div className="col-12">
              <nav className="navbar mb-4 d-flex justify-content-center navbar-expand-lg navbar-light">
                <button
                  className="navbar-toggler"
                  type="button"
                  id="btn6"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav2"
                  aria-controls="navbarNav2"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span>Lates Projects</span>
                </button>
                <div
                  className="collapse navbar-collapse justify-content-center align-items-center"
                  id="navbarNav2"
                >
                  <ul className="navi-card navbar-nav d-flex mt-4 gap-4">
                    <li className="nav-item">
                      <a className="active a-link text-primary" href="/">
                        All
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="a-link" href="/">
                        Mobile Apps
                      </a>
                    </li>
                    <li className="nav-item" id="#mm">
                      <a className="a-link" href="/">
                        Custom Software
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="a-link" href="/">
                        QA & Testing
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="a-link" href="/">
                        UX and Design
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
        <div className="container mt-4">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <div className="col" key={index}>
                <div className="content">
                  <div className="content-overlay"></div>
                  <img
                    className="content-image"
                    src={`images/img-${index + 1}.jpg`}
                    alt={`Project ${index + 1}`}
                  />
                  <div className="content-details fadeIn-top fadeIn-left p-4">
                    <div className="search d-flex gap-3">
                      <img
                        src="images/zoom-in.png"
                        alt="img"
                        height="30px"
                        width="30px"
                      />
                      <h6 className="text-primary">{`Project ${index + 1}`}</h6>
                    </div>
                    <p style={{ fontSize: "14px", marginTop: "10px" }}>
                      Description of Project {index + 1}. Provide more details
                      here.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
