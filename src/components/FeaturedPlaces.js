import React, { useState, useEffect } from 'react';
import { ScrollView, View, ImageBackground, TouchableOpacity} from 'react-native';
import Styles from '../config/Styles';
import {map} from 'lodash';
import Loading from './InnerLoading';
import { getFeaturedPlaces } from "../config/DataApp";
import { Text} from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/core';
import Languages from '../languages';
import LanguageContext from '../languages/LanguageContext';
import PlaceRating from './PlaceRating';

export default function FeaturedPlaces() {

  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  const navigation = useNavigation();
  
  const contextState = React.useContext(LanguageContext);
	const language = contextState.language;
	const Strings = Languages[language].texts;

  const onChangeScreen = (id, title) => {
    navigation.navigate('placedetails', {id, title});
  };

  useEffect(() => {
    getFeaturedPlaces().then((response) => {
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
      <View style={{marginTop: 20}}>

      <ScrollView
          style={{width: '100%'}}
          contentContainerStyle={{ flexGrow: 1, paddingRight: 20, /*flexDirection: 'row-reverse'*/ }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
        {map(items, (item, i) => (
    
    <TouchableOpacity key={i} activeOpacity={0.9} onPress={() => onChangeScreen(item.id, item.title)}>
        <ImageBackground source={{uri: item.image}} style={Styles.card1_background} imageStyle={{borderRadius: 8}}>
          <LinearGradient colors={['rgba(0,0,0,0.1)', 'rgba(0,0,0,0.7)']} style={Styles.card1_gradient}>

            <View style={[Styles.card3_viewicon, {paddingLeft:5, paddingVertical:6}]}>
            <Text style={[Styles.card3_icon, {paddingLeft:0}]}>{item.category_title}</Text>
            </View>

            <Text numberOfLines={2} style={Styles.card1_title}>{item.title}</Text>

            <View style={{flexDirection:'row'}}>
              <PlaceRating placeId={item.id} showNumber={true} showIcon={true} iconSize={16} numberStyle={{color:'#ffeb3b', fontSize: 14, marginLeft:3}}></PlaceRating>
            </View>

          </LinearGradient>
        </ImageBackground>
        </TouchableOpacity>

          ))}
      </ScrollView>
      </View>
      );
  }

}