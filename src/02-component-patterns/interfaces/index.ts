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
}

export interface IProductCardHOC {
  ({ children, product }: ProductCardProps): JSX.Element
  Title: (props: IProductTitle) => JSX.Element
  Img: (props: IProductImage) => JSX.Element
  Buttons: (props: IProductBtns) => JSX.Element
}