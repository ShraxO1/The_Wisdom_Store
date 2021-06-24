import React from 'react'
import products from '../products'
import Product from '../components/Product'

const HomeScreen = () => {
    return (
        <div>
          {products.map((product)=>
            <Product product={product}/>
          )}  
        </div>
    )
}

export default HomeScreen
