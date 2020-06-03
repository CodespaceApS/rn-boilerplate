import React from 'react'
import { useForm, useStorage } from '../../hooks'
import {Screen, View,Text,Image, Touch, Button, Card, Lines, Title } from '../../ui'

export default ({navigation}) => {

  return (
    <>
  <Screen flex={1} fill pl pr>
    <Card mt>
      <Lines.Menu onPress={_ => navigation.navigate('SlideForm')} title="Form slide" />
      <Lines.Menu onPress={_ => navigation.navigate('SlideOpen')} title="Form open" />
      <Lines.Menu title="Betaling" />
      <Lines.Menu title="Sjov" />
    </Card>
  </Screen>
  </>
  )
}