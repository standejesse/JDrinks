import * as React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import { createDrawerNavigator } from '@react-navigation/drawer';
import PropTypes from 'prop-types';

import Drinks from './pages/drinks';
import DrawerLayout from './components/drawer';
import DrinkDetail from './pages/drinkDetail';
import SearchDrinks from './pages/searchDrinks';
import Preload from './pages/Preload';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import FavoriteDrinks from './pages/FavoriteDrinks';


import theme from './theme';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const MainStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#004d84',
        },
        headerTintColor: '#FFFFFF',
      }}
    >
      <Stack.Screen 
        name="Preload" 
        component={Preload}
        options={{headerShown: false }} />

        <Stack.Screen 
        name="SignIn" 
        component={SignIn}
        options={{headerShown: false }} />

        <Stack.Screen 
        name="SignUp" 
        component={SignUp}
        options={{headerShown: false }} />

        <Stack.Screen
        name="Drinks"
        component={Drinks}
        options={{
          title: 'JDrinks!',
          headerTitleStyle: { fontFamily: theme.font },
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Image
              style={{width:25,height:25, marginLeft:15}} 
              source={require('./assets/images/open.png')}/>
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="detalhes da Bebida"
        component={DrinkDetail}
        options={{ headerBackTitle: null, title: '' }}
      />
    </Stack.Navigator>
  );
};

const StackSearch = ({ navigation }) => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#004d84',
      },
      headerTintColor: '#FFFFFF',
    }}
  >
    <Stack.Screen
      name="Pesquisar Bebida"
      component={SearchDrinks}
      options={{
        title: 'Encontre sua bebida!',
        headerTitleStyle: { fontFamily: theme.font },
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image 
          style={{width:25,height:25, marginLeft:15}}
          source={require('./assets/images/open.png')} />
          </TouchableOpacity>
        ),
      }}
    />
    <Stack.Screen
      name="DrinkDetail"
      component={DrinkDetail}
      options={{headerBackTitle: null, stitle: '' }}
    />
  </Stack.Navigator>
);
const StackFavorites = () =>{
  <Stack.Navigator>
    <Stack.Screen
      name="FavoritesDrinks"
      component={FavoriteDrinks}/>
  </Stack.Navigator>
}

const App = () => {

  return (
    <Drawer.Navigator
      initialRouteName="Main"
      drawerContent={(props) => <DrawerLayout {...props} />}
      drawerType="back"
    >
      <Drawer.Screen name="Main" component={MainStack} />
      <Drawer.Screen name="Search" component={StackSearch} />
      <Drawer.Screen name="Favorites" component={StackFavorites} />
    </Drawer.Navigator>
  );
};

export default App;

MainStack.propTypes = {
  navigation: PropTypes.shape({
    openDrawer: PropTypes.func.isRequired,
  }).isRequired,
};

StackSearch.propTypes = {
  navigation: PropTypes.shape({
    openDrawer: PropTypes.func.isRequired,
  }).isRequired,
};
