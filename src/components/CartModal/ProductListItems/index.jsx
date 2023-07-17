import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import * as S from "./style";
import MainContext from "context/CartContext";

const ProductListItems = ({ product }) => {
    const { image, name, currentPrice, id } = product;
    const { removeFromCart } = useContext(MainContext);
    const [count, setCount] = useState(1);


    function increment() {
        setCount(prev => prev + 1)
    }

    function decrement() {
        setCount(prev => prev - 1)
    }

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
                            <S.CounterBtn onClick={() => decrement()} disabled={count == 1}>-</S.CounterBtn>
                            <S.ProductCount>{ count }</S.ProductCount>
                            <S.CounterBtn onClick={() => increment()}>+</S.CounterBtn>
                        </S.BtnGroup>
                    </S.ProductInfo>
                </S.ProductInfoWrapper>
            </S.Block>
            <S.Actions>
                <IconButton onClick={() => removeFromCart(id)}>
                    <DeleteOutlineRoundedIcon color='primary' />
                </IconButton>
                <p>{(currentPrice * count).toLocaleString()}</p>
            </S.Actions>
        </S.ProductWrapper>
    );
};

export default ProductListItems;
