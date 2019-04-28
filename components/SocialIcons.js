import React from 'react';
import { View } from 'react-native';
import { SocialIcon } from 'react-native-elements';

export default class SocialIcons extends React.PureComponent {
  render() {
    return (
      <View style={{display: 'flex', flex: 1, flexDirection: 'row'}}>
        <SocialIcon type="twitter" />
        <SocialIcon raised={false} type="gitlab" />
        <SocialIcon light type="medium" />
        <SocialIcon light raised={false} type="medium" />
      </View>
    );
  }
}
