import React from 'react'
import * as S from "./style"

const ProductCard = ({inStock, image, name, currentPrice, oldPrice }) => {
  return (
    <S.ProductCardWrapper>
    <S.ProductImageLink to='/'>
        <S.InStockTextBox>
            <S.StockText>
                {inStock
                    ? "В наличии"
                    : "Нет в наличии"}
            </S.StockText>
        </S.InStockTextBox>
        <S.SaleBox>Sale</S.SaleBox>
        <S.ProductImage src={image} alt={name} />
    </S.ProductImageLink>
    <S.ProductCardInfo>
        <S.InfoTitle>{name}</S.InfoTitle>
        <S.PriceBoard>
            <S.MainPrice>{currentPrice}</S.MainPrice>
            <S.OldPrice>{oldPrice}</S.OldPrice>
        </S.PriceBoard>
    </S.ProductCardInfo>
</S.ProductCardWrapper>
  )
}

export default ProductCard