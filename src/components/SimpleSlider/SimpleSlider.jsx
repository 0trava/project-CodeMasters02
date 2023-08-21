import React, { Component } from "react";
import Slider from "react-slick";
import './SimpleSlider.css';
import { Review } from "components/Review/Review";
// import listReview from '../WORK-file/reviews.json';


export default class SimpleSlider extends Component {

  

  render() {
    const { review } = this.props;
  
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
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 500,
            initialSlide: 0,
            infinite: true,
            }
          },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 600,
            initialSlide: 0,
            infinite: false,
          }
        },
        {
          breakpoint: 1439,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 600,
            initialSlide: 0,
            infinite: false,
          }
        },
        {
            breakpoint: 1440,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              speed: 600,
              initialSlide: 0,
              infinite: false,
            }
          },
    ]
    };

    return (
      <div className="SimpleSlider">
        <h2> Reviews </h2>
        <Slider {...settings} className="slider">
        {review.map((rev, index ) => {
              return (
                <Review key={index} review={rev}/>
              )
          })}
        </Slider>
      </div>
    );
  }
}