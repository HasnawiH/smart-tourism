import React from 'react';
import {View} from 'react-native';
import Styles from '../config/Styles';
import { Text, Button } from 'react-native-paper';
import Languages from '../languages';
import LanguageContext from '../languages/LanguageContext';
import { size } from "lodash";

export default function LoadMoreButton(props){
	
  const contextState = React.useContext(LanguageContext);
  const language = contextState.language;
  const Strings = Languages[language].texts;

	const {Indicator, showButton, Items, Click, Num } = props;

    if (size(Items) >= Num) {

  if (showButton) {
    return (
      <View style={{height: 100, marginHorizontal: 10, marginVertical:10}}>
        <Button mode="contained" style={{borderRadius:60, paddingVertical:5}} uppercase={false} loading={Indicator ? true : false} labelStyle={{letterSpacing:0}} onPress={Click}>
        {!Indicator ? Strings.ST111 : null}
        </Button>
      </View>
    )
}else{
  return (
    <View style={Styles.NoMoreItems}>
      <Text style={{opacity: 0.3}}>{Strings.ST112}</Text>
    </View>
  )

}
}else{
  return null
}

}

