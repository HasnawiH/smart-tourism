import React, { useState, useEffect } from 'react';
import { ScrollView, View} from 'react-native';
import {map} from 'lodash';
import Loading from './InnerLoading';
import {getPlaceTypesByCategory} from "../config/DataApp";
import Languages from '../languages';
import LanguageContext from '../languages/LanguageContext';
import { Avatar, Chip } from 'react-native-paper';

export default function PlaceTypesByCategory(props) {

const contextState = React.useContext(LanguageContext);
const language = contextState.language;
const Strings = Languages[language].texts;

const {categoryId, setType, selectedType} = props;

const [isLoaded, setIsLoaded] = useState(false);
const [items, setItems] = useState([]);

const selectType = (text) => {
  setType(text);
}

  useEffect(() => {
    getPlaceTypesByCategory(categoryId).then((response) => {
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
      <View style={{marginBottom: 15, marginTop:15}}>
      <ScrollView
          style={{width: '100%'}}
          contentContainerStyle={{ flexGrow: 1, paddingRight: 20, paddingLeft:10 }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}>

<Chip
        selected={selectedType ? false : true}
        onPress={() => selectType('')}
        >{Strings.ST94}</Chip>

        {map(items, (item, index) => (
        <View style={{marginLeft:10}} key={index}>
        
        <Chip
        selected={item.id === selectedType}
        avatar={<Avatar.Image
        size={24}
        source={{ uri: item.image }} />}
        onPress={() => selectType(item.id)}
        >{item.title}</Chip>

        
        </View>

          ))}
      </ScrollView>
      </View>
      );
  }

}