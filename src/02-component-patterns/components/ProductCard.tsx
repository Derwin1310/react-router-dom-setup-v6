import { CSSProperties, ReactElement, createContext } from "react"

import { useProduct } from "../hooks"

import { IProductCard, IProductContext, InitialValues, ProductCardHandlers, onChangeArgs } from "../interfaces"

import styles from '../styles/styles.module.css'

export const ProductContext = createContext({} as IProductContext)

const { Provider } = ProductContext

export interface ProductCardProps {
  product: IProductCard
  // children?: ReactElement | ReactElement[]
  children: (args: ProductCardHandlers) => JSX.Element
  className?: string
  style?: CSSProperties
  onChange?: (props: onChangeArgs) => void
  value?: number
  initialValues?: InitialValues
}

export const ProductCard = ({ children, product, className, style, onChange, value, initialValues }: ProductCardProps) => {
  const { count, handleIncreaseBy, maxCount, isMaxCountReached, handleReset } = useProduct({ onChange, product, value, initialValues })

  return (
    <Provider value={{ count, handleIncreaseBy, product, maxCount }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children({
          count,
          isMaxCountReached,
          maxCount: initialValues?.maxCount,
          product,
          increaseBy: handleIncreaseBy,
          reset: handleReset
        })}
      </div>
    </Provider>
  )
}