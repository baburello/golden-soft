import React from 'react';
import * as S from "./style";
import { PhoneLogo } from '../../../assests/images/svgIcons';

const BurgerMenu = ({open, handleClick}) => {
  return (
    <S.BurgerMenuWrapper open={open}>
      <S.BurgerMenuNav>
        <S.BurgerMenuNavLink to='/' onClick={handleClick}>Главная</S.BurgerMenuNavLink>
        <S.BurgerMenuNavLink to='/catalog' onClick={handleClick}>Каталог</S.BurgerMenuNavLink>
        <S.BurgerMenuNavLink to='/discount' onClick={handleClick}>Оптовая продажа</S.BurgerMenuNavLink>
        <S.BurgerMenuNavLink to='/about-us' onClick={handleClick}>О нас</S.BurgerMenuNavLink>
      </S.BurgerMenuNav>
      <S.BurgerMenuFooter>
        <S.FooterPhoneContent href={`tel:+${998919975777}`}>
          <PhoneLogo/>
          +99(891) 997 57 77
        </S.FooterPhoneContent>
        <S.BurgerMenuRecall href={`tel:+${998919975777}`}>
          Обратный звонок
        </S.BurgerMenuRecall>
      </S.BurgerMenuFooter>
    </S.BurgerMenuWrapper>
  )
}

export default BurgerMenu