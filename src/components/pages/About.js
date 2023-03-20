import React from "react";
// import { Navlink } from 'react-router-dom';
import displayImg from "../../components/images/stt.jpg"
import { Link } from "react-router-dom";

function About() {
  return (
    <div className=" text-center">
      <div className="container-fluid hero  d-flex">
        <div className="row m-4 my-auto align-items-center">
          <div className="col-xs-12 col-md-6 mt-2 text-center">
            <img
              src={displayImg}
              className="rounded-circle"
              width="250rem"
              alt="displayPicture"
            />
          </div>
          <div className=" col-xs-12 col-md-6">
            <h1 className="display-1 text-danger ">About me</h1>
            <p className=" typewriter h4 font-weight-bolder">
              Hi, I am Sam a Front-End Web Developer.
            </p>
            <p className=" lead mt-3 h5 about-me-content">
            I have a keen eye for designing and creating beautiful and responsive websites. I do enjoy watching soccer and rap music.
            </p>
            
          
            <div>
            <Link to="/contact">
                <button className="btn btn-danger mt-5 mb-5">Get In-touch</button>
              </Link>
            </div>
          </div>


         
        </div>
      </div>

     
    </div>
  );
}

export default About;
