import React from "react";

export default function About() {
  return (
    <div className="container mt-5 pb-2 just">
      <p className="about p-3">
        <p className="fs-5">
          SAHyatra, which stands for, Security Application for Hassle-free
          Travel, aims to revolutionize the tourism industry by earmarking the
          safety and security standards of tourist destinations.
        </p>
        <br />
        <p className="fs-5">
          SAHyatra is an integrated platform that meets two-fold objectives:
        </p>
        <br />
        <li className="fs-5">
          On one hand, it acts as a Travel Recommendation System and enlists
          popular tourist spots based on crowdsourced data after Data Analytics.
        </li>
        <li className="fs-5">
          On the other hand, it plays the role of a Grievance Monitoring System
          that safeguards tourists from falling prey to criminal practices such
          as eve teasing, overcharging, duping, theft etc.
        </li>
        <br /> <br />
        <p className="fs-5">
          The proposed system in based upon three crucial metrics:
        </p>
        <br />
        <li className="fs-5">
          Suraksha Score: This shows how safe and secure any place is for
          tourists. It is measured on a scale of 0 to 5, with the least score 0
          representing the 'Most Unsafe' spot and the highest score 5
          representing the ‘Safest’ spot.
        </li>
        <li className="fs-5">
          Swachhta Rating: This denotes the overall quality in tune with the
          cleanliness, greenery, and hygiene one should expect from a particular
          tourist destination. It follows the star rating patterns with 5 stars
          showing the 'Most Eco-friendly' spot and 0 stars depicting the 'Least
          Eco-friendly' spot.
        </li>
        <li className="fs-5">
          Savdhaan Meter: This represents the intensity of particular criminal
          activities using the concept of flagging. Four different color-coded
          flags have been utilized: 🟢Green represents 0 - 10%, 🟡Yellow
          represents 11 – 20% 🟠Orange represents 21 – 30% 🔴Red represents 31 –
          100% of average crime rate.
        </li>
      </p>
    </div>
  );
}
