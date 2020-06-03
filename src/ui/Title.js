import React from 'react'
import { colors, View, Touch, Text } from './style'

export default ({children, ...rest}) => (
  <Text fs={18} fw="bold" color={colors.dark} {...rest} >{children}</Text>
)