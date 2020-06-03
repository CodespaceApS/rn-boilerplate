import React from 'react'
import { View, Text, Input, BigTextInput } from '../ui'

export default React.forwardRef(({ onRef, label, type, ...rest }, ref) => {
  const [value, setValue] = React.useState()
  React.useImperativeHandle(ref,
    () => ({
      getValue: () => value,
      setValue: (x) => setValue(x),
    }), [value]
  )
  const result = {
    big: (<BigTextInput label={label} inputProps={{value: value, onChangeText: setValue}} {...rest} />)
  }[type || '']

  if(!result)
    return (<Input value={value} onChangeText={setValue} />)

  return result

})


