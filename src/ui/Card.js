import React from 'react'
import { colors, View, Touch, Text } from './style'

export default ({children, ...rest}) => (
  <View br={10} bg="white" mt pl pt pb shadow={2} {...rest} >
    {children}
  </View>
)