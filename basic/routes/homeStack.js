import { createStackNavigator } from 'react-navigation-stack';
// import { createAppContainer} from 'react-navigation';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';

const screens = {
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'GameZone',
            // headerStyle:{ backgroundColor: '#061'}
        }
    },
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
        headerStyle:{ backgroundColor: '#061'}
    }
});

// export default createAppContainer(HomeStack);
export default HomeStack;