import React from 'react'
import RN from 'react-native'
import initInline from 'rn-inline-style'
import { BlurView } from 'expo-blur'
const inline = initInline({
  br: x => ['borderRadius', x],
  row: x => ['flexDirection', 'row'],
  endCenter: x => [
    ['justifyContent', 'flex-end'],
    ['alignItems', 'center']
  ],
})

export const colors = {
  main: '#6077F6',
  dark: '#3A3244',
  bg: '#F5F5F2',
  line: '#E1E0E3'
}

export const Switch = ({ ...props }) => (
  <RN.Switch {...inline(props)} />
)

export const Blur = ({ children, ...props }) => (
  <BlurView {...(inline(props))} >
    {children}
  </BlurView>
)

export const Scroll = ({ children, ...props }) => (
  <RN.ScrollView {...(inline(props))} >
    {children}
  </RN.ScrollView>
)

export const Image = ({ children, ...props }) => (
  <RN.Image {...(inline(props))} >
    {children}
  </RN.Image>
)

export const Input = React.forwardRef(({ children, ...props }, ref) => {
  return (
    <RN.TextInput ref={ref} {...(inline(props))} >
      {children}
    </RN.TextInput>
  )
})

export const Text = ({ children, ...props }) => (
  <RN.Text {...(inline(props))} >
    {children}
  </RN.Text>
)

export const Touch = ({ children, ...props }) => (
  <RN.TouchableOpacity {...(inline(props))} >
    {children}
  </RN.TouchableOpacity>
)

export const View = ({ children, ...props }) => (
  <RN.View {...(inline(props))} >
    {children}
  </RN.View>
)