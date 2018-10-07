import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import "./css/main.css";
import "./css/main.scss";
import NavBar from "./NavBar.jsx";
import Intro from "./About.jsx";
import scroll from "react-scroll";
import Home from "./Home.jsx";
import Resume from "./Resume.jsx";
import Contact from "./Contact.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    const newScroll = scroll.animateScroll;
    ReactDOM.findDOMNode(this).scrollTop = -1000;
    setTimeout(() => {
      newScroll.scrollTo(1010);
    }, 24400);

    $.ajax({
      url: "/items",
      success: data => {
        this.setState({
          items: data
        });
      },
      error: err => {
        console.log("err", err);
      }
    });
  }

  render() {
    return (
      <div>
        <Intro />
        <NavBar />
        <Home />
        <Resume />
        <Contact />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
