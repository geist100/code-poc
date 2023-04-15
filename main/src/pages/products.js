import React from 'react';
import ProductItem from "@/components/ProductItem";
import {ProductService} from "@/service/product/product.service";
import Header from "@/components/Header";

const Products = (props) => {

    return (
        <div>
            <Header/>
            <div style={{display:"flex",flexDirection:'row',flexWrap:'wrap',justifyContent:"center"}}>
                {props.products && props.products.map((product,index)=>{
                    return (
                        <ProductItem key={index} product={product}/>
                    )
                })}
            </div>
        </div>
    );
};


export async function getServerSideProps(context) {
    const res =await ProductService.getProductsSmall();
    console.log('s')
    return {
        props: {products: res}, // will be passed to the page component as props
    }
}

export default Products;
