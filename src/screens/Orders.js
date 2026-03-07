import React, { useState, useEffect } from 'react';
import { ScrollView, View, SafeAreaView, I18nManager, TouchableOpacity } from 'react-native';
import Styles from '../config/Styles';
import Languages from '../languages';
import LanguageContext from '../languages/LanguageContext';
import { getOrders } from "../config/DataApp";
import AppLoading from '../components/InnerLoading';
import { List, Avatar, Card, Title, Paragraph, Icon, Text, Button, IconButton, Chip } from 'react-native-paper';
import {map} from 'lodash';
import ColorsApp from '../config/ColorsApp';
import { getAuth } from 'firebase/auth';
import NoContentFound from '../components/NoContentFound';
import { Col, Grid } from 'react-native-easy-grid';
import moment from 'moment';

const auth = getAuth();
export default function Orders(props) {

  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  const contextState = React.useContext(LanguageContext);
  const language = contextState.language;
  const Strings = Languages[language].texts;

  const rightIcon = I18nManager.isRTL ? "chevron-left" : "chevron-right";

  const onClickItem = (item) => {
    props.navigation.navigate('orderdetails', {item});
  };

const user = auth.currentUser; 

  useEffect(() => {

    if (user) {  //4. Check if user is signed in
      user.getIdToken().then((idToken) => {  //5. Get the user's ID token
        getOrders(idToken).then((response) => {
          setItems(response);
          setIsLoaded(true);
      });
      }).catch((error) => {  //7. Handle error
        //console.log(error);
        setIsLoaded(true);
      });
    } else {
      setIsLoaded(true);
      //console.log("No user is signed in.");  //8. If no user is signed in, print message
    }

  }, []);

  if (!isLoaded) {

    return (
   
        <AppLoading/>
   
         );
   
      }else{

 return (

  <ScrollView
  showsHorizontalScrollIndicator={false}
  showsVerticalScrollIndicator={false}>
    
<SafeAreaView>

    <View style={Styles.ContentScreen}>

        {map(items, (item, i) => (
            <List.Item
            key={i}
            title={Strings.ST80+' '+item.order_id}
            description={moment(item.order_date).locale("en").format("DD-MM-YYYY")}
            descriptionStyle={{fontWeight:'bold', textTransform:'uppercase'}}
            onPress={() => onClickItem(item)}
            titleStyle={{marginBottom:2}}
            underlayColor="transparent"
            rippleColor="transparent"
            left={props => <Avatar.Image {...props} source={{uri: item.offer_image}} />}
            right={props => <List.Icon {...props} icon={rightIcon} />}
            />

        ))}

<NoContentFound data={items}/>

    </View>
    </SafeAreaView>
    </ScrollView>

      );

}

}


