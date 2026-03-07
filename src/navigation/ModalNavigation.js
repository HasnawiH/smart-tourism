import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { IconButton } from 'react-native-paper';
import Languages from '../languages';
import LanguageContext from '../languages/LanguageContext';
import usePreferences from '../hooks/usePreferences';
import StackNavigation from './StackNavigation';
import PlaceDetails from '../screens/PlaceDetails';
import SubmitRating from '../screens/SubmitRating';
import OfferDetails from '../screens/OfferDetails';
import Payment from '../screens/Payment';
import OrderDetails from '../screens/OrderDetails';
import NewsDetails from '../screens/NewsDetails';
import ColorsApp from '../config/ColorsApp';

const RootStack = createStackNavigator();

export default function ModalNavigation(props){

  const contextState = React.useContext(LanguageContext);
  const language = contextState.language;
  const Strings = Languages[language].texts;
  const {theme} = usePreferences();

  const buttonClose = () => {
	return (
		<IconButton icon={"window-close"} style={{marginLeft:15}} size={24} onPress={() => props.navigation.goBack()}/>
		)
};

const buttonCloseLight = () => {
	return (
		<IconButton icon={"window-close"} containerColor={'#fff'} iconColor={ColorsApp.PRIMARY} style={{marginLeft:15}} size={24} onPress={() => props.navigation.goBack()}/>
		)
};

const buttonCloseDark = () => {
	return (
		<IconButton icon={"window-close"} iconColor={"#000"} style={{marginLeft:15}} size={24} onPress={() => props.navigation.goBack()}/>
		)
};

	const navigatorOptions = {
		headerStyle: {
			shadowColor: 'transparent',
			elevation: 0,
			shadowOpacity: 0,
			backgroundColor: theme === "light" ? '#fff' : '#000'
		},
		headerTitleStyle: {
			fontSize: 18,
		},
		headerTitleAlign: 'center',
		presentation: 'modal',
		gestureEnabled: false,
		/*cardOverlayEnabled: true,
		...TransitionPresets.ModalPresentationIOS*/
	}

return (
    <RootStack.Navigator screenOptions={(route) => {return navigatorOptions}}>
      <RootStack.Screen name="Main" component={StackNavigation} options={{ headerShown: false }}/>
      <RootStack.Screen name="placedetails" component={PlaceDetails} options={{headerTransparent: true, title: null, headerLeft: () => buttonCloseLight()}} />
      <RootStack.Screen name="offerdetails" component={OfferDetails} options={{headerTransparent: true, title: null, headerLeft: () => buttonCloseLight()}} />
      <RootStack.Screen name="newsdetails" component={NewsDetails} options={{ headerTransparent: true, title: null, headerLeft: () => buttonCloseLight()}} />
      <RootStack.Screen name="orderdetails" component={OrderDetails} options={{ title: Strings.ST73, headerLeft: () => buttonClose()}} />
      <RootStack.Screen name="submitrating" component={SubmitRating} options={{headerTransparent: true, title: null, headerLeft: () => buttonClose()}} />
      <RootStack.Screen name="payment" component={Payment} options={{headerTransparent: true, title: null, headerLeft: () => buttonCloseDark()}} />
    </RootStack.Navigator>
	)
}