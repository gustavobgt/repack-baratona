import React from 'react';
import {List} from 'react-native-paper';
import {StyleSheet, View} from 'react-native';

const Home = ({navigation}) => {
  const navigate = route => navigation.navigate(route);
  return (
    <View styles={{flex: 1}}>
      <List.Accordion
        title="Bottom Tab Navigation"
        left={props => <List.Icon {...props} icon="folder" />}>
        <List.Item title="Tab 1" onPress={() => navigate('Tab1')} />
        <List.Item title="Tab 2" onPress={() => navigate('Tab2')} />
      </List.Accordion>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
