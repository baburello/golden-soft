import { Link } from "react-router-dom";
import styled from "styled-components";
import { Colors, Flex } from "utils/index";
import { SwiperSlide } from "swiper/react";

const ProductCardWrapper = styled.div`
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
`;

const ProductCardInfo = styled.div`
    padding: 10px 12px;
    text-align: left;
`;

const InfoTitle = styled.h3`
    font-size: 16px;
    line-height: 26px;
    color: ${Colors.gray};
    width: 100%;
`;

const PriceBoard = styled.div`
    width: 100%;
    ${Flex.spaceBetween};
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
    display: block;
    margin: 0 auto;
`;

const StockText = styled.span`
    font-size: 14px;
    line-height: 24px;
    color: ${Colors.gray};
`;

const RateText = styled.div`
    ${Flex.alignCenter};
    justify-content: space-between;
    width: 250px;
`;

const RateTextInfo = styled.p`
    font-size: 14px;
    color: ${Colors.gray};
`;

export {
    StockText,
    InStockTextBox,
    InfoTitle,
    MainPrice,
    OldPrice,
    PriceBoard,
    ProductCardWrapper,
    ProductCardInfo,
    ProductImage,
    ProductImageLink,
    SaleBox,
    RateText,
    RateTextInfo,
};
