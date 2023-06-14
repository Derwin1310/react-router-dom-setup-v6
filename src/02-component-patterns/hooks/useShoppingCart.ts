import { useState } from "react"
import { IProductCard, IProductInCart } from "../interfaces"

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{ [key: string]: IProductInCart }>({})

  const onProductCountChange = ({ count, product }: { count: number, product: IProductCard }) => {
    setShoppingCart(prevState => {
      if (!count) {
        delete prevState[product.id]

        return { ...prevState }
      }

      return {
        ...prevState,
        [product.id]: { ...product, count }
      }
    })
  }

  return {
    shoppingCart,

    onProductCountChange
  }
}
