import React from 'react'
import { Context } from '../../hooks'
import {Screen, View,Text,Image, Touch, Button, Card, Lines, Title } from '../../ui'

export default ({navigation}) => {
  const navigate = () => navigation.navigate('Settings')
  const c = Context.useAuth()

  return (
    <>
  <Screen scroll flex={1} fill pl pr>
    <Title mt>Completed</Title>
    <Card mb pr>
      <Lines.Big onPress={navigate} />
      <Lines.Big onPress={navigate} />
      <Lines.Big onPress={navigate} />
      <Lines.Big onPress={navigate} />
      <Lines.Big onPress={navigate} />
      <Lines.Big onPress={navigate} />
      <Lines.Big onPress={navigate} />
      <Lines.Big onPress={navigate} />
      <Lines.Big onPress={navigate} />
      <Lines.Big onPress={navigate} />
      <Lines.Big onPress={navigate} />
      <Lines.Big onPress={navigate} />
      <Lines.Big onPress={navigate} />
      <Lines.Big onPress={navigate} />
      <Lines.Big onPress={navigate} />
      <Lines.Big onPress={navigate} />
    </Card>
    <Button onPress={_ => c[1](null)} text="Sign out" />
  </Screen>
  </>
  )
}