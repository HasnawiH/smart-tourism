import React, { useState, useEffect } from 'react';
import { ScrollView, View, ImageBackground, TouchableOpacity } from 'react-native';
import Styles from '../config/Styles';
import Languages from '../languages';
import LanguageContext from '../languages/LanguageContext';
import { getPlaceByCategory, getPlaceByType } from "../config/DataApp";
import {map} from 'lodash';
import AppLoading from '../components/InnerLoading';
import { Card, Text } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import LoadMoreButton from '../components/LoadMoreButton';
import NoContentFound from '../components/NoContentFound';
import PlaceTypesByCategory from '../components/PlaceTypesByCategory';
import PlaceRating from '../components/PlaceRating';

export default function SinglePlaceCategory(props) {

  const contextState = React.useContext(LanguageContext);
  const language = contextState.language;
  const Strings = Languages[language].texts;

  const { route } = props;
  const { navigation } = props;
  const { id, title } = route.params;
  const [page, setPage] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([]);
  const [showButton, setshowButton] = useState(true);
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState('');

  const selectType = (text) => {
    setType(text);
    setPage(1);
    setshowButton(true);
  }

  const onChangeScreen = (id, title) => {
    navigation.navigate('placedetails', {id, title});
  };

useEffect(() => {

  props.navigation.setOptions({
    title:title,
  });

}, []);

  useEffect(() => {

    if(type){

      getPlaceByType(type).then(response => {
          setData(response);
          setIsLoaded(true);
      })
  
  }else{
  
      getPlaceByCategory(id).then(response => {
          setData(response);
          setIsLoaded(true);
      })
  
  }

  }, [type]);

  const loadMore = () => {

    setLoading(true);
    setPage(page+1);


    if(type){

      getPlaceByType(type, page+1).then((response) => {

        if (!data) {
          setData(response);
          setLoading(false);
        }else{
          setData([...data, ...response]);
          setLoading(false);
        }
  
        if (response.length <= 0) {
          setshowButton(false);
        }
  
        setIsLoaded(true);
  
      });
  
  }else{
  
    getPlaceByCategory(id, page+1).then((response) => {

      if (!data) {
        setData(response);
        setLoading(false);
      }else{
        setData([...data, ...response]);
        setLoading(false);
      }

      if (response.length <= 0) {
        setshowButton(false);
      }

      setIsLoaded(true);

    });
  
  }

  };

  const renderButton = () => {

    return (
      <LoadMoreButton
      Indicator={loading}
      showButton={showButton}
      Items={data}
      Num={10}
      Click={() => loadMore()}/>
      )
  }

  if (isLoaded) {

   return (
    <ScrollView
    showsHorizontalScrollIndicator={false}
    showsVerticalScrollIndicator={false}
    >

<Card style={{borderRadius:0}}>
<PlaceTypesByCategory categoryId={id} selectedType={type} setType={selectType}></PlaceTypesByCategory>
</Card>

<View style={Styles.ContentScreen}>

        {map(data, (item, i) => (

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

        {renderButton()}

    <NoContentFound data={data}/>

    <View style={{height: 50}}></View>

    </View>

    </ScrollView>

    );

 }else{
   return (
     <AppLoading/>
     );
 }

}


