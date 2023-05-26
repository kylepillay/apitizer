import { useState, useCallback, useRef, useEffect } from 'react'

export default function useStateCallback(initialState: any) {
  const [state, setState] = useState<any>(initialState)
  const cbRef = useRef<any>(null)

  const setStateCallback = useCallback((state, cb) => {
    cbRef.current = cb
    setState(state)
  }, [])

  useEffect(() => {
    if (cbRef.current) {
      cbRef.current(state)
      cbRef.current = null
    }
  }, [state])

  return [state, setStateCallback]
}
