import React from 'react'
import { useForm, Context } from '../../hooks'
import { Input } from '../../components'
import {Screen, View,Text,Image, Touch, Button, Card, Lines, Title } from '../../ui'

export default ({navigation}) => {
  const [auth, set] = Context.useAuth()
  const form = useForm()


  return (
  <Screen modal flex={1} fill pl pt pr>
    <Title mt >Enter name </Title>
    <Input inputProps={{onSubmitEditing: _ => navigation.goBack(), autoFocus: true}} ref={form.add('name')} mt type="big"  label="Enter your name" />
  </Screen>
  )
}