import React from "react";
import { Link } from "react-router-dom";
import "./styles/footer.css";
import "./Home";
import "./Updates";
import "./Contribute";

export default function Footer() {
  return (
    <div className="mt-5">
      <footer className="text-center text-lg-start text-dark">
        <section className="d-flex justify-content-between p-4 bg-light text-dark">
          <div className="me-5">
            <span>Around social media platforms:</span>
          </div>

          <div>
            <a href="/" className="text-dark me-4">
              <i className="fab fa-facebook-f fa-flip"></i>
            </a>
            <a href="/" className="text-dark me-4">
              <i className="fab fa-twitter fa-flip"></i>
            </a>
            <a href="/" className="text-dark me-4">
              <i className="fab fa-google fa-flip"></i>
            </a>
            <a href="/" className="text-dark me-4">
              <i className="fab fa-instagram fa-flip"></i>
            </a>
            <a href="/" className="text-dark me-4">
              <i className="fab fa-linkedin fa-flip"></i>
            </a>
            <a href="/" className="text-dark me-4">
              <i className="fab fa-github fa-flip"></i>
            </a>
            <a href="/" className="text-dark me-4">
              <i className="fab fa-youtube fa-flip"></i>
            </a>
          </div>
        </section>

        <section className="bg-light">
          <div className="container text-center text-md-start mt-4">
            <div className="row mt-4">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 mt-4">
                <h6 className=" fw-bold">SAHyatra</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto hr1" />
                <p className="text-dark">
                  Security Application for Hassle-free travel
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 mt-4">
                <h6 className="text-uppercase fw-bold">Our Team</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto hr2" />
                <p>
                  <a
                    href="https://www.linkedin.com/in/amrit-dhandharia-0766791b6/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-dark"
                  >
                    Amrit Dhandharia
                  </a>
                </p>
                <p>
                  <a
                    href="https://www.linkedin.com/in/barna-debnath-5655b0205/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-dark"
                  >
                    Barna Debnath
                  </a>
                </p>
                <p>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/chirantan-das-0a45ab20b/"
                    className="text-dark"
                  >
                    Chirantan Das
                  </a>
                </p>
                <p>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/kamal-singh-5189b0209/"
                    className="text-dark"
                  >
                    Kamal Singh
                  </a>
                </p>
                <p>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/sanjibkumardas-webdev/"
                    className="text-dark"
                  >
                    Sanjib Kumar Das
                  </a>
                </p>
                <p>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/sourav-biswas-ml-ai-dl/"
                    className="text-dark"
                  >
                    Sourav Biswas
                  </a>
                </p>
                <p>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/sumit-gupta-sgp-168109151/"
                    className="text-dark"
                  >
                    Mr. Sumit Gupta (Mentor)
                  </a>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 mt-4">
                <h6 className="text-uppercase fw-bold">Nav links</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto hr3" />
                <p>
                  <Link to="/" className="text-dark">
                    Home
                  </Link>
                </p>
                <p>
                  <Link to="/updates" className="text-dark">
                    Updates
                  </Link>
                </p>
                <p>
                  <Link to="/contribute" className="text-dark">
                    Contribute
                  </Link>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 mt-4 last">
                <h6 className="text-uppercase fw-bold">Contact Us</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto hr4" />
                <p>
                  <i className="fa-solid fa-map-location-dot mr-3"></i> UIT
                  Campus, Burdwan
                  <p> West Bengal, India</p>
                </p>
                <p>
                  <i className="fas fa-envelope mr-3"></i> teamudvaban@gmail.com
                </p>
                <p>
                  <i className="fas fa-phone mr-3"></i>{" "}
                  <a href="tel: 6289181751">+91 1234 567 890</a>
                </p>
                <div className="div">
                  <p>
                    {/* <label
                    htmlFor="validationDefault02"
                    className="form-label text-bold qfont text-dark"
                  ></label> */}
                    <div className="input-group">
                      <input
                        type="email"
                        placeholder="Email ID"
                        className="form-control"
                        id="validationDefaultMail"
                        aria-describedby="inputGroupPrepend2"
                        name="mail"
                        autoComplete="off"
                      />
                    </div>
                  </p>
                  <p>
                    <textarea
                      className="form-control mt-1"
                      id="exampleFormControlTextarea7"
                      rows="2"
                      placeholder="Give your feedback here"
                      name="love"
                    ></textarea>
                  </p>
                  <p className="d-flex justify-content-end">
                    <button
                      type="button"
                      className="btn btn-primary btn-sm align-center"
                    >
                      Send
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center p-3 bg-muted text-muted">
          © 2022 Copyright: &nbsp;
          <a className="text-muted" href="/">
            Team UDVABAN
          </a>
        </div>
      </footer>
    </div>
  );
}
