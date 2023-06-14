import React from 'react'
import { StatisticData } from './data'
import * as S from "./style"


const Statistic = () => {
  return (
    <S.StatisticWrapper>
      <S.StatisticContainer>
        <S.StatisticContent>
          {
            StatisticData.map((el) => (
              <S.StatisticContentBox key={el.id}>
                <S.Count>
                  {el.count}
                </S.Count>
                <S.CountText>
                  {el.text}
                </S.CountText>
              </S.StatisticContentBox>
            ))
          }

        </S.StatisticContent>
      </S.StatisticContainer>
    </S.StatisticWrapper>
  )
}

export default Statistic