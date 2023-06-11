import { ProductBtns, ProductCard, ProductImage, ProductTitle } from "../components"
import '../styles/custom-styles.css'

const product = {
  id: "1",
  title: "coffe Mug - Card",
  img: "/public/coffee-mug.png"
}

export const Shopping = () => {
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
        <ProductCard
          className="bg-dark"
          product={product}
        >
          <ProductImage className="custom-image" />
          <ProductTitle title="" className="text-white" activeClass="bold-text" />
          <ProductBtns className="custom-buttons" />
        </ProductCard>

        <ProductCard
          product={product}
          className="bg-dark"
        >
          <ProductCard.Img className="custom-image" />
          <ProductCard.Title title="" className="text-white" activeClass="bold-text" />
          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard>

        <ProductCard
          product={product}
          style={{
            backgroundColor: "red"
          }}
        >
          <ProductImage />
          <ProductTitle title="" />
          <ProductBtns />
        </ProductCard>
      </div>
    </div>
  )
}
