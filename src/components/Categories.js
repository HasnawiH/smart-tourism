import React, { useState, useEffect } from 'react';
import { View, ImageBackground, TouchableOpacity} from 'react-native';
import Styles from '../config/Styles';
import _, {map} from 'lodash';
import Loading from './InnerLoading';
import {getCategories} from "../config/DataApp";
import { Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Categories() {

  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  const navigation = useNavigation();

  useEffect(() => {
    getCategories().then((response) => {
        setItems(response);
        setIsLoaded(true);
    });
  }, []);

  const onClickItem = (id, title) => {
    navigation.navigate('singlecategory', {id, title});
  };

  const rows = _.chunk(items, 2);

  if (!isLoaded) {
    return (
      <Loading/>
      );
  }

  if (isLoaded) {
    return (
      <View style={{marginVertical: 10, marginBottom: 20, marginHorizontal:15}}>

{rows.map((row, index) => (
    <View key={index} style={Styles.gridView}>
    {row.map((item, index2) => (
    <View style={Styles.gridViewItem} key={index2}>
    <TouchableOpacity activeOpacity={0.9} onPress={() => onClickItem(item.id, item.title)}>
    <ImageBackground source={{uri: item.image}} style={Styles.card5_background} imageStyle={{borderRadius: 8}}>
    <LinearGradient colors={['rgba(0,0,0,0.1)', 'rgba(0,0,0,0.7)']} style={Styles.card5_gradient}>

    <Text numberOfLines={1} style={Styles.card5_title}>{item.title}</Text>
    <View style={Styles.card5_border}></View>

    </LinearGradient>
    </ImageBackground>
    </TouchableOpacity>
    </View>
    ))}
    </View>
    ))}

      </View>
      );
  }

}