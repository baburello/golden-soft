import React from "react";
import * as S from "./style";
import { Link } from "react-router-dom";

const CatalogListItems = ({ image, text }) => {
    return (
        <S.ListItems>
            <Link to='/'>
                <S.ListItemImage src={image} />
                <S.ListItemText>{text}</S.ListItemText>
            </Link>
        </S.ListItems>
    );
};

export default CatalogListItems;
