import { createStackNavigator } from 'react-navigation-stack';
// import { createAppContainer} from 'react-navigation';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import Header from '../shared/header';
import React from 'react';

const screens = {
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title ='GAME ZONE'/>,
            }
        }
    },
    //     navigationOptions: {
    //         // title: 'GameZone',
    //         // headerTitle: () => <Header />,
    //         // headerStyle:{ backgroundColor: '#061'}
    //     }
    // },
    ReviewDetails:{
        screen: ReviewDetails,
        navigationOptions: {
            title: 'Review Details',
            // headerStyle:{ backgroundColor: '#061'}
        }
    }
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#000',
        headerStyle:{ backgroundColor: '#071'}
    }
});

// export default createAppContainer(HomeStack);
export default HomeStack;