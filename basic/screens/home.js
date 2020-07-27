import React, { useState} from 'react';
import { StyleSheet, View, Text, Button, FlatList, TouchableOpacity} from 'react-native';
import {globalStyles} from '../styles/global';
import Card from '../shared/card';

export default function Home({ navigation }){
    // const pressHandler = () => {
    //     navigation.navigate('ReviewDetails')
    //     // navigation.push('ReviewDetails');
        
    // }

    const [reviews, setReviews] = useState([
        { title: 'Zelda', rating: 5, body:'lorem ipsum', key:'1'},
        { title: 'Gotta catch em', rating: 4, body:'lorem ipsum', key:'2'},
        { title: 'Final fantasia', rating: 3, body:'lorem ipsum', key:'3'},
    ]);

    return(
        <View style={globalStyles.container}>
            {/* <Text style = {globalStyles.titleText}>Home Screen</Text> */}

            {/* <Button title = 'go to reviews' onPress = {pressHandler} /> */}

            <FlatList
            data = {reviews}
            renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                    <Card>
                        <Text style = {globalStyles.titleText}>{ item.title }</Text>
                    </Card>
                </TouchableOpacity>
            )}
            />
        </View>
    )
}

