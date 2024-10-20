import React from 'react';
import { 
    Container,
    Title,
    TextSign,
    ButtonText,
    Button
 } from './styles'
import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native';
export default () =>{
    const navigation = useNavigation();
    return(
        <Container>
            <Animatable.View
            style={{
            alignItems:'center',justifyContent:'center',
            flex:2}}
            animation="flipInY">
                <Title>JDrinks</Title> 
                <TextSign>Faça login para Iniciar</TextSign>
            </Animatable.View>

            <Animatable.View
            style={{flex:1}}
            delay={600}
            animation="fadeInUp"
            >
                <Button 
                onPress={() => navigation.navigate('SignIn')}>
                    <ButtonText>Acessar</ButtonText>
                </Button>
            </Animatable.View>
        </Container>
    )
}