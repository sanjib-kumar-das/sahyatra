import React from "react";
import { useState } from "react";
import "./styles/home.css";

import Fade from "react-reveal/Fade";

export default function Home() {
  // Counter

  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  return (
    <>
      <div className="container mb-3">
        <div className="accordion" id="accordionExample">
          {/* <h2 className="heading my-4">Home</h2> */}

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse1"
                aria-expanded="true"
                aria-controls="collapse1"
              >
                <span>
                  #1
                  <strong>&nbsp; Goa</strong>
                </span>
              </button>
            </h2>
            <div
              id="collapse1"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="row mt-2 mb-2">
                <Fade delay={200} bottom>
                  <div className="col-md-4 d-flex justify-content-around">
                    <div className="card" style={{ width: "18rem" }}>
                      <img
                        className="card-img-top"
                        height={"100%"}
                        src={
                          "https://t4.ftcdn.net/jpg/04/89/84/21/240_F_489842188_KQ5JsZ7hS2BXou7Hn0vQ9Qoyd7uHlGhn.jpg"
                        }
                        alt="Baga Beach"
                      />
                      <div className="card-body">
                        <h5 className="card-title">Baga Beach</h5>
                        <p className="card-text">
                          A beautiful place in Kolkata, West Bengal.
                        </p>
                        <p>
                          <button
                            type="button"
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop11"
                          >
                            Read More
                          </button>
                        </p>
                      </div>
                      {/* btn */}
                    </div>
                  </div>
                </Fade>
                {/* 2 */}
                <Fade delay={500} bottom>
                  <div className="col-md-4 d-flex justify-content-around">
                    <div className="card" style={{ width: "18rem" }}>
                      <img
                        className="card-img-top"
                        src={
                          "https://t4.ftcdn.net/jpg/04/04/87/75/240_F_404877562_gx8uXjf7kynGIQ7AP3crvNzXzZ2Sl2gH.jpg"
                        }
                        alt="Madgaon"
                      />
                      <div className="card-body">
                        <h5 className="card-title">Madgaon</h5>
                        <p className="card-text">
                          A beautiful place in Kolkata, West Bengal.
                        </p>
                        <p>
                          <button
                            type="button"
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop12"
                          >
                            Read More
                          </button>
                        </p>
                      </div>
                      {/* btn */}
                    </div>
                  </div>
                </Fade>
                {/* 3 */}
                <Fade delay={800} bottom>
                  <div className="col-md-4 d-flex justify-content-around">
                    <div className="card" style={{ width: "18rem" }}>
                      <img
                        className="card-img-top"
                        src={
                          "https://t4.ftcdn.net/jpg/03/33/95/99/240_F_333959940_RlovicM5b593e2Z94DzZMdPMoOoIiIa0.jpg"
                        }
                        height={"100%"}
                        alt="Panaji"
                      />
                      <div className="card-body">
                        <h5 className="card-title">Panaji</h5>
                        <p className="card-text">
                          A beautiful place in Kolkata, West Bengal.
                        </p>
                        <p>
                          <button
                            type="button"
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop13"
                          >
                            Read More
                          </button>
                        </p>
                      </div>
                      {/* btn */}
                    </div>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse2"
                aria-expanded="false"
                aria-controls="collapse2"
              >
                <span>
                  #2
                  <strong>&nbsp; Odisha</strong>
                </span>
              </button>
            </h2>
            <div
              id="collapse2"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="row mt-2 mb-2">
                <Fade delay={200} bottom>
                  <div className="col-md-4 d-flex justify-content-around">
                    <div className="card" style={{ width: "18rem" }}>
                      <img
                        className="card-img-top"
                        src={
                          "https://t4.ftcdn.net/jpg/02/94/90/97/240_F_294909747_BaFKNTF7G5j0h9nEU2UjPixUXf1Xj8Qk.jpg"
                        }
                        alt="Bhubaneshwar"
                      />
                      <div className="card-body">
                        <h5 className="card-title">Bhubaneshwar</h5>
                        <p className="card-text">
                          A beautiful place in Kolkata, West Bengal.
                        </p>
                        <p>
                          <button
                            type="button"
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop21"
                          >
                            Read More
                          </button>
                        </p>
                      </div>
                      {/* btn */}
                    </div>
                  </div>
                </Fade>
                {/* 2 */}
                <Fade delay={500} bottom>
                  <div className="col-md-4 d-flex justify-content-around">
                    <div className="card" style={{ width: "18rem" }}>
                      <img
                        className="card-img-top"
                        src={
                          "https://c4.wallpaperflare.com/wallpaper/423/223/714/photography-india-temple-sun-wallpaper-preview.jpg"
                        }
                        alt="Konark"
                      />
                      <div className="card-body">
                        <h5 className="card-title">Konark</h5>
                        <p className="card-text">
                          A beautiful place in Kolkata, West Bengal.
                        </p>
                        <p>
                          <button
                            type="button"
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop22"
                          >
                            Read More
                          </button>
                        </p>
                      </div>
                      {/* btn */}
                    </div>
                  </div>
                </Fade>
                {/* 3 */}
                <Fade delay={800} bottom>
                  <div className="col-md-4 d-flex justify-content-around">
                    <div className="card" style={{ width: "18rem" }}>
                      <img
                        className="card-img-top"
                        src={
                          "https://t4.ftcdn.net/jpg/02/82/59/49/240_F_282594919_CouepmmPcYq10g5MjRBXswsAtPaTNXOQ.jpg"
                        }
                        height={"100%"}
                        alt="Puri"
                      />
                      <div className="card-body">
                        <h5 className="card-title">Puri</h5>
                        <p className="card-text">
                          A beautiful place in Kolkata, West Bengal.
                        </p>
                        <p>
                          <button
                            type="button"
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop23"
                          >
                            Read More
                          </button>
                        </p>
                      </div>
                      {/* btn */}
                    </div>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse3"
                aria-expanded="false"
                aria-controls="collapse3"
              >
                <span>
                  #3
                  <strong>&nbsp; Uttar Pradesh</strong>
                </span>
              </button>
            </h2>
            <div
              id="collapse3"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="row mt-2 mb-2">
                <Fade delay={200} bottom>
                  <div className="col-md-4 d-flex justify-content-around">
                    <div className="card" style={{ width: "18rem" }}>
                      <img
                        className="card-img-top"
                        src={
                          "https://t4.ftcdn.net/jpg/01/97/72/79/240_F_197727967_MSfGDL0XvgFDjsWnjM03pInQ2h3zu9C7.jpg"
                        }
                        height={"100%"}
                        alt="Agra"
                      />
                      <div className="card-body">
                        <h5 className="card-title">Agra</h5>
                        <p className="card-text">
                          A beautiful place in Kolkata, West Bengal.
                        </p>
                        <p>
                          <button
                            type="button"
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop31"
                          >
                            Read More
                          </button>
                        </p>
                      </div>
                      {/* btn */}
                    </div>
                  </div>
                </Fade>
                {/* 2 */}
                <Fade delay={500} bottom>
                  <div className="col-md-4 d-flex justify-content-around">
                    <div className="card" style={{ width: "18rem" }}>
                      <img
                        className="card-img-top"
                        src={
                          "https://t3.ftcdn.net/jpg/04/89/19/60/240_F_489196024_mJbRZY4nHswsl94fhCnIMjEHOaWMRENK.jpg"
                        }
                        alt="Mathura"
                      />
                      <div className="card-body">
                        <h5 className="card-title">Mathura</h5>
                        <p className="card-text">
                          A beautiful place in Kolkata, West Bengal.
                        </p>
                        <p>
                          <button
                            type="button"
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop32"
                          >
                            Read More
                          </button>
                        </p>
                      </div>
                      {/* btn */}
                    </div>
                  </div>
                </Fade>
                {/* 3 */}
                <Fade delay={800} bottom>
                  <div className="col-md-4 d-flex justify-content-around">
                    <div className="card" style={{ width: "18rem" }}>
                      <img
                        className="card-img-top"
                        src={"https://i.postimg.cc/4d9v9SdH/Varanasi.jpg"}
                        alt="Varanasi"
                      />
                      <div className="card-body">
                        <h5 className="card-title">Varanasi</h5>
                        <p className="card-text">
                          A beautiful place in Kolkata, West Bengal.
                        </p>
                        <p>
                          <button
                            type="button"
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop33"
                          >
                            Read More
                          </button>
                        </p>
                      </div>
                      {/* btn */}
                    </div>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFour">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse4"
                aria-expanded="false"
                aria-controls="collapse4"
              >
                <span>
                  #4
                  <strong>&nbsp; Uttarakhand</strong>
                </span>
              </button>
            </h2>
            <div
              id="collapse4"
              className="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#accordionExample"
            >
              <div className="row mt-2 mb-2">
                <Fade delay={200} bottom>
                  <div className="col-md-4 d-flex justify-content-around">
                    <div className="card" style={{ width: "18rem" }}>
                      <img
                        className="card-img-top"
                        src={"https://i.postimg.cc/wxF8rfFd/Haridwar.jpg"}
                        height={"100%"}
                        alt="Haridwar"
                      />
                      <div className="card-body">
                        <h5 className="card-title">Haridwar</h5>
                        <p className="card-text">
                          A beautiful place in Kolkata, West Bengal.
                        </p>
                        <p>
                          <button
                            type="button"
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop41"
                          >
                            Read More
                          </button>
                        </p>
                      </div>
                      {/* btn */}
                    </div>
                  </div>
                </Fade>
                {/* 2 */}
                <Fade delay={500} bottom>
                  <div className="col-md-4 d-flex justify-content-around">
                    <div className="card" style={{ width: "18rem" }}>
                      <img
                        className="card-img-top"
                        src={"https://i.postimg.cc/DZy54gGq/Mussoorie.jpg"}
                        alt="Mussoorie"
                      />
                      <div className="card-body">
                        <h5 className="card-title">Mussoorie</h5>
                        <p className="card-text">
                          A beautiful place in Kolkata, West Bengal.
                        </p>
                        <p>
                          <button
                            type="button"
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop42"
                          >
                            Read More
                          </button>
                        </p>
                      </div>
                      {/* btn */}
                    </div>
                  </div>
                </Fade>
                {/* 3 */}
                <Fade delay={800} bottom>
                  <div className="col-md-4 d-flex justify-content-around">
                    <div className="card" style={{ width: "18rem" }}>
                      <img
                        className="card-img-top"
                        src={"https://i.postimg.cc/sDVfQGH3/rishikesh.jpg"}
                        alt="Rishikesh"
                        height={"100%"}
                      />
                      <div className="card-body">
                        <h5 className="card-title">Rishikesh</h5>
                        <p className="card-text">
                          A beautiful place in Kolkata, West Bengal.
                        </p>
                        <p>
                          <button
                            type="button"
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop43"
                          >
                            Read More
                          </button>
                        </p>
                      </div>
                      {/* btn */}
                    </div>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFive">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse5"
                aria-expanded="false"
                aria-controls="collapse5"
              >
                <span>
                  #5
                  <strong>&nbsp; West Bengal</strong>
                </span>
              </button>
            </h2>
            <div
              id="collapse5"
              className="accordion-collapse collapse"
              aria-labelledby="headingFive"
              data-bs-parent="#accordionExample"
            >
              <div className="row mt-2 mb-2">
                <Fade delay={200} bottom>
                  <div className="col-md-4 d-flex justify-content-around">
                    <div className="card" style={{ width: "18rem" }}>
                      <img
                        className="card-img-top"
                        src={"https://i.postimg.cc/rpYxPmKk/darjeeling.jpg"}
                        alt="Darjeeling"
                      />
                      <div className="card-body">
                        <h5 className="card-title">Darjeeling</h5>
                        <p className="card-text">
                          A beautiful place in Kolkata, West Bengal.
                        </p>
                        <p>
                          <button
                            type="button"
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop51"
                          >
                            Read More
                          </button>
                        </p>
                      </div>
                      {/* btn */}
                    </div>
                  </div>
                </Fade>
                {/* 2 */}
                <Fade delay={500} bottom>
                  <div className="col-md-4 d-flex justify-content-around">
                    <div className="card" style={{ width: "18rem" }}>
                      <img
                        className="card-img-top"
                        src={"https://i.postimg.cc/hj1gGJTF/Digha.jpg"}
                        alt="Digha"
                      />
                      <div className="card-body">
                        <h5 className="card-title">Digha</h5>
                        <p className="card-text">
                          A beautiful place in Kolkata, West Bengal.
                        </p>
                        <p>
                          <button
                            type="button"
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop52"
                          >
                            Read More
                          </button>
                        </p>
                      </div>
                      {/* btn */}
                    </div>
                  </div>
                </Fade>
                {/* 3 */}
                <Fade delay={800} bottom>
                  <div className="col-md-4 d-flex justify-content-around">
                    <div className="card" style={{ width: "18rem" }}>
                      <img
                        className="card-img-top"
                        src={
                          "https://c4.wallpaperflare.com/wallpaper/1022/798/409/lights-india-west-bengal-kolkata-wallpaper-preview.jpg"
                        }
                        height={"100%"}
                        alt="Kolkata"
                      />
                      <div className="card-body">
                        <h5 className="card-title">Kolkata</h5>
                        <p className="card-text">
                          A beautiful place in Kolkata, West Bengal.
                        </p>
                        <p>
                          <button
                            type="button"
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop53"
                          >
                            Read More
                          </button>
                        </p>
                      </div>
                      {/* btn */}
                    </div>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Start */}

      {/* Baga beach */}

      <div
        className="modal fade"
        id="staticBackdrop11"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Baga Beach
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <img
                src="https://t4.ftcdn.net/jpg/04/89/84/21/240_F_489842188_KQ5JsZ7hS2BXou7Hn0vQ9Qoyd7uHlGhn.jpg"
                alt=""
                width={"100%"}
                className="modalimg mb-3"
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                eveniet quos earum accusantium deserunt! Magnam pariatur enim ab
                commodi rem earum laboriosam fugit, nesciunt accusantium nulla
                dolore distinctio. Dicta, consectetur? Lorem ipsum dolor sit
                amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="modal-footer d-flex justify-content-between">
              <p className="text-muted">Updated 2 days ago</p>
              <div className="div">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => setCounter1((prevCount) => prevCount + 1)}
                >
                  <i className="fa-solid fa-thumbs-up"></i>
                </button>
                &nbsp;{counter1}
                &nbsp;&nbsp;
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setCounter2((prevCount) => prevCount + 1)}
                >
                  <i className="fa-solid fa-thumbs-down"></i>
                </button>
                &nbsp;{counter2}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Madgaon */}

      <div
        className="modal fade"
        id="staticBackdrop12"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Madgaon
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <img
                src="https://t4.ftcdn.net/jpg/04/04/87/75/240_F_404877562_gx8uXjf7kynGIQ7AP3crvNzXzZ2Sl2gH.jpg"
                alt=""
                width={"100%"}
                height={"263px"}
                className="modalimg mb-3"
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                eveniet quos earum accusantium deserunt! Magnam pariatur enim ab
                commodi rem earum laboriosam fugit, nesciunt accusantium nulla
                dolore distinctio. Dicta, consectetur? Lorem ipsum dolor sit
                amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="modal-footer d-flex justify-content-between">
              <p className="text-muted">Updated 2 days ago</p>
              <div className="div">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => setCounter1((prevCount) => prevCount + 1)}
                >
                  <i className="fa-solid fa-thumbs-up"></i>
                </button>
                &nbsp;{counter1}
                &nbsp;&nbsp;
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setCounter2((prevCount) => prevCount + 1)}
                >
                  <i className="fa-solid fa-thumbs-down"></i>
                </button>
                &nbsp;{counter2}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Panaji */}

      <div
        className="modal fade"
        id="staticBackdrop13"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Panaji
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <img
                src="https://t4.ftcdn.net/jpg/03/33/95/99/240_F_333959940_RlovicM5b593e2Z94DzZMdPMoOoIiIa0.jpg"
                alt=""
                width={"100%"}
                height="263px"
                className="modalimg mb-3"
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                eveniet quos earum accusantium deserunt! Magnam pariatur enim ab
                commodi rem earum laboriosam fugit, nesciunt accusantium nulla
                dolore distinctio. Dicta, consectetur? Lorem ipsum dolor sit
                amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="modal-footer d-flex justify-content-between">
              <p className="text-muted">Updated 2 days ago</p>
              <div className="div">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => setCounter1((prevCount) => prevCount + 1)}
                >
                  <i className="fa-solid fa-thumbs-up"></i>
                </button>
                &nbsp;{counter1}
                &nbsp;&nbsp;
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setCounter2((prevCount) => prevCount + 1)}
                >
                  <i className="fa-solid fa-thumbs-down"></i>
                </button>
                &nbsp;{counter2}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bhubaneshwar */}
      <div
        className="modal fade"
        id="staticBackdrop21"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Bhubaneshwar
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <img
                src="https://t4.ftcdn.net/jpg/02/94/90/97/240_F_294909747_BaFKNTF7G5j0h9nEU2UjPixUXf1Xj8Qk.jpg"
                alt=""
                width={"100%"}
                height="263px"
                className="modalimg mb-3"
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                eveniet quos earum accusantium deserunt! Magnam pariatur enim ab
                commodi rem earum laboriosam fugit, nesciunt accusantium nulla
                dolore distinctio. Dicta, consectetur? Lorem ipsum dolor sit
                amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="modal-footer d-flex justify-content-between">
              <p className="text-muted">Updated 2 days ago</p>
              <div className="div">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => setCounter1((prevCount) => prevCount + 1)}
                >
                  <i className="fa-solid fa-thumbs-up"></i>
                </button>
                &nbsp;{counter1}
                &nbsp;&nbsp;
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setCounter2((prevCount) => prevCount + 1)}
                >
                  <i className="fa-solid fa-thumbs-down"></i>
                </button>
                &nbsp;{counter2}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Konark */}
      <div
        className="modal fade"
        id="staticBackdrop22"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Konark
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <img
                src="https://c4.wallpaperflare.com/wallpaper/423/223/714/photography-india-temple-sun-wallpaper-preview.jpg"
                alt=""
                width={"100%"}
                height="263px"
                className="modalimg mb-3"
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                eveniet quos earum accusantium deserunt! Magnam pariatur enim ab
                commodi rem earum laboriosam fugit, nesciunt accusantium nulla
                dolore distinctio. Dicta, consectetur? Lorem ipsum dolor sit
                amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="modal-footer d-flex justify-content-between">
              <p className="text-muted">Updated 2 days ago</p>
              <div className="div">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => setCounter1((prevCount) => prevCount + 1)}
                >
                  <i className="fa-solid fa-thumbs-up"></i>
                </button>
                &nbsp;{counter1}
                &nbsp;&nbsp;
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setCounter2((prevCount) => prevCount + 1)}
                >
                  <i className="fa-solid fa-thumbs-down"></i>
                </button>
                &nbsp;{counter2}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Puri */}
      <div
        className="modal fade"
        id="staticBackdrop23"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Puri
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <img
                src="https://t4.ftcdn.net/jpg/02/82/59/49/240_F_282594919_CouepmmPcYq10g5MjRBXswsAtPaTNXOQ.jpg"
                alt=""
                width={"100%"}
                height="263px"
                className="modalimg mb-3"
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                eveniet quos earum accusantium deserunt! Magnam pariatur enim ab
                commodi rem earum laboriosam fugit, nesciunt accusantium nulla
                dolore distinctio. Dicta, consectetur? Lorem ipsum dolor sit
                amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="modal-footer d-flex justify-content-between">
              <p className="text-muted">Updated 2 days ago</p>
              <div className="div">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => setCounter1((prevCount) => prevCount + 1)}
                >
                  <i className="fa-solid fa-thumbs-up"></i>
                </button>
                &nbsp;{counter1}
                &nbsp;&nbsp;
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setCounter2((prevCount) => prevCount + 1)}
                >
                  <i className="fa-solid fa-thumbs-down"></i>
                </button>
                &nbsp;{counter2}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Agra */}
      <div
        className="modal fade"
        id="staticBackdrop31"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Agra
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <img
                src="https://t4.ftcdn.net/jpg/01/97/72/79/240_F_197727967_MSfGDL0XvgFDjsWnjM03pInQ2h3zu9C7.jpg"
                alt=""
                width={"100%"}
                height="263px"
                className="modalimg mb-3"
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                eveniet quos earum accusantium deserunt! Magnam pariatur enim ab
                commodi rem earum laboriosam fugit, nesciunt accusantium nulla
                dolore distinctio. Dicta, consectetur? Lorem ipsum dolor sit
                amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="modal-footer d-flex justify-content-between">
              <p className="text-muted">Updated 2 days ago</p>
              <div className="div">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => setCounter1((prevCount) => prevCount + 1)}
                >
                  <i className="fa-solid fa-thumbs-up"></i>
                </button>
                &nbsp;{counter1}
                &nbsp;&nbsp;
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setCounter2((prevCount) => prevCount + 1)}
                >
                  <i className="fa-solid fa-thumbs-down"></i>
                </button>
                &nbsp;{counter2}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mathura */}
      <div
        className="modal fade"
        id="staticBackdrop32"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Mathura
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <img
                src="https://t3.ftcdn.net/jpg/04/89/19/60/240_F_489196024_mJbRZY4nHswsl94fhCnIMjEHOaWMRENK.jpg"
                alt=""
                width={"100%"}
                height="263px"
                className="modalimg mb-3"
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                eveniet quos earum accusantium deserunt! Magnam pariatur enim ab
                commodi rem earum laboriosam fugit, nesciunt accusantium nulla
                dolore distinctio. Dicta, consectetur? Lorem ipsum dolor sit
                amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="modal-footer d-flex justify-content-between">
              <p className="text-muted">Updated 2 days ago</p>
              <div className="div">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => setCounter1((prevCount) => prevCount + 1)}
                >
                  <i className="fa-solid fa-thumbs-up"></i>
                </button>
                &nbsp;{counter1}
                &nbsp;&nbsp;
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setCounter2((prevCount) => prevCount + 1)}
                >
                  <i className="fa-solid fa-thumbs-down"></i>
                </button>
                &nbsp;{counter2}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Varanasi */}
      <div
        className="modal fade"
        id="staticBackdrop33"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                varanasi
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <img
                src="https://i.postimg.cc/4d9v9SdH/Varanasi.jpg"
                alt=""
                width={"100%"}
                height="263px"
                className="modalimg mb-3"
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                eveniet quos earum accusantium deserunt! Magnam pariatur enim ab
                commodi rem earum laboriosam fugit, nesciunt accusantium nulla
                dolore distinctio. Dicta, consectetur? Lorem ipsum dolor sit
                amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="modal-footer d-flex justify-content-between">
              <p className="text-muted">Updated 2 days ago</p>
              <div className="div">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => setCounter1((prevCount) => prevCount + 1)}
                >
                  <i className="fa-solid fa-thumbs-up"></i>
                </button>
                &nbsp;{counter1}
                &nbsp;&nbsp;
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setCounter2((prevCount) => prevCount + 1)}
                >
                  <i className="fa-solid fa-thumbs-down"></i>
                </button>
                &nbsp;{counter2}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Haridwar */}
      <div
        className="modal fade"
        id="staticBackdrop41"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Haridwar
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <img
                src="https://i.postimg.cc/wxF8rfFd/Haridwar.jpg"
                alt=""
                width={"100%"}
                height="263px"
                className="modalimg mb-3"
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                eveniet quos earum accusantium deserunt! Magnam pariatur enim ab
                commodi rem earum laboriosam fugit, nesciunt accusantium nulla
                dolore distinctio. Dicta, consectetur? Lorem ipsum dolor sit
                amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="modal-footer d-flex justify-content-between">
              <p className="text-muted">Updated 2 days ago</p>
              <div className="div">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => setCounter1((prevCount) => prevCount + 1)}
                >
                  <i className="fa-solid fa-thumbs-up"></i>
                </button>
                &nbsp;{counter1}
                &nbsp;&nbsp;
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setCounter2((prevCount) => prevCount + 1)}
                >
                  <i className="fa-solid fa-thumbs-down"></i>
                </button>
                &nbsp;{counter2}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mussoorie */}
      <div
        className="modal fade"
        id="staticBackdrop42"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Mussoorie
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <img
                src="https://i.postimg.cc/DZy54gGq/Mussoorie.jpg"
                alt=""
                width={"100%"}
                height="263px"
                className="modalimg mb-3"
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                eveniet quos earum accusantium deserunt! Magnam pariatur enim ab
                commodi rem earum laboriosam fugit, nesciunt accusantium nulla
                dolore distinctio. Dicta, consectetur? Lorem ipsum dolor sit
                amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="modal-footer d-flex justify-content-between">
              <p className="text-muted">Updated 2 days ago</p>
              <div className="div">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => setCounter1((prevCount) => prevCount + 1)}
                >
                  <i className="fa-solid fa-thumbs-up"></i>
                </button>
                &nbsp;{counter1}
                &nbsp;&nbsp;
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setCounter2((prevCount) => prevCount + 1)}
                >
                  <i className="fa-solid fa-thumbs-down"></i>
                </button>
                &nbsp;{counter2}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Rishikesh */}
      <div
        className="modal fade"
        id="staticBackdrop43"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Rishikesh
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <img
                src="https://i.postimg.cc/sDVfQGH3/rishikesh.jpg"
                alt=""
                width={"100%"}
                height="263px"
                className="modalimg mb-3"
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                eveniet quos earum accusantium deserunt! Magnam pariatur enim ab
                commodi rem earum laboriosam fugit, nesciunt accusantium nulla
                dolore distinctio. Dicta, consectetur? Lorem ipsum dolor sit
                amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="modal-footer d-flex justify-content-between">
              <p className="text-muted">Updated 2 days ago</p>
              <div className="div">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => setCounter1((prevCount) => prevCount + 1)}
                >
                  <i className="fa-solid fa-thumbs-up"></i>
                </button>
                &nbsp;{counter1}
                &nbsp;&nbsp;
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setCounter2((prevCount) => prevCount + 1)}
                >
                  <i className="fa-solid fa-thumbs-down"></i>
                </button>
                &nbsp;{counter2}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Darjeeling */}
      <div
        className="modal fade"
        id="staticBackdrop51"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Darjeeling
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <img
                src="https://i.postimg.cc/rpYxPmKk/darjeeling.jpg"
                alt=""
                width={"100%"}
                height="263px"
                className="modalimg mb-3"
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                eveniet quos earum accusantium deserunt! Magnam pariatur enim ab
                commodi rem earum laboriosam fugit, nesciunt accusantium nulla
                dolore distinctio. Dicta, consectetur? Lorem ipsum dolor sit
                amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="modal-footer d-flex justify-content-between">
              <p className="text-muted">Updated 2 days ago</p>
              <div className="div">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => setCounter1((prevCount) => prevCount + 1)}
                >
                  <i className="fa-solid fa-thumbs-up"></i>
                </button>
                &nbsp;{counter1}
                &nbsp;&nbsp;
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setCounter2((prevCount) => prevCount + 1)}
                >
                  <i className="fa-solid fa-thumbs-down"></i>
                </button>
                &nbsp;{counter2}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Digha */}
      <div
        className="modal fade"
        id="staticBackdrop52"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Digha
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <img
                src="https://i.postimg.cc/hj1gGJTF/Digha.jpg"
                alt=""
                width={"100%"}
                height="263px"
                className="modalimg mb-3"
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                eveniet quos earum accusantium deserunt! Magnam pariatur enim ab
                commodi rem earum laboriosam fugit, nesciunt accusantium nulla
                dolore distinctio. Dicta, consectetur? Lorem ipsum dolor sit
                amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="modal-footer d-flex justify-content-between">
              <p className="text-muted">Updated 2 days ago</p>
              <div className="div">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => setCounter1((prevCount) => prevCount + 1)}
                >
                  <i className="fa-solid fa-thumbs-up"></i>
                </button>
                &nbsp;{counter1}
                &nbsp;&nbsp;
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setCounter2((prevCount) => prevCount + 1)}
                >
                  <i className="fa-solid fa-thumbs-down"></i>
                </button>
                &nbsp;{counter2}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Kolkata */}
      <div
        className="modal fade"
        id="staticBackdrop53"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Kolkata
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <img
                src="https://c4.wallpaperflare.com/wallpaper/1022/798/409/lights-india-west-bengal-kolkata-wallpaper-preview.jpg"
                alt=""
                width={"100%"}
                height="263px"
                className="modalimg mb-3"
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                eveniet quos earum accusantium deserunt! Magnam pariatur enim ab
                commodi rem earum laboriosam fugit, nesciunt accusantium nulla
                dolore distinctio. Dicta, consectetur? Lorem ipsum dolor sit
                amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="modal-footer d-flex justify-content-between">
              <p className="text-muted">Updated 2 days ago</p>
              <div className="div">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => setCounter1((prevCount) => prevCount + 1)}
                >
                  <i className="fa-solid fa-thumbs-up"></i>
                </button>
                &nbsp;{counter1}
                &nbsp;&nbsp;
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setCounter2((prevCount) => prevCount + 1)}
                >
                  <i className="fa-solid fa-thumbs-down"></i>
                </button>
                &nbsp;{counter2}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
