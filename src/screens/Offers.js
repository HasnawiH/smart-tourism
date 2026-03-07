import React from 'react';
import { ScrollView, View, SafeAreaView } from 'react-native';
import Styles from '../config/Styles';
import Languages from '../languages';
import LanguageContext from '../languages/LanguageContext';
import FeaturedOffers from '../components/FeaturedOffers';
import { Text } from 'react-native-paper';
import OffersCategories from '../components/OffersCategories';
import LatestOffers from '../components/LatestOffers';

export default function Offers(props) {

  const contextState = React.useContext(LanguageContext);
  const language = contextState.language;
  const Strings = Languages[language].texts;
  
  const onChangeScreen = (screen) => {
    props.navigation.navigate(screen);
  };

 return (

  <ScrollView
  showsHorizontalScrollIndicator={false}
  showsVerticalScrollIndicator={false}
>
    
<SafeAreaView>

    <View style={[Styles.HomeScreen, {marginTop:15}]}>

    <View style={Styles.HomePaddingH}>
    <Text style={Styles.titleWidget}>{Strings.ST25}</Text>
    </View>

    <FeaturedOffers/>

    <View style={Styles.HomePaddingH}>
    <Text style={Styles.titleWidget}>{Strings.ST28}</Text>
    </View>

    <OffersCategories/>

    <View style={Styles.HomePaddingH}>
    <Text style={Styles.titleWidget}>{Strings.ST91}</Text>
    </View>

    <LatestOffers/>


    </View>
    </SafeAreaView>
    </ScrollView>

      );

}


