import React from "react";
// import { Link, Route, Routes } from 'react-router-dom';
// import Skills from './Skills';
import { useForm, ValidationError } from "@formspree/react";

function Contact() {
  const [state, handleSubmit] = useForm("contactForm");
  if (state.succeeded) { return <p>Thanks for the message!</p>; 
}

  return (
  
    <div className="container-fluid mb-4 pt-4 " id="contact">
      <h2 className="text-center py-4 display-4 text-danger">Contact</h2>
      <div className="row">
        <div className="col-lg-6 " style={{ width: "400 px" }}>
          {/* contact form  */}
          <form onSubmit={handleSubmit}
            className="needs-validation text-left mx-auto"
            style={{ maxWidth: "300px" }}
            method="POST"
          >
            <div className="mb-3 form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                placeholder="Name"
                required
              />
            </div>
            <div className="mb-3 form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="text"
                className="form-control"
                name="email"
                id="email"
                placeholder="Email address"
                required
              />
            </div>
            <div className="mb-3 form-group">
              <label htmlFor="message" className="form-label">
                Message Me
              </label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="3"
                required
              ></textarea>
            </div>
            <button
              className="btn btn-outline-danger w-100 font-weight-bold"
              type="submit"
            >
              Get In-touch
            </button>
          </form>
        </div>

        {/* contact socials */}
        <div className=" mt-4 contact-content col-md-6 ">
          <div className="mb-5 mx-auto d-flex justify-content-center">
            <a href="www.twitter.com">
              <i
                className="fa fa-twitter p-3 bg-secondary rounded-circle text-white"
                aria-hidden="true"
              ></i>
            </a>
            <span className="mx-3"></span>
            <a href="https://www.linkedin.com/in/samuel-tuki-305baa25a/">
              <i
                className="fa fa-linkedin p-3 bg-secondary rounded-circle text-white"
                aria-hidden="true"
              ></i>
            </a>
            <span className="mx-3"></span>
            <a href="https://github.com/samueltuki">
              <i
                className="fa fa-github p-3 bg-secondary rounded-circle text-white"
                aria-hidden="true"
              ></i>
            </a>
          </div>

          {/* CV Download */}
          <div className="d-flex justify-content-center">
            <a
              href="/asset/MyCv.doc"
              download="MyCv.doc"
              className="btn btn-outline-danger px-3 font-weight-bold mb-6 bounce "
            >
              <i className="fa fa-download mr-2"></i>Copy of my CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
