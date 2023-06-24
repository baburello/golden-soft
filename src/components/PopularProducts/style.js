import styled from "styled-components";
import { adaptiveValue } from "utils/variable";
import { Colors, Flex } from "utils";
import { SwiperNavigation } from "components/Banner/style";
import { SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";


const PopularWrapper = styled.section`
    width: 100%;
    ${adaptiveValue("padding-bottom", 100, 40)};
`;

const PopularHeader = styled.div`
    width: 100%;
    ${Flex.spaceBetween};
    ${adaptiveValue("margin-bottom", 64, 24)};
`;

const PopularSwiperNavigation = styled(SwiperNavigation)`
    margin-inline: inherit;

    @media (max-width: 620px) {
        display: none;
    }
`;

const ProductCard = styled(SwiperSlide)`
    max-width: 288px;
    width: 100%;
    position: relative;
    color: ${Colors.lightGray};
    ${Flex.flexBetween};
    flex-direction: column;
    border: 1px solid ${Colors.borderColor};
`;

const ProductImageLink = styled(Link)`
    width: 100%;
    overflow: hidden;
    height: 320px;
    text-align: center;
`;

const ProductCardInfo = styled.div`
    padding: 20px;
    text-align: left;
`;

const InfoTitle = styled.h3`
    font-size: 16px;
    line-height: 26px;
    color: ${Colors.gray};
    width: 100%;
`;

const PriceBoard = styled.div`
    ${Flex.alignCenter};
    gap: 12px;
    margin-top: 10px;
`;

const MainPrice = styled.h3`
    font-size: 20px;
    line-height: 24px;
    color: ${Colors.dark};
`;

const OldPrice = styled.span`
    font-size: 18px;
    line-height: 21px;
    text-decoration: line-through;
    color: ${Colors.gray};
`;

const SaleBox = styled.span`
    background-color: ${Colors.light};
    position: absolute;
    top: 12px;
    right: 12px;
    padding: 8px 10px;
    font-size: 12px;
    line-height: 14px;
    color: ${Colors.dark};
    z-index: 15;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.03);
`;

const InStockTextBox = styled.div`
    position: absolute;
    top: 12px;
    left: 12px;
    ${Flex.alignCenter};
    gap: 8px;
    background-color: ${Colors.light};
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.03);
    padding-inline: 5px;
`;

const ProductImage = styled.img`
    width: 200px !important;
    /* padding-top: 30px; */
    height: auto;
    object-fit: contain;
`;

const StockText = styled.span`
    font-size: 14px;
    line-height: 24px;
    color: ${Colors.gray};
    display: block;
    margin: 0 auto;
`;

export {
    PopularWrapper,
    PopularHeader,
    PopularSwiperNavigation,
    ProductCard,
    ProductImageLink,
    ProductCardInfo,
    InfoTitle,
    PriceBoard,
    MainPrice,
    OldPrice,
    SaleBox,
    InStockTextBox,
    StockText,
    ProductImage,
};
