import styled from 'styled-components/native';
import { Platform } from 'react-native';
import theme from '../../theme';
import { STATUS_BAR_IOS } from '../../utils/constants';

export const Container = styled.View`
  flex: 1;
  background-color:#004d84;
  padding-top: ${Platform.OS === 'ios' ? STATUS_BAR_IOS : 0};
`;

export const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
  font-family: ${theme.fontBold};
  color: #FFFFFF;
`;

export const ContainerTextHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Header = styled.View`
  flex: .5;
  border-bottom-width: 1px;
  border-bottom-color: #0077CC;
  padding: 8px;
  justify-content: space-between;
`;

export const Body = styled.View`
  flex: 7;
  border-bottom-width: 1px;
  border-bottom-color: #0077CC;
  padding: 8px;
`;

export const TitleGroup = styled.Text`
  color: #FFFFFF;
  font-size: 16px;
  font-family: ${theme.fontBold};
  margin-bottom: 16px;
`;

export const ButtonRoute = styled.TouchableOpacity`
  margin-bottom: ${(props) => (props.last ? '24px' : '8px')};
  margin-left: 8px;
`;

export const TextButtonRoute = styled.Text`
  color: #FFFFFF;
  font-family: ${theme.fontBold};
  font-size: 16px;
`;

export const Footer = styled.View`
  flex: 1;
  justify-content: center;
`;

export const ButtonExit = styled.TouchableOpacity`
  flex-direction: row;
  margin-left: 8px;
  align-items: center;
`;

export const ImageExit = styled.Image`
  width:20px;
  height:20px;
  margin-right: 10px;
`;

export const ButtonExitText = styled.Text`
  color: #FFFFFF;
  font-family: ${theme.fontBold};
  font-size: 16px;
`;
