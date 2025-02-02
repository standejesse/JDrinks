import styled from 'styled-components/native';
import theme from '../../theme';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  height: 100px;
  width: 90%;
  align-self: center;
  background-color: #FFFFFF;
  border-radius: 16px;
  margin-top: 12px;
  margin-bottom: 12px;
  flex-direction: row;
  overflow: hidden;
`;

export const ContainerImage = styled.View`
  flex: 2;
`;

export const ContainerTitle = styled.View`
  flex: 5;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: ${theme.fontBold};
  font-size: 16px;
  margin-left: 24px;
`;

export const Image = styled.Image.attrs({
  resizeMode: 'cover',
})`
  flex: 1;
`;
