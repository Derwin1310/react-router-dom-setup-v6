import { createContext } from "react"

import { useProduct } from "../hooks"

import { IProductContext, ProductCardProps } from "../interfaces"

import styles from '../styles/styles.module.css'

export const ProductContext = createContext({} as IProductContext)

const { Provider } = ProductContext

export const ProductCard = ({ children, product }: ProductCardProps) => {
  const { count, handleIncreaseBy } = useProduct()

  return (
    <Provider value={{ count, handleIncreaseBy, product }}>
      <div className={styles.productCard}>
        {children}
      </div>
    </Provider>
  )
}