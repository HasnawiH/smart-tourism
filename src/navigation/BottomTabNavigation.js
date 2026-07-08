import React from 'react';
import { I18nManager } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
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

// Create Navigators
const Tab = createBottomTabNavigator();
const ModalStack = createStackNavigator();

// Home Stack Navigator
const HomeStack = createStackNavigator();
function HomeStackNavigator(props) {
  const contextState = React.useContext(LanguageContext);
  const language = contextState.language;
  const Strings = Languages[language].texts;
  const { navigation } = props;

  const buttonBack = () => {
    return (
      <IconButton
        icon={I18nManager.isRTL ? "arrow-right" : "arrow-left"}
        iconColor="white"
        style={{ marginLeft: 15 }}
        size={24}
        onPress={() => navigation.goBack()}
      />
    );
  };

  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          shadowColor: 'transparent',
          elevation: 0,
          shadowOpacity: 0,
          backgroundColor: ColorsApp.PRIMARY,
        },
        headerTitleStyle: { fontSize: 18 },
        headerTitleAlign: 'center',
        headerTintColor: '#fff',
      }}
    >
      <HomeStack.Screen name="home" component={Home} options={{ headerTransparent: true, title: null, tabBarVisible: true }} />
      <HomeStack.Screen name="profile" component={Profile} options={{ title: Strings.ST6, headerLeft: () => buttonBack(), tabBarVisible: false }} />
      <HomeStack.Screen name="settings" component={Settings} options={{ title: Strings.ST108, headerLeft: () => buttonBack(), tabBarVisible: false }} />
      <HomeStack.Screen name="about" component={About} options={{ title: Strings.ST110, headerLeft: () => buttonBack(), tabBarVisible: false }} />
      <HomeStack.Screen name="terms" component={Terms} options={{ title: Strings.ST8, headerLeft: () => buttonBack(), tabBarVisible: false }} />
      <HomeStack.Screen name="placecategories" component={PlacesCategories} options={{ title: Strings.ST28, headerLeft: () => buttonBack(), tabBarVisible: false }} />
      <HomeStack.Screen name="singleplacecategory" component={SinglePlaceCategory} options={({ route }) => ({ title: route.params?.title || '', headerLeft: () => buttonBack(), tabBarVisible: false })} />
      <HomeStack.Screen name="singleoffercategory" component={SingleOfferCategory} options={{ title: null, headerLeft: () => buttonBack(), tabBarVisible: false }} />
      <HomeStack.Screen name="singleplacetype" component={SinglePlaceType} options={{ title: null, headerLeft: () => buttonBack(), tabBarVisible: false }} />
      <HomeStack.Screen name="search" component={Search} options={{ title: Strings.ST3, headerLeft: () => buttonBack(), tabBarVisible: false }} />
      <HomeStack.Screen name="favorites" component={Favorites} options={{ title: Strings.ST4, headerLeft: () => buttonBack(), tabBarVisible: false }} />
      <HomeStack.Screen name="orders" component={Orders} options={{ title: Strings.ST54, headerLeft: () => buttonBack(), tabBarVisible: false }} />
      <HomeStack.Screen name="places" component={Places} options={{ title: Strings.ST2, headerLeft: () => buttonBack(), tabBarVisible: false }} />
      <HomeStack.Screen name="offers" component={Offers} options={{ title: Strings.ST5, headerLeft: () => buttonBack(), tabBarVisible: false }} />
      <HomeStack.Screen name="news" component={News} options={{ title: Strings.ST26, headerLeft: () => buttonBack(), tabBarVisible: false }} />
    </HomeStack.Navigator>
  );
}

// Explore Stack Navigator
const ExploreStack = createStackNavigator();
function ExploreStackNavigator(props) {
  const contextState = React.useContext(LanguageContext);
  const language = contextState.language;
  const Strings = Languages[language].texts;
  const { navigation } = props;

  const buttonBack = () => {
    return (
      <IconButton
        icon={I18nManager.isRTL ? "arrow-right" : "arrow-left"}
        iconColor="white"
        style={{ marginLeft: 15 }}
        size={24}
        onPress={() => navigation.goBack()}
      />
    );
  };

  return (
    <ExploreStack.Navigator
      screenOptions={{
        headerStyle: {
          shadowColor: 'transparent',
          elevation: 0,
          shadowOpacity: 0,
          backgroundColor: ColorsApp.PRIMARY,
        },
        headerTitleStyle: { fontSize: 18 },
        headerTitleAlign: 'center',
        headerTintColor: '#fff',
      }}
    >
      <ExploreStack.Screen name="places" component={Places} options={{ title: Strings.ST2, tabBarVisible: true }} />
      <ExploreStack.Screen name="singleplacecategory" component={SinglePlaceCategory} options={({ route }) => ({ title: route.params?.title || '', headerLeft: () => buttonBack(), tabBarVisible: false })} />
      <ExploreStack.Screen name="singleplacetype" component={SinglePlaceType} options={{ title: null, headerLeft: () => buttonBack(), tabBarVisible: false }} />
      <ExploreStack.Screen name="placecategories" component={PlacesCategories} options={{ title: Strings.ST28, headerLeft: () => buttonBack(), tabBarVisible: false }} />
      <ExploreStack.Screen name="singleoffercategory" component={SingleOfferCategory} options={{ title: null, headerLeft: () => buttonBack(), tabBarVisible: false }} />
      <ExploreStack.Screen name="search" component={Search} options={{ title: Strings.ST3, headerLeft: () => buttonBack(), tabBarVisible: false }} />
      <ExploreStack.Screen name="favorites" component={Favorites} options={{ title: Strings.ST4, headerLeft: () => buttonBack(), tabBarVisible: false }} />
      <ExploreStack.Screen name="orders" component={Orders} options={{ title: Strings.ST54, headerLeft: () => buttonBack(), tabBarVisible: false }} />
      <ExploreStack.Screen name="offers" component={Offers} options={{ title: Strings.ST5, headerLeft: () => buttonBack(), tabBarVisible: false }} />
      <ExploreStack.Screen name="news" component={News} options={{ title: Strings.ST26, headerLeft: () => buttonBack(), tabBarVisible: false }} />
      <ExploreStack.Screen name="profile" component={Profile} options={{ title: Strings.ST6, headerLeft: () => buttonBack(), tabBarVisible: false }} />
      <ExploreStack.Screen name="settings" component={Settings} options={{ title: Strings.ST108, headerLeft: () => buttonBack(), tabBarVisible: false }} />
      <ExploreStack.Screen name="about" component={About} options={{ title: Strings.ST110, headerLeft: () => buttonBack(), tabBarVisible: false }} />
      <ExploreStack.Screen name="terms" component={Terms} options={{ title: Strings.ST8, headerLeft: () => buttonBack(), tabBarVisible: false }} />
    </ExploreStack.Navigator>
  );
}

// Favorites Stack Navigator
const FavoritesStack = createStackNavigator();
function FavoritesStackNavigator(props) {
  const contextState = React.useContext(LanguageContext);
  const language = contextState.language;
  const Strings = Languages[language].texts;
  const { navigation } = props;

  const buttonBack = () => {
    return (
      <IconButton
        icon={I18nManager.isRTL ? "arrow-right" : "arrow-left"}
        iconColor="white"
        style={{ marginLeft: 15 }}
        size={24}
        onPress={() => navigation.goBack()}
      />
    );
  };

  return (
    <FavoritesStack.Navigator
      screenOptions={{
        headerStyle: {
          shadowColor: 'transparent',
          elevation: 0,
          shadowOpacity: 0,
          backgroundColor: ColorsApp.PRIMARY,
        },
        headerTitleStyle: { fontSize: 18 },
        headerTitleAlign: 'center',
        headerTintColor: '#fff',
      }}
    >
      <FavoritesStack.Screen name="favorites" component={Favorites} options={{ title: Strings.ST4, tabBarVisible: true }} />
      <FavoritesStack.Screen name="singleplacecategory" component={SinglePlaceCategory} options={({ route }) => ({ title: route.params?.title || '', headerLeft: () => buttonBack(), tabBarVisible: false })} />
      <FavoritesStack.Screen name="singleplacetype" component={SinglePlaceType} options={{ title: null, headerLeft: () => buttonBack(), tabBarVisible: false }} />
      <FavoritesStack.Screen name="placecategories" component={PlacesCategories} options={{ title: Strings.ST28, headerLeft: () => buttonBack(), tabBarVisible: false }} />
      <FavoritesStack.Screen name="singleoffercategory" component={SingleOfferCategory} options={{ title: null, headerLeft: () => buttonBack(), tabBarVisible: false }} />
      <FavoritesStack.Screen name="search" component={Search} options={{ title: Strings.ST3, headerLeft: () => buttonBack(), tabBarVisible: false }} />
      <FavoritesStack.Screen name="orders" component={Orders} options={{ title: Strings.ST54, headerLeft: () => buttonBack(), tabBarVisible: false }} />
      <FavoritesStack.Screen name="places" component={Places} options={{ title: Strings.ST2, headerLeft: () => buttonBack(), tabBarVisible: false }} />
      <FavoritesStack.Screen name="offers" component={Offers} options={{ title: Strings.ST5, headerLeft: () => buttonBack(), tabBarVisible: false }} />
      <FavoritesStack.Screen name="news" component={News} options={{ title: Strings.ST26, headerLeft: () => buttonBack(), tabBarVisible: false }} />
      <FavoritesStack.Screen name="profile" component={Profile} options={{ title: Strings.ST6, headerLeft: () => buttonBack(), tabBarVisible: false }} />
      <FavoritesStack.Screen name="settings" component={Settings} options={{ title: Strings.ST108, headerLeft: () => buttonBack(), tabBarVisible: false }} />
      <FavoritesStack.Screen name="about" component={About} options={{ title: Strings.ST110, headerLeft: () => buttonBack(), tabBarVisible: false }} />
      <FavoritesStack.Screen name="terms" component={Terms} options={{ title: Strings.ST8, headerLeft: () => buttonBack(), tabBarVisible: false }} />
    </FavoritesStack.Navigator>
  );
}

// Profile Stack Navigator
const ProfileStack = createStackNavigator();
function ProfileStackNavigator(props) {
  const contextState = React.useContext(LanguageContext);
  const language = contextState.language;
  const Strings = Languages[language].texts;
  const { navigation } = props;

  const buttonBack = () => {
    return (
      <IconButton
        icon={I18nManager.isRTL ? "arrow-right" : "arrow-left"}
        iconColor="white"
        style={{ marginLeft: 15 }}
        size={24}
        onPress={() => navigation.goBack()}
      />
    );
  };

  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerStyle: {
          shadowColor: 'transparent',
          elevation: 0,
          shadowOpacity: 0,
          backgroundColor: ColorsApp.PRIMARY,
        },
        headerTitleStyle: { fontSize: 18 },
        headerTitleAlign: 'center',
        headerTintColor: '#fff',
      }}
    >
      <ProfileStack.Screen name="profile" component={Profile} options={{ title: Strings.ST6, tabBarVisible: true }} />
      <ProfileStack.Screen name="settings" component={Settings} options={{ title: Strings.ST108, headerLeft: () => buttonBack(), tabBarVisible: false }} />
      <ProfileStack.Screen name="about" component={About} options={{ title: Strings.ST110, headerLeft: () => buttonBack(), tabBarVisible: false }} />
      <ProfileStack.Screen name="terms" component={Terms} options={{ title: Strings.ST8, headerLeft: () => buttonBack(), tabBarVisible: false }} />
      <ProfileStack.Screen name="orders" component={Orders} options={{ title: Strings.ST54, headerLeft: () => buttonBack(), tabBarVisible: false }} />
    </ProfileStack.Navigator>
  );
}

// Bottom Tab Navigator Main
function MainBottomTabs() {
  const contextState = React.useContext(LanguageContext);
  const language = contextState.language;
  const Strings = Languages[language].texts;

  return (
    <Tab.Navigator
      initialRouteName="HomeTab"
      screenOptions={{
        tabBarActiveTintColor: ColorsApp.PRIMARY,
        tabBarInactiveTintColor: '#aaa',
        tabBarStyle: {
          backgroundColor: '#fff',
          height: 60,
          paddingBottom: 10,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          position: 'absolute',
          borderTopWidth: 0,
          elevation: 10,
        },
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeStackNavigator}
        options={{
          headerShown: false,
          tabBarLabel: Strings.ST1,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="ExploreTab"
        component={ExploreStackNavigator}
        options={{
          headerShown: false,
          tabBarLabel: 'Explore',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="compass" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="FavoritesTab"
        component={FavoritesStackNavigator}
        options={{
          headerShown: false,
          tabBarLabel: Strings.ST4,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="heart" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={ProfileStackNavigator}
        options={{
          headerShown: false,
          tabBarLabel: Strings.ST6,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

// Root Modal Stack (EXACTLY like on ModalNavigation)
export default function BottomTabNavigation() {
  const contextState = React.useContext(LanguageContext);
  const language = contextState.language;
  const Strings = Languages[language].texts;
  const { theme } = usePreferences();

  const buttonClose = (navigation) => {
    return (
      <IconButton
        icon="window-close"
        style={{ marginLeft: 15 }}
        size={24}
        onPress={() => navigation.goBack()}
      />
    );
  };

  const buttonCloseLight = (navigation) => {
    return (
      <IconButton
        icon="window-close"
        containerColor="#fff"
        iconColor={ColorsApp.PRIMARY}
        style={{ marginLeft: 15 }}
        size={24}
        onPress={() => navigation.goBack()}
      />
    );
  };

  const buttonCloseDark = (navigation) => {
    return (
      <IconButton
        icon="window-close"
        iconColor="#000"
        style={{ marginLeft: 15 }}
        size={24}
        onPress={() => navigation.goBack()}
      />
    );
  };

  const navigatorOptions = {
    headerStyle: {
      shadowColor: 'transparent',
      elevation: 0,
      shadowOpacity: 0,
      backgroundColor: theme === 'light' ? '#fff' : '#000',
    },
    headerTitleStyle: { fontSize: 18 },
    headerTitleAlign: 'center',
    presentation: 'modal',
    gestureEnabled: false,
  };

  return (
    <ModalStack.Navigator screenOptions={() => navigatorOptions}>
      <ModalStack.Screen
        name="Main"
        component={MainBottomTabs}
        options={{ headerShown: false }}
      />
      <ModalStack.Screen
        name="placedetails"
        component={PlaceDetails}
        options={({ navigation }) => ({
          headerTransparent: true,
          title: null,
          headerLeft: () => buttonCloseLight(navigation),
        })}
      />
      <ModalStack.Screen
        name="offerdetails"
        component={OfferDetails}
        options={({ navigation }) => ({
          headerTransparent: true,
          title: null,
          headerLeft: () => buttonCloseLight(navigation),
        })}
      />
      <ModalStack.Screen
        name="newsdetails"
        component={NewsDetails}
        options={({ navigation }) => ({
          headerTransparent: true,
          title: null,
          headerLeft: () => buttonCloseLight(navigation),
        })}
      />
      <ModalStack.Screen
        name="orderdetails"
        component={OrderDetails}
        options={({ navigation }) => ({ title: Strings.ST73, headerLeft: () => buttonClose(navigation) })}
      />
      <ModalStack.Screen
        name="submitrating"
        component={SubmitRating}
        options={({ navigation }) => ({
          headerTransparent: true,
          title: null,
          headerLeft: () => buttonClose(navigation),
        })}
      />
      <ModalStack.Screen
        name="payment"
        component={Payment}
        options={({ navigation }) => ({
          headerTransparent: true,
          title: null,
          headerLeft: () => buttonCloseDark(navigation),
        })}
      />
    </ModalStack.Navigator>
  );
}
