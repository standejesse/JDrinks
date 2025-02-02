import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import theme from '../../theme';

export const Container = styled.View`
  flex: 1;
  background-color: #FFFFFF;
`;

export const ContainerImage = styled.View`
  width: 90%;
  height: 300px;
  align-self: center;
  overflow: hidden;
  border-radius: 8px;
  margin-top: 16px;
`;

export const ShareButton = styled.TouchableOpacity`
  position: absolute;
  right: 8px;
  top: 8px;
  z-index: 1;
  height: 40px;
  width: 40px;
  border-radius: 20px;
  background-color: #FFFFFF;
  align-items: center;
  justify-content: center;
`;

export const Scroll = styled.ScrollView``;

export const Image = styled.Image.attrs({
  resizeMode: 'cover',
})`
  flex: 1;
`;

export const ContainerInfo = styled.View`
  width: 90%;
  padding: 20px;
  background-color: #FFFFFF;
  margin-top: 12px;
  margin-bottom: 12px;
  align-self: center;
  border-radius: 8px;
  box-shadow: 1px 1px 1px #FFFFFF;
`;

export const TitleInfo = styled.Text`
  font-size: 16px;
  font-family: ${theme.fontBold};
  text-align: center;
`;

export const IngredientContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Dot = styled(Icon).attrs({
  name: 'circle-small',
  size: 24,
})``;

export const TextInfo = styled.Text`
  font-family: ${theme.font};
  text-align: ${(props) => (props.center ? 'center' : 'left')};
`;
