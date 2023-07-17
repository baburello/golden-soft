import React, { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import { CloseIcon } from "assets/images/svgIcons";
import ProductListItems from "./ProductListItems";
import * as S from "./style";
import Button from "components/Button";

export default function CartModal({ cartModal, handleModal, data }) {
    const [totalPrice, setTotalPrice] = useState(0);

    const result = [];
    const price = () => {
        for (const iterator of data) {
            result.push(iterator.currentPrice);
        }

        const cost = result.reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            0
        );

        return setTotalPrice(cost);
    };

    useEffect(() => {
        price()
    }, [data]);
    return (
        <Modal
            open={cartModal}
            onClose={handleModal}
            aria-labelledby='modal-modal-title'
            aria-describedby='modal-modal-description'
        >
            <S.ModalBox>
                <S.ModalBoxHeader>
                    <S.HeaderTitle>Корзина</S.HeaderTitle>
                    <S.CloseBtn onClick={handleModal}>
                        <CloseIcon />
                    </S.CloseBtn>
                </S.ModalBoxHeader>
                <S.ModalBoxBody isEmpty={!data.length}>
                    {data.length ? (
                        <S.ProductList>
                            {data.map((el) => (
                                <ProductListItems key={el.id} product={el} />
                            ))}
                            <S.BuyActions>
                                <S.BuyPriceBoard>
                                    <S.TotalPriceTitle>
                                        Итого:
                                    </S.TotalPriceTitle>
                                    <S.TotalPrice>{totalPrice.toLocaleString()}P</S.TotalPrice>
                                </S.BuyPriceBoard>
                                <S.PriceBtnGroup>
                                    <Button text={"Оформить заказ"} />
                                    <S.LinkBtn to='/catalog'>
                                        Продолжить покупки
                                    </S.LinkBtn>
                                </S.PriceBtnGroup>
                            </S.BuyActions>
                        </S.ProductList>
                    ) : (
                        <S.EmptyTitle>
                            Корзина на данный момент пуста 🤷🏻‍♂️🤷🏻🤷🏼‍♂️🤷🏾‍♂️🤷🏿‍♂️
                        </S.EmptyTitle>
                    )}
                </S.ModalBoxBody>
            </S.ModalBox>
        </Modal>
    );
}
