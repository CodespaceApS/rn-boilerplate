import React from 'react'
import { Context } from '../hooks'
import { View,  Touch, Icons } from '../ui'

export default () => {
  const [state, set] = Context.useAuth()
  return (
    <Touch onPress={_ => set(null)} >
      <View centerCenter h="100%" mr   >
        <Icons.Signout />
      </View>
    </Touch>
  )
}


