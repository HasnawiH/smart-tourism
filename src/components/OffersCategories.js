import React, { useState, useEffect } from 'react';
import { ScrollView, View, TouchableOpacity} from 'react-native';
import {map} from 'lodash';
import Loading from './InnerLoading';
import {getOffersCategories} from "../config/DataApp";
import { Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Styles from '../config/Styles';
import hexToRgba from 'hex-to-rgba';
import usePreferences from '../hooks/usePreferences';
import ColorsApp from '../config/ColorsApp';

export default function OffersCategories() {

  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    getOffersCategories().then((response) => {
        setItems(response);
        setIsLoaded(true);
    });
  }, []);

  if (!isLoaded) {
    return (
      <Loading/>
      );
  }

  if (isLoaded) {
    return (
      <View style={{marginVertical: 20, marginBottom: 35}}>
      <ScrollView
          style={{width: '100%'}}
          contentContainerStyle={{ flexGrow: 1, paddingRight: 20 }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
        {map(items, (item, index) => (
        <RenderItem key={index} item={item} />

          ))}
      </ScrollView>
      </View>
      );
  }

}

function RenderItem(props) {

    const navigation = useNavigation();
    const {theme} = usePreferences();

    const onChangeScreen = (id, title) => {
    navigation.navigate('singleoffercategory', {
      id: id,
      title: title
    });    
  };

    const { item } = props;

      return (
    <TouchableOpacity onPress={() => onChangeScreen(item.id, item.title)} activeOpacity={0.9}>
    <View style={{marginLeft:20}}>
        <View style={[Styles.Button2, {backgroundColor: theme === "dark" ? hexToRgba(ColorsApp.PRIMARY, '0.3') : hexToRgba(ColorsApp.PRIMARY, '0.1')}]}>
        <Text style={[Styles.Button2Text, {color: theme === "dark" ? '#fff' : ColorsApp.PRIMARY}]}>{item.title}</Text>
      </View>
      </View>
    </TouchableOpacity>

      )

}