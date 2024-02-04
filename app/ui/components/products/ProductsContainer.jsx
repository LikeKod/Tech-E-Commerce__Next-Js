'use client'

import { useEffect, useContext } from "react";
import ProductCart from "./ProductCart"
import { getProducts } from "../../../lib/data";
import { AppContext } from "../../../context/ShopingCartContext";

export default function ProductsContainer() {
    const {products, setProducts} = useContext(AppContext);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const {data} = await getProducts();
                data ? setProducts(data?.products) : setProducts([]);
            } catch (error) {
                console.error(error);
            }
        };
        
        fetchData();
    }, []);
    
    
    console.log("🚀 ~ ProductsContainer ~ products:", products)

    return (
        <div className="flex flex-wrap justify-center gap-4">
            {products.map(product =>
                <ProductCart key={product.id} product={product} />
            )}
        </div>

    )
}
