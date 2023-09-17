import "../css/AboutSlider.css";
import Quote from "../img/quote.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const AboutSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="container">
      <div className="row about-slider">
        <h2 className="heading">Team Introduction</h2>
        <Slider {...settings}>
          <div className="about-slider-item">
            <p>
              Note: this is a one-way operation. Once you `eject`, you can't go
              back!** If you aren't satisfied with the build tool and
              configuration choices, you can `eject` at any time. This command
              will remove the single build dependency from your project.
              Instead, it will copy all the configuration files and the
              transitive dependencies (webpack, Babel, ESLint, etc) right into
              your project so you have full control over them. All of the
              commands except `eject` will still work, but they will point to
              the copied scripts so you can tweak them. At this point you're on
              your own. You don't have to ever use `eject`.
            </p>
            <img src={Quote} alt="Quote" />
            <h3>Aeliya Tamang</h3>
          </div>
          <div className="about-slider-item">
            <p>
              Note: this is a one-way operation. Once you `eject`, you can't go
              back!** If you aren't satisfied with the build tool and
              configuration choices, you can `eject` at any time. This command
              will remove the single build dependency from your project.
              Instead, it will copy all the configuration files and the
              transitive dependencies (webpack, Babel, ESLint, etc) right into
              your project so you have full control over them. All of the
              commands except `eject` will still work, but they will point to
              the copied scripts so you can tweak them. At this point you're on
              your own. You don't have to ever use `eject`.
            </p>
            <img src={Quote} alt="Quote" />
            <h3>Aeliya Tamang</h3>
          </div>
          <div className="about-slider-item">
            <p>
              Note: this is a one-way operation. Once you `eject`, you can't go
              back!** If you aren't satisfied with the build tool and
              configuration choices, you can `eject` at any time. This command
              will remove the single build dependency from your project.
              Instead, it will copy all the configuration files and the
              transitive dependencies (webpack, Babel, ESLint, etc) right into
              your project so you have full control over them. All of the
              commands except `eject` will still work, but they will point to
              the copied scripts so you can tweak them. At this point you're on
              your own. You don't have to ever use `eject`.
            </p>
            <img src={Quote} alt="Quote" />
            <h3>Aeliya Tamang</h3>
          </div>
          <div className="about-slider-item">
            <p>
              Note: this is a one-way operation. Once you `eject`, you can't go
              back!** If you aren't satisfied with the build tool and
              configuration choices, you can `eject` at any time. This command
              will remove the single build dependency from your project.
              Instead, it will copy all the configuration files and the
              transitive dependencies (webpack, Babel, ESLint, etc) right into
              your project so you have full control over them. All of the
              commands except `eject` will still work, but they will point to
              the copied scripts so you can tweak them. At this point you're on
              your own. You don't have to ever use `eject`.
            </p>
            <img src={Quote} alt="Quote" />
            <h3>Aeliya Tamang</h3>
          </div>
        </Slider>
      </div>
    </div>
  );
};
export default AboutSlider;
