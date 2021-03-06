import React from 'react'
import { useForm, Context } from '../../hooks'
import { Input } from '../../components'
import {Screen, View,Text,Image, Touch, Button, Card, Lines, Title } from '../../ui'

export default ({navigation}) => {
  const [auth, set] = Context.useAuth()


  return (
  <Screen modal flex={1} fill pl pt pr>
    <Title mt="100" >Login </Title>
    <Input mt type="big" label="Indtast din e-mail" />
    <Input mt type="big" label="Indtast dit password" />
    <Button mt onPress={_ => set({token: 'sdsda', name: 'simon'})} text="Login" />
  </Screen>
  )
}