import React from "react";
import * as S from "./style";
import Rate from "components/Rate";

const ProductCard = ({
    inStock,
    image,
    name,
    currentPrice,
    oldPrice,
    id,
    mark,
}) => {
    return (
        <S.ProductCardWrapper>
            <S.ProductImageLink to={`/product/detail/${id}`}>
                <S.InStockTextBox>
                    <S.StockText>
                        {inStock ? "В наличии" : "Нет в наличии"}
                    </S.StockText>
                </S.InStockTextBox>
                <S.SaleBox>Sale</S.SaleBox>
                <S.ProductImage src={image} alt={name} />
            </S.ProductImageLink>
            <S.RateText>
                <Rate mark={mark} />
                <S.RateTextInfo>(12) отзывов</S.RateTextInfo>
            </S.RateText>
            <S.ProductCardInfo>
                <S.InfoTitle>{name}</S.InfoTitle>
                <S.PriceBoard>
                    <S.MainPrice>{currentPrice}</S.MainPrice>
                    <S.OldPrice>{oldPrice}</S.OldPrice>
                </S.PriceBoard>
            </S.ProductCardInfo>
        </S.ProductCardWrapper>
    );
};

export default ProductCard;
