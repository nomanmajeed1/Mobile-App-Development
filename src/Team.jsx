import React from "react";

function Team() {
  return (
    <>
      <div className="container mt-5 px-6">
        <div className="row d-flex justify-content-center">
          <div className="left-side g-0 col-lg-7 d-flex justify-content-center p-3 col-md-12">
            <div className="img-10 mt-1 col-5">
              <img
                src="images/b-removebg-preview.png"
                height="100%"
                width="250px"
                alt="image10"
                className="img-fluid"
              />
            </div>
            <div className="text-btn mx-4 col-7">
              <h2
                className="text-black p-2 px-3"
                style={{
                  borderLeft: "3px solid rgba(146, 142, 142, 0.583)",
                  fontSize: "25px",
                  letterSpacing: "1px",
                }}
              >
                Year Of
                <br />
                Experience
              </h2>
              <p
                style={{
                  fontSize: "12px",
                  width: "95%",
                  fontWeight: "700",
                  marginTop: "10px",
                  color: "rgba(146, 142, 142, 0.786)",
                }}
              >
                RatherApp is a team of highly
                <br />
                experienced app designers and
                <br />
                developers creating unique software for
                <br />
                you.
              </p>
              <button
                className="btn-001 py-2"
                style={{ fontSize: "10px", width: "40%" }}
              >
                GET IN TOUCH
              </button>
            </div>
          </div>
          {/* Right Side */}
          <div className="right-side col-lg-5 col-md-12">
            {/* Card 1 */}
            <div className="crd-t h-50 d-flex">
              <div className="crd-0001 text-black border-end gap-0 w-50">
                <h1 className="num">
                  2<span style={{ fontSize: "50px" }}>K</span>
                </h1>
                <h6 style={{ color: "rgb(160, 160, 156)" }}>APPS DEVELOPED</h6>
              </div>
              <div className="crd-0001 text-black w-50">
                <h1 className="num">40</h1>
                <h6 style={{ color: "rgb(160, 160, 156)" }}>CONSULTANTS</h6>
              </div>
            </div>
            {/* Card 2 */}
            <div className="crd-b d-flex border-top h-50">
              <div className="crd-0001 border-end w-50">
                <h1 className="num">12</h1>
                <h6 style={{ color: "rgb(160, 160, 156)" }}>AWARDS WON</h6>
              </div>
              <div className="crd-0001 w-50">
                <h1 className="num">160</h1>
                <h6 style={{ color: "rgb(160, 160, 156)" }}>EMPLOYEES</h6>
              </div>
            </div>
          </div>
        </div>

        {/* Logo Row */}
        <div className="container mt-5">
          {/* Logo Row */}
          <div className="row">
            <div className="logo col-12 gap-3 d-flex justify-content-center">
              <div className="img-01">
                <img
                  src="images/clients-2.png"
                  alt="client image1"
                  className="img-fluid"
                />
              </div>
              <div className="img-01">
                <img
                  src="images/clients-3.png"
                  alt="client image2"
                  className="img-fluid"
                />
              </div>
              <div className="img-01">
                <img
                  src="images/clients-1.png"
                  alt="client image2"
                  className="img-fluid"
                />
              </div>
              <div className="img-01">
                <img
                  src="images/clients-4.png"
                  alt="client image3"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
