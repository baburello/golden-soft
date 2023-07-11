import { createGlobalStyle } from "styled-components";
import { Colors, Flex } from "./index";
import { adaptiveValue } from "./variable";

export const GlobalStyles = createGlobalStyle`
      @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;700&family=Roboto:wght@400;500;700;900&display=swap');
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
  }

    .swiper {
      width: 100%;
      height: 100%;
    }

    .swiper-slide {
      text-align: center;
      font-size: 18px;
      ${Flex.center};
    }

    .swiper-slide img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    button{
      border: none;
    }

    .swiper-pagination-bullets{
      width: auto !important;
    }

    .swiper-pagination-bullet{
      width: 8px !important;
      height: 8px !important;
      background-color: #ADD7FF !important;
      position: relative;
      transition: all 0.3s;
    }

    .swiper-pagination-bullet::after{
      content:"";
      position: absolute;
      top: -8px;
      left: -8.5px;
      /* bottom: -8px;
      right: -8px; */
      width: 24px;
      height: 24px;
      border-radius: 50%;
      border: 1px solid #ADD7FF;
      opacity: 0;
    }

    .swiper-pagination-bullet:nth-child(even){
      margin-inline: 24px !important;
    };

    .swiper-pagination-bullet-active{
      background-color: ${Colors.primaryColor} !important;
    }

    .swiper-pagination-bullet-active.swiper-pagination-bullet::after{
      opacity: 1;
    }

    .swiper-button{
      background-color: transparent !important;
    }

    .swiper-button-disabled svg path{
      stroke: #A4A4A4 !important;
    }

    .error_message{
      position: absolute;
      bottom: -20px;
      color: red;
      ${adaptiveValue("font-size", 14, 12)}
      margin-top: 5px;
    }

    button{
      background-color: transparent;
      cursor: pointer;
    }
`;