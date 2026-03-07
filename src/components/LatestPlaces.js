import React, { useState, useEffect } from 'react';
import { I18nManager, View, TouchableOpacity} from 'react-native';
import {getLatestPlaces} from "../config/DataApp";
import { map } from "lodash";
import { Avatar, List } from 'react-native-paper';
import Languages from '../languages';
import LanguageContext from '../languages/LanguageContext';
import Loading from './InnerLoading';
import { useNavigation } from '@react-navigation/native';
import ColorsApp from '../config/ColorsApp';
import PlaceRating from './PlaceRating';

export default function LatestPlaces() {

  const [items, setItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const rightIcon = I18nManager.isRTL ? "chevron-left" : "chevron-right";

  const contextState = React.useContext(LanguageContext);
  const language = contextState.language;
  const Strings = Languages[language].texts;

  const navigation = useNavigation();
  
  const onChangeScreen = (id) => {
    navigation.navigate('placedetails', {id});
  };
  
  useEffect(() => {
    getLatestPlaces().then((response) => {
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

    return(

      <View style={{width: '100%', marginTop: 10, marginLeft:20}}>

        {map(items, (item, i) => (

<TouchableOpacity key={i} activeOpacity={0.9} onPress={() => onChangeScreen(item.id)}>
<List.Item
        key={i}
        title={item.title}
        titleStyle={{fontWeight: 'bold', fontSize:15, marginBottom: 3, marginTop:-5}}
        activeOpacity={0.9}
        titleNumberOfLines={2}
        underlayColor="transparent"
        rippleColor="transparent"
        description={props => 
          <View {...props} style={{flexDirection:'row', alignItems:'center'}}>
          <PlaceRating placeId={item.id} showNumber={true} showIcon={true} iconSize={16} numberStyle={{opacity:0.5, fontSize: 14, marginLeft:3}}></PlaceRating>
          </View>
        }
        left={props => <Avatar.Image size={70} style={{marginRight: 10}} source={{uri: item.image}} />}
        right={props => <List.Icon {...props} icon={rightIcon}
        style={{alignSelf: 'center', opacity: 0.3, marginBottom:30}}/>}
      />
      </TouchableOpacity>

          ))}

      </View>

      );

  }

}