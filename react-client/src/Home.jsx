import React from "react";
import $ from "jquery";
import time from "./png/clock.png";
import bulb from "./png/creative.png";
import network from "./png/network.png";
import gear from "./png/settings.png";
import me from "./png/0.png";
import Example from "./Chart.jsx";
import ReactCardFlip from "react-card-flip";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: false
    };
  }
  componentDidMount() {
    const here = this;
    $(window).scroll(function() {
      $(".home-title").each(function() {
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 800) {
          console.log("made it to home title");
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
          console.log("made it to ul");
          $(".my-skills").css("visibility", "visible");
          $(this).addClass("my-skills2");
        }
      });
    });

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
              <p className="responsive">Responsive</p>
              <p className="responsive2">
                My layouts will work on any device, big or small.
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
              I'm the Front-End Developer living in Los Angeles, CA. I have
              serious passion for UI effects, animations and creating intuitive,
              dynamic user experiences. Let's make something special.
            </p>
          </div>
        </div>
        <Example />
      </div>
    );
  }
}

export default Home;
