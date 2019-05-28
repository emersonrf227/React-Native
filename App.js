import React from 'react';

import {
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';


import Home from './screens/home';

import Temporada from './screens/temporada';


const AppNavigator = createStackNavigator({

  Home: {
    screen: Home,
  },
  Temporada: {
    screen: Temporada,
  },

},
  {

    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#333',
      },
      headerTintColor: '#FFF',
      headerBackTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },

  
  
  
  
  
  
  
  )
  
  ;

export default createAppContainer(AppNavigator)


