import React from "react";
import $ from "jquery";
import time from "./png/clock.png";
import bulb from "./png/creative.png";
import network from "./png/network.png";
import gear from "./png/settings.png";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hello: []
    };
  }
  componentDidMount() {
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
              <div className="icon" />
              <p className="fast">Fast</p>
              <p className="par">
                Fast load times and lag free interaction, my highest priority.
              </p>
            </li>
            <li>
              <img src={gear} className="responsive-icon" />
              <div className="icon" />
              <p className="responsive">Responsive</p>
            </li>
            <li>
              <img src={bulb} className="intuitive-icon" />
              <div className="icon intuitive" />
              <p className="intuitive">Intuitive</p>
            </li>
            <li>
              <img src={network} className="dynamic-icon" />
              <div className="icon" />
              <p className="dynamic">Dynamic</p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Home;
