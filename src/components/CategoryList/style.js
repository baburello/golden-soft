import styled from "styled-components";
import { adaptiveValue } from "../../utils/variable";
import { Colors, Flex } from "../../utils";
import { Link } from "react-router-dom";

const CategoryWrapper = styled.section`
  width: 100%;
  background-color: ${Colors.light};
  ${adaptiveValue("padding-bottom", 100, 40)};
`;

const CategoryList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 40px;
  ${adaptiveValue("margin-top", 64, 24)}
`;

const CategoryListItem = styled.li`
  background-color: ${Colors.lightGray};
  padding: 40px;
`;

const ListImage = styled.img`
  width: 250px;
  height: auto;
  display: block;
  margin-left: auto;
`;

const ListTitle = styled.h3`
   ${adaptiveValue("font-size", 22, 14)};
   ${adaptiveValue("line-height", 34, 24)};
   ${adaptiveValue("margin-top", 25, 12)};
`;

const ListLink = styled(Link)`
  width: 220px;
  height: 50px;
  ${Flex.center};
  font-size: 16px;
  line-height: 26px;
  color: ${Colors.dark};
  margin-top: 16px;
  border: 1px solid #454F5B;
  border-radius: 2px;
`;

const  AllCategoryBtn = styled(Link)`
  padding: 12px 37px;
  background-color: ${Colors.primaryColor};
  font-weight: 500;
  font-size: 16px;
  ${adaptiveValue("line-height", 26, 19)}
  color: ${Colors.light};
  cursor: pointer;
  border: 1px solid ${Colors.primaryColor};
  transition: 0.4s;
  ${adaptiveValue("margin-top", 50, 25)};
  display: block;
  text-align: center;
  width: max-content;
  margin-inline: auto;

    &:hover{
      background-color: transparent;
      color: ${Colors.primaryColor}
    }
`

export { CategoryWrapper, CategoryList, CategoryListItem, ListImage, ListTitle, ListLink, AllCategoryBtn };