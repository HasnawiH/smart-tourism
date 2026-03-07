import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, ScrollView } from 'react-native';
import Styles from '../config/Styles';
import Languages from '../languages';
import LanguageContext from '../languages/LanguageContext';
import { Text, IconButton, List, Card, Button, DataTable, Avatar, Divider } from 'react-native-paper';
import usePreferences from '../hooks/usePreferences';
import ColorsApp from '../config/ColorsApp';
import { Col, Grid } from 'react-native-easy-grid';
import moment from 'moment';

export default function OrderDetails(props) {

  const { route } = props;
  const { navigation } = props;
  const { item } = route.params;

  const {theme} = usePreferences();

  const contextState = React.useContext(LanguageContext);
  const language = contextState.language;
  const Strings = Languages[language].texts;

  const onChangeScreen = (id, title) => {
    navigation.navigate('offerdetails', {id, title});
  };

 return (

  <ScrollView
  showsHorizontalScrollIndicator={false}
  showsVerticalScrollIndicator={false}>
    
<SafeAreaView>

    <View style={{marginVertical:15, marginHorizontal:20}}>

    <View style={{marginBottom:10}}>

    <Grid>
    <Col style={{justifyContent:'center', alignItems:'flex-start'}}>

    <List.Item
    title={Strings.ST80+' '+item.order_id}
    titleStyle={{fontSize:16, fontWeight:'bold'}}
    description={moment(item.order_date).locale("en").format("DD-MM-YYYY")}
    />

    </Col>

    <Col style={{justifyContent:'center', alignItems:'flex-end', marginHorizontal:15}}>
    <Button uppercase={false} textColor={'#00928c'} buttonColor={'#e8fdf2'} labelStyle={{letterSpacing:0, textTransform:'uppercase', fontSize:12}}>{item.order_status}</Button>
    </Col>
    </Grid>

    </View>

    <Card style={{marginBottom:10}}>
    <List.Item
    title={Strings.ST82}
    titleStyle={{fontSize:16, fontWeight:'bold', marginTop:0}}
    left={props => <IconButton {...props} icon="account-outline" size={28} mode='contained' containerColor={theme === "dark" ? "transparent" : '#f4f4f4'} style={{marginHorizontal:5}} />}
    description={props =>
      <>
        <View {...props} style={{flexDirection:'row', height:'auto', alignItems:'center', marginVertical:5}}>
        <Text style={{opacity:0.5}}>{Strings.ST81}</Text>
        <Text>{item.user_email}</Text>
        </View>
      </>
      }
    />

    <Divider></Divider>

<List.Item
    title={Strings.ST83}
    titleStyle={{fontSize:16, fontWeight:'bold', marginTop:0}}
    left={props => <IconButton {...props} icon="cart-outline" size={28} mode='contained' containerColor={theme === "dark" ? "transparent" : '#f4f4f4'} style={{marginHorizontal:5}} />}
    description={props =>
      <>
        <View {...props} style={{flexDirection:'row', height:'auto', alignItems:'center', marginVertical:5}}>
        <Text style={{opacity:0.5}}>{Strings.ST84}</Text>
        <Text>{moment(item.order_date).locale("en").format("DD-MM-YYYY")}</Text>
        </View>

        <View {...props} style={{flexDirection:'row', height:'auto', alignItems:'center', marginVertical:5}}>
        <Text style={{opacity:0.5}}>{Strings.ST85}</Text>
        <Text>{item.order_platform}</Text>
        </View>

        <View {...props} style={{flexDirection:'row', height:'auto', alignItems:'center', marginVertical:5}}>
        <Text style={{opacity:0.5}}>{Strings.ST87}</Text>
        <Text numberOfLines={2}>{item.order_txn}</Text>
        </View>
        
      </>
      }
    />

    </Card>

    <Text style={{fontSize:16, fontWeight:'bold', marginVertical:10}}>{Strings.ST90}</Text>
    <Divider></Divider>

    <DataTable>
      <DataTable.Header>
        <DataTable.Title>{Strings.ST88}</DataTable.Title>
        <DataTable.Title></DataTable.Title>
        <DataTable.Title numeric>{Strings.ST89}</DataTable.Title>
      </DataTable.Header>
      <DataTable.Row onPress={() => onChangeScreen(item.offer_id, item.offer_title)}>
          <DataTable.Cell>
            <Avatar.Image size={38} source={{uri: item.offer_image}} />
          </DataTable.Cell>
          <DataTable.Cell style={{flex: 2}}><Text>{item.offer_title}</Text></DataTable.Cell>
          <DataTable.Cell numeric><Text style={{textTransform:'uppercase'}}>{item.order_cc} {item.order_gross}</Text></DataTable.Cell>
        </DataTable.Row>

    </DataTable>

      </View>

      </SafeAreaView>

      </ScrollView>

      );

}

