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
import { Line, Bar } from "react-chartjs-2";

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
  const [d16, setD16] = useState([]);
  const [d17, setD17] = useState([]);
  const [d18, setD18] = useState([]);
  const [d19, setD19] = useState([]);
  const [d20, setD20] = useState([]);
  const [d21, setD21] = useState([]);
  const [d22, setD22] = useState([]);
  var url16 = "./jsons/crime/data2016.json";
  var url17 = "./jsons/crime/data2017.json";
  var url18 = "./jsons/crime/data2018.json";
  var url19 = "./jsons/crime/data2019.json";
  var url20 = "./jsons/crime/data2020.json";
  var url21 = "./jsons/crime/data2021.json";
  var url22 = "./jsons/crime/data2022.json";

  const [e16, setE16] = useState([]);
  const [e17, setE17] = useState([]);
  const [e18, setE18] = useState([]);
  const [e19, setE19] = useState([]);
  const [e20, setE20] = useState([]);
  const [e21, setE21] = useState([]);
  const [e22, setE22] = useState([]);
  var temp16 = "./jsons/clean/data2016.json";
  var temp17 = "./jsons/clean/data2017.json";
  var temp18 = "./jsons/clean/data2018.json";
  var temp19 = "./jsons/clean/data2019.json";
  var temp20 = "./jsons/clean/data2020.json";
  var temp21 = "./jsons/clean/data2021.json";
  var temp22 = "./jsons/clean/data2022.json";

  // Crime Graph

  useEffect(() => {
    const fetchData = async () => {
      await fetch(url16, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((res) => {
          res.json().then((json) => {
            setD16(json);
          });
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchData();
  }, [url16]);

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

  useEffect(() => {
    const fetchData = async () => {
      await fetch(url22, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((res) => {
          res.json().then((json) => {
            setD22(json);
          });
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchData();
  }, [url22]);

  // Cleanliness Graph

  useEffect(() => {
    const fetchData = async () => {
      await fetch(temp16, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((res) => {
          res.json().then((json) => {
            setE16(json);
          });
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchData();
  }, [temp16]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch(temp17, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((res) => {
          res.json().then((json) => {
            setE17(json);
          });
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchData();
  }, [temp17]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch(temp18, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((res) => {
          res.json().then((json) => {
            setE18(json);
          });
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchData();
  }, [temp18]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch(temp19, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((res) => {
          res.json().then((json) => {
            setE19(json);
          });
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchData();
  }, [temp19]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch(temp20, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((res) => {
          res.json().then((json) => {
            setE20(json);
          });
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchData();
  }, [temp20]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch(temp21, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((res) => {
          res.json().then((json) => {
            setE21(json);
          });
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchData();
  }, [temp21]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch(temp22, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((res) => {
          res.json().then((json) => {
            setE22(json);
          });
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchData();
  }, [temp22]);

  //
  var labels = d16.map((xa) => xa.code);
  var crimedata = {
    labels,
    datasets: [
      {
        label: "2016",
        data: d16.map((ya) => ya.val),

        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
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
      {
        label: "2022",
        data: d22.map((ya) => ya.val),

        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
    ],
  };

  var labels = e16.map((xa) => xa.code);
  var cleandata = {
    labels,
    datasets: [
      {
        label: "2016",
        data: e16.map((ya) => ya.val),

        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
      {
        label: "2017",
        data: e17.map((ya) => ya.val),

        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
      {
        label: "2018",
        data: e18.map((ya) => ya.val),

        backgroundColor: ["rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
      {
        label: "2019",
        data: e19.map((ya) => ya.val),

        backgroundColor: ["rgba(255, 206, 86, 0.2)"],
        borderColor: ["rgba(255, 206, 86, 1)"],
        borderWidth: 1,
      },
      {
        label: "2020",
        data: e20.map((ya) => ya.val),

        backgroundColor: ["rgba(153, 102, 255, 0.2)"],
        borderColor: ["rgba(153, 102, 255, 1)"],
        borderWidth: 1,
      },
      {
        label: "2021",
        data: e21.map((ya) => ya.val),

        backgroundColor: ["rgba(255, 159, 64, 0.2)"],
        borderColor: ["rgba(255, 159, 64, 1)"],
        borderWidth: 1,
      },
      {
        label: "2022",
        data: e22.map((ya) => ya.val),

        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
    ],
  };

  var myoptions1 = {
    indexAxis: "x",
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Average Crime Rates Plot (2016-2022)",
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

  var myoptions2 = {
    indexAxis: "x",
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Average Cleanliness Rating Plot(2016-2022)",
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
      <div className="container mt-4">
        <Bar data={crimedata} options={myoptions1} height={350} width={200} />
      </div>
      <div className="gap my-3"> &nbsp; </div>

      <div className="container mt-5">
        <Bar data={cleandata} options={myoptions2} height={350} width={200} />
      </div>
    </>
  );
}

export default Goodgraph;
