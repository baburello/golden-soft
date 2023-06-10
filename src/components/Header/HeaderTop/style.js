import styled from "styled-components";
import { Colors } from "../../../utils";


const HeaderTopWrapper = styled.div`
  width: 100%;
  padding: 9px 16px;
  background-color: ${Colors.gray};
`;

const TextContent = styled.div`
  display: Flex;
  align-items: center;
  justify-content: center;
  gap: 100px;
`

const DiscountText = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  color: ${Colors.light};
`;

const RecallText = styled.a`
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: 0.12em;
  text-decoration-line: underline;
  color: ${Colors.light};
`

export {HeaderTopWrapper, DiscountText, RecallText, TextContent};