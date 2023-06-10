import React from 'react';
import { Link } from 'react-router-dom';
import HeaderTop from './HeaderTop';
import { Container } from '../Container/style';
import * as Style from './style';
// import Logo from '../../assests/images/svgIcons/logo';
import { CartIcon, LikeIcon, LogoIcon, PhoneLogo } from '../../assests/images/svgIcons';



const Header = () => {
  return (
    <Style.HeaderWrapper>
      <HeaderTop/>
        <Style.HeaderNavbar>
          <Container>
            <Style.HeaderNavContent>
              <Link to='/'>
                <LogoIcon/>
              </Link>
              <Style.HeaderNavLinkList>
                <Style.NavLink to='/'>Главная</Style.NavLink>
                <Style.NavLink to='/'>Каталог</Style.NavLink>
                <Style.NavLink to='/discount'>Оптовая продажа</Style.NavLink>
                <Style.NavLink to='/about-us'>О нас</Style.NavLink>
             
              </Style.HeaderNavLinkList>
              <Style.UserActions>
                <Style.PhoneContent href={`tel:+998919975777`}>
                  <PhoneLogo/>
                  +99 (891) 997 57 77
                </Style.PhoneContent>
                <Style.ActionBox>
                  <Link to='/favourite'>
                    <LikeIcon/>
                  </Link>
                  <Link to='/cart'>
                    <CartIcon/>
                  </Link>
                </Style.ActionBox>
              </Style.UserActions>
            </Style.HeaderNavContent>
          </Container>
        </Style.HeaderNavbar>
    </Style.HeaderWrapper>
  )
}

export default Header