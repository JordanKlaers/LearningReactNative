import React, { Component } from 'react';
import { AppRegistry, Text, View, TouchableHighlight, Alert } from 'react-native';


class Champs extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Text>You got killed by {this.props.name}!</Text>
      </View>
    );
  }
}

export default class LotsOfGreetings extends Component {
  // whatIsThis = this;
  render() {
    return (
      <View>


        <View style={{alignItems: 'center'}}>
          <TouchableHighlight
            onPress={() => Alert.alert(
              'Alert Title',
              "haha a man cat killed you",
            )}>
            <View>
              <Champs name='Rengar' />
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => Alert.alert(
              'ooof',
              "haha a man cow Killed you",
            )}>
            <View>
              <Champs name='Alistar' />
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => Alert.alert(
              'Ouch',
              "haha a big scary man killed you",
            )}>
            <View>
              <Champs name='Darius' />
            </View>
          </TouchableHighlight>


        </View>

        <View style={{alignItems: 'flex-start'}}>
          <TouchableHighlight
            onPress={() => Alert.alert(
              'Ouch',
              "haha a Musician killed you",
            )}>
            <View>
              <Champs name="Sona" />
            </View>
          </TouchableHighlight>

        </View>
      </View>

    );
  }
}

// console.log(whatIsThis);

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => HelloWorldApp);
