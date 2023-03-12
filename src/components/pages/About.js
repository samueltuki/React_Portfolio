import React from "react";
// import { Navlink } from 'react-router-dom';
import displayImg from "../../components/images/stt.jpg"

function About() {
  return (
    <div className="bg-primary text-center">
      <div className="container-fluid hero  d-flex">
        <div className="row m-4 my-auto align-items-center">
          <div className="col-xs-12 col-md-6 text-center">
            <img
              src={displayImg}
              className="rounded-circle"
              width="300px"
              alt="displayPicture"
            />
          </div>
          <div className="col-xs-12 col-md-6">
            <h1 className="display-1 text-danger ">About me</h1>
            <p className="font-weight-bolder">
              Hi, I am Sam a Front-End Web Developer.
            </p>
            <p className="about-me-content">
              From a International Business and Management background to coding?
              what a journey! That says alot about my work ethic , I am always
              keen to learn, explore and develop (...no pun intended).
            </p>
            <p> With my persevering nature the sky is my starting point.</p>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
}

export default About;
