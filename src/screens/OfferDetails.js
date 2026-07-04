import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, ScrollView, Linking, TouchableOpacity, ImageBackground  } from 'react-native';
import Styles from '../config/Styles';
import Languages from '../languages';
import LanguageContext from '../languages/LanguageContext';
import { getOfferById, removeOfferBookmark, setOfferBookmark } from "../config/DataApp";
import AppLoading from '../components/InnerLoading';
import { LinearGradient } from 'expo-linear-gradient';
import { Text, IconButton, List, Icon, Portal, Dialog, Divider, Badge } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import usePreferences from '../hooks/usePreferences';
import ColorsApp from '../config/ColorsApp';
import { Col, Grid } from 'react-native-easy-grid';
import { HTMLStyles } from '../config/HTMLStyles';
import { HTMLStylesDark } from '../config/HTMLStylesDark';
import HTMLView from 'react-native-htmlview';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function OfferDetails(props) {

  const { route } = props;
  const { navigation } = props;
  const { id } = route.params;

  const {theme} = usePreferences();
  
  const [isLoaded, setIsLoaded] = useState(false);
  const [visible, setVisible] = useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const [isBookmark, setBookmark] = useState('');
  const [item, setItem] = useState([]);

  const contextState = React.useContext(LanguageContext);
  const language = contextState.language;
  const Strings = Languages[language].texts;

  const renderBookMark = async (id) => {
    await AsyncStorage.getItem('offersFav').then(token => {
      const res = JSON.parse(token);
 
      if (res !== null) {
       let data = res.find(value => value.id === id);
 
       if (data !== null) {
         let data = res.find(value => value.id === id);
         return data == null ? setBookmark(false) : setBookmark(true);
       }
 
     } else {
       return false;
     }
 
   });
  };

  useEffect(() => {
    renderBookMark(id);
  }, []);

  const saveBookmark = (id, title, image) => {

    let data = {id, title, image};
    setBookmark(true);
    setOfferBookmark(data).then(token => {
      if (token === true) {
        setBookmark(true);
      }
    });
    
  };
  
  const removeBookmark = (id) => {
    removeOfferBookmark(id).then(token => {
     if (token === true) {
       setBookmark(false);
     }
     
   });
   
   };

  const renderButtonFav = () => {

    if (!isBookmark) {
        return (
          <IconButton icon="bookmark-outline" containerColor={'#fff'} style={{marginRight:15}} iconColor={'#000'} size={24} onPress={() => saveBookmark(item.id, item.title, item.image)}/>
          )
      }else{
        return (
          <IconButton icon="bookmark" containerColor={'#fff'} iconColor={'#ff0000'} style={{marginRight:15}} size={24} onPress={() => removeBookmark(item.id)}/>
          )
        }
      }

  useEffect(() => {
    getOfferById(id).then((response) => {
        setItem(response[0]);
        setIsLoaded(true);
    });
  }, []);

  useEffect(() => {

    props.navigation.setOptions({
      headerRight: () => renderButtonFav()
    });

  }, [isBookmark, item]);

  const onClickBuy = (method, offerid) => {
    setVisible(false);
    props.navigation.navigate('payment', {method: method, offerid: offerid});
  };

  const roundToPrecision = (num, precision) => {
    let remainder = num % precision;
    if (remainder == 0) {
      return num;
    }
    else if (Math.floor(remainder / precision) < 0.5) {
      return num - remainder;
    }
    else {
      return num + (precision - remainder);
    }
  }

  const calculatePercentage = (num1, num2) => {
    let difference = num1 - num2;
    let percentage = (difference / num1) * 100;
    let roundedPercentage = percentage.toFixed(0);
    let result = Math.ceil(roundedPercentage / 5) * 5;
    return `${Strings.ST92} ${result}% ${Strings.ST93}`;
  }

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
      <Text style={{textTransform:'uppercase', color: ColorsApp.PRIMARY, fontWeight:'bold', fontSize:14, marginBottom:5}}>{calculatePercentage(item.oldprice, item.price)}</Text>
        <Text style={Styles.detailsTitle}>{item.title}</Text>
        {item.category_title ? <Text style={Styles.detailsSubTitle}>{item.category_title}</Text>: null}
        </Col>
      <Col size={35} style={{alignContent:'center', justifyContent:'center', alignItems:'flex-end'}}>
        <Text style={Styles.detailsPrice}>{item.currency_price}</Text>
        {item.currency_oldprice ? <Text style={Styles.detailsOldPrice}>{item.currency_oldprice}</Text> : null}
      </Col>
    </Grid>

    <Text style={Styles.detailsSectionTitle}>{Strings.ST61}</Text>
    <HTMLView value={"<div>"+ item.description +"</div>"} stylesheet={theme === "dark" ? HTMLStylesDark : HTMLStyles}/>

    <Text style={Styles.detailsSectionTitle}>{Strings.ST57}</Text>
    {item.terms ? <HTMLView value={"<div>"+ item.terms +"</div>"} stylesheet={theme === "dark" ? HTMLStylesDark : HTMLStyles}/> : null}

    </View>

    </View>

    </SafeAreaView>
    </ScrollView>

    <Portal>
      <Dialog visible={visible} onDismiss={hideModal} style={{alignItems:'center', justifyContent:'center', paddingVertical:20}}>
        <Text style={{fontSize:16, fontWeight:'bold', marginBottom:5, textTransform:'uppercase'}}>{Strings.ST59}</Text>
        <Text style={{marginBottom:20}}>{Strings.ST64}</Text>

<View>
  <List.Item
    title={Strings.ST72}
    left={props => <Ionicons {...props} size={32} name="card" />}
    onPress={() => onClickBuy('stripe', item.id)}
    underlayColor="transparent"
    rippleColor="transparent"
  />

  <Divider></Divider>

<List.Item
    title={Strings.ST70}
    left={props => <Ionicons {...props} size={32} name="logo-paypal" />}
    onPress={() => onClickBuy('paypal', item.id)}
    underlayColor="transparent"
    rippleColor="transparent"
  />
</View>

    </Dialog>
    </Portal>

    {/*<TouchableOpacity activeOpacity={0.9} onPress={showModal}>
      <View style={Styles.detailsBuyNow}>
        <Icon source={"cart"} color='white' size={24}></Icon>
        <Text style={Styles.detailsBuyNowLabel}>{Strings.ST58}</Text>
      </View>
    </TouchableOpacity> */}

      </View>

      );

}

}


