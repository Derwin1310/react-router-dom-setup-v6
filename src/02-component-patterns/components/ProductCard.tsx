import { CSSProperties, ReactElement, createContext } from "react"

import { useProduct } from "../hooks"

import { IProductCard, IProductContext, onChangeArgs } from "../interfaces"

import styles from '../styles/styles.module.css'

export const ProductContext = createContext({} as IProductContext)

const { Provider } = ProductContext

export interface ProductCardProps {
  product: IProductCard
  children?: ReactElement | ReactElement[]
  className?: string
  style?: CSSProperties
  onChange?: (props: onChangeArgs) => void
  value?: number
}

export const ProductCard = ({ children, product, className, style, onChange, value }: ProductCardProps) => {
  const { count, handleIncreaseBy } = useProduct({ onChange, product, value })

  return (
    <Provider value={{ count, handleIncreaseBy, product }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
      </div>
    </Provider>
  )
}