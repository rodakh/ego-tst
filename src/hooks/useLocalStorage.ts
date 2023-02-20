import { useState, useEffect } from 'react'

type ValueSerializer<T> = {
  serialize: (value: T) => string
  deserialize: (value: string) => T
}

function useLocalStorage<T>(
  key: string,
  initialValue: T,
  serializer?: ValueSerializer<T>,
): [T, (value: T) => void] {
  const [state, setState] = useState<T>(() => {
    const storedValue = localStorage.getItem(key)
    if (storedValue !== null) {
      return serializer ? serializer.deserialize(storedValue) : JSON.parse(storedValue)
    } else {
      return initialValue
    }
  })

  useEffect(() => {
    const serializedState = serializer ? serializer.serialize(state) : JSON.stringify(state)
    localStorage.setItem(key, serializedState)
  }, [key, state, serializer])

  const setValue = (value: T) => setState(value)

  return [state, setValue]
}

export default useLocalStorage
