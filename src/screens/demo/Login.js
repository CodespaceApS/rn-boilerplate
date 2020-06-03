import React from 'react'
import { useForm, Context } from '../../hooks'
import { Input } from '../../components'
import {Screen, View,Text,Image, Touch, Button, Card, Lines, Title } from '../../ui'

export default ({navigation}) => {
  const c = Context.useAuth()
  console.log(c)
  const [auth, set, isLoaded] = c
  const login = () => {

  }
  return (
  <Screen modal scroll flex={1} fill pl pr>
    <Title mt>Login 2</Title>
    <Input mt type="big" label="Indtast din e-mail" />
    <Input mt type="big" label="Indtast dit password" />
    <Input mt type="big" label="Indtast dit password" />
    <Input mt type="big" label="Indtast dit password" />
    <Input mt type="big" label="Indtast dit password" />
    <Input mt type="big" label="Indtast dit password" />
    <Button mt onPress={_ => console.log('gi')|| set({token: 'sdsda', name: 'simon'})} text="Videre2" />
  </Screen>
  )
}