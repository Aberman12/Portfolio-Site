import React from "react";
import $ from "jquery";
import time from "./png/time.png";
import bulb from "./png/bulb.png";
import network from "./png/network2.png";
import gear from "./png/gear.png";
import me from "./png/0.png";
import Example from "./Chart2.jsx";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: false,
      className: ""
    };
  }
  componentDidMount() {
    const here = this;
    $(window).scroll(function() {
      $(".home-title").each(function() {
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 800) {
          $(".home-title").css("visibility", "visible");
          $(this).addClass("home-title2");
        }
      });
    });

    $(window).scroll(function() {
      $(".my-skills").each(function() {
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 1000) {
          $(".my-skills").css("visibility", "visible");
          $(this).addClass("my-skills2");
        }
      });
    });

    $(window).scroll(function() {
      $(".my-image").each(function() {
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 400) {
          $(".my-image").css("visibility", "visible");
          $(this).addClass("my-image2");
        }
      });
    });

    $(window).scroll(function() {
      $(".graph-cont").each(function() {
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 500) {
          $(".graph-cont").css("visibility", "visible");
          here.setState({ className: "bar" });
        }
      });
    });

    $(".graph-cont").css("visibility", "hidden");

    $(".my-image").css("visibility", "hidden");
    $(".my-skills").css("visibility", "hidden");
    $(".home-title").css("visibility", "hidden");
  }

  render() {
    return (
      <div className="home">
        <h1 className="home-title">
          <strong>About</strong>
        </h1>
        <div className="my-skills">
          <ul className="skills-list">
            <li>
              <img src={time} className="fast-icon" />
              <p className="fast">Fast</p>
              <p className="fast2">
                Fast load times and lag free interaction, my highest priority.
              </p>
            </li>
            <li>
              <img src={gear} className="responsive-icon" />
              <p className="responsive">Efficient</p>
              <p className="responsive2">
                My back-end systems are designed to be as efficient as possible.
              </p>
            </li>
            <li>
              <img src={bulb} className="intuitive-icon" />
              <p className="intuitive">Intuitive</p>
              <p className="intuitive2">
                Strong preference for easy to use, intuitive UX/UI.
              </p>
            </li>
            <li>
              <img src={network} className="dynamic-icon icon" />
              <p className="dynamic">Dynamic</p>
              <p className="dynamic2">
                Websites don't have to be static, I love making pages come to
                life.
              </p>
            </li>
          </ul>
        </div>
        <div className="about-me">
          <div className="my-image">
            <img className="me" src={me} alt="this-is-me" />
            <p className="me-title">Here's Me!</p>
            <p className="me-description">
              I'm a full-stack developer living in Los Angeles, CA. I have a
              serious passion for creating intuitive, dynamic user experiences
              and fast, efficient back-end systems. Let's make something
              special.
            </p>
          </div>
          <div className="graph-cont">
            <div className={this.state.className + " bar1"}>Javascript</div>
            <div className={this.state.className + " bar2"}>HTML</div>
            <div className={this.state.className + " bar3"}>React.js</div>
            <div className={this.state.className + " bar4"}>CSS</div>
            <div className={this.state.className + " bar5"}>Angular</div>
            <div className={this.state.className + " bar6"}>Node.js</div>
            <div className={this.state.className + " bar7"}>SQL</div>
            <div className={this.state.className + " bar8"}>Git</div>
            <div className={this.state.className + " bar9"}>UI Design</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
