
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Icon, Text } from 'react-native-paper';
import { get, getDatabase, ref} from "firebase/database";
import usePreferences from '../hooks/usePreferences';
import { useIsFocused } from '@react-navigation/native';

export default function PlaceRating(props) {

const {placeId, iconSize, iconColor, numberStyle, showIcon, showNumber} = props;
const [rating, setRating] = useState(0);

const db = getDatabase();

const {theme} = usePreferences();
const isFocused = useIsFocused();

const calculateRating = (data) => {
	let count = 0;
	let sum = 0;
	for(let i = 0; i < data.length; i++) {
		count++;
		sum += data[i].rating;
	}

	return sum/count;
}

useEffect(() => {

	if (isFocused) {

	get(ref(db, 'ratings/places/'+placeId)).then((snapshot) => {

		const dataArray = Object.values(snapshot.val());
		const avgRating = calculateRating(dataArray);
		setRating(avgRating);

	  }).catch((error) => {
		//console.error(error);
		//Math.round(rating)
	  });

	}
	
}, [isFocused]);

return (
	<View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
		{showIcon ? <Icon source="star" size={iconSize ? iconSize : 16} color={iconColor ? iconColor : '#ffeb3b'}></Icon> : null}
		{showNumber ? <Text style={numberStyle}>{rating >0 ? rating.toFixed(1) : '-'}/5</Text> : null}
	</View>
);
};