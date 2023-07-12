import React, { useContext } from "react";
import Rate from "components/Rate";
import { Button } from "@mui/material";
import MainContext from "reducer/CartContext";
import * as S from "./style";

const ProductCard = ({ data, select, like }) => {
    const { inStock, image, name, currentPrice, oldPrice, id, mark } = data;
    console.log(data, "hello");
    const cartToggle = () => {
        return select ? removeFromCart(data.id) : addToCart(data);
    };
    const likeToggle = () => {
        return like ? removeFromLike(id) : addToLike(data);
    };
    const { addToCart, removeFromCart, addToLike, removeFromLike } =
        useContext(MainContext);
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
                <Button onClick={cartToggle}>
                    {select ? "Remove from cart" : "Add to cart"}
                </Button>
                <Button onClick={likeToggle}>{ like ? "Remove" : "Add"}</Button>
            </S.ProductCardInfo>
        </S.ProductCardWrapper>
    );
};

export default ProductCard;
