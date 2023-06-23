import React, { useEffect, useRef, useState } from "react";
import { Swiper } from "swiper/react";
import axios from "axios";
import { Navigation } from "swiper";
import { Container } from "components/Container/style";
import { SwiperNavBtn } from "components/Banner/style";
import { Title } from "components/WhyUs/style";
import * as S from "./style";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { ArrowIcon } from "assets/images/svgIcons";
// import { popularProductData } from "./data";

const PopularProducts = () => {
    const [data, setData] = useState([]);

    async function getData() {
        const res = await axios.get(`${process.env.REACT_APP_MAIN_URL}`);
        if (res.status === 200) {
            setData(res.data);
        }
    }

    const useSwiperRef = () => {
        const [wrapper, setWrapper] = useState(null);
        const ref = useRef(null);
        useEffect(() => {
            if (ref.current) {
                setWrapper(ref.current);
            }
        }, []);
        return [wrapper, ref];
    };

    const [nextEl, nextElRef] = useSwiperRef();
    const [prevEl, prevElRef] = useSwiperRef();

    useEffect(() => {
        getData();
    }, []);

    console.log(data);

    return (
        <S.PopularWrapper>
            <Container>
                <S.PopularHeader>
                    <Title>Наши популярные продукты</Title>

                    <S.PopularSwiperNavigation>
                        <SwiperNavBtn ref={prevElRef}>
                            <ArrowIcon />
                        </SwiperNavBtn>
                        <SwiperNavBtn ref={nextElRef}>
                            <ArrowIcon
                                style={{ transform: "rotate(180deg)" }}
                            />
                        </SwiperNavBtn>
                    </S.PopularSwiperNavigation>
                </S.PopularHeader>

                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    navigation={{
                        prevEl,
                        nextEl,
                    }}
                    breakpoints={{
                        300: {
                            slidesPerView: 1,
                        },
                        460: {
                            slidesPerView: 2,
                        },
                        620: {
                            slidesPerView: 3,
                        },
                        770: {
                            slidesPerView: 4,
                        },
                    }}
                    modules={[Navigation]}
                    className='mySwiper'
                >
                    {data?.map((el) => (
                        <S.ProductCard key={el.id}>
                            <S.ProductImageLink to='/'>
                                <S.InStockTextBox>
                                    <S.StockText>
                                        {el.inStock
                                            ? "В наличии"
                                            : "Нет в наличии"}
                                    </S.StockText>
                                </S.InStockTextBox>
                                <S.SaleBox>Sale</S.SaleBox>
                                <S.ProductImage src={el.image} alt={el.name} />
                            </S.ProductImageLink>
                            <S.ProductCardInfo>
                                <S.InfoTitle>{el.name}</S.InfoTitle>
                                <S.PriceBoard>
                                    <S.MainPrice>{el.currentPrice}</S.MainPrice>
                                    <S.OldPrice>{el.oldPrice}</S.OldPrice>
                                </S.PriceBoard>
                            </S.ProductCardInfo>
                        </S.ProductCard>
                    ))}
                </Swiper>
            </Container>
        </S.PopularWrapper>
    );
};

export default PopularProducts;
