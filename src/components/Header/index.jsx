import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BurgerMenu from './BurgerMenu';
import HeaderTop from './HeaderTop';
import { Container } from '../Container/style';
import * as Style from './style';
// import Logo from '../../assests/images/svgIcons/logo';
import { CartIcon, LikeIcon, LogoIcon, PhoneLogo } from '../../assests/images/svgIcons';




const Header = () => {
  const [burger, setBurger] = useState(false)

  const handleClick = () =>{
    setBurger(!burger);
  };

  console.log(burger)
  return (
    <Style.HeaderWrapper>
      <HeaderTop/>
        <Style.HeaderNavbar>
          <Container>
            <Style.HeaderNavContent>
              <Style.BurgerMenuContent onClick={() => handleClick()}>
                <Style.BurgerMenuRows/>
                <Style.BurgerMenuRows/>
                <Style.BurgerMenuRows/>
              </Style.BurgerMenuContent>
              <Style.LogoLink to='/'>
                <LogoIcon/>
              </Style.LogoLink>
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
          <BurgerMenu open={burger} handleClick={ handleClick }/>
        </Style.HeaderNavbar>
    </Style.HeaderWrapper>
  )
}

export default Header