import React from 'react'
import { Arrow } from './icons'
import { colors, View, Touch, Text, Image } from './style'

export const Big = ({onPress}) => (
  <Touch onPress={onPress}>
  <View mb={10} >
    <View row >
      <View br={25} h={50} centerCenter w={50} bg="#6E4A98" >
        <Text fs={30} color="white" fw="bold">SM</Text>
      </View>
      <View ml={20} flex={1} >
        <Text color={colors.dark} fw="bold" fs={14} >Simon Madsen</Text>
        <Text color={colors.dark} fs={12} >Du overførte penge</Text>
        <Text color={colors.dark} fs={10} >20.05.2020</Text>
      </View>
      <View centerCenter >
        <Text color="red" mr fw="bold" >-45,00</Text>
      </View>
      <View centerCenter >
        <Arrow />
      </View>
    </View>
    <View mt={10} ml={70} h={1} bg={colors.line}></View>
  </View>
  </Touch>
)

export const Menu = ({onPress, title}) => (
  <Touch onPress={onPress}>
  <View h={40} mt={5} >
    <View row  >
      <View br={12.5} h={25}  centerCenter w={25} bg="#6E4A98" >
      </View>
      <View ml={20} flex={1}  startCenter row >
      <Text color={colors.dark} fs={12} >{title}</Text>
      </View>
    </View>
    <View mt={10} ml={40} h={1} bg={colors.line}></View>
  </View>
  </Touch>
)