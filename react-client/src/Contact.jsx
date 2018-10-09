import React from "react";
import $ from "jquery";
import Zoom from "react-reveal/Zoom";
import axios from "axios";
import github from "./png/GitHub-Mark-32px.png";
import linkedin from "./png/linkedin-logo.png";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  componentDidMount() {
    console.log("made it 2");
    $(window).scroll(function() {
      $(".contact-title").each(function() {
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 800) {
          console.log("made it");
          $(".contact-title").css("visibility", "visible");
          $(this).addClass("contact-title2");
        }
      });
    });

    $(window).scroll(function() {
      $(".contact-form").each(function() {
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 550) {
          console.log("made it");
          $(".contact-form").css("visibility", "visible");
          $(this).addClass("contact-form2");
          $(".my-social").css("visibility", "visible");
          $(".my-social").addClass("my-social2");
        }
      });
    });

    $(".my-social").css("visibility", "hidden");

    $(".contact-form").css("visibility", "hidden");
    $(".contact-title").css("visibility", "hidden");
  }

  resetForm() {
    document.getElementById("contact-form").reset();
  }

  handleSubmit(e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    console.log("made it to handle", name, email, message);
    axios({
      method: "POST",
      url: "http://localhost:3003/api/send",
      data: {
        name: name,
        email: email,
        message: message
      }
    }).then(response => {
      if (response.data.msg === "success") {
        window.alert("Message Sent.");
        this.resetForm();
      } else if (response.data.msg === "fail") {
        window.alert("Message failed to send.");
      }
    });
  }

  render() {
    return (
      <div>
        <h1 className="contact-title">Contact</h1>
        <Zoom>
          <p className="contact-title-p">
            Have a question or want to work together?
          </p>
          <form
            className="contact-form"
            onSubmit={this.handleSubmit.bind(this)}
            method="POST"
          >
            <div className="form-group">
              {/* <label for="name">Name</label> */}
              <input
                type="text"
                className="form-control"
                placeholder="name"
                id="name"
              />
            </div>
            <div className="form-group">
              {/* <label for="exampleInputEmail1">Email address</label> */}
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="email"
              />
            </div>
            <div className="form-group">
              {/* <label for="message">Message</label> */}
              <textarea
                placeholder="message"
                className="form-control"
                rows="5"
                id="message"
              />
            </div>
            <button type="submit" className="btn">
              Send
            </button>
          </form>
        </Zoom>
        <div className="my-social">
          <ul className="social">
            <a href="https://github.com/Aberman12">
              <li>
                <img src={github} className="github-icon icon2" />
              </li>
            </a>
            <a href="https://www.linkedin.com/in/alex-berman-67b339ab/">
              <li>
                <img src={linkedin} className="linkedin-icon icon2" />
              </li>
            </a>
          </ul>
        </div>
      </div>
    );
  }
}

export default Contact;
