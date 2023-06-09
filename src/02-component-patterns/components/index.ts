import { ProductCard as ProductCardHOC } from "./ProductCard"

export * from "./ProductButtons"
export * from "./ProductImage"
export * from "./ProductTitle"

import { ProductBtns } from "./ProductButtons"
import { ProductImage } from "./ProductImage"
import { ProductTitle } from "./ProductTitle"

import { IProductCardHOC } from "../interfaces"

export const ProductCard: IProductCardHOC = Object.assign(ProductCardHOC, {
  Title: ProductTitle,
  Img: ProductImage,
  Buttons: ProductBtns
})

export default ProductCard