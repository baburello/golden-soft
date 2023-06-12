import React from 'react'
import * as S from './style';
import { Container } from '../Container/style';
import { LogoIcon } from '../../assests/images/svgIcons';
import { Link } from 'react-router-dom';
import { socialMediaData } from './data';


const Footer = () => {
  return (
    <S.FooterWrapper>
      <Container>
        <S.FooterContent>
          <Link to='/'>
            <LogoIcon color='#fff'/>
          </Link>
          <S.SocialMediaLinks>
            {socialMediaData.map((el) => (
              <S.MediaLink 
                key={el.id}  
                href={el.href}>
                  {el.icon}
              </S.MediaLink>
            ))}
          </S.SocialMediaLinks>
        </S.FooterContent>
        <S.FooterBottom>
        © {new Date().getFullYear()} Golden Soft All rights reserved.
        </S.FooterBottom>
      </Container>
    </S.FooterWrapper>
  )
}

export default Footer