import React from 'react'
import { View, Text, Input, BigTextInput, Lines } from '../ui'

export default React.forwardRef(({ onRef, label, type, ...rest }, ref) => {
  const [value, setValue] = React.useState()
  const inputRef = React.createRef()
  React.useImperativeHandle(ref,
    () => ({
      getValue: () => value,
      setValue: (x) => setValue(x),
      focus: () =>  inputRef.current.focus()
    }), [value, inputRef]
  )
  const result = {
    big: (<BigTextInput ref={inputRef} label={label} inputProps={{value: value, onChangeText: setValue}} {...rest} />),
    line: (<Lines.SimpleLineInput ref={inputRef} label={label} inputProps={{value: value, onChangeText: setValue}} {...rest}  />)
  }[type || '']

  if(!result)
    return (<Input ref={inputRef} value={value} onChangeText={setValue} />)

  return result

})


