import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "components/Header";
import ProductCard from "components/ProductCard";
import { Container } from "components/Container/style";
import BreadCrumbs from "components/BreadCrumbs";
import Footer from "components/Footer";
import PopularProducts from "components/PopularProducts";
import ContactForm from "components/ContactForm";

const Category = () => {
    const { type } = useParams();
    const [data, setData] = useState([]);
    const categoryText = type.toLocaleLowerCase();

    async function getProduct() {
        const res = await axios.get(
            `${process.env.REACT_APP_MAIN_URL}?category=${categoryText}`
        );
        if (res.status === 200) {
            setData(res.data);
        }
    }

    useEffect(() => {
        getProduct();
    }, [type]);

    return (
        <>
            <Header />
            <Container>
                <BreadCrumbs disableText={"Каталог"} />
                <CategoryListWrapper>
                    {data?.map((el) => (
                        <ProductCard
                            key={el.id}
                            currentPrice={el.currentPrice}
                            image={el.image}
                            inStock={el.inStock}
                            name={el.name}
                            oldPrice={el.oldPrice}
                        />
                    ))}
                </CategoryListWrapper>
            </Container>
            <PopularProducts />
            <ContactForm />
            <Footer />
        </>
    );
};

export default Category;

const CategoryListWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin-block: 70px;
`;
