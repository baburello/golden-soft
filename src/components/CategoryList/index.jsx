import React from 'react'
import { Container } from 'components/Container/style';
import { Title } from 'components/WhyUs/style';
import { categoryListData } from './data';
import * as S from "./style"
// import { Link } from 'react-router-dom';
// import Button from '../Button';

const CategoryList = () => {
  return(
    <S.CategoryWrapper>
      <Container>
        <Title>Категории</Title>
        <S.CategoryList>
          {
            categoryListData.map((el) => (
              <S.CategoryListItem key={el.id }>
                <S.ListImage src={el.image} alt={el.title} />
                <S.ListTitle>{el.title}</S.ListTitle>
                <S.ListLink to='/category'>Перейти</S.ListLink>
              </S.CategoryListItem>
            ))
          }
        </S.CategoryList>
        <S.AllCategoryBtn to='/catalog'>Все категории</S.AllCategoryBtn>
      </Container>
    </S.CategoryWrapper>
  )
};

export default CategoryList;