import React from "react";
import { useState, useEffect } from "react";

import "./styles/home.css";

import Fade from "react-reveal/Fade";

export default function Home({ date }) {
  // Counter

  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [data, setData] = useState([]);
  var url = "./jsons/homedata.json";

  useEffect(() => {
    const fetchData = async () => {
      await fetch(url, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((res) => {
          res.json().then((json) => {
            console.log(json);
            setData(json);
          });
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchData();
  }, [url]);

  return (
    <>
      <div className="container mb-3">
        {/* searchbar start */}

        <div className="div justify-content-center d-flex container mt-4">
          <form className="form-inline my-2 my-lg-0 d-flex justify-content-between col-md-4 search">
            <input
              className="form-control mr-sm-2 mx-2 search rounded-pill"
              type="search"
              placeholder="Search by Place Names"
              aria-label="Search"
              size={30}
            />
            <button
              className="btn btn-outline-primary my-2 my-sm-0"
              type="submit"
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        </div>

        {/* searchbar end */}
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
                        src={data[0]?.img}
                        alt="Baga Beach"
                      />
                      <div className="card-body">
                        <h5 className="card-title">{data[0]?.name}</h5>
                        <p className="card-text text-truncate">
                          {data[0]?.description}
                        </p>
                        <hr className="dropdown-divider" />
                        <h6>Suraksha Score: {data[0]?.ss} / 5</h6>
                        <h6>Swachhta Ratings: {data[0]?.sr} </h6>
                        <p>
                          <button
                            type="button"
                            className="btn btn-primary mt-2"
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
                        src={data[1]?.img}
                        alt="Madgaon"
                      />
                      <div className="card-body">
                        <h5 className="card-title">{data[1]?.name}</h5>
                        <p className="card-text text-truncate">
                          {data[1]?.description}
                        </p>
                        <hr className="dropdown-divider" />
                        <h6>Suraksha Score: {data[1]?.ss} / 5</h6>
                        <h6>Swachhta Ratings: {data[1]?.sr} </h6>

                        <p>
                          <button
                            type="button"
                            className="btn btn-primary mt-2"
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
                        src={data[2]?.img}
                        height={"100%"}
                        alt="Panaji"
                      />
                      <div className="card-body">
                        <h5 className="card-title">{data[2]?.name}</h5>
                        <p className="card-text text-truncate">
                          {data[2]?.description}
                        </p>
                        <hr className="dropdown-divider" />
                        <h6>Suraksha Score: {data[2]?.ss} / 5</h6>
                        <h6>Swachhta Ratings: {data[2]?.sr} </h6>
                        <p>
                          <button
                            type="button"
                            className="btn btn-primary mt-2"
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
                        src={data[3]?.img}
                        alt="Bhubaneshwar"
                      />
                      <div className="card-body">
                        <h5 className="card-title">{data[3]?.name}</h5>
                        <p className="card-text text-truncate">
                          {data[3]?.description}
                        </p>
                        <hr className="dropdown-divider" />
                        <h6>Suraksha Score: {data[3]?.ss} / 5</h6>
                        <h6>Swachhta Ratings: {data[3]?.sr} </h6>
                        <p>
                          <button
                            type="button"
                            className="btn btn-primary mt-2"
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
                        src={data[4]?.img}
                        alt="Konark"
                      />
                      <div className="card-body">
                        <h5 className="card-title">{data[4]?.name}</h5>
                        <p className="card-text text-truncate">
                          {data[4]?.description}
                        </p>
                        <hr className="dropdown-divider" />
                        <h6>Suraksha Score: {data[4]?.ss} / 5</h6>
                        <h6>Swachhta Ratings: {data[4]?.sr} </h6>
                        <p>
                          <button
                            type="button"
                            className="btn btn-primary mt-2"
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
                        src={data[5]?.img}
                        height={"100%"}
                        alt="Puri"
                      />
                      <div className="card-body">
                        <h5 className="card-title">{data[5]?.name}</h5>
                        <p className="card-text text-truncate">
                          {data[5]?.description}
                        </p>
                        <hr className="dropdown-divider" />
                        <h6>Suraksha Score: {data[5]?.ss} / 5</h6>
                        <h6>Swachhta Ratings: {data[5]?.sr} </h6>
                        <p>
                          <button
                            type="button"
                            className="btn btn-primary mt-2"
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
                        src={data[6]?.img}
                        height={"100%"}
                        alt="Agra"
                      />
                      <div className="card-body">
                        <h5 className="card-title">{data[6]?.name}</h5>
                        <p className="card-text text-truncate">
                          {data[6]?.description}
                        </p>
                        <hr className="dropdown-divider" />
                        <h6>Suraksha Score: {data[6]?.ss} / 5</h6>
                        <h6>Swachhta Ratings: {data[6]?.sr} </h6>
                        <p>
                          <button
                            type="button"
                            className="btn btn-primary mt-2"
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
                        src={data[7]?.img}
                        alt="Mathura"
                      />
                      <div className="card-body">
                        <h5 className="card-title">{data[7]?.name}</h5>
                        <p className="card-text text-truncate">
                          {data[7]?.description}
                        </p>
                        <hr className="dropdown-divider" />
                        <h6>Suraksha Score: {data[7]?.ss} / 5</h6>
                        <h6>Swachhta Ratings: {data[7]?.sr} </h6>
                        <p>
                          <button
                            type="button"
                            className="btn btn-primary mt-2"
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
                        src={data[8]?.img}
                        alt="Varanasi"
                      />
                      <div className="card-body">
                        <h5 className="card-title">{data[8]?.name}</h5>
                        <p className="card-text text-truncate">
                          {data[8]?.description}
                        </p>
                        <hr className="dropdown-divider" />
                        <h6>Suraksha Score: {data[8]?.ss} / 5</h6>
                        <h6>Swachhta Ratings: {data[8]?.sr} </h6>
                        <p>
                          <button
                            type="button"
                            className="btn btn-primary mt-2"
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
                        src={data[9]?.img}
                        height={"100%"}
                        alt="Haridwar"
                      />
                      <div className="card-body">
                        <h5 className="card-title">{data[9]?.name}</h5>
                        <p className="card-text text-truncate">
                          {data[9]?.description}
                        </p>
                        <hr className="dropdown-divider" />
                        <h6>Suraksha Score: {data[9]?.ss} / 5</h6>
                        <h6>Swachhta Ratings: {data[9]?.sr} </h6>
                        <p>
                          <button
                            type="button"
                            className="btn btn-primary mt-2"
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
                        src={data[10]?.img}
                        alt="Mussoorie"
                      />
                      <div className="card-body">
                        <h5 className="card-title">{data[10]?.name}</h5>
                        <p className="card-text text-truncate">
                          {data[10]?.description}
                        </p>
                        <hr className="dropdown-divider" />
                        <h6>Suraksha Score: {data[10]?.ss} / 5</h6>
                        <h6>Swachhta Ratings: {data[10]?.sr} </h6>
                        <p>
                          <button
                            type="button"
                            className="btn btn-primary mt-2"
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
                        src={data[11]?.img}
                        alt="Rishikesh"
                        height={"100%"}
                      />
                      <div className="card-body">
                        <h5 className="card-title">{data[11]?.name}</h5>
                        <p className="card-text text-truncate">
                          {data[11]?.description}
                        </p>
                        <hr className="dropdown-divider" />
                        <h6>Suraksha Score: {data[11]?.ss} / 5</h6>
                        <h6>Swachhta Ratings: {data[11]?.sr} </h6>
                        <p>
                          <button
                            type="button"
                            className="btn btn-primary mt-2"
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
                        src={data[12]?.img}
                        alt="Darjeeling"
                      />
                      <div className="card-body">
                        <h5 className="card-title">{data[12]?.name}</h5>
                        <p className="card-text text-truncate">
                          {data[12]?.description}
                        </p>
                        <hr className="dropdown-divider" />
                        <h6>Suraksha Score: {data[12]?.ss} / 5</h6>
                        <h6>Swachhta Ratings: {data[12]?.sr} </h6>
                        <p>
                          <button
                            type="button"
                            className="btn btn-primary mt-2"
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
                        src={data[13]?.img}
                        alt="Digha"
                      />
                      <div className="card-body">
                        <h5 className="card-title">{data[13]?.name}</h5>
                        <p className="card-text text-truncate">
                          {data[13]?.description}
                        </p>
                        <hr className="dropdown-divider" />
                        <h6>Suraksha Score: {data[13]?.ss} / 5</h6>
                        <h6>Swachhta Ratings: {data[13]?.sr} </h6>
                        <p>
                          <button
                            type="button"
                            className="btn btn-primary mt-2"
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
                        src={data[14]?.img}
                        height={"100%"}
                        alt="Kolkata"
                      />
                      <div className="card-body">
                        <h5 className="card-title">{data[14]?.name}</h5>
                        <p className="card-text text-truncate">
                          {data[14]?.description}
                        </p>
                        <hr className="dropdown-divider" />
                        <h6>Suraksha Score: {data[14]?.ss} / 5</h6>
                        <h6>Swachhta Ratings: {data[14]?.sr} </h6>
                        <p>
                          <button
                            type="button"
                            className="btn btn-primary mt-2"
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
                {data[0]?.name}
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
                src={data[0]?.img}
                alt=""
                width={"100%"}
                className="modalimg mb-3"
              />
              <p>
                <h4 className="text-center mb-3">
                  {data[0]?.name} - "The Home of Nightlife"
                </h4>
                <p className="just">{data[0]?.description}</p>
              </p>
              <hr className="dropdown-divider" />
              <div className="div row">
                <div className="div col">
                  <h6>Savdhaan Meter: </h6>
                  <p>{data[0]?.sm1}</p>
                  <p>{data[0]?.sm2}</p>
                  <p>{data[0]?.sm3}</p>
                  <p>{data[0]?.sm4}</p>
                </div>

                <div className="div col">
                  <h6>
                    Suraksha Score: <br /> {data[0]?.ss} / 5
                  </h6>
                  <p className="gap"></p>
                  <h6>
                    Swachhta Ratings: <br /> {data[0]?.sr}
                  </h6>
                </div>
              </div>
            </div>
            <div className="modal-footer d-flex justify-content-between">
              <p className="text-muted">Updated on {data[15]?.update}</p>
              <div className="div">
                <button
                  type="button"
                  className="btn btn-primary position-relative"
                  onClick={() => setCounter1((prevCount) => prevCount + 1)}
                >
                  <i className="fa-solid fa-thumbs-up"></i>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {counter1}
                  </span>
                </button>
                &nbsp; &nbsp;&nbsp;
                <button
                  type="button"
                  className="btn btn-secondary position-relative"
                  onClick={() => setCounter2((prevCount) => prevCount + 1)}
                >
                  <i className="fa-solid fa-thumbs-down"></i>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {counter2}
                  </span>
                </button>
                &nbsp;
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
                {data[1]?.name}
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
                src={data[1]?.img}
                alt=""
                width={"100%"}
                height={"263px"}
                className="modalimg mb-3"
              />
              <p>
                <h4 className="text-center mb-3">{data[1]?.name}</h4>
                <p className="just">{data[1]?.description}</p>
              </p>
              <hr className="dropdown-divider" />
              <div className="div row">
                <div className="div col">
                  <h6>Savdhaan Meter:</h6>
                  <p>{data[1]?.sm1}</p>
                  <p>{data[1]?.sm2}</p>
                  <p>{data[1]?.sm3}</p>
                  <p>{data[1]?.sm4}</p>
                </div>

                <div className="div col">
                  <h6>
                    Suraksha Score:
                    <br /> {data[1]?.ss} / 5
                  </h6>
                  <p className="gap"></p>
                  <h6>
                    Swachhta Ratings:
                    <br /> {data[1]?.sr}
                  </h6>
                </div>
              </div>
            </div>
            <div className="modal-footer d-flex justify-content-between">
              <p className="text-muted">Updated on {data[15]?.update}</p>
              <div className="div">
                <button
                  type="button"
                  className="btn btn-primary position-relative"
                  onClick={() => setCounter1((prevCount) => prevCount + 1)}
                >
                  <i className="fa-solid fa-thumbs-up"></i>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {counter1}
                  </span>
                </button>
                &nbsp; &nbsp;&nbsp;
                <button
                  type="button"
                  className="btn btn-secondary position-relative"
                  onClick={() => setCounter2((prevCount) => prevCount + 1)}
                >
                  <i className="fa-solid fa-thumbs-down"></i>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {counter2}
                  </span>
                </button>
                &nbsp;
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
                {data[2]?.name}
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
                src={data[2]?.img}
                alt=""
                width={"100%"}
                height="263px"
                className="modalimg mb-3"
              />
              <p>
                <h4 className="text-center mb-3">{data[2]?.name}</h4>
                <p className="just">{data[2]?.description}</p>
              </p>
              <hr className="dropdown-divider" />
              <div className="div row">
                <div className="div col">
                  <h6>Savdhaan Meter: </h6>
                  <p>{data[2]?.sm1}</p>
                  <p>{data[2]?.sm2}</p>
                  <p>{data[2]?.sm3}</p>
                  <p>{data[2]?.sm4}</p>
                </div>

                <div className="div col">
                  <h6>
                    Suraksha Score:
                    <br /> {data[2]?.ss} / 5{" "}
                  </h6>
                  <p className="gap"></p>
                  <h6>
                    Swachhta Ratings:
                    <br /> {data[2]?.sr}{" "}
                  </h6>
                </div>
              </div>
            </div>
            <div className="modal-footer d-flex justify-content-between">
              <p className="text-muted">Updated on {data[15]?.update}</p>
              <div className="div">
                <button
                  type="button"
                  className="btn btn-primary position-relative"
                  onClick={() => setCounter1((prevCount) => prevCount + 1)}
                >
                  <i className="fa-solid fa-thumbs-up"></i>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {counter1}
                  </span>
                </button>
                &nbsp; &nbsp;&nbsp;
                <button
                  type="button"
                  className="btn btn-secondary position-relative"
                  onClick={() => setCounter2((prevCount) => prevCount + 1)}
                >
                  <i className="fa-solid fa-thumbs-down"></i>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {counter2}
                  </span>
                </button>
                &nbsp;
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
                {data[3]?.name}
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
                src={data[3]?.img}
                alt=""
                width={"100%"}
                height="263px"
                className="modalimg mb-3"
              />
              <p>
                <h4 className="text-center mb-3">
                  {data[3]?.name} - "Temple City of India"
                </h4>
                <p className="just">{data[2]?.description}</p>
              </p>
              <hr className="dropdown-divider" />
              <div className="div row">
                <div className="div col">
                  <h6>Savdhaan Meter: </h6>
                  <p>{data[3]?.sm1}</p>
                  <p>{data[3]?.sm2}</p>
                  <p>{data[3]?.sm3}</p>
                  <p>{data[3]?.sm4}</p>
                </div>

                <div className="div col">
                  <h6>
                    Suraksha Score:
                    <br /> {data[3]?.ss} / 5{" "}
                  </h6>
                  <p className="gap"></p>
                  <h6>
                    Swachhta Ratings:
                    <br /> {data[3]?.sr}{" "}
                  </h6>
                </div>
              </div>
            </div>
            <div className="modal-footer d-flex justify-content-between">
              <p className="text-muted">Updated on {data[15]?.update}</p>
              <div className="div">
                <button
                  type="button"
                  className="btn btn-primary position-relative"
                  onClick={() => setCounter1((prevCount) => prevCount + 1)}
                >
                  <i className="fa-solid fa-thumbs-up"></i>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {counter1}
                  </span>
                </button>
                &nbsp; &nbsp;&nbsp;
                <button
                  type="button"
                  className="btn btn-secondary position-relative"
                  onClick={() => setCounter2((prevCount) => prevCount + 1)}
                >
                  <i className="fa-solid fa-thumbs-down"></i>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {counter2}
                  </span>
                </button>
                &nbsp;
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
                {data[4]?.name}
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
                src={data[4]?.img}
                alt=""
                width={"100%"}
                height="263px"
                className="modalimg mb-3"
              />
              <p>
                <h4 className="text-center mb-3">
                  {data[4]?.name} - "The city of the Sun Temple"
                </h4>
                <p className="just">
                  Konark, in the state of Orissa is renowned world over for the
                  Sun Temple which is also a UNESCO World Heritage Site, the
                  Annual dance festival and its beautiful sandy beaches.
                  Konark's Sun Temple is an architectural marvel and is one of
                  the most beautiful monuments of India. Konark sun temple is
                  the must visit place in your travel bucket list if you love to
                  explore the ancient histories.
                </p>
              </p>
              <hr className="dropdown-divider" />
              <div className="div row">
                <div className="div col">
                  <h6>Savdhaan Meter: </h6>
                  <p>{data[4]?.sm1}</p>
                  <p>{data[4]?.sm2}</p>
                  <p>{data[4]?.sm3}</p>
                  <p>{data[4]?.sm4}</p>
                </div>

                <div className="div col">
                  <h6>
                    Suraksha Score:
                    <br /> {data[4]?.ss} / 5{" "}
                  </h6>
                  <p className="gap"></p>
                  <h6>
                    Swachhta Ratings:
                    <br /> {data[4]?.sr}{" "}
                  </h6>
                </div>
              </div>
            </div>
            <div className="modal-footer d-flex justify-content-between">
              <p className="text-muted">Updated on {data[15]?.update}</p>
              <div className="div">
                <button
                  type="button"
                  className="btn btn-primary position-relative"
                  onClick={() => setCounter1((prevCount) => prevCount + 1)}
                >
                  <i className="fa-solid fa-thumbs-up"></i>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {counter1}
                  </span>
                </button>
                &nbsp; &nbsp;&nbsp;
                <button
                  type="button"
                  className="btn btn-secondary position-relative"
                  onClick={() => setCounter2((prevCount) => prevCount + 1)}
                >
                  <i className="fa-solid fa-thumbs-down"></i>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {counter2}
                  </span>
                </button>
                &nbsp;
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
                {data[5]?.name}
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
                src={data[5]?.img}
                alt=""
                width={"100%"}
                height="263px"
                className="modalimg mb-3"
              />
              <p>
                <h4 className="text-center mb-3">
                  {data[5]?.name} - "Rath Yatra and the Beaches"
                </h4>
                <p className="just">{data[5]?.description}</p>
              </p>
              <hr className="dropdown-divider" />
              <div className="div row">
                <div className="div col">
                  <h6>Savdhaan Meter: </h6>
                  <p>{data[5]?.sm1}</p>
                  <p>{data[5]?.sm2}</p>
                  <p>{data[5]?.sm3}</p>
                  <p>{data[5]?.sm4}</p>
                </div>

                <div className="div col">
                  <h6>
                    Suraksha Score:
                    <br /> {data[5]?.ss} / 5{" "}
                  </h6>
                  <p className="gap"></p>
                  <h6>
                    Swachhta Ratings:
                    <br /> {data[5]?.sr}{" "}
                  </h6>
                </div>
              </div>
            </div>
            <div className="modal-footer d-flex justify-content-between">
              <p className="text-muted">Updated on {data[15]?.update}</p>
              <div className="div">
                <button
                  type="button"
                  className="btn btn-primary position-relative"
                  onClick={() => setCounter1((prevCount) => prevCount + 1)}
                >
                  <i className="fa-solid fa-thumbs-up"></i>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {counter1}
                  </span>
                </button>
                &nbsp; &nbsp;&nbsp;
                <button
                  type="button"
                  className="btn btn-secondary position-relative"
                  onClick={() => setCounter2((prevCount) => prevCount + 1)}
                >
                  <i className="fa-solid fa-thumbs-down"></i>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {counter2}
                  </span>
                </button>
                &nbsp;
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
                {data[6]?.name}
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
                src={data[6]?.img}
                alt=""
                width={"100%"}
                height="263px"
                className="modalimg mb-3"
              />
              <p>
                <h4 className="text-center mb-3">
                  {data[6]?.name} - "The city of Taj Mahal, the monument of
                  eternal love"
                </h4>
                <p className="just">{data[6]?.description}</p>
              </p>
              <hr className="dropdown-divider" />
              <div className="div row">
                <div className="div col">
                  <h6>Savdhaan Meter: </h6>
                  <p>{data[6]?.sm1}</p>
                  <p>{data[6]?.sm2}</p>
                  <p>{data[6]?.sm3}</p>
                  <p>{data[6]?.sm4}</p>
                </div>

                <div className="div col">
                  <h6>
                    Suraksha Score:
                    <br /> {data[6]?.ss} / 5
                  </h6>
                  <p className="gap"></p>
                  <h6>
                    Swachhta Ratings:
                    <br /> {data[6]?.sr}{" "}
                  </h6>
                </div>
              </div>
            </div>
            <div className="modal-footer d-flex justify-content-between">
              <p className="text-muted">Updated on {data[15]?.update}</p>
              <div className="div">
                <button
                  type="button"
                  className="btn btn-primary position-relative"
                  onClick={() => setCounter1((prevCount) => prevCount + 1)}
                >
                  <i className="fa-solid fa-thumbs-up"></i>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {counter1}
                  </span>
                </button>
                &nbsp; &nbsp;&nbsp;
                <button
                  type="button"
                  className="btn btn-secondary position-relative"
                  onClick={() => setCounter2((prevCount) => prevCount + 1)}
                >
                  <i className="fa-solid fa-thumbs-down"></i>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {counter2}
                  </span>
                </button>
                &nbsp;
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
                {data[7]?.name}
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
                src={data[7]?.img}
                alt=""
                width={"100%"}
                height="263px"
                className="modalimg mb-3"
              />
              <p>
                <h4 className="text-center mb-3">
                  {data[7]?.name} - "The hometown of Lord Krishna"
                </h4>
                <p className="just">{data[7]?.description}</p>
              </p>
              <hr className="dropdown-divider" />
              <div className="div row">
                <div className="div col">
                  <h6>Savdhaan Meter: </h6>
                  <p>{data[7]?.sm1}</p>
                  <p>{data[7]?.sm2}</p>
                  <p>{data[7]?.sm3}</p>
                  <p>{data[7]?.sm4}</p>
                </div>

                <div className="div col">
                  <h6>
                    Suraksha Score:
                    <br /> {data[7]?.ss} / 5
                  </h6>
                  <p className="gap"></p>
                  <h6>
                    Swachhta Ratings:
                    <br /> {data[7]?.sr}{" "}
                  </h6>
                </div>
              </div>
            </div>
            <div className="modal-footer d-flex justify-content-between">
              <p className="text-muted">Updated on {data[15]?.update}</p>
              <div className="div">
                <button
                  type="button"
                  className="btn btn-primary position-relative"
                  onClick={() => setCounter1((prevCount) => prevCount + 1)}
                >
                  <i className="fa-solid fa-thumbs-up"></i>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {counter1}
                  </span>
                </button>
                &nbsp; &nbsp;&nbsp;
                <button
                  type="button"
                  className="btn btn-secondary position-relative"
                  onClick={() => setCounter2((prevCount) => prevCount + 1)}
                >
                  <i className="fa-solid fa-thumbs-down"></i>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {counter2}
                  </span>
                </button>
                &nbsp;
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
                {data[8]?.name}
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
                src={data[8]?.img}
                alt=""
                width={"100%"}
                height="263px"
                className="modalimg mb-3"
              />
              <p>
                <h4 className="text-center mb-3">
                  {data[8]?.name} - "The Spiritual Capital of India"
                </h4>
                <p className="just">{data[8]?.description}</p>
              </p>
              <hr className="dropdown-divider" />
              <div className="div row">
                <div className="div col">
                  <h6>Savdhaan Meter: </h6>
                  <p>{data[8]?.sm1}</p>
                  <p>{data[8]?.sm2}</p>
                  <p>{data[8]?.sm3}</p>
                  <p>{data[8]?.sm4}</p>
                </div>

                <div className="div col">
                  <h6>
                    Suraksha Score:
                    <br /> {data[8]?.ss} / 5
                  </h6>
                  <p className="gap"></p>
                  <h6>
                    Swachhta Ratings:
                    <br /> {data[8]?.sr}{" "}
                  </h6>
                </div>
              </div>
            </div>
            <div className="modal-footer d-flex justify-content-between">
              <p className="text-muted">Updated on {data[15]?.update}</p>
              <div className="div">
                <button
                  type="button"
                  className="btn btn-primary position-relative"
                  onClick={() => setCounter1((prevCount) => prevCount + 1)}
                >
                  <i className="fa-solid fa-thumbs-up"></i>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {counter1}
                  </span>
                </button>
                &nbsp; &nbsp;&nbsp;
                <button
                  type="button"
                  className="btn btn-secondary position-relative"
                  onClick={() => setCounter2((prevCount) => prevCount + 1)}
                >
                  <i className="fa-solid fa-thumbs-down"></i>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {counter2}
                  </span>
                </button>
                &nbsp;
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
                {data[9]?.name}
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
                src={data[9]?.img}
                alt=""
                width={"100%"}
                height="263px"
                className="modalimg mb-3"
              />
              <p>
                <h4 className="text-center mb-3">
                  {data[9]?.name} - "Gateway to God"
                </h4>
                <p className="just">{data[9]?.description}</p>
              </p>
              <hr className="dropdown-divider" />
              <div className="div row">
                <div className="div col">
                  <h6>Savdhaan Meter: </h6>
                  <p>{data[9]?.sm1}</p>
                  <p>{data[9]?.sm2}</p>
                  <p>{data[9]?.sm3}</p>
                  <p>{data[9]?.sm4}</p>
                </div>

                <div className="div col">
                  <h6>
                    Suraksha Score:
                    <br /> {data[9]?.ss} / 5
                  </h6>
                  <p className="gap"></p>
                  <h6>
                    Swachhta Ratings:
                    <br /> {data[9]?.sr}{" "}
                  </h6>
                </div>
              </div>
            </div>
            <div className="modal-footer d-flex justify-content-between">
              <p className="text-muted">Updated on {data[15]?.update}</p>
              <div className="div">
                <button
                  type="button"
                  className="btn btn-primary position-relative"
                  onClick={() => setCounter1((prevCount) => prevCount + 1)}
                >
                  <i className="fa-solid fa-thumbs-up"></i>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {counter1}
                  </span>
                </button>
                &nbsp; &nbsp;&nbsp;
                <button
                  type="button"
                  className="btn btn-secondary position-relative"
                  onClick={() => setCounter2((prevCount) => prevCount + 1)}
                >
                  <i className="fa-solid fa-thumbs-down"></i>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {counter2}
                  </span>
                </button>
                &nbsp;
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
                {data[10]?.name}
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
                src={data[10]?.img}
                alt=""
                width={"100%"}
                height="263px"
                className="modalimg mb-3"
              />
              <p>
                <h4 className="text-center mb-3">
                  {data[10]?.name} - "The queen of hill-stations"
                </h4>
                <p className="just">{data[10]?.description}</p>
              </p>
              <hr className="dropdown-divider" />
              <div className="div row">
                <div className="div col">
                  <h6>Savdhaan Meter: </h6>
                  <p>{data[10]?.sm1}</p>
                  <p>{data[10]?.sm2}</p>
                  <p>{data[10]?.sm3}</p>
                  <p>{data[10]?.sm4}</p>
                </div>

                <div className="div col">
                  <h6>
                    Suraksha Score:
                    <br /> {data[10]?.ss} / 5
                  </h6>
                  <p className="gap"></p>
                  <h6>
                    Swachhta Ratings:
                    <br /> {data[10]?.sr}{" "}
                  </h6>
                </div>
              </div>
            </div>
            <div className="modal-footer d-flex justify-content-between">
              <p className="text-muted">Updated on {data[15]?.update}</p>
              <div className="div">
                <button
                  type="button"
                  className="btn btn-primary position-relative"
                  onClick={() => setCounter1((prevCount) => prevCount + 1)}
                >
                  <i className="fa-solid fa-thumbs-up"></i>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {counter1}
                  </span>
                </button>
                &nbsp; &nbsp;&nbsp;
                <button
                  type="button"
                  className="btn btn-secondary position-relative"
                  onClick={() => setCounter2((prevCount) => prevCount + 1)}
                >
                  <i className="fa-solid fa-thumbs-down"></i>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {counter2}
                  </span>
                </button>
                &nbsp;
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
                {data[11]?.name}
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
                src={data[11]?.img}
                alt=""
                width={"100%"}
                height="263px"
                className="modalimg mb-3"
              />
              <p>
                <h4 className="text-center mb-3">
                  {data[11]?.name} - "Yoga Capital of the World"
                </h4>
                <p className="just">{data[11]?.description}</p>
              </p>
              <hr className="dropdown-divider" />
              <div className="div row">
                <div className="div col">
                  <h6>Savdhaan Meter: </h6>
                  <p>{data[11]?.sm1}</p>
                  <p>{data[11]?.sm2}</p>
                  <p>{data[11]?.sm3}</p>
                  <p>{data[11]?.sm4}</p>
                </div>

                <div className="div col">
                  <h6>
                    Suraksha Score:
                    <br /> {data[11]?.ss} / 5
                  </h6>
                  <p className="gap"></p>
                  <h6>
                    Swachhta Ratings:
                    <br /> {data[11]?.sr}{" "}
                  </h6>
                </div>
              </div>
            </div>
            <div className="modal-footer d-flex justify-content-between">
              <p className="text-muted">Updated on {data[15]?.update}</p>
              <div className="div">
                <button
                  type="button"
                  className="btn btn-primary position-relative"
                  onClick={() => setCounter1((prevCount) => prevCount + 1)}
                >
                  <i className="fa-solid fa-thumbs-up"></i>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {counter1}
                  </span>
                </button>
                &nbsp; &nbsp;&nbsp;
                <button
                  type="button"
                  className="btn btn-secondary position-relative"
                  onClick={() => setCounter2((prevCount) => prevCount + 1)}
                >
                  <i className="fa-solid fa-thumbs-down"></i>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {counter2}
                  </span>
                </button>
                &nbsp;
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
                {data[12]?.name}
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
                src={data[12]?.img}
                alt=""
                width={"100%"}
                height="263px"
                className="modalimg mb-3"
              />
              <p>
                <h4 className="text-center mb-3">
                  {data[12]?.name} - "Queen of The Himalayas"
                </h4>
                <p className="just">{data[12]?.description}</p>
              </p>
              <hr className="dropdown-divider" />
              <div className="div row">
                <div className="div col">
                  <h6>Savdhaan Meter: </h6>
                  <p>{data[12]?.sm1}</p>
                  <p>{data[12]?.sm2}</p>
                  <p>{data[12]?.sm3}</p>
                  <p>{data[12]?.sm4}</p>
                </div>

                <div className="div col">
                  <h6>
                    Suraksha Score:
                    <br /> {data[12]?.ss} / 5
                  </h6>
                  <p className="gap"></p>
                  <h6>
                    Swachhta Ratings:
                    <br /> {data[12]?.sr}{" "}
                  </h6>
                </div>
              </div>
            </div>
            <div className="modal-footer d-flex justify-content-between">
              <p className="text-muted">Updated on {data[15]?.update}</p>
              <div className="div">
                <button
                  type="button"
                  className="btn btn-primary position-relative"
                  onClick={() => setCounter1((prevCount) => prevCount + 1)}
                >
                  <i className="fa-solid fa-thumbs-up"></i>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {counter1}
                  </span>
                </button>
                &nbsp; &nbsp;&nbsp;
                <button
                  type="button"
                  className="btn btn-secondary position-relative"
                  onClick={() => setCounter2((prevCount) => prevCount + 1)}
                >
                  <i className="fa-solid fa-thumbs-down"></i>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {counter2}
                  </span>
                </button>
                &nbsp;
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
                {data[13]?.name}
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
                src={data[13]?.img}
                alt=""
                width={"100%"}
                height="263px"
                className="modalimg mb-3"
              />
              <p>
                <h4 className="text-center mb-3">
                  {data[13]?.name} - "A blissful and untouched beach town"
                </h4>
                <p className="just">
                  Beach town situated on the shores of Bay of Bengal, Digha is a
                  popular tourist destination known for its untouched beaches
                  and scenic views, especially among people in West Bengal.
                  Digha is a one-stop destination for families looking forward
                  to spend a pleasurable weekend.
                </p>
              </p>
              <hr className="dropdown-divider" />
              <div className="div row">
                <div className="div col">
                  <h6>Savdhaan Meter: </h6>
                  <p>{data[13]?.sm1}</p>
                  <p>{data[13]?.sm2}</p>
                  <p>{data[13]?.sm3}</p>
                  <p>{data[13]?.sm4}</p>
                </div>

                <div className="div col">
                  <h6>
                    Suraksha Score:
                    <br /> {data[13]?.ss} / 5
                  </h6>
                  <p className="gap"></p>
                  <h6>
                    Swachhta Ratings:
                    <br /> {data[13]?.sr}{" "}
                  </h6>
                </div>
              </div>
            </div>
            <div className="modal-footer d-flex justify-content-between">
              <p className="text-muted">Updated on {data[15]?.update}</p>
              <div className="div">
                <button
                  type="button"
                  className="btn btn-primary position-relative"
                  onClick={() => setCounter1((prevCount) => prevCount + 1)}
                >
                  <i className="fa-solid fa-thumbs-up"></i>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {counter1}
                  </span>
                </button>
                &nbsp; &nbsp;&nbsp;
                <button
                  type="button"
                  className="btn btn-secondary position-relative"
                  onClick={() => setCounter2((prevCount) => prevCount + 1)}
                >
                  <i className="fa-solid fa-thumbs-down"></i>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {counter2}
                  </span>
                </button>
                &nbsp;
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
                {data[14]?.name}
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
                src={data[14]?.img}
                alt=""
                width={"100%"}
                height="263px"
                className="modalimg mb-3"
              />
              <p>
                <h4 className="text-center mb-3">
                  {data[14]?.name} - "The City of Joy"
                </h4>
                <p className="just">{data[14]?.description}</p>
              </p>
              <hr className="dropdown-divider" />
              <div className="div row">
                <div className="div col">
                  <h6>Savdhaan Meter: </h6>
                  <p>{data[14]?.sm1}</p>
                  <p>{data[14]?.sm2}</p>
                  <p>{data[14]?.sm3}</p>
                  <p>{data[14]?.sm4}</p>
                </div>

                <div className="div col">
                  <h6>
                    Suraksha Score:
                    <br /> {data[14]?.ss} / 5
                  </h6>
                  <p className="gap"></p>
                  <h6>
                    Swachhta Ratings:
                    <br /> {data[14]?.sr}{" "}
                  </h6>
                </div>
              </div>
            </div>
            <div className="modal-footer d-flex justify-content-between">
              <p className="text-muted">Updated on {data[15]?.update}</p>
              <div className="div">
                <button
                  type="button"
                  className="btn btn-primary position-relative"
                  onClick={() => setCounter1((prevCount) => prevCount + 1)}
                >
                  <i className="fa-solid fa-thumbs-up"></i>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {counter1}
                  </span>
                </button>
                &nbsp; &nbsp;&nbsp;
                <button
                  type="button"
                  className="btn btn-secondary position-relative"
                  onClick={() => setCounter2((prevCount) => prevCount + 1)}
                >
                  <i className="fa-solid fa-thumbs-down"></i>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {counter2}
                  </span>
                </button>
                &nbsp;
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
