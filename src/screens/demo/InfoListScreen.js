import React from 'react'
import { useForm, useStorage } from '../../hooks'
import { Input, Switch } from '../../components'
import {Screen, View,Text,Image, Touch, Button, Card, Lines, Title } from '../../ui'

export default ({navigation}) => {
  const form = useForm()
  React.useLayoutEffect(() => {
    form.set({
      info: 'Information about something',
      description: 'Some description',
      active: 1
    })
  }, [form])

  return (
  <Screen inTab scroll modal flex={1} fill pl={0.1} pr={0.1} >
    <Title ml mt mb>Profil</Title>
    <Lines.SimpleLineWrapper>
    <Lines.SimpleLineLink onPress={_ => navigation.navigate('Keyboardinput')} label="Name" value="Simon" />
    <Lines.SimpleLineLink label="E-mail" value="simon@codespace.dk" />
    <Lines.SimpleLineLink label="Phone" value="+45 42335522" noLine />
    </Lines.SimpleLineWrapper>

    <Title ml mt mb>Payment</Title>
    <Lines.SimpleLineWrapper>
    <Lines.SimpleLineLink label="Cards" />
    <Lines.SimpleLineLink label="Agreements"  />
    <Lines.SimpleLineLink label="Limits"  noLine />
    </Lines.SimpleLineWrapper>

    <Title ml mt mb>Information</Title>
    <Lines.SimpleLineWrapper>
      <Input ref={form.add('info')} label="Info" type="line" />
      <Switch ref={form.add('active')} label="Info" type="line" />
      <Input ref={form.add('description')} label="Description" type="line" noLine />

    </Lines.SimpleLineWrapper>
  </Screen>
  )
}