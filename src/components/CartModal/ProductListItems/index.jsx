import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import * as S from "./style";
import MainContext from "reducer/CartContext";

const ProductListItems = ({ product }) => {
    const { image, name, currentPrice, id } = product;
    const { removeFromCart } = useContext(MainContext);
    return (
        <S.ProductWrapper>
            <S.Block>
                <Link to={`/product/detail/${id}`}>
                    <S.ImageWrapper>
                        <img src={image} alt={name} />
                    </S.ImageWrapper>
                </Link>
                <S.ProductInfoWrapper>
                    <S.ProductInfo>
                        <S.ProductInfoTitle>{name}</S.ProductInfoTitle>
                        <S.BtnGroup>
                            <S.CounterBtn>-</S.CounterBtn>
                            <S.ProductCount>1</S.ProductCount>
                            <S.CounterBtn>+</S.CounterBtn>
                        </S.BtnGroup>
                    </S.ProductInfo>
                </S.ProductInfoWrapper>
            </S.Block>
            <S.Actions>
                <IconButton onClick={() => removeFromCart(id)}>
                    <DeleteOutlineRoundedIcon color='primary' />
                </IconButton>
                <p>{currentPrice}</p>
            </S.Actions>
        </S.ProductWrapper>
    );
};

export default ProductListItems;
