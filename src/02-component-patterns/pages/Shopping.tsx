import { ProductBtns, ProductCard, ProductImage, ProductTitle } from "../components"

import { products } from "../data/products"

import '../styles/custom-styles.css'

const product = products[0]

export const Shopping = () => {

  return (
    <div>
      <h1>Shopping store</h1>
      <hr />
      <ProductCard
        className="bg-dark"
        product={product}
        initialValues={{
          count: 4,
          maxCount: 10
        }}
      >
        {({ reset, count, increaseBy, isMaxCountReached }) => (
          <>
            <ProductImage className="custom-image" />
            <ProductTitle title="" className="text-white" activeClass="bold-text" />
            <ProductBtns className="custom-buttons" />

            <button onClick={reset}>reset</button>
            <button onClick={() => increaseBy(-2)}>-2</button>
            {isMaxCountReached ? <></> : <button onClick={() => increaseBy(2)}>+2</button>}
            <span>{count}</span>
          </>
        )}
      </ProductCard>
    </div>
  )
}
