import React from 'react';
import { ActionBox, HeaderNavContent, HeaderNavLinkList, HeaderNavbar, HeaderWrapper, PhoneContent, UserActions } from './style';
import HeaderTop from './HeaderTop';
import { Container } from '../Container';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assests/images/svgIcons/logo';
import PhoneLogo from '../../assests/images/svgIcons/phoneLogo';
import LikeIcon from '../../assests/images/svgIcons/like';
import CartIcon from '../../assests/images/svgIcons/cart';


const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderTop/>
        <HeaderNavbar>
          <Container>
            <HeaderNavContent>
              <Link to='/'>
                <Logo/>
              </Link>
              <HeaderNavLinkList>
                <NavLink to='/'>Главная</NavLink>
                <NavLink to='/'>Каталог</NavLink>
                <NavLink to='/discount'>Оптовая продажа</NavLink>
                <NavLink to='/about-us'>О нас</NavLink>
              </HeaderNavLinkList>
              <UserActions>
                <PhoneContent href={`tel:+998919975777`}>
                  <PhoneLogo/>
                  +99 (891) 997 57 77
                </PhoneContent>
                <ActionBox>
                  <Link to='/like'>
                    <LikeIcon/>
                  </Link>
                  <Link to='/cart'>
                    <CartIcon/>
                  </Link>
                </ActionBox>
              </UserActions>
            </HeaderNavContent>
          </Container>
        </HeaderNavbar>
    </HeaderWrapper>
  )
}

export default Header