import React from 'react';
import { ScrollView, View, SafeAreaView } from 'react-native';
import Styles from '../config/Styles';
import Languages from '../languages';
import LanguageContext from '../languages/LanguageContext';
import FeaturedPlaces from '../components/FeaturedPlaces';
import PlaceCategories from '../components/PlaceCategories';
import { Text } from 'react-native-paper';
import LatestPlaces from '../components/LatestPlaces';

export default function Places(props) {

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
    <Text style={Styles.titleWidget}>{Strings.ST23}</Text>
    </View>

    <FeaturedPlaces/>

    <View style={Styles.HomePaddingH}>
    <Text style={Styles.titleWidget}>{Strings.ST24}</Text>
    </View>

    <PlaceCategories/>

    <View style={Styles.HomePaddingH}>
    <Text style={Styles.titleWidget}>{Strings.ST56}</Text>
    </View>

    <LatestPlaces/>


    </View>
    </SafeAreaView>
    </ScrollView>

      );

}


