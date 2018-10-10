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
    this.contactClick = this.contactClick.bind(this);
    this.aboutClick = this.aboutClick.bind(this);
    this.resumeProjectClick = this.resumeProjectClick.bind(this);
  }

  componentDidMount() {
    const newScroll = scroll.animateScroll;
    ReactDOM.findDOMNode(this).scrollTop = -1000;
    setTimeout(() => {
      newScroll.scrollTo(1039);
    }, 24400);
  }

  contactClick() {
    scroll.animateScroll.scrollTo(3070);
  }

  aboutClick() {
    scroll.animateScroll.scrollTo(1039);
  }

  resumeProjectClick() {
    scroll.animateScroll.scrollTo(2285);
  }

  render() {
    return (
      <div>
        <Intro />
        <NavBar
          contact={this.contactClick}
          about={this.aboutClick}
          resumeProjectClick={this.resumeProjectClick}
        />
        <Home />
        <Resume />
        <Contact />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
