import { ProductBtns, ProductCard, ProductImage, ProductTitle } from "../components"

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
        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle title="" />
          <ProductBtns />
        </ProductCard>

        <ProductCard product={product}>
          <ProductCard.Img />
          <ProductCard.Title title="" />
          <ProductCard.Buttons />
        </ProductCard>
      </div>
    </div>
  )
}
