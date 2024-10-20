import styled from 'styled-components/native';
import { ActivityIndicator } from 'react-native';

export const Container = styled.View`
  flex: 1;
  background-color: #FFFFFF;
  justify-content: center;
  align-items: center;
`;

export const Load = styled(ActivityIndicator).attrs({
  color: '#004d84',
  size: 'large',
})``;
