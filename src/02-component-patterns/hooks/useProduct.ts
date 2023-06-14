import { useEffect, useRef, useState } from "react"
import { IProductCard, onChangeArgs } from "../interfaces"

interface IUseProduct {
  product: IProductCard
  onChange?: (args: onChangeArgs) => void
  value?: number
}

export const useProduct = ({ onChange, product, value = 0 }: IUseProduct) => {
  const [count, setCount] = useState(value)

  const handleIncreaseBy = (value: number) => {
    const newValue = Math.max(count + value, 0)

    setCount(newValue)

    onChange && onChange({ count: newValue, product })
  }

  useEffect(() => {
    setCount(value)
  }, [value])

  return {
    count,
    handleIncreaseBy
  }
}