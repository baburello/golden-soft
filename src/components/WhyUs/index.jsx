import React from 'react';
import { Container } from '../Container/style';
import { WhyUsData } from './data';
import * as S from "./style";

const WhyUs = () => {
  return (
    <S.WhyUsSection>
      <Container>
        <S.Title>Почему GoldenService?</S.Title>
        <S.Content>
          {
            WhyUsData.map((el) => (
              <S.ContentBox key={el.id}>
                {el.image}
                <S.ContentBoxText>
                  {el.text}
                </S.ContentBoxText>

              </S.ContentBox>
            ))
          }
        </S.Content>
      </Container>
    </S.WhyUsSection>
  )
}

export default WhyUs