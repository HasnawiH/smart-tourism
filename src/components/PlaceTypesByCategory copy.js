import React, { useState, useEffect } from 'react';
import { ScrollView, View} from 'react-native';
import {map} from 'lodash';
import Loading from './InnerLoading';
import {getPlaceTypesByCategory} from "../config/DataApp";
import { Avatar, List } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function PlaceTypesByCategory(props) {

const {categoryId} = props;

const [isLoaded, setIsLoaded] = useState(false);
const [items, setItems] = useState([]);

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
      <View style={{marginBottom: 20, marginTop:15}}>
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
    navigation.navigate('singleplacetype', {id: id, title: title});    
  };

    const { item } = props;

      return (
    <View style={{marginLeft:8}}>

<List.Item
    title={item.title}
    onPress={() => onChangeScreen(item.id, item.title)}
    underlayColor="transparent"
    rippleColor="transparent"
    left={props => <Avatar.Image {...props} size={36} source={{ uri: item.image }} style={{marginRight:0}} />}
  />


      </View>

      )

}