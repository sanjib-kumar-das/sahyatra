import React, { useState, useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

export default function GetLocation() {
  const [location, setLocation] = useState({
    loaded: false,
    coordinates: { lat: "", lng: "" },
  });
  const onSuccess = (location) => {
    setLocation({
      loaded: true,
      coordinates: {
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      },
    });
    const roundLat = Number(location.coords.latitude.toFixed(2));
    const roundLng = Number(location.coords.longitude.toFixed(2));

    if (roundLat === 22.57 && roundLng === 88.36) {
      // alert("danger");
    }
  };

  const onError = (error) => {
    setLocation({
      loaded: true,
      error: {
        code: error.code,
        message: error.message,
      },
    });
  };

  useEffect(() => {
    if (!("geolocation" in navigator)) {
      onError({
        error: {
          code: 0,
          message: "Geolocation not supported",
        },
      });
    }
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  const alanKey =
    "4ccacafa9ad5a7c2db05cd214405b57a2e956eca572e1d8b807a3e2338fdd0dc/stage";
  useEffect(() => {
    alanBtn({
      key: alanKey,
      bottom: "15px",
      left: "15px",
      // onCommand: ({ command }) => {
      //   if (command === "test") {
      //     alert("hello world");
      //   }
      // },
    });
  }, []);

  //   console.log(location.coordinates.lat, location.coordinates.lng);
  //   console.log("object");

  return location;
}
