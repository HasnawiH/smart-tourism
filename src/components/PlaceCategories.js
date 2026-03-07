import React, { useState, useEffect } from 'react';
import { ScrollView, View, ImageBackground, TouchableOpacity} from 'react-native';
import Styles from '../config/Styles';
import {map} from 'lodash';
import Loading from './InnerLoading';
import {getPlaceCategories} from "../config/DataApp";
import { Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import hexToRgba from 'hex-to-rgba';
import ColorsApp from '../config/ColorsApp';

export default function PlaceCategories() {

  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    getPlaceCategories().then((response) => {
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
      <View style={{marginVertical: 10, marginBottom: 25, marginTop:22}}>
      <ScrollView
          style={{width: '100%'}}
          contentContainerStyle={{ flexGrow: 1, paddingRight: 20 }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
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

    const onChangeScreen = (id, title) => {
    navigation.navigate('singleplacecategory', {id: id, title: title});    
  };

    const { item } = props;

      return (
    <View style={Styles.card9View}>
    <TouchableOpacity onPress={() => onChangeScreen(item.id, item.title)} activeOpacity={0.9}>

    <ImageBackground source={{uri: item.image}} style={Styles.card9Background} imageStyle={{borderRadius: 6}}>
        <LinearGradient colors={[hexToRgba(ColorsApp.PRIMARY, '0.5'), hexToRgba(ColorsApp.PRIMARY, '1')]} style={Styles.card9Gradient}>
            <Text style={Styles.card9Title} numberOfLines={2}>{item.title}</Text>
        </LinearGradient>
    </ImageBackground>

    </TouchableOpacity>
      </View>

      )

}