import { IProductBtns, IProductImage, IProductTitle } from "../components"
import { ProductCardProps } from "../components/ProductCard"

export interface IProductCard {
  id: string
  title: string
  img?: string
}

export interface IProductContext {
  count: number
  handleIncreaseBy: (value: number) => void
  product: IProductCard
  maxCount?: number
}

export interface IProductCardHOC {
  ({ children, product }: ProductCardProps): JSX.Element
  Title: (props: IProductTitle) => JSX.Element
  Img: (props: IProductImage) => JSX.Element
  Buttons: (props: IProductBtns) => JSX.Element
}

export interface onChangeArgs {
  product: IProductCard
  count: number
}

export interface IProductInCart extends IProductCard {
  count: number
}

export interface InitialValues {
  count?: number
  maxCount?: number
}

export interface ProductCardHandlers {
  count: number
  isMaxCountReached: boolean
  maxCount?: number
  product: IProductCard

  increaseBy: (value: number) => void
  reset: () => void
}