import { IProductCard } from "../interfaces"

const product = {
  id: "1",
  title: "coffe Mug - Card",
  img: "/public/coffee-mug.png"
}

const product2 = {
  id: "2",
  title: "coffe Mug - Meme",
  img: "/public/coffee-mug2.png"
}

export const products: IProductCard[] = [product, product2]
