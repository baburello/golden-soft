import React, { useEffect, useRef, useState } from 'react';
import { Swiper } from "swiper/react";
import { Container } from '../Container/style';
import Button from '../Button';
import * as S from "./style";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { ArrowIcon } from '../../assests/images/svgIcons';
import { swiperElementData } from './data';

const Banner = () => {



  const useSwiperRef = () => {
    const [wrapper, setWrapper] = useState(null);
    const ref = useRef(null);
    useEffect(() =>{
    if (ref.current) {
      setWrapper(ref.current);
      }
    }, []);
    return [wrapper, ref];
  };

  const [nextEl, nextElRef] = useSwiperRef();
  const [prevEl, prevElRef] = useSwiperRef();

  return (
    <S.BannerWrapper>
      <Container>
        <Swiper
          cssMode={true}
          navigation={{
            prevEl,
            nextEl,
          }}
          pagination={{
            el: ".pagination-bullets",
            type: "bullets",
          }}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          
          {swiperElementData.map((el) => {
            return(
              <S.SwiperItems key={el.id}>
              <S.SwiperItemsImage>
                <img src={el.image} alt={el.title} />
              </S.SwiperItemsImage>
              <S.SwiperInfo>
                <S.InfoTitle>
                  {el.title}
                </S.InfoTitle>
                <S.InfoText>
                  {el.text}
                </S.InfoText>
                <S.PriceBox>
                  <S.PriceBadge>Цена</S.PriceBadge>
                  <S.MainPriceText>{el.main_price}</S.MainPriceText>
                  <S.DiscountText>{el.discount}</S.DiscountText>
                </S.PriceBox>
                <Button text={"Добавить в корзину"}/>
              </S.SwiperInfo>
            </S.SwiperItems>
            )
          })};

          <S.SwiperNavigation>
            <S.SwiperNavBtn ref={prevElRef}>
              <ArrowIcon />
            </S.SwiperNavBtn>
            <div className="pagination-bullets"></div>
            <S.SwiperNavBtn ref={nextElRef}>
              <ArrowIcon style={{transform: "rotate(180deg)"}}/>
            </S.SwiperNavBtn>
          </S.SwiperNavigation>
        </Swiper>
      </Container>
    </S.BannerWrapper>
  )
};

export default Banner