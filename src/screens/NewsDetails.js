import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, ScrollView, ImageBackground  } from 'react-native';
import Styles from '../config/Styles';
import Languages from '../languages';
import LanguageContext from '../languages/LanguageContext';
import { getNewsById } from "../config/DataApp";
import AppLoading from '../components/InnerLoading';
import { LinearGradient } from 'expo-linear-gradient';
import { Divider, Icon, Text } from 'react-native-paper';
import usePreferences from '../hooks/usePreferences';
import ColorsApp from '../config/ColorsApp';
import { Col, Grid } from 'react-native-easy-grid';
import { HTMLStyles } from '../config/HTMLStyles';
import { HTMLStylesDark } from '../config/HTMLStylesDark';
import HTMLView from 'react-native-htmlview';
import moment from 'moment';

export default function NewsDetails(props) {

  const { route } = props;
  const { navigation } = props;
  const { id } = route.params;

  const {theme} = usePreferences();
  
  const [isLoaded, setIsLoaded] = useState(false);

  const [item, setItem] = useState([]);

  const contextState = React.useContext(LanguageContext);
  const language = contextState.language;
  const Strings = Languages[language].texts;

  useEffect(() => {
    getNewsById(id).then((response) => {
        setItem(response[0]);
        setIsLoaded(true);
    });
  }, []);

  if (!isLoaded) {

    return (
   
        <View style={{marginTop:50}}>
          <AppLoading/>
          </View>
   
         );
   
      }else{

 return (

  <View style={{flex: 1}}>

  <ScrollView
  showsHorizontalScrollIndicator={false}
  showsVerticalScrollIndicator={false}>
    
<SafeAreaView>

    <View style={{marginBottom:20}}>

    <ImageBackground source={{uri: item.image}} style={Styles.Header2Image} resizeMode={'cover'}>
    <LinearGradient colors={['rgba(0,0,0,0.3)', 'rgba(0,0,0,0.4)']} style={Styles.Header2Gradient}>
    </LinearGradient>
    </ImageBackground>

    <View style={Styles.detailsScreen}>

    <Grid style={{marginBottom:15, marginTop:8}}>
      <Col size={65} style={{alignContent:'center', justifyContent:'center'}}>
        <Text style={Styles.detailsTitle}>{item.title}</Text>
        {item.category_title ? <Text style={Styles.detailsSubTitle}>{item.category_title}</Text>: null}
        </Col>
      <Col size={35} style={{alignContent:'center', justifyContent:'center', alignItems:'flex-end'}}>
        <Text style={Styles.detailsPrice}>{item.currency_price}</Text>
        {item.currency_oldprice ? <Text style={Styles.detailsOldPrice}>{item.currency_oldprice}</Text> : null}
      </Col>
    </Grid>

    <HTMLView value={"<div>"+ item.description +"</div>"} stylesheet={theme === "dark" ? HTMLStylesDark : HTMLStyles}/>
    <Divider></Divider>
    <View style={{flexDirection:'row', alignContent:'center', alignItems:'center', opacity:0.5}}>
      <Icon source={'calendar'} size={18}></Icon>
    <Text style={{marginHorizontal:5, marginVertical:10}}>{moment(item.news_date).locale("en").format("DD-MM-YYYY")}</Text>
    </View>
    </View>

    </View>

    </SafeAreaView>
    </ScrollView>
      </View>

      );

}

}


