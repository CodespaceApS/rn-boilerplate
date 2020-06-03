import React from 'react'
import { View, Text, Switch, BigTextInput, Lines } from '../ui'

export default React.forwardRef(({ onRef, label, type, ...rest }, ref) => {
  const [value, setValue] = React.useState(false)
  const toggleSwitch = () => setValue(previousState => !previousState);
  const inputRef = React.createRef()
  React.useImperativeHandle(ref,
    () => ({
      getValue: () => value,
      setValue: (x) => setValue(!x ? false : true),
      focus: () =>  inputRef.current.focus()
    }), [value, inputRef]
  )
  const result = {
    line: (<Lines.SimpleLineSwitch ref={inputRef} label={label} inputProps={{value: value, onChangeText: setValue, onValueChange: toggleSwitch}} {...rest}  />)
  }[type || '']

  if(!result)
    return (<Switch ref={inputRef} value={value} onValueChange={toggleSwitch} />)

  return result

})


