import { useContext } from "react"
import { ProductContext } from "./ProductCard"

import styles from '../styles/styles.module.css'

export interface IProductBtns {
  className?: string
}

export const ProductBtns = ({ className }: IProductBtns) => {
  const { handleIncreaseBy, count } = useContext(ProductContext)

  return (
    <div className={`${styles.buttonsContainer} ${className}`}>
      <button
        onClick={() => handleIncreaseBy(-1)}
        className={styles.buttonMinus}
      >
        -
      </button>

      <div className={styles.countLabel}>{count}</div>

      <button
        onClick={() => handleIncreaseBy(1)}
        className={styles.buttonAdd}
      >
        +
      </button>
    </div>
  )
}