import styled from "styled-components"
import { colors } from "../../utils/variable";
import { flex } from "../../utils/flex";
import { Link } from "react-router-dom";


const HeaderWrapper = styled.header`
  width:100%;
`;

const HeaderNavbar = styled.div`
  width: 100%;
  padding-block: 20px;
  background: ${colors.light};
  box-shadow: inset 0px -1px 0px #C4CDD5;
`;

const HeaderNavContent = styled.div`
  ${flex.spaceBetween}
  gap: 100px;
`;

const HeaderNavLinkList = styled.nav`
  ${flex.spaceBetween}
  gap: 32px;
`;

const NavLink = styled(Link)`
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;
  color: ${colors.dark};
`;

const UserActions = styled.div`
  ${flex.alignCenter}
  gap:30px;
`;

const PhoneContent = styled.a`
  ${flex.alignCenter};
  gap: 8px;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color:${colors.gray}
`;

const ActionBox = styled.div`
  ${flex.alignCenter}
  gap:24px;
`



export { HeaderWrapper, HeaderNavbar, HeaderNavContent, HeaderNavLinkList, NavLink, UserActions, PhoneContent, ActionBox};