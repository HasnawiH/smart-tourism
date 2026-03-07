import React from 'react';
import { View } from 'react-native';
import { Subheading, Title } from 'react-native-paper';
import { size } from 'lodash';
import Languages from '../languages';
import LanguageContext from '../languages/LanguageContext';

export default function NoContentFound(props) {

const contextState = React.useContext(LanguageContext);
const language = contextState.language;
const Strings = Languages[language].texts;

const {data} = props;

	if(size(data) < 1){

return(
	<View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginHorizontal: 20, marginVertical:20}}>
	<Title style={{fontWeight: 'bold'}}>{Strings.ST65}</Title>
	<Subheading style={{textAlign: 'center', marginTop: 0, marginHorizontal: 30, opacity:0.5}}>{Strings.ST66}</Subheading>
	</View>
	);

	}else{
		return null;
	}

}