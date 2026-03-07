import React from 'react';
import {I18nManager} from 'react-native';
import { List } from 'react-native-paper';
import ColorsApp from '../config/ColorsApp';

export default function CustomButton(props) {

		const {Icon, Label, Click} = props;

		return(

			<List.Item
			title={Label}
			onPress={Click}
			underlayColor="transparent"
			rippleColor="transparent"
			left={props => <List.Icon {...props} icon={Icon} color={ColorsApp.PRIMARY} />}
			right={props => <List.Icon {...props} icon={I18nManager.isRTL ? "chevron-left" : "chevron-right"} />}
		  />

			);
}