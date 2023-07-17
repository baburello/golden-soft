import styled from "styled-components";
import Flex from "utils/flex";
import { adaptiveValue } from "utils/variable";
import { Colors } from "utils/index";

const ProductWrapper = styled.div`
    ${Flex.spaceBetween};
    width: 100%;
    height: 100%;

    &:not(:last-child){
        margin-bottom: 20px;
    }
`;

const ImageWrapper = styled.div`
    width: 136px;
    height: 120px;
    overflow: hidden;

    & > img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;

const ProductInfoWrapper = styled.div`
    ${Flex.spaceBetween};
`;

const ProductInfo = styled.div`
    ${Flex.spaceBetween};
    align-items: flex-start;
    flex-direction: column;
    gap: 30px;
    height: 100%;
`;

const ProductInfoTitle = styled.h3`
    ${adaptiveValue("font-size", 16, 12)};
    ${adaptiveValue("line-height", 26, 18)};
`;

const BtnGroup = styled.div`
    ${Flex.alignCenter};
    gap: 8px;
`;

const CounterBtn = styled.button`
    width: 16px;
    height: 16px;
    color: ${Colors.dart};

    &:disabled {
        color: ${Colors.borderColor};
    }
`;

const ProductCount = styled.span`
    padding: 5px 22px;
    border: 1px solid ${Colors.dark};
    color:${Colors.dark};
`;

const Block = styled.div`
    ${Flex.alignCenter};
    gap: 12px;
`

// const ProductAction = styled.div`
//     ${Flex.flexBetween};
//     flex-direction: column;
// `;

const Actions = styled.div`
${Flex.justFlex};
gap: 30px;
flex-direction: column;
justify-content: space-between;
align-items: end;

`

export {
    ProductWrapper,
    ImageWrapper,
    ProductInfoTitle,
    ProductInfoWrapper,
    ProductInfo,
    BtnGroup,
    CounterBtn,
    ProductCount,
    Actions,
    Block
};
