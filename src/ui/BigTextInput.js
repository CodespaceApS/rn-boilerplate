import React from 'react'
import { colors, View, Touch, Text, Input } from './style'

export default  React.forwardRef(({inputProps, label, ...props},ref) =>  (
  <View {...props} >
    <Text fs="14" fw="bold" color={colors.dark} >{label || 'No label'}</Text>
    <View h={50} mt={10} br={10} bg="white">
      <Input ml mr fs={16} fw="bold" color={colors.dark} h={50} {...inputProps} ref={ref} />
    </View>
  </View>
))