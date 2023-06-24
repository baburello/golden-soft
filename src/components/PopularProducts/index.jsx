import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
import { Autoplay, Navigation } from "swiper";
import { breakpoints } from "./data";
import { Container } from "components/Container/style";
import { SwiperNavBtn } from "components/Banner/style";
import { Title } from "components/WhyUs/style";
import * as S from "./style";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { ArrowIcon } from "assets/images/svgIcons";
import ProductCard from "components/ProductCard";
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
                    autoplay={true}
                    loop={true}
                    breakpoints={breakpoints}
                    modules={[Navigation, Autoplay]}
                    className='mySwiper'
                >
                    {data?.map((el) => (
                        <SwiperSlide key={el.id}>
                            <ProductCard
                                inStock={el.inStock}
                                image={el.image}
                                name={el.name}
                                currentPrice={el.currentPrice}
                                oldPrice={el.oldPrice}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>
        </S.PopularWrapper>
    );
};

export default PopularProducts;
