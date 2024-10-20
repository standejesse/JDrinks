import React from 'react';
import { BackHandler, Alert } from 'react-native';
import PropTypes from 'prop-types';
import {
  Container,
  Title,
  Header,
  Body,
  Footer,
  ContainerTextHeader,
  ButtonRoute,
  TextButtonRoute,
  TitleGroup,
  ButtonExit,
  ButtonExitText,
  ImageExit
} from './styles';
import FavoriteDrinks from '../../pages/FavoriteDrinks';

export default function Drawer({ navigation }) {
  function selectRoute(route) {
    const routes = {
      'a=Alcoholic': 'Bebidas Alcolicas',
      'a=Non_Alcoholic': 'Bebidas não Alcolicas',
      'c=Ordinary_Drink': 'Bebidas Comum',
      'c=Cocktail': 'Coquetéis',
      'g=Cocktail_glass': 'Copo de coquetel',
      'g=Champagne_flute': 'Champanhe Flute',
    };

    navigation.navigate('Main', {
      screen: 'Drinks',
      params: { query: route, title: routes[route] },
    });
  }

  function exitApp() {
    Alert.alert('Fechar App', 'Tem certeza que quer fechar?', [
      { text: 'Não' },
      { text: 'Sim', onPress: () => BackHandler.exitApp() },
    ]);
  }

  function findYourDrink() {
    navigation.navigate('Search', {
      screen: 'SearchDrinks',
    });
  }

  function chooseForMe() {
    navigation.navigate('Main', {
      screen: 'DrinkDetail',
    });
  }
  function favorites() {
    navigation.navigate('Favorites', {
      screen: 'FavoriteDrinks',
    });
  }

  return (
    <Container>
      <Header>
        <ContainerTextHeader>
          <Title>JDrinks</Title>
        </ContainerTextHeader>
      </Header>
      <Body>
        <TitleGroup>Categorias</TitleGroup>
        <ButtonRoute onPress={() => selectRoute('a=Alcoholic')}>
          <TextButtonRoute>Bebidas alcoólicas</TextButtonRoute>
        </ButtonRoute>
        <ButtonRoute onPress={() => selectRoute('a=Non_Alcoholic')}>
          <TextButtonRoute>Bebidas não alcoólicas</TextButtonRoute>
        </ButtonRoute>
        <ButtonRoute onPress={() => selectRoute('c=Ordinary_Drink')}>
          <TextButtonRoute>Bebidas comum</TextButtonRoute>
        </ButtonRoute>
        <ButtonRoute last onPress={() => selectRoute('c=Cocktail')}>
          <TextButtonRoute>Coquetéis</TextButtonRoute>
        </ButtonRoute>
        <TitleGroup>Tipos de copos</TitleGroup>
        <ButtonRoute onPress={() => selectRoute('g=Cocktail_glass')}>
          <TextButtonRoute>Copo de coquetel</TextButtonRoute>
        </ButtonRoute>
        <ButtonRoute last onPress={() => selectRoute('g=Champagne_flute')}>
          <TextButtonRoute>Champanhe Flute</TextButtonRoute>
        </ButtonRoute>
        <TitleGroup>Outras opções</TitleGroup>
        <ButtonRoute onPress={findYourDrink}>
          <TextButtonRoute>Encontre sua bebida</TextButtonRoute>
        </ButtonRoute>
        <ButtonRoute onPress={chooseForMe}>
          <TextButtonRoute>Escolha para mim!</TextButtonRoute>
        </ButtonRoute>
        <ButtonRoute onPress={favorites}>
          <TextButtonRoute>Favoritos</TextButtonRoute>
        </ButtonRoute>
      </Body>
      <Footer>
        <ButtonExit onPress={exitApp}>
          <ImageExit source={require('../../assets/images/close.png')} />
          <ButtonExitText>Sair do aplicativo</ButtonExitText>
        </ButtonExit>
      </Footer>
    </Container>
  );
}

Drawer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
