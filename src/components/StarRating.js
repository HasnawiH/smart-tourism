import _ from 'lodash';
import React, { useState } from 'react';
import { View } from 'react-native';
import { IconButton } from 'react-native-paper';

export default function StarRating(props) {

const {setValue, setRating} = props;

const updateRating = (newRating) => {
  setRating(newRating);
}

return(

<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
{_.map(Array(5), (_, index) => (
    <IconButton
      key={index}
      icon={setValue >= index+1 ? 'star' : 'star-outline'}
      onPress={() => updateRating(index+1)}
      size={32}
      style={{marginHorizontal:-3}}
      iconColor={setValue >= index+1 ? '#fbc531' : '#cccccc'}
    />
  ))}
</View>

    );
}