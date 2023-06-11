import { useContext } from "react"
import { ProductContext } from "./ProductCard"

import styles from '../styles/styles.module.css'
import noImage from '../assets/no-image.jpg'

export interface IProductImage {
  img?: string
  className?: string
}

export const ProductImage = ({ img, className }: IProductImage) => {
  const { product } = useContext(ProductContext)
  let imgToShow = ""

  if (img) {
    imgToShow = img
  } else if (product.img) {
    imgToShow = product.img
  } else {
    imgToShow = noImage
  }

  return (
    <img
      className={`${styles.productImg} ${className}`}
      src={imgToShow}
      alt="Product img"
    />
  )
}