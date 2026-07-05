import React from 'react';
import { I18nManager } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { IconButton } from 'react-native-paper';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Settings from '../screens/Settings';
import About from '../screens/About';
import Terms from '../screens/Terms';
import Languages from '../languages';
import LanguageContext from '../languages/LanguageContext';
import usePreferences from '../hooks/usePreferences';
import Favorites from '../screens/Favorites';
import ColorsApp from '../config/ColorsApp';
import PlacesCategories from '../screens/PlacesCategories';
import Orders from '../screens/Orders';
import SinglePlaceCategory from '../screens/SinglePlaceCategory';
import SinglePlaceType from '../screens/SinglePlaceType';
import Places from '../screens/Places';
import Offers from '../screens/Offers';
import SingleOfferCategory from '../screens/SingleOfferCategory';
import News from '../screens/News';
import Search from '../screens/Search';

const Stack = createStackNavigator();

export default function StackNavigation(props){

  const contextState = React.useContext(LanguageContext);
  const language = contextState.language;
  const Strings = Languages[language].texts;
  const {theme} = usePreferences();

  const {navigation} = props;

  const navigatorOptions = {
	headerStyle: {
		shadowColor: 'transparent',
		elevation: 0,
		shadowOpacity: 0,
		backgroundColor: ColorsApp.PRIMARY,
	},
	headerTitleStyle: {
		fontSize: 18,
	},
	headerTitleAlign: 'center',
	headerTintColor:'#fff'
  }

// ******************************** Buttons

const buttonBack = () => {
	return (
		<IconButton icon={I18nManager.isRTL ? "arrow-right" : "arrow-left"} iconColor="white" style={{marginLeft:15}} size={24} onPress={() => navigation.goBack()}/>
		)
};

const buttonMenu = () => {
	return (
		<IconButton icon="menu" size={24} style={{marginLeft:15}} iconColor='white' backgroundColor={ColorsApp.PRIMARY} onPress={() => navigation.openDrawer()}/>
		)
};

return (
	<Stack.Navigator screenOptions={navigatorOptions}>
	{/* <Stack.Screen name="home" component={Home} options={{headerTransparent: true, title: null, headerLeft: () => buttonMenu()}} /> */}
	<Stack.Screen name="home" component={Home} options={{headerTransparent: true, title: null}} />
	<Stack.Screen name="profile" component={Profile} options={{title: Strings.ST6, headerLeft: () => buttonBack()}} />
	<Stack.Screen name="settings" component={Settings} options={{title: Strings.ST108, headerLeft: () => buttonBack()}} />
	<Stack.Screen name="about" component={About} options={{title: Strings.ST110, headerLeft: () => buttonBack()}} />
	<Stack.Screen name="terms" component={Terms} options={{title: Strings.ST8, headerLeft: () => buttonBack()}} />
	<Stack.Screen name="placecategories" component={PlacesCategories} options={{title: Strings.ST28, headerLeft: () => buttonBack()}} />
	<Stack.Screen name="singleplacecategory" component={SinglePlaceCategory} options={{title: null, headerLeft: () => buttonBack()}} />
	<Stack.Screen name="singleoffercategory" component={SingleOfferCategory} options={{title: null, headerLeft: () => buttonBack()}} />
	<Stack.Screen name="singleplacetype" component={SinglePlaceType} options={{title: null, headerLeft: () => buttonBack()}} />
	<Stack.Screen name="search" component={Search} options={{title: Strings.ST3, headerLeft: () => buttonBack()}} />
	<Stack.Screen name="favorites" component={Favorites} options={{title: Strings.ST4, headerLeft: () => buttonBack()}} />
	<Stack.Screen name="orders" component={Orders} options={{title: Strings.ST54, headerLeft: () => buttonBack()}} />
	<Stack.Screen name="places" component={Places} options={{title: Strings.ST2, headerLeft: () => buttonBack()}} />
	<Stack.Screen name="offers" component={Offers} options={{title: Strings.ST5, headerLeft: () => buttonBack()}} />
	<Stack.Screen name="news" component={News} options={{title: Strings.ST26, headerLeft: () => buttonBack()}} />
	</Stack.Navigator>
	)
}