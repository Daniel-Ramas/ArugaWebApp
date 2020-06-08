import React from "react";
import video from "../../assets/beach.mp4";
import InstagramLogin from "react-instagram-login";

//styling for background video
import "./Home.css";

//authentication response
const responseInstagram = (response) => {
  console.log(response);
};

export default function Home() {
  return (
    <div className="text-container">
      <h1 className="main-title">Aruga App</h1>
      <h2 className="main-subheading">
        because influencing is a full time job
      </h2>
      <button className="learn-more-button">Learn More!</button>
      <InstagramLogin
        clientId="905054663332719"
        buttonText="Login"
        onSuccess={responseInstagram}
        onFailure={responseInstagram}
      />
      <video className="homevideo" autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
}
