import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    FlatList
} from 'react-native';
import ArticleList from './ArticleList';

const data = [
    {name: 'Articulo 1', quantity: 3, id: 1},
    {name: 'Articulo 2', quantity: 7, id: 2},
    {name: 'Articulo 3', quantity: 2, id: 3},
    {name: 'Articulo 4', quantity: 1, id: 4},
    {name: 'Articulo 5', quantity: 3, id: 5}
];

class ListForm extends Component {
    render() {
        return (
            <View>
                <View>
                    <Text>Nombre</Text>
                    <TextInput placeholder="Nombre"/>
                </View>
                <View>
                    <TextInput placeholder="Articulo" />
                    <TextInput placeholder="Cantidad" />
                    <Button title="+"/>
                </View>
                <View>
                    <FlatList 
                        data={data}
                        renderItem={({ item }) => <ArticleList article={item} />}
                        keyExtractor={ item => item.id.toString() }
                    />
                </View>
                <View>
                    <Button title="Cancelar" />
                    <Button title="Guardar" />
                </View>
            </View>
        );
    }
}

export default ListForm;