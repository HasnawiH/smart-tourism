import React, { useState, useEffect } from 'react';
import { ScrollView, View, TouchableOpacity, ImageBackground} from 'react-native';
import Styles from '../config/Styles';
import {map} from 'lodash';
import {getFeaturedOffers} from "../config/DataApp";
import { Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import Loading from './InnerLoading';

export default function FeaturedOffers() {

  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  const navigation = useNavigation();

  const onChangeScreen = (id, title) => {
    navigation.navigate('offerdetails', {id, title});
  };

  useEffect(() => {
    getFeaturedOffers().then((response) => {
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

    <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
          {item.currency_oldprice ? <Text style={Styles.card7OldPrice} numberOfLines={1}>{item.currency_oldprice}</Text> : null}
          {item.currency_price ? <Text style={Styles.card7Price} numberOfLines={1}>{item.currency_price}</Text> : null}
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