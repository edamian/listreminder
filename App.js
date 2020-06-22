/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Text,
  FlatList
} from 'react-native';

import List from './src/components/List';
import ListForm from './src/components/ListForm';

const App: () => React$Node = () => {
  const data = [
    {name: 'Hi', id: 1, state: 'completed'},
    {name: 'Hello', id: 2, state: 'draft'},
    {name: 'Hola', id: 3, state: 'ongoing'}
  ];
  return (
    <>
      <Text>Hello world!</Text>
      <FlatList 
        data={data}
        renderItem={({ item }) => <List item={item} />}
        keyExtractor={item => item.id.toString()}
      />
      <ListForm />      
    </>
  );
};

export default App;
