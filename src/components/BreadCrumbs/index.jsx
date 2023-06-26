import { CatalogBreadCrumbs, CurrentPageLink } from "pages/Catalog/style";
import React from "react";
import { Link } from "react-router-dom";

const BreadCrumbs = ({ disableText }) => {
    return (
        <CatalogBreadCrumbs aria-label='breadcrumb'>
            <Link underline='hover' color='inherit' to='/'>
                Главная
            </Link>
            <CurrentPageLink>{ disableText }</CurrentPageLink>
        </CatalogBreadCrumbs>
    );
};

export default BreadCrumbs;
