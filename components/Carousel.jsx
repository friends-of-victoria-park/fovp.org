import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
  
export default class ImgCarousel extends Component {
    render() {
        return (
            <div>
              <Carousel showThumbs={false} >
                  <div>
                      <img src="/VP_BACK.jpg"/>
                  </div>
              </Carousel>
            </div>
        );
    }
};