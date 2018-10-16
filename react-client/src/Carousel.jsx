import React from "react";
import project from "./png/spacewatch.png";
import photoSite from "./png/photo-site.png";

const Carousel = props => (
  <div
    id="carousel-example-generic"
    className="carousel slide"
    data-ride="carousel"
  >
    <ol className="carousel-indicators">
      <li
        data-target="#carousel-example-generic"
        data-slide-to="0"
        className="active"
      />
      <li data-target="#carousel-example-generic" data-slide-to="1" />
      {/* <li data-target="#carousel-example-generic" data-slide-to="2" /> */}
    </ol>
    <div className="carousel-inner" role="listbox">
      <div className="item active">
        <a target="_blank" href="https://spacewatch.herokuapp.com/">
          <img classNameName="project-project" src={project} alt="project" />
        </a>
      </div>
      <div className="item">
        <a
          target="_blank"
          href="https://alex-berman-photography.herokuapp.com/"
        >
          <img classNameName="project-project" src={photoSite} alt="project" />
        </a>
      </div>
    </div>
    <a
      className="left carousel-control"
      href="#carousel-example-generic"
      role="button"
      data-slide="prev"
    >
      <span className="glyphicon glyphicon-chevron-left" aria-hidden="true" />
      <span className="sr-only">Previous</span>
    </a>
    <a
      className="right carousel-control"
      href="#carousel-example-generic"
      role="button"
      data-slide="next"
    >
      <span className="glyphicon glyphicon-chevron-right" aria-hidden="true" />
      <span className="sr-only">Next</span>
    </a>
  </div>
);

export default Carousel;
