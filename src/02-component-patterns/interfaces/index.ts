import { ReactElement } from "react"

export interface ProductCardProps {
  product: IProductCard
  children?: ReactElement | ReactElement[]
}

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
  Title: ({ title }: { title?: string }) => JSX.Element
  Img: ({ img }: { img?: string }) => JSX.Element
  Buttons: () => JSX.Element
}