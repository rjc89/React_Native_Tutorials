import { createStackNavigator } from 'react-navigation-stack';
// import { createAppContainer} from 'react-navigation';
// import Home from '../screens/home';
// import ReviewDetails from '../screens/reviewDetails';
import About from '../screens/about';
import Header from '../shared/header';
import React from 'react';

const screens = {
    About: {
        screen: About,
        // navigationOptions: {
        //     title: 'About GameZone',
        //     // headerTitle : () => <Header />,
        //     // headerStyle:{ backgroundColor: '#061'}
        // }
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title ='About ZONE'/>,
            }
        }
    },
    // ReviewDetails:{
    //     screen: ReviewDetails,
    //     navigationOptions: {
    //         title: 'Review Details',
    //         // headerStyle:{ backgroundColor: '#061'}
    //     }
    // }
}

const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#000',
        headerStyle:{ backgroundColor: '#061'}
    }
});

// export default createAppContainer(HomeStack);
export default AboutStack;