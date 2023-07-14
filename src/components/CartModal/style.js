import styled from "styled-components";
import { Box } from "@mui/material";
import { Colors, Flex } from "utils";
import { adaptiveValue } from "utils/variable";
import { Link } from "react-router-dom";

const ModalBox = styled(Box)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 836px;
    ${adaptiveValue("width", 816, 343)}
    background-color: ${Colors.light};
    height: 500px;
`;

const CloseBtn = styled.button`
    position: absolute;
    top: 20px;
    right: 20px;
`;

const ModalBoxHeader = styled.div`
    ${Flex.spaceBetween}
    border-bottom: 1px solid ${Colors.borderColor};
    padding: 16px 40px;
    width: 100%;
    z-index: 1001;
    background-color: ${Colors.light};
`;

const HeaderTitle = styled.h2`
    color: ${Colors.dark};
    font-size: 20px;
    font-weight: 500;
    line-height: 34px;
`;

const ModalBoxBody = styled.div`
    padding: 16px 40px;
    height: 430px;
    display: ${({ isEmpty }) => (isEmpty ? "flex" : "block")};
    align-items: ${({ isEmpty }) => isEmpty && "center"};
    justify-content: ${({ isEmpty }) => isEmpty && "center"};
    overflow-y: auto;
`;

const ProductList = styled.ul`
    ${Flex.spaceBetween};
    flex-direction: column;
    width: 100%;
    column-gap: 30px;
`;

const EmptyTitle = styled.h2`
    ${adaptiveValue("font-size", 30, 20)}
    line-height: 120%;
    text-align: center;
    max-width: 500px;
    width: 100%;
`;

const BuyActions = styled.div`
    margin-top: 32px;
    width: 100%;
    margin-bottom: 20px;
`;

const BuyPriceBoard = styled.div`
    ${Flex.justFlex}
    align-items: flex-end;
    gap: 15px;
`;

const TotalPriceTitle = styled.h3`
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
`;

const TotalPrice = styled.span`
    font-size: 20px;
    font-weight: 500;
    line-height: 30px;
`;

const PriceBtnGroup = styled.div`
    ${Flex.spaceBetween};
    margin-top: 10px;
`;

const LinkBtn = styled(Link)`
    padding: 12px 37px;
    background-color: ${Colors.light};
    font-weight: 500;
    font-size: 16px;
    ${adaptiveValue("line-height", 26, 19)}
    color: ${Colors.primaryColor};
    border: none;
    cursor: pointer;
    border: 1px solid ${Colors.primaryColor};
    transition: 0.4s;

    &:hover {
        background-color: ${Colors.primaryColor};
        color: ${Colors.light};
    }
`;

export {
    ModalBox,
    CloseBtn,
    ModalBoxHeader,
    ModalBoxBody,
    HeaderTitle,
    ProductList,
    EmptyTitle,
    BuyActions,
    BuyPriceBoard,
    TotalPriceTitle,
    TotalPrice,
    PriceBtnGroup,
    LinkBtn,
};
