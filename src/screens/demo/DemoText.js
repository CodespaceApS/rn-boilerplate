import React from 'react'
import { useForm, useStorage } from '../../hooks'
import { Input } from '../../components'
import {Screen, View,Text,Image, Touch, Button, Lines, Title } from '../../ui'

export default () => {

  return (
  <Screen modal flex={1} fill pl pr>
    <Title>Nice title</Title>
    <Text>Bla bla bla</Text>
  </Screen>
  )
}