import React, { useState } from 'react';
import { View, ScrollView, Alert} from 'react-native';
import { TextInput, Button, Text, Icon, Avatar, Divider, ActivityIndicator } from 'react-native-paper';
import Languages from '../languages';
import LanguageContext from '../languages/LanguageContext';
import usePreferences from '../hooks/usePreferences';
import { getAuth } from 'firebase/auth';
import { getDatabase, ref, set} from "firebase/database";
import moment from 'moment/moment';
import _ from 'lodash';
import StarRating from '../components/StarRating';
import ColorsApp from '../config/ColorsApp';

const auth = getAuth();

export default function SubmitRating(props) {

  const { route } = props;
  const { navigation } = props;
  const { item } = route.params;

  const {theme} = usePreferences();

  const contextState = React.useContext(LanguageContext);
  const language = contextState.language;
  const Strings = Languages[language].texts;

  const [loading, setLoading] = useState(false);
  const [rating, setRating] = useState(0);

  const goBack = () => {
    props.navigation.goBack();
  };

  const updateRating = (newRating) => {
    setRating(newRating);
  }

  const onSubmitRating = () => {

    setLoading(true);

    const db = getDatabase();
    const userId = auth.currentUser.uid;

    set(ref(db, 'ratings/places/' + item.id +'/'+ userId), {
      id: item.id,
      comment: '',
      rating: rating,
      date: moment().toISOString(true)
    }).then(() => {

      setLoading(false);

      Alert.alert(
        Strings.ST52,
        Strings.ST53,
        [
          { text: Strings.ST40, onPress: () => props.navigation.goBack() },
        ],
        { cancelable: false },
      );
      
    }).catch((error) => {
      setLoading(false);
      //console.log(error);
    });
    
  };

  return (
    <ScrollView contentContainerStyle={{flex: 1, justifyContent:'center'}} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>

    <View style={{marginHorizontal: 20, justifyContent:'center', alignItems:'center'}}>

    <Avatar.Image size={100} source={{uri: item.image}} style={{marginBottom:10}} />
    <Text style={{fontSize:16, textAlign:'center', marginBottom:25}}>{item.title}</Text>

    <Text style={{fontSize:20, fontWeight:'bold', textAlign:'center', marginBottom:5}}>{Strings.ST114}</Text>
    <Text style={{fontSize:16, textAlign:'center'}}>{Strings.ST116}</Text>

    <StarRating setValue={rating} setRating={updateRating}></StarRating>

    {!loading ? <Button
    uppercase={false}
    style={{elevation:0, marginTop: 15, borderRadius:60}}
    labelStyle={{letterSpacing:0, fontSize:16, fontWeight: 'bold'}}
    contentStyle={{paddingVertical: 7, paddingHorizontal:15, elevation: 0}}
    mode="contained"
    onPress={()=> onSubmitRating()}
    >
    {Strings.ST86}
    </Button> : <ActivityIndicator animating={true} color={ColorsApp.PRIMARY} style={{marginTop:15}} />}

    </View>
    </ScrollView>

    );
}
