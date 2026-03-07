import React, { useState, useEffect } from 'react';
import { View} from 'react-native';
import Styles from '../config/Styles';
import Languages from '../languages';
import LanguageContext from '../languages/LanguageContext';
import usePreferences from '../hooks/usePreferences';
import { getAuth } from 'firebase/auth';
import { ActivityIndicator, Text } from 'react-native-paper';
import ColorsApp from '../config/ColorsApp';
import WebView from 'react-native-webview';
import ConfigApp from '../config/ConfigApp';

const auth = getAuth();

export default function Payment(props) {

  const { route } = props;
  const { navigation } = props;
  const { method, offerid } = route.params;

  const userEmail = auth.currentUser.email;

  const {theme} = usePreferences();
  
  const contextState = React.useContext(LanguageContext);
  const language = contextState.language;
  const Strings = Languages[language].texts;

  const paypalUrl = ConfigApp.URL+'payment/paypal/index.php?id_offer='+offerid+'&email_user='+userEmail;
  const stripeUrl = ConfigApp.URL+'payment/stripe/index.php?id_offer='+offerid+'&email_user='+userEmail;

  return (

  <View style={{flex: 1}}>

<WebView 
  source={{uri: method === "paypal" ? paypalUrl : stripeUrl}} 
  javaScriptEnabled={true}
  domStorageEnabled={true}
  renderLoading={() =>( <ActivityIndicator style={Styles.webViewLoader} color={ColorsApp.PRIMARY} size="large" /> )}
  startInLoadingState={true}  
  />

  </View>
  
        );

}


