import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import PropsDinamis from './PropsDinamis';
import StateDinamis from './StateDinamis';
import Communication from './communication';

const Story = props => {
  return (
    <View>
      <ScrollView>
        <PropsDinamis/>
        <StateDinamis/>
        <Communication/>

      </ScrollView>
    </View>
  );
};

export default Story;