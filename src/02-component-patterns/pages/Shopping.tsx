import { ProductBtns, ProductCard, ProductImage, ProductTitle } from "../components"

import { useShoppingCart } from "../hooks"

import { products } from "../data/products"

import '../styles/custom-styles.css'

export const Shopping = () => {
  const { onProductCountChange, shoppingCart } = useShoppingCart()

  return (
    <div>
      <h1>Shopping store</h1>
      <hr />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap"
        }}
      >
        {products.map(product => (
          <ProductCard
            className="bg-dark"
            product={product}
            key={product.id}
            onChange={onProductCountChange}
            value={shoppingCart[product.id]?.count}
          >
            <ProductImage className="custom-image" />
            <ProductTitle title="" className="text-white" activeClass="bold-text" />
            <ProductBtns className="custom-buttons" />
          </ProductCard>
        ))}
      </div>

      <div className="shopping-cart">
        {Object.entries(shoppingCart)?.map(([key, item]) => (
          <ProductCard
            key={key}
            className="bg-dark"
            product={item}
            style={{
              width: "100px"
            }}
            onChange={onProductCountChange}
            value={item.count}
          >
            <ProductImage className="custom-image" />
            <ProductBtns className="custom-buttons" />
          </ProductCard>
        ))}
      </div>
    </div>
  )
}
