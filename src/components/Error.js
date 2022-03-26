import React from "react";
import bg from "./images/404.png";

export default function Error() {
  return (
    <div>
      <div className="continer">
        <img src={bg} alt="" width={"100%"} />
        <div id="info"></div>
      </div>
    </div>
  );
}
