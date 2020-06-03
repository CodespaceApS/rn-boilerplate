import React from 'react'
import { useForm, useStorage } from '../hooks'
import { Input, Toggle } from '../components'
import {Screen, View,Text,Image, Touch, Button, Card, Lines, Title } from '../ui'

export default () => {
  const form = useForm()
  const [savedName, setSavedName] = useStorage('name')
  const [val, setVal] = React.useState('no val')
  const onPress = async () => {
    const values = await form.values()
    setSavedName(values.name)
    setVal(JSON.stringify(values))
  }
  React.useEffect(() => {
    form.set({
      name: savedName
    })
  }, [savedName])
  return (
    <>

  <Screen flex={1} fill pl pr>
    <Title mt>Profil</Title>
    <Card mb>
      <Lines.Big />
      <Lines.Big />
      <Lines.Big />
      <Lines.Big />
      <Lines.Big />
      <Lines.Big />
      <Lines.Big />
      <Lines.Big />
      <Lines.Big />
      <Lines.Big />
      <Lines.Big />
      <Lines.Big />
    </Card>

    <Button text="Click this" onPress={onPress} />
    <Button second text="Or click this" onPress={onPress} />
    <Text>{val}</Text>
  </Screen>
  </>
  )
}