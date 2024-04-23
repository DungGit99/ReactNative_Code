/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { View } from 'react-native';
import { List } from 'react-native-paper';

const Home = ({navigation}) => {
  const navigate = route => navigation.navigate(route);
  return (
    <View style={{flex: 1}}>
      <List.Accordion
        title="Bottom Tab Navigation"
        left={props => <List.Icon {...props} icon="folder" />}>
        <List.Item
          title="Animatable bottom tab1"
          onPress={() => navigate('Tab1')}
        />
        <List.Item
          title="Animatable bottom tab2"
          onPress={() => navigate('Tab2')}
        />
        <List.Item
          title="Animatable bottom tab3"
          onPress={() => navigate('Tab3')}
        />
      </List.Accordion>
    </View>
  );
};

export default Home;
