import React from 'react'
import { useForm, useStorage } from '../../hooks'
import {Screen, View,Text,Image, Touch, Button, Card, Lines, Title } from '../../ui'

export default ({navigation}) => {

  return (
    <>
  <Screen flex={1} fill pl pr>
    <Card mt>
      <Lines.Menu onPress={_ => navigation.navigate('InfoList')} title="Infolist (slide)" />
      <Lines.Menu onPress={_ => navigation.navigate('InfoListModal')} title="Infolist (Modal)" />
      <Lines.Menu title="Fake 1" />
      <Lines.Menu title="Fake 2" />
      <Lines.Menu title="Fake 3" />
      <Lines.Menu title="Fake 4" />
    </Card>
  </Screen>
  </>
  )
}