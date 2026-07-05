import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../screens/Home';
import Places from '../screens/Places';
import Favorites from '../screens/Favorites';
import Profile from '../screens/Profile';
import ColorsApp from '../config/ColorsApp';
import Languages from '../languages';
import LanguageContext from '../languages/LanguageContext';
import StackNavigation from './StackNavigation';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

// Mini Stack Navigator untuk Explore
function ExploreStack() {
  const contextState = React.useContext(LanguageContext);
  const language = contextState.language;
  const Strings = Languages[language].texts;

  return (
    <Stack.Navigator
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
        headerTintColor: '#fff'
      }}
    >
      <Stack.Screen name="places" component={Places} options={{ title: Strings.ST2 }} />
    </Stack.Navigator>
  );
}

// Mini Stack Navigator untuk Favorites
function FavoritesStack() {
  const contextState = React.useContext(LanguageContext);
  const language = contextState.language;
  const Strings = Languages[language].texts;

  return (
    <Stack.Navigator
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
        headerTintColor: '#fff'
      }}
    >
      <Stack.Screen name="favorites" component={Favorites} options={{ title: Strings.ST4 }} />
    </Stack.Navigator>
  );
}

// Mini Stack Navigator untuk Profile
function ProfileStack() {
  const contextState = React.useContext(LanguageContext);
  const language = contextState.language;
  const Strings = Languages[language].texts;

  return (
    <Stack.Navigator
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
        headerTintColor: '#fff'
      }}
    >
      <Stack.Screen name="profile" component={Profile} options={{ title: Strings.ST6 }} />
    </Stack.Navigator>
  );
}

export default function BottomTabNavigation() {
  const contextState = React.useContext(LanguageContext);
  const language = contextState.language;
  const Strings = Languages[language].texts;

  return (
    <Tab.Navigator
      initialRouteName="HomeTab"
      activeColor={ColorsApp.PRIMARY}
      inactiveColor="#aaa"
      barStyle={{ backgroundColor: '#fff' }}
    >
      <Tab.Screen
        name="HomeTab"
        component={StackNavigation}
        options={{
          tabBarLabel: Strings.ST1,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="ExploreTab"
        component={ExploreStack}
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="compass" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="FavoritesTab"
        component={FavoritesStack}
        options={{
          tabBarLabel: Strings.ST4,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="heart" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={ProfileStack}
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
