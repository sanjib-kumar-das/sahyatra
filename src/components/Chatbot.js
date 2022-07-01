import "./styles/travelogue.css";
import React from "react";

export default function Chatbot() {
  return (
    <>
      <div className="div">
        {/* <button
          className="btn btn-white position-absolute bottom-0 end-0 chatbtn fixed-sm-bottom"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
        > */}

        <div
          className="div"
          data-bs-toggle="tooltip"
          data-bs-placement="left"
          title="YatraMon"
        >
          <img
            className="botimg position-fixed bottom-0 end-0 chatbtn fixed-sm-bottom mx-4 my-4 fab fa-shake "
            // src="https://i.postimg.cc/k5VfR72p/Beige-and-Black-Simple-Circular-Wedding-Event-Logo-removebg-preview.png"
            src="./newYatramon.png"
            alt="bot"
            style={{
              height: "7em",
              width: "7rem",
              cursor: "pointer",
            }}
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
          />
        </div>
        {/* </button> */}

        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
        >
          <div className="offcanvas-header">
            <h5 id="offcanvasRightLabel"> </h5>
            <button
              type="button"
              className="btn-close text-reset cross"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body mx-2">
            <iframe
              className="rounded-3"
              title="chatbot"
              allow="microphone;"
              width="350"
              height="430"
              src="https://console.dialogflow.com/api-client/demo/embedded/ef32fa83-c6dc-4ebc-83a7-a43ae44d928e"
            ></iframe>
          </div>
        </div>
        {/*  */}
        {/* <iframe
          title="chatbot"
          allow="microphone;"
          width="350"
          height="430"
          src="https://console.dialogflow.com/api-client/demo/embedded/ef32fa83-c6dc-4ebc-83a7-a43ae44d928e"
        ></iframe> */}
      </div>
    </>
  );
}
