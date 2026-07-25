import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, ScrollView, Linking, TouchableOpacity } from 'react-native';
import Styles from '../config/Styles';
import Languages from '../languages';
import LanguageContext from '../languages/LanguageContext';
import { getPlaceById, removePlaceBookmark, setPlaceBookmark } from "../config/DataApp";
import AppLoading from '../components/InnerLoading';
import { LinearGradient } from 'expo-linear-gradient';
import { Text, IconButton, List } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import usePreferences from '../hooks/usePreferences';
import ColorsApp from '../config/ColorsApp';
import HeaderGallery from '../components/Gallery';
import { Col, Grid } from 'react-native-easy-grid';
import PlaceRating from '../components/PlaceRating';
import { HTMLStyles } from '../config/HTMLStyles';
import { HTMLStylesDark } from '../config/HTMLStylesDark';
import HTMLView from 'react-native-htmlview';
import { Popup } from 'react-native-map-link';
import PlaceRatingStars from '../components/PlaceRatingStars';
import MapView, { Marker } from 'react-native-maps';

export default function PlaceDetails(props) {

  const { route } = props;
  const { navigation } = props;
  const { id } = route.params;

  const { theme } = usePreferences();

  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setVisible] = useState(false);
  const [isBookmark, setBookmark] = useState('');
  const [item, setItem] = useState([]);

  const contextState = React.useContext(LanguageContext);
  const language = contextState.language;
  const Strings = Languages[language].texts;

  const renderBookMark = async (id) => {
    await AsyncStorage.getItem('placesFav').then(token => {
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

    let data = { id, title, image };
    setBookmark(true);
    setPlaceBookmark(data).then(token => {
      if (token === true) {
        setBookmark(true);
      }
    });

  };

  const removeBookmark = (id) => {
    removePlaceBookmark(id).then(token => {
      if (token === true) {
        setBookmark(false);
      }

    });

  };

  const renderButtonFav = () => {

    if (!isBookmark) {
      return (
        <IconButton icon="bookmark-outline" size={24} onPress={() => saveBookmark(item.id, item.title, item.image)} />
      )
    } else {
      return (
        <IconButton icon="bookmark" iconColor={"#ff0000"} size={24} onPress={() => removeBookmark(item.id)} />
      )
    }
  }

  useEffect(() => {
    getPlaceById(id).then((response) => {

      // !!! - Check data response from func getplacebyid
      // console.log('data getplacebyid!', response);

      setItem(response[0]);
      setIsLoaded(true);

      // !!! - Check data response field latitude and longitude
      // if (item.latitude && item.longitude) {
      //   const mapURL = `https://www.google.com/maps?q=${item.latitude},${item.longitude}`;
      //   console.log('GM URL!', mapURL);
      // }
    });
  }, []);

  const onClickRate = (item) => {
    props.navigation.navigate('submitrating', { item });
  };

  if (!isLoaded) {

    return (

      <View style={{ marginTop: 50 }}>
        <AppLoading />
      </View>

    );

  } else {

    return (

      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>

        <SafeAreaView>

          <View style={{ marginBottom: 70 }}>

            <LinearGradient colors={['rgba(0,0,0,0.8)', 'transparent']} style={Styles.singleOverlay} />

            <HeaderGallery images={item.gallery} />

            <View style={Styles.detailsScreen}>

              <Grid style={{ marginBottom: 15, marginTop: 8 }}>
                <Col size={65} style={{ alignContent: 'center', justifyContent: 'center' }}>
                  <PlaceRatingStars placeId={item.id}></PlaceRatingStars>
                  <Text style={Styles.detailsTitle}>{item.title}</Text>
                  {item.type_title ? <Text style={Styles.detailsSubTitle}>{item.type_title}</Text> : null}
                </Col>
                <Col size={35} style={{ alignContent: 'center', justifyContent: 'center', alignItems: 'center' }}>
                  <View style={{ flexDirection: 'row', alignContent: 'center', justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => onClickRate(item)} activeOpacity={0.9}>
                      <View style={{ backgroundColor: '#fbc531', paddingVertical: 5, paddingHorizontal: 10, borderRadius: 50 }}>
                        <PlaceRating placeId={item.id} numberStyle={{ color: '#000', fontSize: 14, fontWeight: 'bold', marginLeft: 3 }} iconColor={'black'} showIcon={true} showNumber={true} iconSize={20}></PlaceRating>
                      </View>
                    </TouchableOpacity>
                    {renderButtonFav()}
                  </View>
                </Col>
              </Grid>

              <View>
                <Text style={Styles.detailsSectionTitle}>Maps</Text>

                {/* Code Untuk Google Maps */}
                <TouchableOpacity
                  style={{
                    height: 200,
                    width: '100%',
                    borderRadius: 10,
                    overflow: 'hidden',
                    marginTop: 10,
                    marginBottom: 20
                  }}
                  onPress={() => setVisible(true)}
                >
                  <MapView
                    style={{ flex: 1 }}
                    initialRegion={{
                      latitude: parseFloat(item.latitude),
                      longitude: parseFloat(item.longitude),
                      latitudeDelta: 0.005,
                      longitudeDelta: 0.005,
                    }}
                    scrollEnabled={false}
                    zoomEnabled={false}
                  >
                    <Marker
                      coordinate={{
                        latitude: parseFloat(item.latitude),
                        longitude: parseFloat(item.longitude),
                      }}
                      title={item.title}
                    />
                  </MapView>
                </TouchableOpacity>
                <View>

                </View>
              </View>

              <Text style={Styles.detailsSectionTitle}>{Strings.ST61}</Text>

              <HTMLView value={"<div>" + item.description + "</div>"} stylesheet={theme === "dark" ? HTMLStylesDark : HTMLStyles} />

              <List.Item
                title={Strings.ST27}
                descriptionNumberOfLines={2}
                titleStyle={{ fontWeight: 'bold' }}
                description={item.audience}
                style={{ marginHorizontal: 0, paddingHorizontal: 0, paddingBottom: 0 }}
                left={props => <List.Icon {...props} color={ColorsApp.PRIMARY} icon="human-male-female-child" style={{ marginHorizontal: 0 }} />}
              />

              <List.Item
                title={Strings.ST46}
                descriptionNumberOfLines={2}
                titleStyle={{ fontWeight: 'bold' }}
                description={item.address}
                style={{ marginHorizontal: 0, paddingHorizontal: 0, paddingBottom: 0 }}
                onPress={() => setVisible(true)}
                underlayColor="transparent"
                rippleColor="transparent"
                left={props => <List.Icon {...props} color={ColorsApp.PRIMARY} icon="map-marker" style={{ marginHorizontal: 0 }} />}
                right={props => <List.Icon {...props} color={'#eee'} icon="arrow-top-right" />}
              />

              <List.Item
                title={Strings.ST47}
                descriptionNumberOfLines={2}
                titleStyle={{ fontWeight: 'bold' }}
                description={item.hours}
                style={{ marginHorizontal: 0, paddingHorizontal: 0, paddingBottom: 0 }}
                left={props => <List.Icon {...props} color={ColorsApp.PRIMARY} icon="clock-time-nine" style={{ marginHorizontal: 0 }} />}
              />

              <List.Item
                title={Strings.ST50}
                descriptionNumberOfLines={2}
                titleStyle={{ fontWeight: 'bold' }}
                description={item.phone}
                style={{ marginHorizontal: 0, paddingHorizontal: 0, paddingBottom: 0 }}
                onPress={() => Linking.openURL(`tel://${item.phone}`)}
                underlayColor="transparent"
                rippleColor="transparent"
                left={props => <List.Icon {...props} color={ColorsApp.PRIMARY} icon="phone" style={{ marginHorizontal: 0 }} />}
                right={props => <List.Icon {...props} color={'#eee'} icon="arrow-top-right" />}
              />


              <List.Item
                title={Strings.ST51}
                descriptionNumberOfLines={2}
                titleStyle={{ fontWeight: 'bold' }}
                description={item.website}
                style={{ marginHorizontal: 0, paddingHorizontal: 0, paddingBottom: 0 }}
                onPress={() => Linking.openURL(item.website)}
                underlayColor="transparent"
                rippleColor="transparent"
                left={props => <List.Icon {...props} color={ColorsApp.PRIMARY} icon="web" style={{ marginHorizontal: 0 }} />}
                right={props => <List.Icon {...props} color={'#eee'} icon="arrow-top-right" />}
              />

            </View>

          </View>

          <Popup
            isVisible={isVisible}
            onCancelPressed={() => setVisible(false)}
            onAppPressed={() => setVisible(false)}
            onBackButtonPressed={() => setVisible(false)}
            options={{
              latitude: item.latitude,
              longitude: item.longitude,
              title: item.title,
              dialogTitle: Strings.ST62,
              dialogMessage: Strings.ST63,
              cancelText: Strings.ST115,
            }}
          />

        </SafeAreaView>
      </ScrollView>

    );

  }

}


