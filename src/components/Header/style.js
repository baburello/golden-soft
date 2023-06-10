import styled from "styled-components"
import { Link } from "react-router-dom";
import { Colors, Flex } from "../../utils";


const HeaderWrapper = styled.header`
  width:100%;
`;

const HeaderNavbar = styled.div`
  width: 100%;
  padding-block: 20px;
  background: ${Colors.light};
  box-shadow: inset 0px -1px 0px #C4CDD5;
`;

const HeaderNavContent = styled.div`
  ${Flex.spaceBetween}
  gap: 100px;
`;

const HeaderNavLinkList = styled.nav`
  ${Flex.spaceBetween}
  gap: 32px;
`;

const NavLink = styled(Link)`
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;
  color: ${Colors.dark};
`;

const UserActions = styled.div`
  ${Flex.alignCenter}
  gap:30px;
`;

const PhoneContent = styled.a`
  ${Flex.alignCenter};
  gap: 8px;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color:${Colors.gray}
`;

const ActionBox = styled.div`
  ${Flex.alignCenter}
  gap:24px;
`



export { HeaderWrapper, HeaderNavbar, HeaderNavContent, HeaderNavLinkList, NavLink, UserActions, PhoneContent, ActionBox};