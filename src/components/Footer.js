import React from "react";
import { Link } from "react-router-dom";
import "./styles/footer.css";
import "./Home";
import "./LatestNews";
import "./Travelogue";

export default function Footer() {
  return (
    <div className="mt-5">
      <footer className="text-center text-lg-start text-dark">
        <section className="d-flex justify-content-between p-4 bg-light text-dark shadow">
          <div className="me-5">
            <span>Be our SAHyatri </span>
          </div>

          <div>
            <a
              href="https://www.facebook.com/SAHyatra-101525415857068"
              target="_blank"
              rel="noreferrer"
              className="text-dark me-4"
            >
              <i className="fab fa-facebook fa-flip"></i>
            </a>
            <a
              href="https://twitter.com/SAH_yatra"
              target="_blank"
              rel="noreferrer"
              className="text-dark me-4"
            >
              <i className="fab fa-twitter fa-flip"></i>
            </a>

            <a
              href="https://bit.ly/3tEtatE"
              target="_blank"
              rel="noreferrer"
              className="text-dark me-4"
            >
              <i className="fab fa-linkedin fa-flip"></i>
            </a>
            <a
              href="https://bit.ly/3iFCffm"
              target="_blank"
              rel="noreferrer"
              className="text-dark me-4"
            >
              <i className="fab fa-github fa-flip"></i>
            </a>
            <a
              // href="https://bit.ly/3qFvDlv"
              href="https://www.youtube.com/"
              target="_blank"
              rel="noreferrer"
              className="text-dark me-4"
            >
              <i className="fab fa-youtube fa-flip"></i>
            </a>
          </div>
        </section>

        <section className="bg-light shadow ">
          <div className="container text-center text-md-start mt-4">
            <div className="row mt-4">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 mt-4">
                <h6 className=" fw-bold">SAHyatra</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto hr1" />
                <p className="text-dark">
                  <p className="just">
                    SAHyatra: Security Application for Hassle-free Travel, aims
                    to revolutionize the tourism industry by earmarking the
                    safety and security standards of tourist destinations and
                    meets three-fold objectives:
                  </p>
                  <ul>
                    <li>Travel Recommendation System</li>
                    <li>Grievance Monitoring System</li>
                    <li>Quality Improvement System</li>
                  </ul>
                  <p className="just">
                    Three crucial performance metrics include:
                  </p>
                  <ul>
                    <li>Suraksha Score</li>
                    <li>Swachhta Ratings</li>
                    <li>Savdhaan Meter</li>
                  </ul>
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 mt-4">
                <h6 className="text-uppercase fw-bold">Our Team</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto hr2" />
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
                    className="text-dark "
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
                    Prof. Sumit Gupta (Mentor)
                  </a>
                </p>
                {/* ALAN AI */}
                {/* <h6 className="fw-bold mt-4">Alan AI</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto hr2" />
                <p className="just">
                  Alan AI - Fully voice automated auditory bot that will read
                  out every minute details of a place that a tourist asks for
                  and specially visually impair tourists.
                </p> */}
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 mt-4">
                <h6 className="text-uppercase fw-bold">Nav links</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto hr3" />
                <p>
                  <Link to="/" className="text-dark">
                    Home / मुख पृष्ठ
                  </Link>
                </p>
                <p>
                  <Link to="/about" className="text-dark">
                    About Us / हमारे बारे में
                  </Link>
                </p>
                <p>
                  <Link to="/latestnews" className="text-dark">
                    Latest News / नवीनतम
                  </Link>
                </p>
                <p>
                  <Link to="/travelogue" className="text-dark">
                    Travelogue / सफ़रनामा
                  </Link>
                </p>
                <p>
                  <Link to="/analysis" className="text-dark">
                    Analysis / विश्लेषण
                  </Link>
                </p>
                <p>
                  <Link
                    to="?"
                    className="text-dark"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasWithBothOptions"
                    aria-controls="offcanvasWithBothOptions"
                  >
                    Helpline / हेल्पलाइन
                  </Link>
                </p>
                {/* Chatbot */}
                <h6 className="fw-bold mt-4">YatraMon</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto hr2" />
                <p className="just">
                  YatraMon - Your Safe and Secure Travel AI Assistance to guide
                  you through any kind of doubts and assistance you need during
                  your journey.
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
                  <a href="tel: 6290374022">1800 111 363</a>
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
            UDVABAN
          </a>
        </div>
      </footer>
    </div>
  );
}
