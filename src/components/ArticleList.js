import React, { Component } from 'react';
import {
    Text,
    View
} from 'react-native';

const ArticleList= ({ article }) => {
    return (
        <View>
            <Text>{ article.name }</Text>
            <Text>Cantidad { article.quantity }</Text>
        </View>
    )
}

export default ArticleList;