/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";

function Footer() {
  return (
    <>
      <footer
        className="section section-fluid mt-5  "
        style={{ background: "rgb(27, 25, 41)" }}
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-auto col-lg-12">
              <ul className="footer-list list-unstyled d-flex justify-content-center gap-2 text-decoration-none">
                <li>
                  <a href="/">UI Design</a>
                </li>
                <li>
                  <a href="/">Windows/Mac OS Apps</a>
                </li>
                <li>
                  <a href="/">Android/iOS Apps</a>
                </li>
                <li>
                  <a href="/">Cloud Solutions</a>
                </li>
                <li style={{ borderRight: "none" }}>
                  <a href="/">Customer Support</a>
                </li>
              </ul>
            </div>
            <div
              className="col-md-12 col-lg-12 mt-5 g-0"
              style={{ borderTop: "1px solid #7a78785b" }}
            >
              <ul className="list-inline gap-4 mt-4 d-flex justify-content-center align-items-center">
                <li>
                  <a className="icon fab fa-facebook" href="/"></a>
                </li>
                <li>
                  <a className="icon fab fa-twitter" href="/"></a>
                </li>
                <li>
                  <a className="icon fab fa-google-plus" href="/"></a>
                </li>
                <li>
                  <a className="icon fab fa-instagram" href="/"></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
