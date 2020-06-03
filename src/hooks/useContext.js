import React from 'react'
import useStorage from './useStorage'
import Context from '../contexts'

const storeContext = (context, name, json = true) => () => {
  const [cState, cSet] = React.useContext(context)
  const [sState, sSet, isLoaded] = useStorage(name, json)

  React.useEffect(() => {
    if(sState){
      cSet(sState)
    }
  }, [sState])

  return [cState, _ => console.log(_) || sSet(_), isLoaded]
}

export const useAuth = storeContext(Context.Auth, 'auth')
