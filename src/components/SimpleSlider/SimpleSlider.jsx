import React, { Component } from "react";
import Slider from "react-slick";
import './SimpleSlider.css';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: false,
      slickNext: false,
      slidesToShow: 2,
      slidesToScroll: 2,
      initialSlide: 0,
      speed: 500,
      responsive: [
        {
            breakpoint: 334,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            }
          },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
            breakpoint: 1440,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
            }
          },
    
    ]
    };
    return (
      <div className="SimpleSlider">
        <h2> Reviews</h2>
        <Slider {...settings} className="slider">
          <div>
            <h3>Olena Doe </h3>
            {/* <p>GooseTrack is impressive, the calendar view and filter options make it easy to stay organized and focused. Highly recommended.</p> */}
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}