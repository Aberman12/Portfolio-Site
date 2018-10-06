import React from "react";
import resume from "./png/Alexander-Berman-Resume-1.png";
import project from "./png/spacewatch.png";
import $ from "jquery";
import Modal from "./Modal.jsx";

class Resume extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
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
          console.log("made it");
          $(".resume-projects").css("visibility", "visible");
          $(this).addClass("resume-projects2");
        }
      });
    });

    $(".resume-projects").css("visibility", "hidden");
  }

  showModal() {
    this.setState({ show: true });
  }

  hideModal() {
    this.setState({ show: false });
  }

  render() {
    return (
      <div className="project-page">
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
              <h1 className="projects-title">Most Recent App</h1>
              <a target="_blank" href="https://spacewatch.herokuapp.com/">
                <img className="project-project" src={project} alt="project" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Resume;
