import React from "react";
import { Link } from "react-router-dom";
import "./styles/navbar.css";
import navpic from "./images/SAH_Logo.png";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-gradient bg-dark ">
        <div className="container-fluid">
          <img className="" src={navpic} alt="" height="80" width="80" />
          <Link className="navbar-brand col-md-1 mx-3 text-center" to="/">
            SAHyatra
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav nav justify-content-left mr-auto mx-2 d-flex justify-content-center">
              <li className="nav-item active">
                <Link className="nav-link" aria-current="page" to="/">
                  <p className="text-center demo">
                    Home
                    <br />
                    मुख पृष्ठ
                  </p>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="about">
                  <p className="text-center">
                    About Us
                    <br />
                    हमारे बारे में
                  </p>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="latestnews">
                  <p className="text-center">
                    Latest News
                    <br />
                    नवीनतम
                  </p>
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="travelogue">
                  <p className="text-center">
                    Travelogue
                    <br />
                    सफ़रनामा
                  </p>
                </Link>
              </li>

              {/* <li className="nav-item">
                <Link className="nav-link" to="goodgraph">
                  <p className="text-center">
                    Good graph
                    <br />
                    hindi
                  </p>
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="latestnews">
                  <p className="text-center">
                    Bad graph
                    <br />
                    hindi
                  </p>
                </Link>
              </li> */}

              <li className="nav-item">
                <Link className="nav-link" to="?">
                  <p
                    className="text-center fa-beat text-warning fab1"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasWithBothOptions"
                    aria-controls="offcanvasWithBothOptions"
                  >
                    Helpline
                    <br />
                    हेल्पलाइन
                  </p>
                </Link>
              </li>

              <div className="whatsapp nav-item">
                <a
                  href="https://wa.me/+916289181751"
                  target="_blank"
                  rel="noreferrer"
                  className="nav-link text-center"
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                  title="Send SOS"
                >
                  <i className="fab mt-3 fa-brands fa-whatsapp-square fa-3x fa-bounce"></i>
                </a>
              </div>

              {/* <li className="nav-item searchbar">
                <form className="form-inline my-2 my-lg-0 d-flex justify-content-between col-md-4">
                  <input
                    className="form-control mr-sm-2 mx-2 search"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button
                    className="btn btn-outline-primary my-2 my-sm-0"
                    type="submit"
                  >
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </button>
                </form>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>

      {/* Start */}

      <div
        className="offcanvas offcanvas-end"
        // data-bs-scroll="true"
        tabIndex="-1"
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
      >
        <div className="offcanvas-header">
          <div className="">
            <h5
              className="offcanvas-title align-self-center"
              id="offcanvasWithBothOptionsLabel"
            >
              At your service (Tap to call)
            </h5>
          </div>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <p>
            <br />
            <button className="btn btn-primary shadow">
              <a href="tel:6289181751" className="text-white">
                <i className="fa-solid fa-virus-covid"></i> 1075
              </a>
            </button>{" "}
            Covid19 Helpline
          </p>
          <p>
            <br />
            <button className="btn btn-primary shadow">
              <a href="tel:6289181751" className="text-white">
                <i className="fa-solid fa-person-hiking"></i>&nbsp; 1363
              </a>
            </button>{" "}
            Tourist Helpline
          </p>
          <p>
            <br />
            <button className="btn btn-primary shadow">
              <a href="tel:6289181751" className="text-white">
                <i className="fa-solid fa-building-shield"></i>&nbsp;&nbsp; 100
              </a>
            </button>{" "}
            Police Helpline
          </p>
          <p>
            <br />
            <button className="btn btn-primary shadow">
              <a href="tel:6289181751" className="text-white">
                <i className="fa-solid fa-fire-extinguisher"></i>
                &nbsp;&nbsp;&nbsp; 101
              </a>
            </button>{" "}
            Fire Emergency
          </p>
          <p>
            <br />
            <button className="btn btn-primary shadow">
              <a href="tel:6289181751" className="text-white">
                <i className="fa-solid fa-truck-medical"></i> &nbsp;&nbsp;102
              </a>
            </button>{" "}
            Ambulance Emeergency
          </p>
          <p>
            <br />
            <button className="btn btn-primary shadow">
              <a href="tel:6289181751" className="text-white">
                <i className="fa-solid fa-venus"></i>&nbsp;&nbsp; 1091
              </a>
            </button>{" "}
            Women Helpline
          </p>
          <p>
            <br />
            <button className="btn btn-primary shadow">
              <a href="tel:6289181751" className="text-white">
                <i className="fa-solid fa-person-cane"></i>&nbsp; 14567
              </a>
            </button>{" "}
            Senior Citizen Helpline
          </p>
          <p>
            <br />
            <button className="btn btn-primary shadow">
              <a href="tel:6289181751" className="text-white">
                <i className="fa-solid fa-baby"></i>&nbsp;&nbsp; 1098
              </a>
            </button>{" "}
            Child Abuse Helpline
          </p>
          <p>
            <br />
            <button className="btn btn-primary shadow">
              <a href="tel:6289181751" className="text-white">
                <i className="fa-solid fa-cloud-showers-water"></i>
                &nbsp;&nbsp;&nbsp; 108
              </a>
            </button>{" "}
            Disaster Mangement
          </p>
          <p>
            <br />
            <button className="btn btn-primary shadow">
              <a href="tel:6289181751" className="text-white">
                <i className="fa-solid fa-train-subway"></i>
                &nbsp;&nbsp;&nbsp;&nbsp; 139&nbsp;
              </a>
            </button>{" "}
            Railway Enquiry
          </p>
          <p>
            <br />
            <button className="btn btn-primary shadow">
              <a href="tel:6289181751" className="text-white">
                <i className="fa-solid fa-road"></i>&nbsp;&nbsp; 1073
              </a>
            </button>{" "}
            Road Accident Emergency
          </p>
          <p>
            <br />
            <button className="btn btn-primary shadow">
              <a href="tel:6289181751" className="text-white">
                <i className="fa-solid fa-earth-asia"></i> 155620
              </a>
            </button>{" "}
            Cyber Crime Helpline
          </p>

          <div className="dropdown-divider bg-muted mt-5"></div>
          <p className="mt-2 text-center">
            <br />
            <button className="btn btn-primary shadow">
              <a href="tel:6289181751" className="text-white">
                <i className="fa-solid fa-phone"></i> 1800-111-363
              </a>
            </button>{" "}
            <p className="mt-3"> Tourist Helpline (Toll-free)</p>
          </p>
        </div>
        <div className="dropdown-divider bg-muted mt-5"></div>
        <p className="text-center text-muted">
          <br />
          For any other query you may contact teamudvaban@gmail.com
        </p>
      </div>
      {/* End */}
    </>
  );
}
