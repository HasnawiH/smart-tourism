
import React, { useEffect, useState } from 'react';
import { I18nManager, View } from 'react-native';
import { IconButton, Text } from 'react-native-paper';
import { get, getDatabase, ref} from "firebase/database";
import { useIsFocused } from '@react-navigation/native';
import _ from 'lodash';

export default function PlaceRatingStars(props) {

const {placeId, iconSize} = props;
const [rating, setRating] = useState(0);

const db = getDatabase();
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
<View style={{flexDirection: I18nManager.isRTL ? "row-reverse" : "row", justifyContent: I18nManager.isRTL ? "flex-end" : "flex-start"}}>
{_.map(Array(5), (_, index) => (
  <IconButton
    key={index}
    icon={
      index < Math.floor(rating)
        ? 'star'
        : index < Math.round(rating)
        ? 'star-half-full'
        : 'star-outline'
    }
    size={iconSize ? iconSize : 20}
    style={{ marginHorizontal: -5 }}
    iconColor={
      index < Math.floor(rating)
        ? '#fbc531'
        : index < Math.round(rating)
        ? '#fbc531'
        : '#cccccc'
    }
  />
  ))}
</View>
);
};