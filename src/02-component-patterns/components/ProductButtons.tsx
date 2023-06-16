import { useCallback, useContext } from "react"
import { ProductContext } from "./ProductCard"

import styles from '../styles/styles.module.css'

export interface IProductBtns {
  className?: string
}

export const ProductBtns = ({ className }: IProductBtns) => {
  //TODO: maxCount
  const { handleIncreaseBy, count, maxCount } = useContext(ProductContext)

  //TODO: isMaxReached = useCallback, [count, maxCount]
  const isMaxReached = useCallback(() => maxCount && count === maxCount, [count, maxCount])

  //TRUE if count === maxCount
  //FALSE if not

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
        className={`${styles.buttonAdd} ${isMaxReached() ? styles.disabled : ""}`}
      >
        +
      </button>
    </div>
  )
}