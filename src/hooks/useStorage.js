import React from 'react'
import { AsyncStorage } from 'react-native'

export default (key, json = false) => {
  const storageKey = '@storage:'+key
  const [state, setState] = React.useState(null)
  const [isLoaded, setIsLoaded] = React.useState(false)
  React.useEffect(() => {
    AsyncStorage.getItem(storageKey)
      .then(x => {
        if(!x) return true
        setState(JSON.parse(x))
      })
      .then(_ => setIsLoaded(true))
  }, [])

  const handleChange = (x) => {
    AsyncStorage.setItem(storageKey, JSON.stringify(x))
    setState(JSON.stringify(x))
  }

  return [state, handleChange, isLoaded]

}