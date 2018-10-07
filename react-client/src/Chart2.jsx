import React from "react";
import $ from "jquery";

class Bar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      className: ""
    };
  }
  componentDidMount() {
    const here = this;
    $(window).scroll(function() {
      $(".graph-cont").each(function() {
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 600) {
          $(".graph-cont").css("visibility", "visible");
          here.setState({ className: "bar" });
        }
      });
    });

    $(".graph-cont").css("visibility", "hidden");
  }

  render() {
    return (
      <div className="graph-cont">
        <div className={this.state.className + " bar1"}>Javascript</div>
        <div className={this.state.className + " bar2"}>HTML</div>
        <div className={this.state.className + " bar3"}>CSS</div>
        <div className={this.state.className + " bar4"}>React.js</div>
        <div className={this.state.className + " bar5"}>Angular</div>
        <div className={this.state.className + " bar6"}>Node.js</div>
        <div className={this.state.className + " bar7"}>SQL</div>
        <div className={this.state.className + " bar8"}>Git</div>
      </div>
    );
  }
}

export default Bar;
