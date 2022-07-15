import React from "react";

import "./styles/home.css";
import Fade from "react-reveal/Fade";
import { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  Tooltip,
  Title,
  Legend,
  BarElement,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  BarElement,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

export default function Home({ date, id, setId }) {
  // Counter

  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [data, setData] = useState([]);
  var url = "./jsons/homedata.json";

  // API call
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
            setData(json);
          });
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchData();
  }, [url]);

  // Graph
  var labels = ["2016", "2017", "2018", "2019", "2020", "2021", "2022"];
  var mydata = {
    labels,
    datasets: [
      {
        label: "Hotel Rating",
        data: [
          "11.42857",
          "0",
          "7.14286",
          "0",
          "19.04762",
          "14.28571",
          "14.28571",
        ],

        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
      {
        label: "Food Rating",
        data: [
          "1.42857",
          "0.1",
          "17.14286",
          "10",
          "9.04762",
          "4.28571",
          "14.28571",
        ],

        backgroundColor: ["rgba(25, 9, 102, 0.2)"],
        borderColor: ["rgba(25, 9, 102, 1)"],
        borderWidth: 1,
      },
    ],
  };

  var bagabeach = {
    labels,
    datasets: [
      {
        label: "Hotel Rating",
        data: ["", "", "4", "3", "", "", ""],

        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
      {
        label: "Food Rating",
        data: ["", "", "5", "5", "", "", ""],

        backgroundColor: ["rgba(25, 9, 102, 0.2)"],
        borderColor: ["rgba(25, 9, 102, 1)"],
        borderWidth: 1,
      },
    ],
  };

  var panaji = {
    labels,
    datasets: [
      {
        label: "Hotel Rating",
        data: ["", "", "5", "", "", "", ""],

        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
      {
        label: "Food Rating",
        data: ["", "", "5", "", "", "", ""],

        backgroundColor: ["rgba(25, 9, 102, 0.2)"],
        borderColor: ["rgba(25, 9, 102, 1)"],
        borderWidth: 1,
      },
    ],
  };

  var alappuzha = {
    labels,
    datasets: [
      {
        label: "Hotel Rating",
        data: ["", "5", "", "3", "", "", ""],

        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
      {
        label: "Food Rating",
        data: ["", "5", "", "3", "", "", ""],

        backgroundColor: ["rgba(25, 9, 102, 0.2)"],
        borderColor: ["rgba(25, 9, 102, 1)"],
        borderWidth: 1,
      },
    ],
  };

  var bhubaneshwar = {
    labels,
    datasets: [
      {
        label: "Hotel Rating",
        data: ["3", "", "", "3", "", "", ""],

        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
      {
        label: "Food Rating",
        data: ["4", "", "", "3", "", "", ""],

        backgroundColor: ["rgba(25, 9, 102, 0.2)"],
        borderColor: ["rgba(25, 9, 102, 1)"],
        borderWidth: 1,
      },
    ],
  };

  var konark = {
    labels,
    datasets: [
      {
        label: "Hotel Rating",
        data: ["", "", "4", "4", "", "", ""],

        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
      {
        label: "Food Rating",
        data: ["", "", "4", "3", "", "", ""],

        backgroundColor: ["rgba(25, 9, 102, 0.2)"],
        borderColor: ["rgba(25, 9, 102, 1)"],
        borderWidth: 1,
      },
    ],
  };

  var puri = {
    labels,
    datasets: [
      {
        label: "Hotel Rating",
        data: ["3", "3.67", "3", "3.5", "4", "", "3.67"],

        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
      {
        label: "Food Rating",
        data: ["3.67", "4", "4", "3.5", "5", "", "4.33"],

        backgroundColor: ["rgba(25, 9, 102, 0.2)"],
        borderColor: ["rgba(25, 9, 102, 1)"],
        borderWidth: 1,
      },
    ],
  };

  var agra = {
    labels,
    datasets: [
      {
        label: "Hotel Rating",
        data: ["3.5", "4", "3.25", "", "4.33", "5", "3.33"],

        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
      {
        label: "Food Rating",
        data: ["3.6", "4", "3.25", "", "4.67", "5", "3.5"],

        backgroundColor: ["rgba(25, 9, 102, 0.2)"],
        borderColor: ["rgba(25, 9, 102, 1)"],
        borderWidth: 1,
      },
    ],
  };

  var mathura = {
    labels,
    datasets: [
      {
        label: "Hotel Rating",
        data: ["4", "", "", "", "", "", ""],

        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
      {
        label: "Food Rating",
        data: ["5", "", "", "", "", "", ""],

        backgroundColor: ["rgba(25, 9, 102, 0.2)"],
        borderColor: ["rgba(25, 9, 102, 1)"],
        borderWidth: 1,
      },
    ],
  };

  var varanasi = {
    labels,
    datasets: [
      {
        label: "Hotel Rating",
        data: ["4", "", "", "1", "", "", "3.5"],

        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
      {
        label: "Food Rating",
        data: ["5", "", "", "3", "", "", "4"],

        backgroundColor: ["rgba(25, 9, 102, 0.2)"],
        borderColor: ["rgba(25, 9, 102, 1)"],
        borderWidth: 1,
      },
    ],
  };

  var haridwar = {
    labels,
    datasets: [
      {
        label: "Hotel Rating",
        data: ["4", "", "3", "", "", "3.67", "3.5"],

        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
      {
        label: "Food Rating",
        data: ["3.25", "", "5", "", "", "4.67", "4"],

        backgroundColor: ["rgba(25, 9, 102, 0.2)"],
        borderColor: ["rgba(25, 9, 102, 1)"],
        borderWidth: 1,
      },
    ],
  };

  var mussoorie = {
    labels,
    datasets: [
      {
        label: "Hotel Rating",
        data: ["4", "", "4", "", "", "", ""],

        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
      {
        label: "Food Rating",
        data: ["5", "", "4", "", "", "", ""],

        backgroundColor: ["rgba(25, 9, 102, 0.2)"],
        borderColor: ["rgba(25, 9, 102, 1)"],
        borderWidth: 1,
      },
    ],
  };

  var darjeeling = {
    labels,
    datasets: [
      {
        label: "Hotel Rating",
        data: ["3.67", "4.5", "4", "", "5", "4", "3.5"],

        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
      {
        label: "Food Rating",
        data: ["4.33", "4", "4", "", "5", "4", "4.5"],

        backgroundColor: ["rgba(25, 9, 102, 0.2)"],
        borderColor: ["rgba(25, 9, 102, 1)"],
        borderWidth: 1,
      },
    ],
  };

  var digha = {
    labels,
    datasets: [
      {
        label: "Hotel Rating",
        data: ["3.25", "3", "3.5", "3.17", "1", "3.33", "3"],

        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
      {
        label: "Food Rating",
        data: ["4", "4", "4", "3", "4", "3.67", "4.5"],

        backgroundColor: ["rgba(25, 9, 102, 0.2)"],
        borderColor: ["rgba(25, 9, 102, 1)"],
        borderWidth: 1,
      },
    ],
  };

  var kolkata = {
    labels,
    datasets: [
      {
        label: "Hotel Rating",
        data: ["3", "", "", "3.5", "2.67", "4.25", "3.75"],

        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
      {
        label: "Food Rating",
        data: ["5", "", "", "3", "3.33", "4", "4.08"],

        backgroundColor: ["rgba(25, 9, 102, 0.2)"],
        borderColor: ["rgba(25, 9, 102, 1)"],
        borderWidth: 1,
      },
    ],
  };

  var myoptions = {
    indexAxis: "x",
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Ratings Drift (2016-2022)",
      },
    },
    maintainAspectRatio: false,
    scales: {
      x: {
        beginAtZero: true,
      },
    },
    tooltips: {
      enabled: true,
    },
  };

  return (
    <>
      {/* Spinner */}

      <div className="container mb-3">
        {/* searchbar start */}

        <div className="div justify-content-end d-flex containe mt-4">
          <form className="form-inline my-2 my-lg-0 d-flex justify-content-end col-md-4 search">
            <input
              className="form-control mr-sm-2 mx-2 search rounded-pill"
              type="search"
              placeholder="Search by Place Names"
              aria-label="Search"
              size={10}
            />
            <button
              className="btn shadow btn-outline-primary my-2 my-sm-0"
              type="submit"
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        </div>

        {/* searchbar end */}

        <div className="accordion shadow" id="accordionExample">
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
              className="accordion-collapse collapse show mb-5 mt-5"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="row mt-2 mb-2">
                <Fade delay={200} bottom>
                  <div className="col-md-4 d-flex justify-content-around">
                    <div className="card shadow" style={{ width: "18rem" }}>
                      <img
                        className="card-img-top skeleton"
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
                            className="btn btn-primary mt-2 shadow"
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
                  <div className="col-md-4 d-flex justify-content-around ">
                    <div className="card shadow" style={{ width: "18rem" }}>
                      <img
                        className="card-img-top skeleton"
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
                            className="btn btn-primary mt-2 shadow"
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
                    <div className="card shadow" style={{ width: "18rem" }}>
                      <img
                        className="card-img-top skeleton"
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
                            className="btn btn-primary mt-2 shadow"
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
            <h2 className="accordion-header" id="headingK">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseK"
                aria-expanded="false"
                aria-controls="collapseK"
              >
                <span>
                  #2
                  <strong>&nbsp; Kerala</strong>
                </span>
              </button>
            </h2>
            <div
              id="collapseK"
              className="accordion-collapse collapse mb-5 mt-5"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="row mt-2 mb-2">
                <Fade delay={200} bottom>
                  <div className="col-md-4 d-flex justify-content-around">
                    <div className="card shadow" style={{ width: "18rem" }}>
                      <img
                        className="card-img-top skeleton"
                        height={"100%"}
                        src={data[15]?.img}
                        alt="Baga Beach"
                      />
                      <div className="card-body">
                        <h5 className="card-title">{data[15]?.name}</h5>
                        <p className="card-text text-truncate">
                          {data[15]?.description}
                        </p>
                        <hr className="dropdown-divider" />
                        <h6>Suraksha Score: {data[15]?.ss} / 5</h6>
                        <h6>Swachhta Ratings: {data[15]?.sr} </h6>
                        <p>
                          <button
                            type="button"
                            className="btn btn-primary mt-2 shadow"
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop101"
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

                {/* 3 */}
                <Fade delay={500} bottom>
                  <div className="col-md-4 d-flex justify-content-around">
                    <div className="card shadow" style={{ width: "18rem" }}>
                      <img
                        className="card-img-top skeleton"
                        src={data[17]?.img}
                        height={"100%"}
                        alt="Panaji"
                      />
                      <div className="card-body">
                        <h5 className="card-title">{data[17]?.name}</h5>
                        <p className="card-text text-truncate">
                          {data[17]?.description}
                        </p>
                        <hr className="dropdown-divider" />
                        <h6>Suraksha Score: {data[17]?.ss} / 5</h6>
                        <h6>Swachhta Ratings: {data[17]?.sr} </h6>
                        <p>
                          <button
                            type="button"
                            className="btn btn-primary mt-2 shadow"
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop103"
                          >
                            Read More
                          </button>
                        </p>
                      </div>
                      {/* btn */}
                    </div>
                  </div>
                </Fade>
                <Fade delay={800} bottom>
                  <div className="col-md-4 d-flex justify-content-around">
                    <div className="card shadow" style={{ width: "18rem" }}>
                      <img
                        className="card-img-top skeleton"
                        src={data[16]?.img}
                        alt="Madgaon"
                      />
                      <div className="card-body">
                        <h5 className="card-title">{data[16]?.name}</h5>
                        <p className="card-text text-truncate">
                          {data[16]?.description}
                        </p>
                        <hr className="dropdown-divider" />
                        <h6>Suraksha Score: {data[16]?.ss} / 5</h6>
                        <h6>Swachhta Ratings: {data[16]?.sr} </h6>

                        <p>
                          <button
                            type="button"
                            className="btn btn-primary mt-2 shadow"
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop102"
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
                  #3
                  <strong>&nbsp; Odisha</strong>
                </span>
              </button>
            </h2>

            <div
              id="collapse2"
              className="accordion-collapse collapse mb-5 mt-5"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="row mt-2 mb-2">
                <Fade delay={200} bottom>
                  <div className="col-md-4 d-flex justify-content-around">
                    <div className="card shadow" style={{ width: "18rem" }}>
                      <img
                        className="card-img-top skeleton"
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
                            className="btn btn-primary mt-2 shadow"
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
                    <div className="card shadow" style={{ width: "18rem" }}>
                      <img
                        className="card-img-top skeleton"
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
                            className="btn btn-primary mt-2 shadow"
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
                    <div className="card shadow" style={{ width: "18rem" }}>
                      <img
                        className="card-img-top skeleton"
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
                            className="btn btn-primary mt-2 shadow"
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
                  #4
                  <strong>&nbsp; Uttar Pradesh</strong>
                </span>
              </button>
            </h2>
            <div
              id="collapse3"
              className="accordion-collapse collapse mb-5 mt-5"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="row mt-2 mb-2">
                <Fade delay={200} bottom>
                  <div className="col-md-4 d-flex justify-content-around">
                    <div className="card shadow" style={{ width: "18rem" }}>
                      <img
                        className="card-img-top skeleton"
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
                            className="btn btn-primary mt-2 shadow"
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
                    <div className="card shadow" style={{ width: "18rem" }}>
                      <img
                        className="card-img-top skeleton"
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
                            className="btn btn-primary mt-2 shadow"
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
                    <div className="card shadow" style={{ width: "18rem" }}>
                      <img
                        className="card-img-top skeleton"
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
                            className="btn btn-primary mt-2 shadow"
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
                  #5
                  <strong>&nbsp; Uttarakhand</strong>
                </span>
              </button>
            </h2>
            <div
              id="collapse4"
              className="accordion-collapse collapse mb-5 mt-5"
              aria-labelledby="headingFour"
              data-bs-parent="#accordionExample"
            >
              <div className="row mt-2 mb-2">
                <Fade delay={200} bottom>
                  <div className="col-md-4 d-flex justify-content-around">
                    <div className="card shadow" style={{ width: "18rem" }}>
                      <img
                        className="card-img-top skeleton"
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
                            className="btn btn-primary mt-2 shadow"
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
                    <div className="card shadow" style={{ width: "18rem" }}>
                      <img
                        className="card-img-top skeleton"
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
                            className="btn btn-primary mt-2 shadow"
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
                    <div className="card shadow" style={{ width: "18rem" }}>
                      <img
                        className="card-img-top skeleton"
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
                            className="btn btn-primary mt-2 shadow"
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
                  #6
                  <strong>&nbsp; West Bengal</strong>
                </span>
              </button>
            </h2>
            <div
              id="collapse5"
              className="accordion-collapse collapse mb-5 mt-5"
              aria-labelledby="headingFive"
              data-bs-parent="#accordionExample"
            >
              <div className="row mt-2 mb-2">
                <Fade delay={200} bottom>
                  <div className="col-md-4 d-flex justify-content-around">
                    <div className="card shadow" style={{ width: "18rem" }}>
                      <img
                        className="card-img-top skeleton"
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
                            className="btn btn-primary mt-2 shadow"
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
                    <div className="card shadow" style={{ width: "18rem" }}>
                      <img
                        className="card-img-top skeleton"
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
                            className="btn btn-primary mt-2 shadow"
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
                    <div className="card shadow" style={{ width: "18rem" }}>
                      <img
                        className="card-img-top skeleton"
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
                            className="btn btn-primary mt-2 shadow"
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
                className="modalimg mb-3 skeleton shadow rounded"
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
              <hr className="dropdown-divider" />
              <Line
                data={bagabeach}
                options={myoptions}
                height={350}
                width={200}
              />
            </div>
            <div className="modal-footer d-flex justify-content-between">
              <p className="text-muted">Updated on 15th July, 2022</p>
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
                className="modalimg mb-3 skeleton shadow rounded"
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
              <hr className="dropdown-divider" />
              <Line
                data={mydata}
                options={myoptions}
                height={350}
                width={200}
              />
            </div>
            <div className="modal-footer d-flex justify-content-between">
              <p className="text-muted">Updated on 15th July, 2022</p>
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
                className="modalimg mb-3 skeleton shadow rounded"
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
              <hr className="dropdown-divider" />
              <Line
                data={panaji}
                options={myoptions}
                height={350}
                width={200}
              />
            </div>
            <div className="modal-footer d-flex justify-content-between">
              <p className="text-muted">Updated on 15th July, 2022</p>
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

      {/* Alappuzha */}
      <div
        className="modal fade"
        id="staticBackdrop101"
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
                {data[15]?.name}
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
                src={data[15]?.img}
                alt=""
                width={"100%"}
                height="263px"
                className="modalimg mb-3 skeleton shadow rounded"
              />
              <p>
                <h4 className="text-center mb-3">{data[15]?.name}</h4>
                <p className="just">{data[15]?.description}</p>
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
              <hr className="dropdown-divider" />
              <Line
                data={alappuzha}
                options={myoptions}
                height={350}
                width={200}
              />
            </div>
            <div className="modal-footer d-flex justify-content-between">
              <p className="text-muted">Updated on 15th July, 2022</p>
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
      {/* Munnar */}
      <div
        className="modal fade"
        id="staticBackdrop102"
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
                {data[16]?.name}
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
                src={data[16]?.img}
                alt=""
                width={"100%"}
                height="263px"
                className="modalimg mb-3 skeleton shadow rounded"
              />
              <p>
                <h4 className="text-center mb-3">{data[16]?.name}</h4>
                <p className="just">{data[16]?.description}</p>
              </p>
              <hr className="dropdown-divider" />
              <div className="div row">
                <div className="div col">
                  <h6>Savdhaan Meter: </h6>
                  <p>{data[16]?.sm1}</p>
                  <p>{data[16]?.sm2}</p>
                  <p>{data[16]?.sm3}</p>
                  <p>{data[16]?.sm4}</p>
                </div>

                <div className="div col">
                  <h6>
                    Suraksha Score:
                    <br /> {data[16]?.ss} / 5{" "}
                  </h6>
                  <p className="gap"></p>
                  <h6>
                    Swachhta Ratings:
                    <br /> {data[16]?.sr}{" "}
                  </h6>
                </div>
              </div>
              <hr className="dropdown-divider" />
              <Line
                data={mydata}
                options={myoptions}
                height={350}
                width={200}
              />
            </div>
            <div className="modal-footer d-flex justify-content-between">
              <p className="text-muted">Updated on 15th July, 2022</p>
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
      {/* Munnar */}
      <div
        className="modal fade"
        id="staticBackdrop103"
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
                {data[17]?.name}
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
                src={data[17]?.img}
                alt=""
                width={"100%"}
                height="263px"
                className="modalimg mb-3 skeleton shadow rounded"
              />
              <p>
                <h4 className="text-center mb-3">{data[17]?.name}</h4>
                <p className="just">{data[17]?.description}</p>
              </p>
              <hr className="dropdown-divider" />
              <div className="div row">
                <div className="div col">
                  <h6>Savdhaan Meter: </h6>
                  <p>{data[17]?.sm1}</p>
                  <p>{data[17]?.sm2}</p>
                  <p>{data[17]?.sm3}</p>
                  <p>{data[17]?.sm4}</p>
                </div>

                <div className="div col">
                  <h6>
                    Suraksha Score:
                    <br /> {data[17]?.ss} / 5{" "}
                  </h6>
                  <p className="gap"></p>
                  <h6>
                    Swachhta Ratings:
                    <br /> {data[17]?.sr}{" "}
                  </h6>
                </div>
              </div>
              <hr className="dropdown-divider" />
              <Line
                data={mydata}
                options={myoptions}
                height={350}
                width={200}
              />
            </div>
            <div className="modal-footer d-flex justify-content-between">
              <p className="text-muted">Updated on 15th July, 2022</p>
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
                className="modalimg mb-3 skeleton shadow rounded"
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
              <hr className="dropdown-divider" />
              <Line
                data={bhubaneshwar}
                options={myoptions}
                height={350}
                width={200}
              />
            </div>
            <div className="modal-footer d-flex justify-content-between">
              <p className="text-muted">Updated on 15th July, 2022</p>
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
                className="modalimg mb-3 skeleton shadow rounded"
              />
              <p>
                <h4 className="text-center mb-3">
                  {data[4]?.name} - "The city of the Sun Temple"
                </h4>
                <p className="just">{data[4]?.description}</p>
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
              <hr className="dropdown-divider" />
              <Line
                data={konark}
                options={myoptions}
                height={350}
                width={200}
              />
            </div>
            <div className="modal-footer d-flex justify-content-between">
              <p className="text-muted">Updated on 15th July, 2022</p>
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
                className="modalimg mb-3 skeleton shadow rounded"
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
              <hr className="dropdown-divider" />
              <Line data={puri} options={myoptions} height={350} width={200} />
            </div>
            <div className="modal-footer d-flex justify-content-between">
              <p className="text-muted">Updated on 15th July, 2022</p>
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
                className="modalimg mb-3 skeleton shadow rounded"
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
              <hr className="dropdown-divider" />
              <Line data={agra} options={myoptions} height={350} width={200} />
            </div>
            <div className="modal-footer d-flex justify-content-between">
              <p className="text-muted">Updated on 15th July, 2022</p>
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
                className="modalimg mb-3 skeleton shadow rounded"
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
              <hr className="dropdown-divider" />
              <Line
                data={mathura}
                options={myoptions}
                height={350}
                width={200}
              />
            </div>
            <div className="modal-footer d-flex justify-content-between">
              <p className="text-muted">Updated on 15th July, 2022</p>
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
                className="modalimg mb-3 skeleton shadow rounded"
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
              <hr className="dropdown-divider" />
              <Line
                data={varanasi}
                options={myoptions}
                height={350}
                width={200}
              />
            </div>
            <div className="modal-footer d-flex justify-content-between">
              <p className="text-muted">Updated on 15th July, 2022</p>
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
                className="modalimg mb-3 skeleton shadow rounded"
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
              <hr className="dropdown-divider" />
              <Line
                data={haridwar}
                options={myoptions}
                height={350}
                width={200}
              />
            </div>
            <div className="modal-footer d-flex justify-content-between">
              <p className="text-muted">Updated on 15th July, 2022</p>
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
                className="modalimg mb-3 skeleton shadow rounded"
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
              <hr className="dropdown-divider" />
              <Line
                data={mussoorie}
                options={myoptions}
                height={350}
                width={200}
              />
            </div>
            <div className="modal-footer d-flex justify-content-between">
              <p className="text-muted">Updated on 15th July, 2022</p>
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
                className="modalimg mb-3 skeleton shadow rounded"
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
              <hr className="dropdown-divider" />
              <Line
                data={mydata}
                options={myoptions}
                height={350}
                width={200}
              />
            </div>
            <div className="modal-footer d-flex justify-content-between">
              <p className="text-muted">Updated on 15th July, 2022</p>
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
                className="modalimg mb-3 skeleton shadow rounded"
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
              <hr className="dropdown-divider" />
              <Line
                data={darjeeling}
                options={myoptions}
                height={350}
                width={200}
              />
            </div>
            <div className="modal-footer d-flex justify-content-between">
              <p className="text-muted">Updated on 15th July, 2022</p>
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
                className="modalimg mb-3 skeleton shadow rounded"
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
              <hr className="dropdown-divider" />
              <Line data={digha} options={myoptions} height={350} width={200} />
            </div>
            <div className="modal-footer d-flex justify-content-between">
              <p className="text-muted">Updated on 15th July, 2022</p>
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
                className="modalimg mb-3 skeleton shadow rounded"
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
              <hr className="dropdown-divider" />
              <Line
                data={kolkata}
                options={myoptions}
                height={350}
                width={200}
              />
            </div>
            <div className="modal-footer d-flex justify-content-between">
              <p className="text-muted">Updated on 15th July, 2022</p>
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
