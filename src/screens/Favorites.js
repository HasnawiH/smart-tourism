import React from 'react';
import Languages from '../languages';
import LanguageContext from '../languages/LanguageContext';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ColorsApp from '../config/ColorsApp';
import usePreferences from '../hooks/usePreferences';
import { View } from 'react-native-animatable';
import PlacesFav from './PlacesFav';
import OffersFav from './OffersFav';

const Tab = createMaterialTopTabNavigator();

export default function Favorites(props) {

  const contextState = React.useContext(LanguageContext);
  const language = contextState.language;
  const Strings = Languages[language].texts;
  const {theme} = usePreferences();
  
 return (

  <View style={{flex: 1}}>
    
    <Tab.Navigator 
    screenOptions={{
      "tabBarLabelStyle": {
        "fontSize": 16,
        "textTransform": "capitalize",
        "fontWeight": "bold",
        "color": "#fff",
      },
      "tabBarIndicatorStyle": {
        "backgroundColor": '#fff',
        "padding": 2
      },
      "tabBarStyle": {
        "backgroundColor": ColorsApp.PRIMARY
      }
      }}
    >
      <Tab.Screen name={Strings.ST2} component={PlacesFav} />
      <Tab.Screen name={Strings.ST5} component={OffersFav} />
    </Tab.Navigator>


    </View>

      );

}


