import React from 'react'
import { Icons } from './ui'
import { modalStack, headerStyle, mobilePayTab } from './options/navigation'
import {Context} from './hooks'

import Transactions from './screens/demo/DemoTransactionsScreen'
import Settings from './screens/demo/DemoSettingsScreen'
import Form from './screens/demo/DemoFormScreen'
import DemoText from './screens/demo/DemoText'
import Login from './screens/demo/Login'

import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator();

const ModalStack = () => (
<Stack.Navigator >
  <Stack.Screen options={{...headerStyle}} name="Login" component={Form} />
</Stack.Navigator>
)

const MainStack = () => (
  <Stack.Navigator >
    <Stack.Screen options={{...headerStyle}} name="Transactions" component={Transactions} />
  </Stack.Navigator>
)

const SettingsStack = () => (
  <Stack.Navigator >
    <Stack.Screen options={{...headerStyle}} name="Settings" component={Settings} />
    <Stack.Screen options={{...headerStyle}} name="SlideForm" component={Form} />
  </Stack.Navigator>
)

const Drawerav = () => (
  <Drawer.Navigator >
    <Drawer.Screen
      name="Transactions"
      component={MainStack} />
    <Drawer.Screen
      name="Settings"
      component={SettingsStack} />
  </Drawer.Navigator>
)

const BaseApp = () => (
  <Stack.Navigator {...modalStack} >
    <Stack.Screen options={{...headerStyle}} name="Nav" component={Drawerav} />
    <Stack.Screen options={{...headerStyle}} name="SlideOpen" component={ModalStack} />
    <Stack.Screen options={{...headerStyle}} name="DemoText" component={DemoText} />
  </Stack.Navigator>
)

export default () => {
  const [auth, cSetAuth, isLoaded] = Context.useAuth()

  if(!isLoaded) return null
  console.log({auth})
  return (
    <Stack.Navigator headerMode="none" >
      {!auth || auth == 'null' ? (
      <Stack.Screen
        name="SignIn"
        component={Login}
        options={{
          title: 'Sign in',
          animationTypeForReplace: 'pop',
        }}
      />
      ) : (

      <Stack.Screen name="Home" component={BaseApp} />
    )}
  </Stack.Navigator>
  )
}


