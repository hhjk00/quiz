import React from "react";
import Slider from "react-slick";
import styled from "@emotion/styled";
import "slick-carousel/slick/slick.css"; import "slick-carousel/slick/slick-theme.css";

const Wrapper = styled.div`
    background-color: yellow;
    height: 300px;
`;


const Banner = styled.div`
  padding: 100px;
  `

const H3 = styled.img`
  width: 100px;
  height: 100px;
  margin: auto;
  `



const settings = { dots: true, infinite: true, speed: 500, slidesToShow: 1, slidesToScroll: 1 };


export default function LayoutBanner() {
  return (
    <Wrapper>
    <Banner>
        <Slider {...settings}>
          <div>
            <H3 src="/images/gosim1.png"></H3>
          </div>
          <div>
          <H3 src="/images/gosim2.png"></H3>          </div>
          <div>
          <H3 src="/images/gosim3.png"></H3>          </div>
          <div>
          <H3 src="/images/gosim4.png"></H3>          </div>
          <div>
          <H3 src="/images/gosim5.png"></H3>          </div>
        </Slider>
      </Banner>
      </Wrapper>
    );
  }
