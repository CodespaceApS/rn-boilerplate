import { createStackNavigator, TransitionPresets, TransitionSpecs, CardStyleInterpolators   } from '@react-navigation/stack'
import {colors} from '../ui'

export const headerStyle = {
  headerTitleAllowFontScaling: false,
  headerBackAllowFontScaling: false,
  headerTitleAlign: 'center',
  headerTintColor: colors.dark,
  headerStyle: {
    borderBottomWidth: .5,
    borderWidth: .5,
    borderBottomColor: colors.dark,
    borderColor: colors.dark,
  },
  headerTitleStyle: {
    fontWeight: "bold",
    fontSize: 25
  },
  headerBackTitleVisible: false,
}

export const screenStack = {
  screenOptions: {
    gestureEnabled: true,
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS ,
  }
}

export const modalStack = {
  mode: 'modal',
  headerMode: 'none',
  screenOptions: {
    gestureEnabled: true,
    cardStyle: { backgroundColor: 'transparent' },
    cardOverlayEnabled: true,
    ...TransitionPresets.ModalPresentationIOS,
  }
}

export const mobilePayTab = {
  inactiveBackgroundColor: 'white',
  allowFontScaling: false,
  keyboardHidesTabBar: true,
  activeTintColor: colors.main,
  activeBackgroundColor: 'white',
  tabStyle: {
    borderTopWidth: 0,
    borderRadius: 10,
    height: 50,
    marginTop: 0,
    marginBottom: 10,
  },
  style: {
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: .5,
    height: 60,
    borderTopWidth: .5,
    borderTopColor: colors.dark,
    borderColor: colors.dark,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: -10,
    paddingBottom: 12
  }
}