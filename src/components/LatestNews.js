import React from "react";
import "./styles/latestnews.css";

import Fade from "react-reveal/Fade";

export default function LatestNews() {
  return (
    <>
      <div className="container">
        <Fade delay={100} top>
          <div className="row main">
            <div className="col-lg-6">
              <div className="card mb-3 shadow">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src="https://i.postimg.cc/KvT2gkf2/taj.jpg"
                      className="img-fluid rounded-start pic"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title text-success fs-6">
                        #tajmahal
                      </h5>
                      <p className="card-text">
                        <span className="fs-5">
                          More footfalls at TajMahal on the last day of Shah
                          Jahan's Urs
                        </span>
                      </p>
                      <hr className="dropdown-divider"></hr>
                      <p className="card-text">
                        <small className="text-muted ">
                          Last updated 3 mins ago
                        </small>
                        <div className="btn btn-primary btn-sm btngap">
                          <a
                            href="https://timesofindia.indiatimes.com/travel/travel-news/taj-mahal-experiences-over-2-lakh-footfalls-on-the-last-day-of-shah-jahans-urs/as89960474.cms"
                            className="text-white"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Read More
                          </a>
                        </div>
                        <span class="position-absolute top-0 start-99 translate-middle badge rounded-pill bg-danger">
                          Times of India
                          <span class="visually-hidden">unread messages</span>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fade>
        <Fade delay={300} top>
          <div className="row">
            <div className="col-3"></div>
            <div className="col-3"></div>
            <div className="col-lg-6">
              <div className="card mb-3 shadow">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src="https://i.postimg.cc/13ZZ0m7N/golden.jpg"
                      className="img-fluid rounded-start pic"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title text-success fs-6">
                        #goldentemple
                      </h5>
                      <p className="card-text">
                        <span className="fs-5">
                          Woman caught smoking in Golden Temple complex
                        </span>
                      </p>
                      <hr className="dropdown-divider"></hr>
                      <p className="card-text">
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                        <div className="btn btn-primary btn-sm btngap">
                          <a
                            href="https://timesofindia.indiatimes.com/city/amritsar/woman-caught-smoking-in-golden-temple-complex/articleshow/90302024.cms"
                            className="text-white"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Read More
                          </a>
                        </div>
                        <span class="position-absolute top-0 start-99 translate-middle badge rounded-pill bg-danger">
                          Hindustan Times
                          <span class="visually-hidden">unread messages</span>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fade>
        <Fade delay={500} top>
          <div className="row">
            <div className="col-lg-6">
              <div className="card mb-3 shadow">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src="https://i.postimg.cc/6pLxYkFb/redfort.jpg"
                      className="img-fluid rounded-start pic"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title text-success fs-6">#redfort</h5>
                      <p className="card-text">
                        <span className="fs-5">
                          Delhi’s Red Fort is hosting 10-day cultural event till
                          April 3
                        </span>
                      </p>
                      <hr className="dropdown-divider"></hr>
                      <p className="card-text">
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                        <div className="btn btn-primary btn-sm btngap">
                          <a
                            href="https://timesofindia.indiatimes.com/travel/travel-news/delhis-red-fort-is-hosting-10-day-cultural-event-till-april-3/as90444575.cms"
                            className="text-white"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Read More
                          </a>
                        </div>
                        <span class="position-absolute top-0 start-99 translate-middle badge rounded-pill bg-danger">
                          Zee News
                          <span class="visually-hidden">unread messages</span>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fade>
        <Fade delay={700} top>
          <div className="row ">
            <div className="col-3"></div>
            <div className="col-3"></div>
            <div className="col-lg-6">
              <div className="card mb-3 shadow">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src="https://i.postimg.cc/wBq8PWpq/mysore.webp"
                      className="img-fluid rounded-start pic"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title text-success fs-6">#mysore</h5>
                      <span className="fs-5">
                        Mysore's Iconic Lalitha Mahal Palace Turns 100
                      </span>
                      <hr className="dropdown-divider"></hr>
                      <p className="card-text">
                        <small className="text-muted ">
                          Last updated 3 mins ago
                        </small>
                        <div className="btn btn-primary btn-sm btngap">
                          <a
                            href="https://www.ndtv.com/india-news/in-pics-mysurus-iconic-lalitha-mahal-palace-turns-100-2616256"
                            className="text-white"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Read More
                          </a>
                        </div>
                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                          NDTV
                          <span class="visually-hidden">unread messages</span>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>

      <hr className="horizontal-line container mt-5" />
      <h2 className="offbeat text-center">Top Offbeat Destinations</h2>
      {/* Offbeat Destination */}
      <div class="container my-5" id="featured">
        <div class="row">
          <div class="col-6 ">
            <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow h-md-250 position-relative">
              <div class="col p-4 d-flex flex-column position-static">
                <strong class="d-inline-block mb-2 text-danger">
                  #waterfalls
                </strong>
                <h4 class="mb-0">Gokak Falls</h4>
                <div class="mb-1 text-muted">Nov 12</div>
                <p class="card-text mb-auto">
                  The Gokak Falls, popularly known as "the Niagara of India," is
                  one of the country's prettiest waterfalls.
                </p>
                <a href="?" class="stretched-link">
                  Details
                </a>
              </div>
              <div class="col-auto d-none d-lg-block">
                <img
                  src="https://c1.wallpaperflare.com/preview/322/712/42/waterfall-falls-ghataprabha-river.jpg"
                  class=" bd-placeholder-img img-fluid my-5 rounded"
                  width="200"
                  height="250"
                  alt="..."
                />
              </div>
            </div>
          </div>

          <div class="col-6 ">
            <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow h-md-250 position-relative">
              <div class="col p-4 d-flex flex-column position-static">
                <strong class="d-inline-block mb-2 text-primary">
                  #indian_mountains
                </strong>
                <h4 class="mb-0">Abott Mount</h4>
                <div class="mb-1 text-muted">Nov 12</div>
                <p class="card-text mb-auto">
                  Abbott Mount is an unsung hillside which has managed to retain
                  its natural charm and splendor for over a century.
                </p>
                <a href="?" class="stretched-link">
                  Details
                </a>
              </div>
              <div class="col-auto d-none d-lg-block">
                <img
                  src="https://t4.ftcdn.net/jpg/03/66/16/59/240_F_366165950_xzKotRGoqwh0QeB4wz3RjV8SsRKGp88d.jpg"
                  class=" bd-placeholder-img img-fluid my-5 rounded"
                  width="200"
                  height="250"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-6 ">
            <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow h-md-250 position-relative">
              <div class="col p-4 d-flex flex-column position-static">
                <strong class="d-inline-block mb-2 text-warning">
                  #heaven_on_earth
                </strong>
                <h4 class="mb-0">Baramulla</h4>
                <div class="mb-1 text-muted">Nov 12</div>
                <p class="card-text mb-auto">
                  Baramulla, also known as Varmul, is a city and a municipality
                  in the Baramulla district in the Indian union territory of
                  Jammu and Kashmir.
                </p>
                <a href="?" class="stretched-link">
                  Details
                </a>
              </div>
              <div class="col-auto d-none d-lg-block">
                <img
                  src="https://t3.ftcdn.net/jpg/04/38/05/04/240_F_438050449_NgURkK0kcx4MCVr7g8EPs5oEWZFcQ1Ad.jpg"
                  class=" bd-placeholder-img img-fluid my-5 rounded"
                  width="200"
                  height="250"
                  alt="..."
                />
              </div>
            </div>
          </div>

          <div class="col-6 ">
            <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow h-md-250 position-relative">
              <div class="col p-4 d-flex flex-column position-static">
                <strong class="d-inline-block mb-2 text-success">
                  #queen_of_northeast
                </strong>
                <h4 class="mb-0">Tawang</h4>
                <div class="mb-1 text-muted">Nov 12</div>
                <p class="card-text mb-auto">
                  Tawang is situated 448 km north-west of state capital Itanagar
                  at an elevation of approximately 3,048 metres (10,000 ft).
                </p>
                <a href="?" class="stretched-link">
                  Details
                </a>
              </div>
              <div class="col-auto d-none d-lg-block">
                <img
                  src="https://t3.ftcdn.net/jpg/03/64/00/30/240_F_364003001_kD5vKvijzZcRLD0kPKqQuP7CFrWDQxP1.jpg"
                  class=" bd-placeholder-img img-fluid my-5 rounded"
                  width="200"
                  height="250"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
