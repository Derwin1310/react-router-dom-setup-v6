import { useEffect, useRef, useState } from "react"
import { IProductCard, InitialValues, onChangeArgs } from "../interfaces"

interface IUseProduct {
  product: IProductCard
  onChange?: (args: onChangeArgs) => void
  value?: number
  initialValues?: InitialValues
}

export const useProduct = ({ onChange, product, value = 0, initialValues }: IUseProduct) => {
  const [count, setCount] = useState(initialValues?.count || value)

  const isMounted = useRef(false)

  const handleIncreaseBy = (value: number) => {
    let newValue = Math.max(count + value, 0)

    if (initialValues?.maxCount) {
      newValue = Math.min(newValue, initialValues.maxCount)
    }

    setCount(newValue)

    onChange && onChange({ count: newValue, product })
  }

  const handleReset = () => {
    setCount(initialValues?.count || value)
  }

  useEffect(() => {
    if (!isMounted.current) return

    setCount(value)
  }, [value])

  useEffect(() => {
    isMounted.current = true
  },[])

  return {
    count,
    maxCount: initialValues?.maxCount,
    isMaxCountReached: !!initialValues?.count && initialValues.maxCount === count,

    handleIncreaseBy,
    handleReset
  }
}