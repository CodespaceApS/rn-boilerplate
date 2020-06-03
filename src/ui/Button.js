import React from 'react'
import { colors, View, Touch, Text } from './style'

export default ({text, onPress, second, ...rest}) => !second ? (
  <Touch onPress={onPress} >
    <View h={44} bg={colors.main} centerCenter br={20} {...rest} >
      <Text fw="bold" color="white" >{text}</Text>
    </View>
  </Touch>
) :
(
  <Touch onPress={onPress} >
    <View h={44} centerCenter br={20}  {...rest} >
      <Text fw="bold" color={colors.main} >{text}</Text>
    </View>
  </Touch>
)