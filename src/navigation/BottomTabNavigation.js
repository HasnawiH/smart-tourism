import React from 'react';
import { I18nManager } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { IconButton } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../screens/Home';
import Places from '../screens/Places';
import Favorites from '../screens/Favorites';
import Profile from '../screens/Profile';
import PlaceDetails from '../screens/PlaceDetails';
import SubmitRating from '../screens/SubmitRating';
import OfferDetails from '../screens/OfferDetails';
import Payment from '../screens/Payment';
import OrderDetails from '../screens/OrderDetails';
import NewsDetails from '../screens/NewsDetails';
import Settings from '../screens/Settings';
import About from '../screens/About';
import Terms from '../screens/Terms';
import PlacesCategories from '../screens/PlacesCategories';
import Orders from '../screens/Orders';
import SinglePlaceCategory from '../screens/SinglePlaceCategory';
import SinglePlaceType from '../screens/SinglePlaceType';
import Offers from '../screens/Offers';
import SingleOfferCategory from '../screens/SingleOfferCategory';
import News from '../screens/News';
import Search from '../screens/Search';
import ColorsApp from '../config/ColorsApp';
import Languages from '../languages';
import LanguageContext from '../languages/LanguageContext';
import usePreferences from '../hooks/usePreferences';

const Tab = createMaterialBottomTabNavigator();
const RootStack = createStackNavigator();

// Home Stack
function HomeStack({ setTabBarVisible }) {
  const contextState = React.useContext(LanguageContext);
  const language = contextState.language;
  const Strings = Languages[language].texts;

  const buttonBack = ({ navigation }) => (
    <IconButton 
      icon={I18nManager.isRTL ? "arrow-right" : "arrow-left"} 
      iconColor="white" 
      style={{marginLeft:15}} 
      size={24} 
      onPress={() => navigation.goBack()}
    />
  );

  return (
    <RootStack.Navigator
      screenOptions={{
        headerStyle: {
          shadowColor: 'transparent',
          elevation: 0,
          shadowOpacity: 0,
          backgroundColor: ColorsApp.PRIMARY,
        },
        headerTitleStyle: {
          fontSize: 18,
        },
        headerTitleAlign: 'center',
        headerTintColor: '#fff',
      }}
      onStateChange={(state) => {
        const routeCount = state.routes.length;
        setTabBarVisible(routeCount <= 1);
      }}
    >
      <RootStack.Screen name="home" component={Home} options={{headerTransparent: true, title: null}} />
      <RootStack.Screen name="profile" component={Profile} options={{title: Strings.ST6, headerLeft: ({ navigation }) => buttonBack({ navigation })}} />
      <RootStack.Screen name="settings" component={Settings} options={{title: Strings.ST108, headerLeft: ({ navigation }) => buttonBack({ navigation })}} />
      <RootStack.Screen name="about" component={About} options={{title: Strings.ST110, headerLeft: ({ navigation }) => buttonBack({ navigation })}} />
      <RootStack.Screen name="terms" component={Terms} options={{title: Strings.ST8, headerLeft: ({ navigation }) => buttonBack({ navigation })}} />
      <RootStack.Screen name="placecategories" component={PlacesCategories} options={{title: Strings.ST28, headerLeft: ({ navigation }) => buttonBack({ navigation })}} />
      <RootStack.Screen name="singleplacecategory" component={SinglePlaceCategory} options={({ route }) => ({title: route.params?.title || '', headerLeft: ({ navigation }) => buttonBack({ navigation })})} />
      <RootStack.Screen name="singleoffercategory" component={SingleOfferCategory} options={{title: null, headerLeft: ({ navigation }) => buttonBack({ navigation })}} />
      <RootStack.Screen name="singleplacetype" component={SinglePlaceType} options={{title: null, headerLeft: ({ navigation }) => buttonBack({ navigation })}} />
      <RootStack.Screen name="search" component={Search} options={{title: Strings.ST3, headerLeft: ({ navigation }) => buttonBack({ navigation })}} />
      <RootStack.Screen name="favorites" component={Favorites} options={{title: Strings.ST4, headerLeft: ({ navigation }) => buttonBack({ navigation })}} />
      <RootStack.Screen name="orders" component={Orders} options={{title: Strings.ST54, headerLeft: ({ navigation }) => buttonBack({ navigation })}} />
      <RootStack.Screen name="places" component={Places} options={{title: Strings.ST2, headerLeft: ({ navigation }) => buttonBack({ navigation })}} />
      <RootStack.Screen name="offers" component={Offers} options={{title: Strings.ST5, headerLeft: ({ navigation }) => buttonBack({ navigation })}} />
      <RootStack.Screen name="news" component={News} options={{title: Strings.ST26, headerLeft: ({ navigation }) => buttonBack({ navigation })}} />
    </RootStack.Navigator>
  );
}

// Explore Stack
function ExploreStack({ setTabBarVisible }) {
  const contextState = React.useContext(LanguageContext);
  const language = contextState.language;
  const Strings = Languages[language].texts;

  const buttonBack = ({ navigation }) => (
    <IconButton 
      icon={I18nManager.isRTL ? "arrow-right" : "arrow-left"} 
      iconColor="white" 
      style={{marginLeft:15}} 
      size={24} 
      onPress={() => navigation.goBack()}
    />
  );

  return (
    <RootStack.Navigator
      screenOptions={{
        headerStyle: {
          shadowColor: 'transparent',
          elevation: 0,
          shadowOpacity: 0,
          backgroundColor: ColorsApp.PRIMARY,
        },
        headerTitleStyle: {
          fontSize: 18,
        },
        headerTitleAlign: 'center',
        headerTintColor: '#fff',
      }}
      onStateChange={(state) => {
        const routeCount = state.routes.length;
        setTabBarVisible(routeCount <= 1);
      }}
    >
      <RootStack.Screen name="places" component={Places} options={{title: Strings.ST2}} />
      <RootStack.Screen name="singleplacecategory" component={SinglePlaceCategory} options={({ route }) => ({title: route.params?.title || '', headerLeft: ({ navigation }) => buttonBack({ navigation })})} />
      <RootStack.Screen name="singleplacetype" component={SinglePlaceType} options={{title: null, headerLeft: ({ navigation }) => buttonBack({ navigation })}} />
      <RootStack.Screen name="placecategories" component={PlacesCategories} options={{title: Strings.ST28, headerLeft: ({ navigation }) => buttonBack({ navigation })}} />
      <RootStack.Screen name="singleoffercategory" component={SingleOfferCategory} options={{title: null, headerLeft: ({ navigation }) => buttonBack({ navigation })}} />
      <RootStack.Screen name="search" component={Search} options={{title: Strings.ST3, headerLeft: ({ navigation }) => buttonBack({ navigation })}} />
      <RootStack.Screen name="favorites" component={Favorites} options={{title: Strings.ST4, headerLeft: ({ navigation }) => buttonBack({ navigation })}} />
      <RootStack.Screen name="orders" component={Orders} options={{title: Strings.ST54, headerLeft: ({ navigation }) => buttonBack({ navigation })}} />
      <RootStack.Screen name="offers" component={Offers} options={{title: Strings.ST5, headerLeft: ({ navigation }) => buttonBack({ navigation })}} />
      <RootStack.Screen name="news" component={News} options={{title: Strings.ST26, headerLeft: ({ navigation }) => buttonBack({ navigation })}} />
      <RootStack.Screen name="profile" component={Profile} options={{title: Strings.ST6, headerLeft: ({ navigation }) => buttonBack({ navigation })}} />
      <RootStack.Screen name="settings" component={Settings} options={{title: Strings.ST108, headerLeft: ({ navigation }) => buttonBack({ navigation })}} />
      <RootStack.Screen name="about" component={About} options={{title: Strings.ST110, headerLeft: ({ navigation }) => buttonBack({ navigation })}} />
      <RootStack.Screen name="terms" component={Terms} options={{title: Strings.ST8, headerLeft: ({ navigation }) => buttonBack({ navigation })}} />
    </RootStack.Navigator>
  );
}

// Favorites Stack
function FavoritesStack({ setTabBarVisible }) {
  const contextState = React.useContext(LanguageContext);
  const language = contextState.language;
  const Strings = Languages[language].texts;

  const buttonBack = ({ navigation }) => (
    <IconButton 
      icon={I18nManager.isRTL ? "arrow-right" : "arrow-left"} 
      iconColor="white" 
      style={{marginLeft:15}} 
      size={24} 
      onPress={() => navigation.goBack()}
    />
  );

  return (
    <RootStack.Navigator
      screenOptions={{
        headerStyle: {
          shadowColor: 'transparent',
          elevation: 0,
          shadowOpacity: 0,
          backgroundColor: ColorsApp.PRIMARY,
        },
        headerTitleStyle: {
          fontSize: 18,
        },
        headerTitleAlign: 'center',
        headerTintColor: '#fff',
      }}
      onStateChange={(state) => {
        const routeCount = state.routes.length;
        setTabBarVisible(routeCount <= 1);
      }}
    >
      <RootStack.Screen name="favorites" component={Favorites} options={{title: Strings.ST4}} />
      <RootStack.Screen name="singleplacecategory" component={SinglePlaceCategory} options={({ route }) => ({title: route.params?.title || '', headerLeft: ({ navigation }) => buttonBack({ navigation })})} />
      <RootStack.Screen name="singleplacetype" component={SinglePlaceType} options={{title: null, headerLeft: ({ navigation }) => buttonBack({ navigation })}} />
      <RootStack.Screen name="placecategories" component={PlacesCategories} options={{title: Strings.ST28, headerLeft: ({ navigation }) => buttonBack({ navigation })}} />
      <RootStack.Screen name="singleoffercategory" component={SingleOfferCategory} options={{title: null, headerLeft: ({ navigation }) => buttonBack({ navigation })}} />
      <RootStack.Screen name="search" component={Search} options={{title: Strings.ST3, headerLeft: ({ navigation }) => buttonBack({ navigation })}} />
      <RootStack.Screen name="orders" component={Orders} options={{title: Strings.ST54, headerLeft: ({ navigation }) => buttonBack({ navigation })}} />
      <RootStack.Screen name="places" component={Places} options={{title: Strings.ST2, headerLeft: ({ navigation }) => buttonBack({ navigation })}} />
      <RootStack.Screen name="offers" component={Offers} options={{title: Strings.ST5, headerLeft: ({ navigation }) => buttonBack({ navigation })}} />
      <RootStack.Screen name="news" component={News} options={{title: Strings.ST26, headerLeft: ({ navigation }) => buttonBack({ navigation })}} />
      <RootStack.Screen name="profile" component={Profile} options={{title: Strings.ST6, headerLeft: ({ navigation }) => buttonBack({ navigation })}} />
      <RootStack.Screen name="settings" component={Settings} options={{title: Strings.ST108, headerLeft: ({ navigation }) => buttonBack({ navigation })}} />
      <RootStack.Screen name="about" component={About} options={{title: Strings.ST110, headerLeft: ({ navigation }) => buttonBack({ navigation })}} />
      <RootStack.Screen name="terms" component={Terms} options={{title: Strings.ST8, headerLeft: ({ navigation }) => buttonBack({ navigation })}} />
    </RootStack.Navigator>
  );
}

// Profile Stack
function ProfileStack({ setTabBarVisible }) {
  const contextState = React.useContext(LanguageContext);
  const language = contextState.language;
  const Strings = Languages[language].texts;

  const buttonBack = ({ navigation }) => (
    <IconButton 
      icon={I18nManager.isRTL ? "arrow-right" : "arrow-left"} 
      iconColor="white" 
      style={{marginLeft:15}} 
      size={24} 
      onPress={() => navigation.goBack()}
    />
  );

  return (
    <RootStack.Navigator
      screenOptions={{
        headerStyle: {
          shadowColor: 'transparent',
          elevation: 0,
          shadowOpacity: 0,
          backgroundColor: ColorsApp.PRIMARY,
        },
        headerTitleStyle: {
          fontSize: 18,
        },
        headerTitleAlign: 'center',
        headerTintColor: '#fff',
      }}
      onStateChange={(state) => {
        const routeCount = state.routes.length;
        setTabBarVisible(routeCount <= 1);
      }}
    >
      <RootStack.Screen name="profile" component={Profile} options={{title: Strings.ST6}} />
      <RootStack.Screen name="settings" component={Settings} options={{title: Strings.ST108, headerLeft: ({ navigation }) => buttonBack({ navigation })}} />
      <RootStack.Screen name="about" component={About} options={{title: Strings.ST110, headerLeft: ({ navigation }) => buttonBack({ navigation })}} />
      <RootStack.Screen name="terms" component={Terms} options={{title: Strings.ST8, headerLeft: ({ navigation }) => buttonBack({ navigation })}} />
      <RootStack.Screen name="orders" component={Orders} options={{title: Strings.ST54, headerLeft: ({ navigation }) => buttonBack({ navigation })}} />
    </RootStack.Navigator>
  );
}

// Bottom Tab Navigator utama
function MainBottomTabs() {
  const contextState = React.useContext(LanguageContext);
  const language = contextState.language;
  const Strings = Languages[language].texts;
  const [tabBarVisible, setTabBarVisible] = React.useState(true);

  return (
    <Tab.Navigator
      initialRouteName="HomeTab"
      activeColor={ColorsApp.PRIMARY}
      inactiveColor="#aaa"
      barStyle={{ 
        backgroundColor: '#fff', 
        display: tabBarVisible ? 'flex' : 'none'
      }}
      screenListeners={{
        tabPress: () => {
          // Reset tabBarVisible when switching tabs
          setTabBarVisible(true);
        },
      }}
    >
      <Tab.Screen
        name="HomeTab"
        children={() => <HomeStack setTabBarVisible={setTabBarVisible} />}
        options={{
          tabBarLabel: Strings.ST1,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="ExploreTab"
        children={() => <ExploreStack setTabBarVisible={setTabBarVisible} />}
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="compass" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="FavoritesTab"
        children={() => <FavoritesStack setTabBarVisible={setTabBarVisible} />}
        options={{
          tabBarLabel: Strings.ST4,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="heart" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileTab"
        children={() => <ProfileStack setTabBarVisible={setTabBarVisible} />}
        options={{
          tabBarLabel: Strings.ST6,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

// Root Modal Stack (mirip dengan ModalNavigation)
export default function BottomTabNavigation() {
  const contextState = React.useContext(LanguageContext);
  const language = contextState.language;
  const Strings = Languages[language].texts;
  const { theme } = usePreferences();

  const buttonClose = ({ navigation }) => (
    <IconButton 
      icon={"window-close"} 
      style={{marginLeft:15}} 
      size={24} 
      onPress={() => navigation.goBack()}
    />
  );

  const buttonCloseLight = ({ navigation }) => (
    <IconButton 
      icon={"window-close"} 
      containerColor={'#fff'} 
      iconColor={ColorsApp.PRIMARY} 
      style={{marginLeft:15}} 
      size={24} 
      onPress={() => navigation.goBack()}
    />
  );

  const buttonCloseDark = ({ navigation }) => (
    <IconButton 
      icon={"window-close"} 
      iconColor={"#000"} 
      style={{marginLeft:15}} 
      size={24} 
      onPress={() => navigation.goBack()}
    />
  );

  const navigatorOptions = {
    headerStyle: {
      shadowColor: 'transparent',
      elevation: 0,
      shadowOpacity: 0,
      backgroundColor: theme === "light" ? '#fff' : '#000'
    },
    headerTitleStyle: {
      fontSize: 18,
    },
    headerTitleAlign: 'center',
    headerTintColor: '#fff',
    presentation: 'modal',
    gestureEnabled: false,
  };

  return (
    <RootStack.Navigator screenOptions={navigatorOptions}>
      <RootStack.Screen name="MainBottomTabs" component={MainBottomTabs} options={{ headerShown: false }}/>
      <RootStack.Screen 
        name="placedetails" 
        component={PlaceDetails} 
        options={({ navigation }) => ({
          headerTransparent: true, 
          title: null, 
          headerLeft: () => buttonCloseLight({ navigation })
        })} 
      />
      <RootStack.Screen 
        name="offerdetails" 
        component={OfferDetails} 
        options={({ navigation }) => ({
          headerTransparent: true, 
          title: null, 
          headerLeft: () => buttonCloseLight({ navigation })
        })} 
      />
      <RootStack.Screen 
        name="newsdetails" 
        component={NewsDetails} 
        options={({ navigation }) => ({
          headerTransparent: true, 
          title: null, 
          headerLeft: () => buttonCloseLight({ navigation })
        })} 
      />
      <RootStack.Screen 
        name="orderdetails" 
        component={OrderDetails} 
        options={({ navigation }) => ({
          title: Strings.ST73, 
          headerLeft: () => buttonClose({ navigation })
        })} 
      />
      <RootStack.Screen 
        name="submitrating" 
        component={SubmitRating} 
        options={({ navigation }) => ({
          headerTransparent: true, 
          title: null, 
          headerLeft: () => buttonClose({ navigation })
        })} 
      />
      <RootStack.Screen 
        name="payment" 
        component={Payment} 
        options={({ navigation }) => ({
          headerTransparent: true, 
          title: null, 
          headerLeft: () => buttonCloseDark({ navigation })
        })} 
      />
    </RootStack.Navigator>
  );
}
