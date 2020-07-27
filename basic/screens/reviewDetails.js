import React from 'react';
import { StyleSheet, View, Text, Button, Image} from 'react-native';
import {globalStyles, images} from '../styles/global';
import Card from '../shared/card';

export default function ReviewDetails({ navigation }){
    const rating = navigation.getParam('rating');

    const pressHandler = () => {
        navigation.goBack();
    }

    return(
        <View style={globalStyles.container}>
            {/* <Text>ReviewDetails Screen</Text>
            <Button title = 'back to home' onPress = {pressHandler} /> */}
        <Card>
        <Text>{ navigation.getParam('title') }</Text>
        <Text>{ navigation.getParam('body') }</Text>
        {/* <Text>{ navigation.getParam('rating') }</Text> */}
        <View style = {styles.rating}>
            <Text> Game Zone rating: </Text>
            <Image source={images.ratings[rating]} />
        </View>
        </Card>
 
        </View>
    )
}

const styles = StyleSheet.create({
    rating: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#eee',
    }
});