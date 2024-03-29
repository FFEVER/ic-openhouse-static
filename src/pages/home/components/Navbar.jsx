import React, { Component } from "react";
import $ from "jquery";
import MoveTo from "moveto";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.onLinkClicked = this.onLinkClicked.bind(this);
    this.onCollapesClicked = this.onCollapesClicked.bind(this);
  }
  componentWillMount() {
    this.navChangeColor();
  }

  onLinkClicked(event) {
    const moveTo = new MoveTo();
    const target = document.getElementById(event.target.dataset.id);
    this.onCollapesClicked(event);
    const $navbarCollapse = $(".navbar-collapse");
    $navbarCollapse.collapse("hide");
    moveTo.move(target);
  }

  onCollapesClicked(event) {
    // Hide/show animation hamburger function
    var $nav = $(".navbar.fixed-top");
    var $hero = $(".Hero");
    const $icon = $(".animated-icon1");
    if ($icon.hasClass("open")) {
      $icon.removeClass("open");
      var top = $(window).scrollTop();
      if (top <= $hero.height() - $nav.height()) {
        $nav.removeClass("scrolled");
      }
    } else {
      $icon.addClass("open");
      $nav.addClass("scrolled");
    }
  }

  navChangeColor() {
    $(function() {
      $(document).scroll(function() {
        var $nav = $(".navbar.fixed-top");
        var $hero = $(".Hero");
        var $brand = $("#navbar-brand");

        if ($(this).scrollTop() > $hero.height() - $nav.height()) {
          $brand.removeClass("hidden");
          $nav.addClass("scrolled");
        } else {
          $brand.addClass("hidden");
          $nav.removeClass("scrolled");
        }
      });
    });
  }

  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-transparent fixed-top">
        <a
          id="navbar-brand"
          className="navbar-brand hidden"
          data-id="root"
          onClick={this.onLinkClicked}
        >
          <img
            src={require("./images/ic-logo-rabbit.png")}
            data-id="root"
            onClick={this.onLinkClicked}
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={this.onCollapesClicked}
        >
          <div className="animated-icon1">
            <span />
            <span />
            <span />
          </div>
        </button>

        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a
                className="nav-link"
                data-id="Info"
                onClick={this.onLinkClicked}
              >
                DESCRIPTION
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-id="Activities"
                onClick={this.onLinkClicked}
              >
                ACTIVITIES
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-id="Schedule"
                onClick={this.onLinkClicked}
              >
                SCHEDULE
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-id="Courses"
                onClick={this.onLinkClicked}
              >
                COURSES
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-id="Map"
                onClick={this.onLinkClicked}
              >
                MAP
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
