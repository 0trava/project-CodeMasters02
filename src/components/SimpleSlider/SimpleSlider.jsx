import React, { Component } from "react";
import Slider from "react-slick";
import './SimpleSlider.css';
import { Review } from "components/Review/Review";
import listReview from '../WORK-file/reviews.json';


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
            initialSlide: 0,
            speed: 800,
            infinite: false,
          }
        },
        {
            breakpoint: 1440,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 0,
              infinite: false,
            }
          },
    
    ]
    };



    return (
      <div className="SimpleSlider">
        <h2> Reviews</h2>
        <Slider {...settings} className="slider">
        {listReview.map((review, index ) => {
              
             return (

                <Review key={index} listReview={review}/>

             )
            
          })}
        </Slider>
      </div>
    );
  }
}