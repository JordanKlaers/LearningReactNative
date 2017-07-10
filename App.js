import React, { Component } from 'react';
import { AppRegistry, Text, View, TouchableHighlight, Alert } from 'react-native';

// class animals extends Component {
//   render() {
//     return (
//       <Text>Hello {this.props.animal}!</Text>
//     );
//   }
// }
//
//
// export default class HelloWorldApp extends Component {
//   render() {
//     return (
//       <View style={{alignItems: 'center'}}>
//         <Text>Hello world!</Text>
//         <animals animal="doggo"></animals>
//     </View>
//     );
//   }
// }

// var whatIsThis = '';

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
            <Champs name='Rengar' />
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => Alert.alert2(
              'ooof',
              "haha a man cow Killed you",
            )}>
            <Champs name='Alistar' />
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => Alert.alert3(
              'Ouch',
              "haha a big scary man killed you",
            )}>
            <Champs name='Darius' />
          </TouchableHighlight>


        </View>

        <View style={{alignItems: 'flex-start'}}>
          <Champs name="Sona" />
        </View>
      </View>

    );
  }
}

// console.log(whatIsThis);

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => HelloWorldApp);
