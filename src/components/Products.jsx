import React, { useEffect, useState } from 'react';
import Product from "./ui/Product";
import axios from "axios"

const Products = () => {
    
    const [products, setProducts] = useState([])

    async function fetchProducts() {
        const {data} = await axios.get("https://ecommerce-samurai.up.railway.app/product");

        const productsData = data.data;

        setProducts(productsData);
    }

    useEffect(() => {
        fetchProducts();
    }, [])

    return (
        <section id="products">
            <div className="container">
                <div className="row products__row">
                    <h2 className="products__title">
                        Products we are proud of
                    </h2>
                    <div className="products__list">
                        {products.slice(0, 8).map((product) => <Product key={product.id} product={product} />)}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Products;
