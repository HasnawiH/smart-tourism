import React from 'react';
import { View, ScrollView, SafeAreaView } from 'react-native';
import Styles from '../config/Styles';
import Languages from '../languages';
import LanguageContext from '../languages/LanguageContext';
import { Searchbar, Text } from 'react-native-paper';
import ColorsApp from '../config/ColorsApp';
import { LinearGradient } from 'expo-linear-gradient';
import hexToRgba from 'hex-to-rgba';
import usePreferences from '../hooks/usePreferences';
import PlaceCategories from '../components/PlaceCategories';
import FeaturedOffers from '../components/FeaturedOffers';
import OffersCategories from '../components/OffersCategories';
import LatestNews from '../components/LatestNews';
import FeaturedPlaces from '../components/FeaturedPlaces';

export default function Home(props) {

  const contextState = React.useContext(LanguageContext);
  const language = contextState.language;
  const Strings = Languages[language].texts;
  const {theme} = usePreferences();

  const [searchQuery, setSearchQuery] = React.useState('');

  const onSubmitEditing = (query) => {
    props.navigation.navigate('search', {query});
  };

 return (
  <ScrollView
  showsHorizontalScrollIndicator={false}
  showsVerticalScrollIndicator={false}>
    
  <SafeAreaView>

  <View style={Styles.HomeScreen}>

  <LinearGradient colors={[hexToRgba(ColorsApp.PRIMARY, '1'), theme === "dark" ? 'transparent' : '#fff']} style={Styles.headerOverlay}>
    <Text style={Styles.headerTitle}>{Strings.ST1}</Text>
    <Text style={Styles.headerSubTitle}>{Strings.ST21}</Text>
    <Searchbar
    placeholder={Strings.ST22}
    iconColor={ColorsApp.PRIMARY}
    style={Styles.homeSearchBar}
    value={searchQuery}
    onChangeText={text => setSearchQuery(text)}
    onSubmitEditing={() => onSubmitEditing(searchQuery)}
    />
  </LinearGradient>

    <View style={Styles.HomePaddingH}>
    <Text style={Styles.titleWidget}>{Strings.ST23}</Text>
    </View>

    <FeaturedPlaces/>

    <View style={Styles.HomePaddingH}>
    <Text style={Styles.titleWidget}>{Strings.ST24}</Text>
    </View>

    <PlaceCategories/>

    <View style={Styles.HomePaddingH}>
    <Text style={Styles.titleWidget}>{Strings.ST25}</Text>
    </View>

    <FeaturedOffers/>

    <View style={Styles.HomePaddingH}>
    <Text style={Styles.titleWidget}>{Strings.ST28}</Text>
    </View>

    <OffersCategories/>

    <View style={Styles.HomePaddingH}>
    <Text style={Styles.titleWidget}>{Strings.ST29}</Text>
    </View>

    <LatestNews/>

  </View>
  </SafeAreaView>
  </ScrollView>

      );

}

