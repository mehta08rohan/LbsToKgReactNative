import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

export default function App() {
  const [text, setText] = React.useState(0);

  const onChange = (textvalue) => setText(textvalue);

  const roundTo = (n, digits) => {
    if (digits === undefined) {
      digits = 0;
    }

    var multiplicator = Math.pow(10, digits);
    n = parseFloat((n * multiplicator).toFixed(11));
    var test = Math.round(n) / multiplicator;
    return +test.toFixed(digits);
  };
  const onBtnPress = () => {
    if (isNaN(text)) {
      Alert.alert('Please input valid numbers.');
    } else {
      Alert.alert(`${roundTo(text / 2.205, 2)} kgs.`);
    }
  };
  return (
    <View
      style={{
        backgroundColor: '#fff',
        flex: 1,
      }}
    >
      <View
        style={{
          backgroundColor: 'gold',
          flex: 1,
        }}
      >
        <Text
          style={{
            alignItems: 'center',
            marginTop: 100,
            padding: 20,
            fontSize: 22,
          }}
        >
          Weight conversion from lbs to kg.
        </Text>
      </View>
      <View
        style={{
          backgroundColor: 'tomato',
          flex: 1,
        }}
      >
        <TextInput
          style={{
            borderColor: '#9a73ef',
            borderWidth: 1,
            height: 40,
            margin: 20,
            padding: 10,
            fontSize: 14,
          }}
          placeholder='Add Weights in lbs.'
          onChangeText={onChange}
        ></TextInput>
      </View>
      <View
        style={{
          backgroundColor: 'dodgerblue',
          flex: 1,
        }}
      >
        <TouchableOpacity
          style={{
            flex: 2,
            flexDirection: 'row',
            position: 'absolute',
            bottom: 120,
            alignSelf: 'center',
            justifyContent: 'space-between',
            backgroundColor: 'transparent',
            borderWidth: 1.5,
            borderRadius: 250,
            height: 50,
            width: 110,
          }}
          onPress={() => onBtnPress()}
        >
          <Text
            style={{ fontSize: 16, position: 'absolute', alignSelf: 'center' }}
          >
            Convert
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
