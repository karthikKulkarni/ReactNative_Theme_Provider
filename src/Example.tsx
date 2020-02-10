import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { withTheme } from './core/themeProvider';

const Example = ({ theme, themes, setTheme }) => {
  return (
    <>
      <View
        style={{
          flex: 0.1,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}
      >
        <TouchableOpacity
          style={{ backgroundColor: 'brown' }}
          onPress={() => {
            setTheme('Theme1');
          }}
        >
          <Text>Theme1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ backgroundColor: 'brown' }}
          onPress={() => {
            setTheme('Theme2');
          }}
        >
          <Text>Theme2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ backgroundColor: 'brown' }}
          onPress={() => {
            setTheme('Theme3');
          }}
        >
          <Text>Theme3</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 0.9,
          borderRadius: 8,
          borderColor: 'black',
          borderWidth: 2,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: theme.backgroundColor,
        }}
      >
        <Text style={{ color: theme.color }}>Body</Text>
      </View>
    </>
  );
};

export default withTheme(Example);
