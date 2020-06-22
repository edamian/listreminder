import React, { Component } from 'react';
import {
    Text, View
} from 'react-native';

const List = ({ item }) => {
    return (
        <View>
            <Text>Lista { item.name }</Text>
            <Text>Estado { item.state }</Text>
        </View>
    );
}

export default List;