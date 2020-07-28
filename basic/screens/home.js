import React, { useState} from 'react';
import { StyleSheet, View, Text, Button, FlatList, TouchableOpacity, Modal} from 'react-native';
import {globalStyles} from '../styles/global';
import Card from '../shared/card';
import { MaterialIcons } from '@expo/vector-icons';
import ReviewForm from './reviewForm';


export default function Home({ navigation }){
    const [modalOpen, setModalOpen] = useState(false);
    // const pressHandler = () => {
    //     navigation.navigate('ReviewDetails')
    //     // navigation.push('ReviewDetails');
        
    // }

    const [reviews, setReviews] = useState([
        { title: 'Zelda', rating: 5, body:'lorem ipsum', key:'1'},
        { title: 'Gotta catch em', rating: 4, body:'lorem ipsum', key:'2'},
        { title: 'Final fantasia', rating: 3, body:'lorem ipsum', key:'3'},
    ]);
    
    const addReview = (review) => {
        review.key = Math.random().toString();
        setReviews((currentReviews) => {
            return [review, ...currentReviews];
        });
        setModalOpen(false);

    } 
    return(
        <View style={globalStyles.container}>

            <Modal visible={modalOpen} animationType='slide'>
                <View style={styles.modalContent}>
                <MaterialIcons 
                name = 'close'
                size={24}
                style={{...styles.modalToggle, ...styles.modalClose }}
                onPress={() => setModalOpen(false)}

            />
            <ReviewForm addReview={addReview} />
                    {/* <Text> Hello Modal </Text> */}
                </View>
            </Modal>
            {/* <Text style = {globalStyles.titleText}>Home Screen</Text> */}

            {/* <Button title = 'go to reviews' onPress = {pressHandler} /> */}
            <MaterialIcons 
                name = 'add'
                size={24}
                style={styles.modalToggle}
                onPress={() => setModalOpen(true)}

            />
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

const styles = StyleSheet.create({
    modalToggle: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center',
    },
    modalClose:{
        marginTop: 20,
        marginBottom: 0,

    },
    modalContent:{
        flex:1,
        
    }
})

