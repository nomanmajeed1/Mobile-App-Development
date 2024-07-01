import React from "react";

function Service() {
  return (
    <>
      <section
        className="section section-sm section-first bg-default border-top text-center mt-5"
        id="services"
      >
        <div className="container mt-4">
          <div className="row row-30 justify-content-center align-items-center">
            <div className="col-md-7 col-lg-5 col-xl-6 text-lg-center imgee fadeInUp">
              <img
                src="images/index-1.png"
                alt="index"
                className="img-fluid"
                style={{ height: "400px", width: "280px" }}
              />
            </div>
            <div className="col-lg-7 col-xl-6">
              <div className="row g-3 mt-3">
                <div className="col-sm-6">
                  {/* card 1 */}
                  <article className="box-icon py-4 px-5 d-flex flex-column align-items-center">
                    <div>
                      <h3 className="box-icon-title">What We Offer</h3>
                      <div className="box-icon-bdr w-50 d-inline-block"></div>
                      <button
                        className="btn-001 mt-3 px-3 text-uppercase"
                        style={{ fontSize: "11px" }}
                      >
                        view all services
                      </button>
                    </div>
                  </article>
                </div>
                {/* card 2 */}
                <div className="col-sm-6">
                  <article className="box-icon py-4 px-5 d-flex flex-column align-items-center">
                    <div className="icon">
                      <img
                        src="images/call-transfer.png"
                        alt="transfer"
                        height="40px"
                        width="40px"
                      />
                    </div>
                    <h6 className="box-icon-title mt-2">
                      <a href="/" className="text-decoration-none text-black">
                        CORPORATE
                        <br />
                        SOLUTIONS
                      </a>
                    </h6>
                    <div className="box-icon-bdr w-50 d-inline-block mt-2"></div>
                    <p
                      className="box-icon-text mt-3"
                      style={{ fontSize: "11px", fontWeight: 600 }}
                    >
                      Need specific software for your company? We are ready to
                      develop it!
                    </p>
                  </article>
                </div>
                {/* card 3 */}
                <div className="col-sm-6 wow fadeInRight" data-wow-delay=".2s">
                  <article className="box-icon py-4 px-5 d-flex flex-column align-items-center">
                    <div className="box-icon-hdp">
                      <img
                        src="images/customer-service.png"
                        alt="customer"
                        height="40px"
                        width="40px"
                      />
                    </div>
                    <h6 className="box-icon-modern-title mt-2">
                      <a href="/" className="text-decoration-none text-black">
                        CALL CENTER
                        <br />
                        SOLUTIONS
                      </a>
                    </h6>
                    <div className="box-icon-bdr w-50 d-inline-block mt-2"></div>
                    <p
                      className="box-icon-text mt-2"
                      style={{ fontSize: "11px", fontWeight: 600 }}
                    >
                      Our experts provide custom products of any complexity for
                      call centers.
                    </p>
                  </article>
                </div>
                {/* card 4 */}
                <div className="col-sm-6 wow fadeInRight">
                  <article className="box-icon py-4 px-5 d-flex flex-column align-items-center">
                    <div className="box-icon-cloud">
                      <img
                        src="images/download (1).png"
                        alt="download"
                        height="47px"
                        width="43px"
                      />
                    </div>
                    <h6 className="box-icon-modern-title mt-3">
                      <a href="/" className="text-decoration-none text-black">
                        CLOUD
                        <br />
                        DEVELOPMENT
                      </a>
                    </h6>
                    <div className="box-icon-bdr w-50 d-inline-block mt-2"></div>
                    <p
                      className="box-icon-modern-text mt-2"
                      style={{ fontSize: "11px", fontWeight: 600 }}
                    >
                      We can also offer you reliable cloud development
                      solutions.
                    </p>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Service;
