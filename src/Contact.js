import React from "react";

function Contact() {
  return (
    <>
      <div className="container mb-5 mt-5 ">
        <div
          className="row d-flex gap-2 justify-content-center"
          style={{ marginTop: "5%" }}
        >
          {/* Box 1 */}
          <div className="col-sm-12 border  border-dark bx d-flex flex-column justify-content-center align-items-center col-md-6 col-lg-3">
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

export default Contact;
