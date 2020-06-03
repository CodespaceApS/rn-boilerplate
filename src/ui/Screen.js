import React from 'react'
import {KeyboardAvoidingView, Platform} from 'react-native';
import { colors, View, Scroll, Touch, Text } from './style'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default ({children, scroll, modal, form, ...rest}) =>  scroll ? (
    <Scroll pb mb={modal ? 0.1 : 50} pl pr flex={1} bg={colors.bg} {...rest} >
      <KeyboardAwareScrollView enableOnAndroid={true} >
      {children}
      </KeyboardAwareScrollView>
    </Scroll>
) : (
  <View pl pr mb={modal ? 0.1 : 50} flex={1} bg={colors.bg}  {...rest} >
    {children}
  </View>
)