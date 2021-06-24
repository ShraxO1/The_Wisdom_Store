import React from 'react'
import products from '../products'
import Product from '../components/Product'

const HomeScreen = () => {
    return (
        <>
          {products.map((product)=>
            <Product product={product}/>
          )}  
        </>
    )
}

export default HomeScreen
