import React from "react";
import $ from "jquery";
import Zoom from "react-reveal/Zoom";

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

    // $(window).scroll(function() {
    //   $(".contact-form").each(function() {
    //     var imagePos = $(this).offset().top;
    //     var topOfWindow = $(window).scrollTop();
    //     if (imagePos < topOfWindow + 800) {
    //       console.log("made it");
    //       $(".contact-form").css("visibility", "visible");
    //       $(this).addClass("contact-form2");
    //     }
    //   });
    // });

    // $(".contact-form").css("visibility", "hidden");
    $(".contact-title").css("visibility", "hidden");
  }

  render() {
    return (
      <div>
        <h1 className="contact-title">Contact</h1>
        <Zoom>
          <p className="contact-title-p">
            Have a question or want to work together?
          </p>
          <form className="contact-form">
            <input type="text" placeholder="name" />
            <input type="email" placeholder="email" />
            <input className="message" type="text" placeholder="message" />
          </form>
        </Zoom>
      </div>
    );
  }
}

export default Contact;
