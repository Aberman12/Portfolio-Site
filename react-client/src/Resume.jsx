import React from "react";
import resume from "./png/Alexander-Berman-Resume-1.png";
import $ from "jquery";
import Modal from "./Modal.jsx";
import project from "./png/spacewatch.png";
import Carousel from "./Carousel.jsx";

class Resume extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      project: [project, project],
      count: 0,
      url: [
        "https://spacewatch.herokuapp.com/",
        "file:///Users/alexhome/Desktop/BootstrapExercise/Projects/Project-7-Complete-Web/index.html#carousel-example-generic"
      ]
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  componentDidMount() {
    $(window).scroll(function() {
      $(".resume-projects").each(function() {
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 500) {
          $(".resume-projects").css("visibility", "visible");
          $(this).addClass("resume-projects2");
        }
      });
    });

    $(window).scroll(function() {
      $(".project-resume-title").each(function() {
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 800) {
          $(".project-resume-title").css("visibility", "visible");
          $(this).addClass("project-resume-title2");
        }
      });
    });

    $(".project-resume-title").css("visibility", "hidden");
    $(".resume-projects").css("visibility", "hidden");
  }

  showModal() {
    this.setState({ show: true });
  }

  hideModal() {
    this.setState({ show: false });
  }

  moveLeft() {
    if (this.state.count === 1) {
      this.setState({ count: 0 });
    }
  }

  moveRight() {
    console.log(this.state.count);
    if (this.state.count < 1) {
      this.setState({ count: 1 });
      setTimeout(() => {
        console.log(this.state.url[this.state.count]), 300;
      });
    }
  }

  render() {
    return (
      <div className="project-page">
        <h1 className="project-resume-title">
          <strong>Resume/Portfolio</strong>
        </h1>
        <Modal show={this.state.show} handleClose={this.hideModal} />
        <div className="resume-projects">
          <ul className="resume-projects-ul">
            <li className="resume">
              <h1 className="resume-title">Resume</h1>
              <img
                onClick={() => this.showModal()}
                className="resume-resume"
                src={resume}
                alt="resume"
              />
            </li>
            <li className="projects">
              <h1 className="projects-title">Recent Projects</h1>
              <Carousel />
              {/* <span className="span-arrow" onClick={() => this.moveLeft()}>
                &#60;
              </span>
              <a target="_blank" href={this.state.url[this.state.count]}>
                <img
                  className="project-project"
                  src={this.state.project[this.state.count]}
                  alt="project"
                />
              </a>
              <span className="span-arrow2" onClick={() => this.moveRight()}>
                &#62;
              </span> */}
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Resume;
