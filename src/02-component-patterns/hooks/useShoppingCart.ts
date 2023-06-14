import { useState } from "react"
import { IProductCard, IProductInCart } from "../interfaces"

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{ [key: string]: IProductInCart }>({})

  const onProductCountChange = ({ count, product }: { count: number, product: IProductCard }) => {
    setShoppingCart(prevState => {
      const productInCart: IProductInCart = prevState[product.id] || { ...product, count: 0 }

      if (Math.max(productInCart?.count + count, 0) > 0) {
        productInCart.count += count
        return {
          ...prevState,
          [product.id]: productInCart
        }
      }

      const { [product.id]: toDelete, ...rest } = prevState

      return rest

      // if (!count) {
      //   delete prevState[product.id]

      //   return { ...prevState }
      // }

      // return {
      //   ...prevState,
      //   [product.id]: { ...product, count }
      // }
    })
  }

  return {
    shoppingCart,

    onProductCountChange
  }
}
