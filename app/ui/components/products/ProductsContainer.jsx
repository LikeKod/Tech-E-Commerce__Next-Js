'use client'


import { useEffect, useContext, useState } from "react";
import ProductCart from "./ProductCart"
import { getProducts } from "../../../lib/data";
import { AppContext } from "../../../context/ShopingCartContext";
import { GET_PRODUCTS_ENDPOINT } from "../../../lib/constants/endpoints";

export default function ProductsContainer() {
    const { products, setProducts } = useContext(AppContext);

    // стейт Query - параметров согласно документации
    //  (https://woocommerce.github.io/woocommerce-rest-api-docs/#list-all-products)

    const [params, setParams] = useState({
        per_page: 15,
        category: '45',
        page: 1
    })
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await getProducts(params);
                data ? setProducts(data?.products) : setProducts([]);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);


    return (
        <div className="flex flex-wrap justify-center gap-4">
            {products.map(product =>
                <ProductCart key={product.id} product={product} />
            )}
        </div>

    )
}
