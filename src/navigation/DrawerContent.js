import React from 'react';
import { View, Image, TouchableOpacity, I18nManager, Text } from 'react-native';
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { List } from "react-native-paper";
import Styles from '../config/Styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Languages from '../languages';
import LanguageContext from '../languages/LanguageContext';
import usePreferences from '../hooks/usePreferences';

export default function DrawerContent(props){

    const contextState = React.useContext(LanguageContext);
    const language = contextState.language;
    const Strings = Languages[language].texts;
    const {theme} = usePreferences();

	const {navigation} = props;
	const rightIcon = I18nManager.isRTL ? "chevron-left" : "chevron-right";

	const onChangeScreen = (screen) => {
		navigation.navigate(screen);
	};

	return (

		<DrawerContentScrollView>

		<TouchableOpacity onPress={() => onChangeScreen("home")} activeOpacity={0.8}>
		<View style={Styles.DrawerHeader}>
			<Image source={require('../../assets/new/logo-main-primary.png')} resizeMode={"contain"} style={{width: 80, height: 80, alignSelf: 'center', marginBottom: 10}} />
        <Text style={{fontSize: 28, fontWeight: 'bold', textAlign: 'center', letterSpacing: 2}}>MAJENE</Text>
        <Text style={{fontSize: 12, textAlign: 'center', letterSpacing: 4, color: '#888', marginBottom: 10}}>CITY GUIDE</Text>
		</View>
		</TouchableOpacity>

		<View style={{flex: 1}}>

		<List.Item
		titleStyle={Styles.DrawerTitleMenu}
		style={Styles.DrawerMenuItem}
		title={Strings.ST2}
		onPress={() => onChangeScreen("places")}
		underlayColor="transparent"
		rippleColor='transparent'
		right={props => <Icon {...props} style={Styles.DrawerIconRightMenu} name={rightIcon} />}
		/>

		<List.Item
		titleStyle={Styles.DrawerTitleMenu}
		style={Styles.DrawerMenuItem}
		title={Strings.ST5}
		onPress={() => onChangeScreen("offers")}
		underlayColor="transparent"
		rippleColor='transparent'
		right={props => <Icon {...props} style={Styles.DrawerIconRightMenu} name={rightIcon} />}
		/>

		<List.Item
		titleStyle={Styles.DrawerTitleMenu}
		style={Styles.DrawerMenuItem}
		title={Strings.ST26}
		onPress={() => onChangeScreen("news")}
		underlayColor="transparent"
		rippleColor='transparent'
		right={props => <Icon {...props} style={Styles.DrawerIconRightMenu} name={rightIcon} />}
		/>

		<List.Item
		titleStyle={Styles.DrawerTitleMenu}
		style={Styles.DrawerMenuItem}
		title={Strings.ST4}
		onPress={() => onChangeScreen("favorites")}
		underlayColor="transparent"
		rippleColor='transparent'
		right={props => <Icon {...props} style={Styles.DrawerIconRightMenu} name={rightIcon} />}
		/>

		<List.Item
		titleStyle={Styles.DrawerTitleMenu}
		style={Styles.DrawerMenuItem}
		title={Strings.ST6}
		onPress={() => onChangeScreen("profile")}
		underlayColor="transparent"
		rippleColor='transparent'
		right={props => <Icon {...props} style={Styles.DrawerIconRightMenu} name={rightIcon} />}
		/>

		<List.Item
		titleStyle={Styles.DrawerTitleMenu}
		style={Styles.DrawerMenuItem}
		title={Strings.ST108}
		onPress={() => onChangeScreen("settings")}
		underlayColor="transparent"
		rippleColor='transparent'
		right={props => <Icon {...props} style={Styles.DrawerIconRightMenu} name={rightIcon} />}
		/>

		</View>

		</DrawerContentScrollView>

		)
}