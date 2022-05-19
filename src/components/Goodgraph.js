import React, { useEffect, useState } from "react";
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

function Goodgraph() {
  const [d17, setD17] = useState([]);
  const [d18, setD18] = useState([]);
  const [d19, setD19] = useState([]);
  const [d20, setD20] = useState([]);
  const [d21, setD21] = useState([]);
  var url17 = "./jsons/overcharging/data2017.json";
  var url18 = "./jsons/overcharging/data2018.json";
  var url19 = "./jsons/overcharging/data2019.json";
  var url20 = "./jsons/overcharging/data2020.json";
  var url21 = "./jsons/overcharging/data2021.json";

  useEffect(() => {
    const fetchData = async () => {
      await fetch(url17, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((res) => {
          res.json().then((json) => {
            setD17(json);
          });
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchData();
  }, [url17]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch(url18, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((res) => {
          res.json().then((json) => {
            setD18(json);
          });
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchData();
  }, [url18]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch(url19, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((res) => {
          res.json().then((json) => {
            setD19(json);
          });
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchData();
  }, [url19]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch(url20, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((res) => {
          res.json().then((json) => {
            setD20(json);
          });
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchData();
  }, [url20]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch(url21, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((res) => {
          res.json().then((json) => {
            setD21(json);
          });
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchData();
  }, [url21]);

  var labels = d17.map((xa) => xa.code);
  var mydata = {
    labels,
    datasets: [
      {
        label: "2017",
        data: d17.map((ya) => ya.val),

        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
      {
        label: "2018",
        data: d18.map((ya) => ya.val),

        backgroundColor: ["rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
      {
        label: "2019",
        data: d19.map((ya) => ya.val),

        backgroundColor: ["rgba(255, 206, 86, 0.2)"],
        borderColor: ["rgba(255, 206, 86, 1)"],
        borderWidth: 1,
      },
      {
        label: "2020",
        data: d20.map((ya) => ya.val),

        backgroundColor: ["rgba(153, 102, 255, 0.2)"],
        borderColor: ["rgba(153, 102, 255, 1)"],
        borderWidth: 1,
      },
      {
        label: "2021",
        data: d21.map((ya) => ya.val),

        backgroundColor: ["rgba(255, 159, 64, 0.2)"],
        borderColor: ["rgba(255, 159, 64, 1)"],
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
        text: "Tourist data w.r.t Overcharging cases across India",
      },
    },
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    tooltips: {
      enabled: true,
    },
  };

  return (
    <>
      <div className="container border">
        <Line data={mydata} options={myoptions} height={350} width={200} />
      </div>
      <div className="gap my-5"></div>
    </>
  );
}

export default Goodgraph;
