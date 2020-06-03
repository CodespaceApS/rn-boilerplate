import React from 'react'
import { Icons } from './ui'
import { modalStack, headerStyle, mobilePayTab, screenStack } from './options/navigation'
import {Context} from './hooks'

import {Signout} from './components'

import DetailListScreen from './screens/demo/DetailListScreen'
import Menu from './screens/demo/MenuScreen'
import InfoList from './screens/demo/InfoListScreen'
import KeyboardInputScreen from './screens/demo/KeyboardInputScreen'
import DemoText from './screens/demo/DemoText'
import Login from './screens/demo/Login'

import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator();


const ModalStack = () => (
<Stack.Navigator >
  <Stack.Screen options={{...headerStyle}} name="infolist" component={InfoList} />
</Stack.Navigator>
)

const KeyboardInputStack = () => (
  <Stack.Navigator >
    <Stack.Screen options={{...headerStyle, title: 'Edit name'}} name="keyboardinput" component={KeyboardInputScreen} />
  </Stack.Navigator>
)

const MainStack = () => (
  <Stack.Navigator  {...screenStack} >
    <Stack.Screen options={{
      ...headerStyle,
      title: 'Detail List',
      headerRight: () => <Signout />,
    }} name="DetailListScreen" component={DetailListScreen} />
  </Stack.Navigator>
)

const MenuStack = () => (
  <Stack.Navigator  {...screenStack}  >
    <Stack.Screen options={{...headerStyle, title: 'Menu'}} name="Menu" component={Menu} />
    <Stack.Screen options={{...headerStyle}} name="InfoList" component={InfoList} />
  </Stack.Navigator>
)

const DrawerNav = () => (
  <Drawer.Navigator >
    <Drawer.Screen
      name="DetailListScreen"
      options={{
        title: 'Detail List',
        DrawerBarIcon: () => <Icons.Transaction />,
      }}
      component={MainStack} />
    <Drawer.Screen
      options={{
        DrawerBarIcon: () => <Icons.Transaction />,
      }}
      name="Menu"
      component={MenuStack} />
  </Drawer.Navigator>
)

const BaseApp = () => (
  <Stack.Navigator {...modalStack} >
    <Stack.Screen options={{...headerStyle}} name="Nav" component={DrawerNav} />
    <Stack.Screen options={{...headerStyle}} name="InfoListModal" component={ModalStack} />
    <Stack.Screen options={{...headerStyle}} name="Keyboardinput" component={KeyboardInputStack} />
    <Stack.Screen options={{...headerStyle}} name="DemoText" component={DemoText} />
  </Stack.Navigator>
)

export default () => {
  const [auth, cSetAuth, isLoaded] = Context.useAuth()

  if(!isLoaded) return null
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


