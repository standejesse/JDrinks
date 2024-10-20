import React, { useEffect, useState } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';
import shareImage from '../../utils/shareImage';
import {
  Container,
  TitleInfo,
  ContainerImage,
  Image,
  Scroll,
  ContainerInfo,
  TextInfo,
  IngredientContainer,
  ShareButton,
} from './styles';
import Loading from '../../components/loading';
import api from '../../services/api';

export default function DrinkDetail() {
  const route = useRoute();
  const navigation = useNavigation();

  const [drink, setDrink] = useState({});
  const [loading, setLoading] = useState(true);
  const [ingredients, setIngredients] = useState([]);
  const [measures, setMeasures] = useState([]);

  function formatData(selectedDrink) {
    navigation.setOptions({ title: selectedDrink.strDrink });

    const filteredIngredients = [];
    const filteredMeasures = [];

    for (let i = 1; i <= 15; i += 1) {
      if (selectedDrink[`strIngredient${i}`]) {
        filteredIngredients.push({
          id: i - 1,
          name: selectedDrink[`strIngredient${i}`],
        });
      }

      if (selectedDrink[`strMeasure${i}`]) {
        filteredMeasures.push({
          id: i - 1,
          name: selectedDrink[`strMeasure${i}`],
        });
      }
    }

    setMeasures(filteredMeasures);
    setIngredients(filteredIngredients);
    setDrink(selectedDrink);
  }

  useEffect(() => {
    if (Object.keys(drink).length > 0) {
      setLoading(false);
    }
  }, [drink]);

  useEffect(() => {
    let param;
    if (!route.params?.id) {
      param = '/random.php';
    } else {
      param = `/lookup.php?i=${route.params.id}`;
    }

    api
      .get(param)
      .then((res) => formatData(res.data.drinks[0]))
      .catch(() =>
        Alert.alert('Ops!', 'Ocorreu um erro. Por favor tente novamente mais tarde')
      );
  }, []);

  return (
    <Loading active={loading}>
      <Container>
        <ContainerImage>
          <ShareButton onPress={() => shareImage(drink.strDrinkThumb)}>
            <Image
            style={{width:40,height:40}} 
            source={require('../../assets/images/share.png')} />
          </ShareButton>
          <Image source={{ uri: drink.strDrinkThumb }} />
        </ContainerImage>
        <Scroll>
          <ContainerInfo style={{ elevation: 6 }}>
            <TitleInfo>Ingredientes</TitleInfo>
            {ingredients &&
              ingredients.map((ingredient) => (
                <IngredientContainer key={ingredient.id}>
                  <TextInfo>{`${ingredient.name} ${
                    measures[ingredient.id]
                      ? `( ${measures[ingredient.id].name})`
                      : ''
                  }`}</TextInfo>
                </IngredientContainer>
              ))}
          </ContainerInfo>
          <ContainerInfo style={{ elevation: 6 }}>
            <TitleInfo>Modo de Preparo</TitleInfo>
            <TextInfo center>{drink.strInstructions}</TextInfo>
          </ContainerInfo>
        </Scroll>
      </Container>
    </Loading>
  );
}
