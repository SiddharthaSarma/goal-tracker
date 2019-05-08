import { Constants } from 'expo';
import * as React from 'react';
import { Alert, ScrollView, StyleSheet, View } from 'react-native';
import { Button, Card, Header, Input, ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Chart from './components/Chart';
// You can import from local files
import SocialIcons from './components/SocialIcons';

const users = [
  {
    name: 'brynn',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  }
];

export default class App extends React.Component {
  showAlert() {
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {
          text: 'Ask me later',
          onPress: () => console.log('Ask me later pressed')
        },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        },
        { text: 'OK', onPress: () => console.log('OK Pressed') }
      ],
      { cancelable: false }
    );
  }
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Header
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: 'Goal tracker', style: { color: '#fff' } }}
            rightComponent={{ icon: 'home', color: '#fff' }}
          />

          <Input
            placeholder="INPUT WITH CUSTOM ICON"
            leftIcon={<Icon name="user" size={24} color="black" />}
          />
          <Button
            raised
            icon={{ name: 'cached', color: '#fff' }}
            title="RAISED WITH ICON"
            fontFamily="Comic Sans MS"
            onPress={this.showAlert}
          />
          <View style={{ padding: 8 }}>
            <Chart />
          </View>
          <View>
            <Card containerStyle={{ padding: 0 }}>
              {users.map((u, i) => {
                return (
                  <ListItem
                    key={i}
                    roundAvatar
                    title={u.name}
                    leftAvatar={{
                      source: {
                        uri: u.avatar
                      }
                    }}
                  />
                );
              })}
            </Card>
            <SocialIcons />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight
  }
});
