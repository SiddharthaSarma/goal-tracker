import { Constants } from 'expo';
import React from 'react';
import { ScrollView, View } from 'react-native';
import { ListItem, Text } from 'react-native-elements';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home'
  };
  state = {
    users: [],
    isLoading: 'false'
  };
  async componentDidMount() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const json = await response.json();
    this.setState({
      users: json
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text h1>Hi there</Text>
          <Text h2>{this.state.isLoading}</Text>
          {this.state.users.map((l, i) => (
            <ListItem key={i} title={l.name} subtitle={l.email} bottomDivider />
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = {
  container: {
    display: 'flex',
    flex: 1,
    paddingTop: Constants.statusBarHeight
  }
};
