import React, { useState, useEffect } from 'react';
import { ScrollView, View, ImageBackground, SafeAreaView, TouchableOpacity } from 'react-native';
import Styles from '../config/Styles';
import Languages from '../languages';
import LanguageContext from '../languages/LanguageContext';
import { searchPlaces } from "../config/DataApp";
import {map, size} from 'lodash';
import AppLoading from '../components/InnerLoading';
import { Searchbar, Text} from 'react-native-paper';
import LoadMoreButton from '../components/LoadMoreButton';
import EmptyResults from '../components/EmptyResults';
import { LinearGradient } from 'expo-linear-gradient';
import PlaceRating from '../components/PlaceRating';
import ColorsApp from '../config/ColorsApp';

export default function SearchPlaces(props) {

  const { route, navigation } = props;
  const { query } = route.params;

  const contextState = React.useContext(LanguageContext);
  const language = contextState.language;
  const Strings = Languages[language].texts;

  const [searchQuery, setSearchQuery] = React.useState(query);

  const [isLoaded, setIsLoaded] = useState(false);
  const [page, setPage] = useState(1);
  const [items, setItems] = useState([]);
  const [showButton, setshowButton] = useState(true);
  const [loading, setLoading] = useState(false);

  const onChangeScreen = (id, title) => {
    navigation.navigate('placedetails', {id, title});
  };

  const loadMore = () => {

    setLoading(true);
    setPage(page+1);

    searchPlaces(searchQuery, page+1).then((response) => {

      if (!items) {
        setItems(response);
        setLoading(false);
      }else{
        setItems([...items, ...response]);
        setLoading(false);
      }

      if (response.length <= 0) {
        setshowButton(false);
      }

      setIsLoaded(true);

    });

  };

  const renderButton = () => {

    return (
      <LoadMoreButton
      Indicator={loading}
      showButton={showButton}
      Items={items}
      Num={5}
      Click={() => loadMore()}/>
      )
  }

  useEffect(() => {

    if(size(searchQuery) >= 3){

      searchPlaces(searchQuery).then((response) => {
        setItems(response);
        setIsLoaded(true);
    })

    }else{
      setIsLoaded(true);
    }

  }, [searchQuery]);

  if (!isLoaded) {

    return (
   
        <AppLoading/>
   
         );
   
      }

 return (

  <ScrollView
  showsHorizontalScrollIndicator={false}
  showsVerticalScrollIndicator={false}>
    
<SafeAreaView>

    <View style={Styles.ContentScreen}>

    <Searchbar
    placeholder={Strings.ST22}
    iconColor={ColorsApp.PRIMARY}
    style={{marginBottom:15, marginTop:5, marginHorizontal:12}}
    value={searchQuery}
    onChangeText={text => setSearchQuery(text)}
    />

    {map(items, (item, i) => (
    
    <TouchableOpacity key={i} activeOpacity={0.9} onPress={() => onChangeScreen(item.id, item.title)}>
    <ImageBackground source={{uri: item.image}} style={Styles.card3_background} imageStyle={{borderRadius: 8}}>
      <LinearGradient colors={['rgba(0,0,0,0.1)', 'rgba(0,0,0,0.7)']} style={Styles.card3_gradient}>

        <Text numberOfLines={1} style={Styles.card3_category}>{item.category_title}</Text>
        <Text numberOfLines={2} style={Styles.card3_title}>{item.title}</Text>

        <View style={{flexDirection:'row'}}>
          <PlaceRating placeId={item.id} showNumber={true} showIcon={true} iconSize={16} numberStyle={{color:'#ffeb3b', fontSize: 14, marginLeft:3}}></PlaceRating>
        </View>

      </LinearGradient>
    </ImageBackground>
    </TouchableOpacity>

          ))}

    <EmptyResults data={items}/>

    {renderButton()}

    </View>
    </SafeAreaView>
    </ScrollView>

      );

}



