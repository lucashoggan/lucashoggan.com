import React from "react";
import Header from "./components/Header";
import laptop_img from "./assets/laptop.jpg";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useRef } from "react";

const Index = () => {
  const parallax = useRef(null);

  const scroll = (to) => {
    parallax.current.scrollTo(to);
  };

  return (
    <main className="index">
      <Header />

      <div className="index-heading">
        <img
          className="laptop-img1 flex sm:flex-row flex-col"
          src={laptop_img}
          alt="Laptop on Wooden Surface"
        />

        <h1 className="index-landing-title">
          modern websites, <br /> <span className="em">modern ways.</span>
        </h1>
      </div>

      <div className="whoami">
        <h1 className="lg-head">
          Who am <span className="em">I</span> ?
        </h1>

        <p className="desc">
          I am <span className="em">Lucas Hoggan</span>, a 15-year-old developer
          from Scotland with an interest in computer science, physics and
          business management.
        </p>

        <h2 className="md-head">My Current Certifications</h2>

        <div className="tbl">
          <div className="col">Certification Name</div>
          <div className="col">Skills</div>
          <div className="col">Completed</div>

          <p className="row">Harvard cs50p Certification</p>
          <p className="row">Python, Software development</p>
          <p className="row">Dec 2023</p>
        </div>
      </div>
    </main>
  );
};
//Photo by Daniel Putzer: https://www.pexels.com/photo/photography-of-macbook-half-opened-on-white-wooden-surface-633409/
export default Index;
