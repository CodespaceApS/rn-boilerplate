import React from 'react'
import { useForm, useStorage } from '../../hooks'
import { Input } from '../../components'
import {Screen, View,Text,Image, Touch, Button, Card, Lines, Title } from '../../ui'

export default ({navigation}) => {

  return (
  <Screen modal flex={1} fill pl pr>
    <Input mt type="big" label="Indtast din e-mail" />
    <Input mt type="big" label="Indtast dit password" />
    <Button mt onPress={_ => null} text="Videre" />
  </Screen>
  )
}