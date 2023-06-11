import { useContext } from "react"
import { ProductContext } from "./ProductCard"

import styles from '../styles/styles.module.css'

export interface IProductTitle {
  title?: string
  className?: string
  activeClass?: string
}

export const ProductTitle = ({ title, className, activeClass }: IProductTitle) => {
  const { product } = useContext(ProductContext)

  return (
    <span className={`${styles.productDescription} ${className} ${activeClass}`}>
      {title || product.title}
    </span>
  )
}