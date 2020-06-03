import React from 'react'
import { View,  Touch } from '../ui'

export default React.forwardRef(({ onRef, ...rest }, ref) => {
  const [value, setValue] = React.useState(false)
  React.useImperativeHandle(ref,
    () => ({
      getValue: () => value,
      setValue: (x) => setValue(x),
    }), [value]
  )
  return (
    <Touch onPress={_ => setValue(x => !x)} >
      <View h={50} w={50} bg={value ? 'green' : 'red'} >

      </View>
    </Touch>
  )
})


