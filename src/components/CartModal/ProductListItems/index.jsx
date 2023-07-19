import React, { useContext} from "react";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import MainContext from "context/CartContext";
import * as S from "./style";

const ProductListItems = ({ product }) => {
    const { image, name, currentPrice, id, quantity } = product;
    const { removeFromCart, addOne, removeOne } = useContext(MainContext);

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
                            <S.CounterBtn onClick={() => removeOne(id)} >-</S.CounterBtn>
                            <S.ProductCount>{ quantity }</S.ProductCount>
                            <S.CounterBtn onClick={() => addOne(id)}>+</S.CounterBtn>
                        </S.BtnGroup>
                    </S.ProductInfo>
                </S.ProductInfoWrapper>
            </S.Block>
            <S.Actions>
                <IconButton onClick={() => removeFromCart(id)}>
                    <DeleteOutlineRoundedIcon color='primary' />
                </IconButton>
                <p>{(currentPrice * quantity).toLocaleString()}</p>
            </S.Actions>
        </S.ProductWrapper>
    );
};

export default ProductListItems;
