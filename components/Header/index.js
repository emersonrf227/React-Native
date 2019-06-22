import React, { PureComponent } from 'react';
import { Image, Platform } from 'react-native';

import Logo from '../../assets/header_logo.png';

export default class Header extends PureComponent {
  render() {
    const style = Platform.OS === 'ios' ?
      { width: 111, height: 40 } :
      { 
        width: 111, 
        height: 40, 
        position: 'absolute', 
        left: '50%', 
        marginLeft: -55
    }; 

    return (<Image
      style={ style }
      source={ Logo }
    />);
  }
}